# Stage 1: Build the Next.js application
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build the Next.js application and export static files
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy static files from the build stage to NGINX
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]