# Make sure the base Node/OS image matches the target runtime
# and the chipset of the compilation target
# Below example uses node 12 on Raspberry Pi 3B+
# If for example you wanted to compile for Raspberry Pi (2011)
# then you would change the first line to FROM arm32v6/node:10-alpine
# Make sure you compile (docker build) on your desired IOT device (i.e. A Pi3B+)

# This might fail silently if you forgot to include a secrets.js file
# in the /src folder

# Use the official image as a parent image.
FROM arm32v7/node:12-stretch-slim

# Set the working directory in the container image. Specifying that all subsequent commands should be executed there.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
# COPY the file package.json from your host to the present location (.) in your image (so in this case, to /usr/src/app/package.json)
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Run the specified command within the container.
CMD [ "npm", "start" ]



