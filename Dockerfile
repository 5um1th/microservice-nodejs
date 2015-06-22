FROM  ubuntu

# make sure apt is up to date
RUN apt-get update
RUN apt-get -y install python-software-properties git build-essential

# Install Node.js and npm
RUN apt-get install -y nodejs npm git git-core

# Bundle app source
COPY . /microservice-nodejs

# Install app dependencies
ADD package.json /microservice-nodejs/package.json
RUN cd /microservice-nodejs && npm install
RUN mkdir -p /opt/app && cp -a /microservice-nodejs/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

# Environment variables
ENV NODE_ENV production
ENV EXPRESS_PORT 80

EXPOSE 8080
EXPOSE 5672

CMD ["nodejs", "/microservice-nodejs/server.js"]
