# Use the official Node.js image from the Docker Hub
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port that the app will run on
EXPOSE 5000

# Start the application
CMD ["node", "app.js"]
