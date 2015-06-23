# microservice-nodejs
NodeJS microservice template

### Installation instructions
1. Clone this repository
  ```sh
$ git clone https://github.com/CanopyCloud/microservice-nodejs.git microservice-nodejs
```

2. Build the docker container
  ```sh
$ sudo docker build -t microservice-nodejs ./microservice-nodejs
```

3. Run the docker container
  ```sh
$ sudo docker run -p 8080:80 microservice-nodejs
```

### Random notes
Install node.js/npm without sudo
```sh
$ sudo apt-get -y install build-essential g++ libssl-dev pkg-config
$ sudo mkdir -p /usr/local/{share/man,bin,lib/node,include/node}
$ sudo chown -R $USER /usr/local/{share/man,bin,lib/node,include/node}
$ sudo apt-get install nodejs-legacy
$ sudo apt-get install npm
```

Install docker

```sh
$ https://docs.docker.com/installation/ubuntulinux/#installing-docker-on-ubuntu
```
