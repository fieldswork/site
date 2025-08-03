#!/bin/bash

cd ~/site

# install node packages
npm install

# development build
#npm run dev

# build and start server
npm run build
npm start
