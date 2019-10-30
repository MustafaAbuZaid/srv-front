From johnpapa/angular-cli as builder
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh


RUN mkdir srv-front
COPY . /srv-front
WORKDIR srv-front

 
RUN npm rebuild node-sass 
RUN npm update  
RUN npm install -g npm-check-updates  
RUN npm i 
RUN ng build 
EXPOSE  4200  
ENTRYPOINT  NODE_ENV=docker node server.js