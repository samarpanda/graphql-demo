FROM node:12-alpine

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

EXPOSE 4000

CMD ["node", "api/src/server.js"]