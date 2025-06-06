FROM node:latest as builder

WORKDIR /var/www/html

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]

EXPOSE 80
