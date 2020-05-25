FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 4000

CMD ["node", "index.js"]

COPY . .