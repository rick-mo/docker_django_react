FROM node

WORKDIR /app/frontend

RUN npm install npm \
    && npm install --save create-react-app \
    && npm install --save axios \
    && create-react-app front

EXPOSE 3000
CMD ["npm", "start"]
