# Use the official Node.js 18 image as a base
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./

# Install dependencies using Bun
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lighter image for the final stage
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build from the previous stage
COPY --from=build /app ./

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
