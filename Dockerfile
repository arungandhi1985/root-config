# Dockerfile for root-config
FROM node:16

WORKDIR /root-config

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start"]
