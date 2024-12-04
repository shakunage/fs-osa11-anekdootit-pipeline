ARG NODE_VERSION=16.20.2
FROM node:${NODE_VERSION}-slim as base

# Node.js app lives here
WORKDIR /app

FROM base as build

COPY . .

RUN npm ci

RUN npm test

RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# REMOVE AFTER TESTING!
EXPOSE 3000

CMD [ "npm", "run", "start-prod" ]