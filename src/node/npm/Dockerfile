FROM node:lts-alpine

WORKDIR /app

COPY . /app

RUN yarn install --prod

RUN yarn run build

EXPOSE 50051

CMD ["node", "dist/index.js"]
