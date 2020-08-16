FROM node:14-alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn --prod

COPY . .

RUN addgroup -S speedbin && adduser -S speedbin -G speedbin
USER speedbin

CMD ["yarn", "start"]