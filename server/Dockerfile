FROM node:latest
WORKDIR /usr/src/app/server
COPY package.json /usr/src/app/server

RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "start"]
