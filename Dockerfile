FROM node:18-buster-slim

WORKDIR /app

COPY . /app

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run build


CMD [ "node", "dist/index.js" ]