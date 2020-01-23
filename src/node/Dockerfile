FROM node:lts-alpine as builder

COPY . .

RUN yarn global add parcel-bundler
RUN yarn install

RUN parcel build index.ts --no-source-maps -t node -o index.js -d .

FROM node:lts-alpine

COPY --from=builder index.js .

EXPOSE 50051
CMD ["node", "index.js"]
