#!/bin/bash

cd ~/site

# update from repo
git fetch origin
git pull

# build and start server
npm run dev