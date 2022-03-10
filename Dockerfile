FROM node:14.16.0-alpine
MAINTAINER wr_zhang25

RUN mkdir -p /usr/src/app
COPY . /usr/src/app/
WORKDIR /usr/src/app

RUN node -v
RUN npm install --registry=https://registry.npmmirror.com/
RUN npm run build
