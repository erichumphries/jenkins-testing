FROM node:14-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 5000
CMD npx prisma migrate dev && npm run dev