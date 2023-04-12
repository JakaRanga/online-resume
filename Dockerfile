# Install and build container
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Create server with application
FROM nginx:alpine
COPY --from=node /app/dist/online-resume /usr/share/nginx/html