ARG NODE_VERSION=16.20.2
FROM node:${NODE_VERSION}-slim AS base

# Node.js app lives here
WORKDIR /app/frontend

FROM base AS build

RUN ls -a

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm ci

COPY . .

RUN npm test

RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

CMD [ "npm", "run", "start-prod" ]