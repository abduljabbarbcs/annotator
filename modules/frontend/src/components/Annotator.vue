<template>
    <div class="container" basis="100%" v-if="image">
        <img :id="imageId" class="image" :src="`${imagePath}/images/${image.path}`">
    </div>

</template>

<script>
    import {Annotorious} from '@recogito/annotorious';
    import {getStaticImagePath} from "../utils/helpers";
    import {createAnnotation, getImageById, removeAnnotation} from "../utils/api";

    export default {
        data() {
            return {
                imageId: "",
                imagePath: getStaticImagePath(),
                image: null,
                anno: null
            }
        },
        mounted() {
            this.imageId = this.$route.params.image;
            this.getImageById(this.imageId);
        },
        methods: {
            async getImageById(id) {
                const {data: {image}} = await getImageById(id);
                this.image = image;
                if (!this.anno) {
                    this.registerAnnotationListeners();
                }else{
                    this.loadAnnotation();
                }
            },
            registerAnnotationListeners() {
                setTimeout(() => {
                    this.anno = new Annotorious({image: this.imageId, type: "Annotation"});
                    this.anno.applyTemplate([{
                        purpose: "commenting",
                        type: "TextualBody",
                        value: " "
                    }], false);

                    this.anno.on('createAnnotation', (annotation) => {
                        const {target: {selector: {value}}, id: uuid} = annotation;
                        this.createAnnotation(value, uuid);
                    });

                    this.anno.on('deleteAnnotation',  (annotation) => {
                        this.removeAnnotation(annotation);
                    });
                    this.loadAnnotation();

                });
            },
            loadAnnotation() {
                const annotation = {
                    "type": "Annotation",
                    "body": [{"purpose": "commenting", "type": "TextualBody", "value": " "}],
                    "target":
                        {
                            "source": "http://localhost:5000/static/images/3.jpeg",
                            "selector": {
                                "type": "FragmentSelector",
                                "conformsTo": "http://www.w3.org/TR/media-frags/",
                                "value": ""
                            }
                        },
                    "@context": "http://www.w3.org/ns/anno.jsonld",
                    "id": ""
                };
                this.image.annotations.forEach((item) => {
                    const newAnnotation = JSON.parse(JSON.stringify(annotation));
                    newAnnotation.target.selector.value = item.value;
                    newAnnotation.id = item.uuid;
                    this.anno.addAnnotation(newAnnotation);
                });
            },
            async createAnnotation(value, uuid) {
                await createAnnotation({value, uuid, imageId: this.imageId});
                this.getImageById(this.imageId);
            },
            async removeAnnotation(annotation) {
                const delAnnotation = this.image.annotations.filter((item) => item.uuid === annotation.id );
                await removeAnnotation(delAnnotation[0].id);
                this.getImageById(this.imageId);
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
    }

    img {
        height: calc(100vh - 120px);
        width: auto;
    }
</style>
