FROM node:20-bookworm
COPY ./.env /magicpack/.env.local
WORKDIR /
COPY ./magicpack-app /magicpack
WORKDIR /magicpack
RUN apt update && apt install iputils-ping -y && rm -rf /var/lib/apt/lists/*
RUN npm install && npm run build
ENTRYPOINT npm run start
EXPOSE 3000