FROM node:12-alpine AS build

RUN apk add --no-cache yarn netcat-openbsd

RUN mkdir -p /workspace

WORKDIR /workspace

COPY . /workspace

RUN yarn install && yarn build

FROM nginx:1.15-alpine

RUN rm /etc/nginx/nginx.conf

COPY nginx.template /etc/nginx/conf.d/nginx.template
COPY --from=build /workspace/dist /usr/share/nginx/html

CMD  envsubst '' < /etc/nginx/conf.d/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'
