FROM node:lts-alpine3.14
ARG MQTT
WORKDIR /app
COPY package*.json /app/
RUN npm i
COPY . .
ENV REACT_APP_MQTT ${MQTT}
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]