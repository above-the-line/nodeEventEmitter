# nodeEventEmitter

This AzureIOT messenger app uses Node v12 and is for ARM architecture using Raspian Buster

To deploy to the device have Docker or IOT Hub installed

Deploy with Dockermachine (now ssh), Docker Hub or Azure IOTHub


#### STEPS FOR REMOTE DEPLOYMENT WITH DOCKER HUB
1. Login to Docker Hub and create a repo
``<my-account-name>/<repo-name>``

2. Create the container image and tag with your Docker Hub username
``docker build --tag <my-account-name>/<repo-name>:1.0``

3. Upload the container image to Docker Hub
``docker push <my-account-name>/<repo-name>:1.0``

4. Login to Docker on the IOT device
``docker login``

5. Pull the Docker image
``docker pull <my-account-name>/<repo-name>:1.0``

6. Run the Docker image as a container.
``docker run abovetheline/azuremessenger:1.0 --name messenger ``



#### STEPS FOR DEPLOYMENT TO DEVICE ON LOCAL NETWORK
1. Re-direct commands to the remote environment (the device).
``export DOCKER_HOST="ssh://my-user@remote-host"``

2. Run a container. To prove that we are on remote-host, this will print its hostname.
``docker run --rm --net host busybox hostname -f``

3. Run docker commands here will be run on remote-host.

4. Switch back to your local environment.
``unset DOCKER_HOST``