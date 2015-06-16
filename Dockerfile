FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node.js and npm
RUN     yum install -y npm

# Bundle app source
COPY . /microservice-nodejs

# Install app dependencies
ADD package.json /src/package.json
RUN cd /src && npm install

# Environment variables
ENV NODE_ENV production
ENV EXPRESS_PORT 80

EXPOSE 8080

CMD ["node", "/microservice-nodejs/server.js"]
