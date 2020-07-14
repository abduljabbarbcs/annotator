FROM node:12-alpine

RUN apk add --no-cache yarn netcat-openbsd

COPY . /opt/api-service

WORKDIR /opt/api-service

RUN yarn install

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait && yarn setupdb && yarn start
EXPOSE 5000