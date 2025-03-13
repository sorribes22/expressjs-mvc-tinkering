FROM node:22
WORKDIR /usr/src/app
USER node
COPY --chown=node:node . .
RUN npm install
EXPOSE 3000
