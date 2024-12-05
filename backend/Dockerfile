FROM node:20-slim AS base

WORKDIR /app/backend
COPY . .

RUN npm install -g json-server

# Start the server by default, this can be overwritten at runtime
CMD [ "json-server", "-p3001", "--watch", "db.json" ]
