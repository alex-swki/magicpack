FROM node:20-bookworm
COPY ./.env /app/.env.local
RUN apt update && apt install git -y
WORKDIR /
RUN git clone https://github.com/alex-swki/magicpack/
WORKDIR /magicpack
RUN npm install && npm run build
ENTRYPOINT npm run start
EXPOSE 3000