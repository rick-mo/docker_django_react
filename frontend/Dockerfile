FROM node:11

WORKDIR /app/frontend
COPY package.json /app/frontend 
COPY package-lock.json /app/frontend
COPY tsconfig.json /app/frontend

RUN npm install -g npm \
    && npm install

EXPOSE 3000
CMD ["npm", "start"]
