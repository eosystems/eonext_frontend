FROM node:11.14

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update && rm -rf /var/lib/apt/lists/*

ENV APP_ROUTE /app
RUN mkdir -p $APP_ROUTE
WORKDIR $APP_ROUTE

RUN yarn global add pm2
RUN yarn install

CMD ["pm2-runtime", "process.yml"]
