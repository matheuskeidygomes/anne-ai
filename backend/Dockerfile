FROM node

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . . 

EXPOSE 3333

CMD ["node", "dist/server.js"];