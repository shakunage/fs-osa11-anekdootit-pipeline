ARG NODE_VERSION=16.20.2
FROM node:${NODE_VERSION}-slim AS base

# Node.js app lives here
WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm test

EXPOSE 3000

CMD [ "npm", "run", "start" ]