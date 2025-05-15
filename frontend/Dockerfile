# Stage 1: Build Angular app
FROM node:18-alpine AS builder


WORKDIR /app
RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm ci

COPY . ./
RUN ng build  --configuration=production

# Stage 2: Serve with NGINX
FROM nginx:alpine
COPY --from=builder app/dist/frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
