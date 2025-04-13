#!/bin/bash

cd ~/site

# update from repo
git fetch origin
git pull

# development build
npm run dev

# build and start server
#npm run build
#npm start
