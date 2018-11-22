#!/bin/bash

echo "Entering frontend directory ... "
cd frontend
yarn run build
sudo npm install -g serve
sudo serve -s build -p 8080 &
cd ..
echo "Exiting frontend directory ... "
echo ""
echo "Entering backend directory ... "
cd backend
yarn EGG_SERVER_ENV=prod start
cd ..
echo "Exiting backend directory ... "
echo ""
echo "Production Mode Activated ... "