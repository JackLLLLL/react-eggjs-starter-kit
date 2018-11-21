#!/bin/bash

echo "Installing pre-requisites ... "
sudo apt install build-essential -y
sudo apt install curl -y
echo "Finish installing pre-requisites ... "

echo "Installing nodejs ... "
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs -y
echo "Finish installing nodejs ... "

echo "Installing yarn ... "
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
echo "Finish installing yarn ... "

echo "Entering frontend directory ... "
cd /frontend
npm install
yarn start

cd ..
echo "Exiting frontend directory ... "