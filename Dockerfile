From johnpapa/angular-cli as builder
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh


RUN mkdir srv-front
COPY . /srv-front
WORKDIR srv-front

 
RUN npm update     
RUN npm i 
RUN ng build
EXPOSE  4200 
ENTRYPOINT  node server.js