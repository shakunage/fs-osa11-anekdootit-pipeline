ARG NODE_VERSION=16.20.2
FROM node:${NODE_VERSION}-slim as base

# Node.js app lives here
WORKDIR /app
COPY . .

RUN npm ci

RUN npm test

EXPOSE 3000

CMD [ "npm", "run", "start" ]