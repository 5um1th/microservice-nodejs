# microservice-nodejs
NodeJS microservice template

### Installation Instructions
####1. Clone this repository
```sh
$ git clone https://github.com/CanopyCloud/microservice-nodejs.git my-nodejs-microservice
```

####2. Build the docker container
```sh
$ docker build -t my-nodejs-microservice ./my-nodejs-microservice
```

####3. Run the docker container
```sh
$ docker run my-nodejs-microservice
```

###Random notes
#### Install node.js/npm without sudo
```sh
$ sudo apt-get -y install build-essential g++ libssl-dev pkg-config
$ sudo mkdir -p /usr/local/{share/man,bin,lib/node,include/node}
$ sudo chown -R $USER /usr/local/{share/man,bin,lib/node,include/node}
$ mkdir node-install
$ curl http://nodejs.org/dist/node-v0.12.4.tar.gz | tar -xzf - -C node-install
$ cd node-install/*
$ ./configure
$ sudo make install
$ sudo apt-get install npm
```

