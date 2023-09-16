FROM node:16.0.0-slim
# Install dependencies

COPY hello.js .
COPY package.json .
# we don't copy volume folder here! it's configured in docker-compose

CMD ["node", "hello.js"]
