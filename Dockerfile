FROM node:19-alpine3.16
WORKDIR /usr/src/bind_ui
COPY package.json ./
RUN npm install
RUN npm install -g http-server

# Set environmental variables for application
ENV API_SSL="false" \
    API_URL="127.0.0.1" \
    API_PORT=8000

# Copy application
COPY . .

# Run application
EXPOSE 8080
CMD npm run build -- --env API_SSL=$API_SSL API_URL=$API_URL API_PORT=$API_PORT && npm run server
