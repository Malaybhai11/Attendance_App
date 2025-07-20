# Use official Bun image
FROM oven/bun:1.1.13

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN bun install

# Generate Prisma Client for your platform
RUN bunx prisma generate

# Build Next.js
RUN bun run build

# Expose Next.js default port
EXPOSE 3000

# Start the app
CMD ["bun", "run", "start"]
