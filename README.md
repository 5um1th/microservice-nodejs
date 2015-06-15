# microservice-nodejs
NodeJS microservice template

### Install node.js/npm without sudo
```sh
$ sudo apt-get -y install build-essential g++ libssl-dev pkg-config
$ sudo mkdir -p /usr/local/{share/man,bin,lib/node,include/node}
$ sudo chown -R $USER /usr/local/{share/man,bin,lib/node,include/node}
$ mkdir node-install
$ curl http://nodejs.org/dist/node-v0.4.9.tar.gz | tar -xzf - -C node-install
$ cd node-install/*
$ ./configure
$ sudo make install
$ sudo apt-get install npm
```

