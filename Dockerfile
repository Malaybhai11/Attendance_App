# Use official Node.js base image (with OpenSSL 3 & full Web API support)
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm install

# Generate Prisma Client
RUN npx prisma generate

# Build the Next.js app
RUN npm run build

# Expose the Next.js default port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
