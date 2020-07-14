<template>
     <section>
         <div class="uploadImage">
             <input type="file" id="img" name="img" accept="image/*" class="hide" ref="file" v-on:change="handleImageUpload()">
             <label for="img" class="upload-btn">Upload Image</label>
         </div>
         <div class="row">
             <div v-for="item in items"
                  :key="item.id" class="col" @click="redirectToQuestions(item)">
                <img :src="`${imagePath}/images/${item.path}`">
             </div>
         </div>
     </section>
</template>

<script>
    import {getImages, uploadImage} from '../utils/api'
    import {getStaticImagePath} from "../utils/helpers";

    export default {
        data () {
            return {
                // List of images
                items: [],
                imagePath: getStaticImagePath(),
                image: ''
            }
        },
        mounted() {
            this.getImages();
        },
        methods:{
           async getImages(){
              const {data:{images}}  = await getImages();
              this.items = images;
            },
            // Redirect to a route
            redirectToQuestions(item){
                this.$router.push({name:'Annotator',  params: {image:item.id}})
            },
            async handleImageUpload(){
                this.image = this.$refs.file.files[0];
                let formData = new FormData();
                formData.append('file', this.image);
                await uploadImage(formData);
                this.getImages();
            }
        }
    }
</script>

<style scoped>
    .row{
        display: flex;
        flex-wrap: wrap;
    }
    .col {
        padding: 20px;
        flex-basis: 20%;
        cursor:pointer;
    }
    .uploadImage{
        display: flex;
        justify-content: flex-end;
    }
    .upload-btn{
        background: green;
        padding: 10px;
        border-radius: 2px;
        color: #ffffff;
        cursor: pointer;
    }
    .hide{
        visibility: hidden;
    }
    img{
        width: 100%;
    }
</style>
