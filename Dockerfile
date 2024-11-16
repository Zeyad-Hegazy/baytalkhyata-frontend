# Use Node.js as base image
FROM node:20-alpine as builder

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

FROM nginx:1.25.4-alpine-slim as prod

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf  /etc/nginx/conf.d



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


