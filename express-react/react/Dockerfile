FROM node:14-slim

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 5000

CMD ["npm", "run", "dev"]