# syntax=docker/dockerfile:1
FROM node:16.17.0
WORKDIR /billsys
COPY . .
RUN yarn install --production
RUN yarn build
RUN yarn start
EXPOSE 3000