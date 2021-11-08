FROM node:14.18-alpine3.12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i -f
COPY . .
RUN npm run build



FROM nginx:1.19.10-alpine as deploy-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /usr/share/nginx/html/frontend/
COPY nginx.conf /etc/nginx/conf.d/default.conf