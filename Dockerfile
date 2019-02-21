FROM node:8

WORKDIR /usr/src/app

# copy necessary files
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN mkdir -p client
COPY client/package.json /usr/src/app/client
COPY client/yarn.lock /usr/src/app/client
RUN mkdir -p server
COPY server/package.json /usr/src/app/server
COPY server/yarn.lock /usr/src/app/server

# install dependencies
RUN yarn install

# copy source files
COPY . /usr/src/app

# run project
EXPOSE 4000
CMD ["yarn", "start"]
