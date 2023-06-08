# Use the official Node.js image as the base image
FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
