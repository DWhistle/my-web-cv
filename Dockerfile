FROM node:14.21.3-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
RUN apt update && apt install software-properties-common -y
RUN apt install python3


RUN apt install build-essential -y


RUN npm i -g npm@6

COPY package.json package-lock.json ./
RUN apt-get update && apt-get install -y git

RUN npm install
RUN npm install react-scripts

ARG GITHUB_TOKEN 
RUN git config --global user.name "Andrey S" && \
    git config --global user.email "andrw.shibaev@gmail.com" && \
    echo "https://${GITHUB_TOKEN}:@github.com" > ~/.git-credentials && \
    git config --global credential.helper store && \
    echo "Cache Bust: $(date +%s)"

EXPOSE 3000
COPY . ./
