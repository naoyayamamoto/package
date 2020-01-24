FROM node:lts-alpine

COPY . .

RUN yarn install

EXPOSE 50051

CMD ["npx", "ts-node", "index.ts"]
