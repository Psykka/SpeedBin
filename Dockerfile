FROM node:14-alpine

RUN addgroup -S speedbin && adduser -S speedbin -G speedbin
WORKDIR /home/speedbin

COPY package.json .
COPY yarn.lock .

RUN apk add python3 alpine-sdk
RUN yarn --prod

COPY . .

USER speedbin

CMD ["yarn", "start"]
