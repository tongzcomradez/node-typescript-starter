FROM node:8.11.4-alpine

RUN apk add --update --no-cache bash

ENV PORT=3000

ENV NODE_ENV='development'

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE $PORT

CMD NODE_ENV=$NODE_ENV PORT=$PORT node dist