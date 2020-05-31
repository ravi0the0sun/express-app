# User and Installation Manual 
# ITECH 3209 PROJECT 2 2020 
*From Group H, for CRM app* 

**(Ujjwol Mani Bajracharya & Sameep Deuba)**

### INTRODUCTION
The following Manual will be also included in the README.md file in the github repository of the Project 2 source file (https://github.com/ravi0the0sun/project2) the repo is used by the entire team and belonged to the previous group member (Ravi Pun: 30342838). He unfortunately was not able to continue his studies this semester so he handed the account to us, i.e. Group H (Ujjwol Mani Bajracharya & Sameep Deuba). The entire application has been written in JavaScript and its supported frameworks that we have deemed sufficient.

Application has 2 main folders `clientapp` & `serverapp`. They are for the frontend and the backend application. 

The final application will be using Docker for deployment but it can also be deployed locally. 
For the Docker deployment we will need the computer of the user to be installed with prerequisites. 

#### FOR DOCKER DEPLOYMENT: 
[Docker](https://docs.docker.com/get-docker/)

#### FOR LOCAL DEPLOYMENT: 
[NodeJS](https://nodejs.org/en/download/)

[MongoDB](https://docs.mongodb.com/manual/installation/)

### DOCKER DEPLOYMENT
After installing the docker or if you already have docker you can use the terminal to `cd /` into the `serverapp` then type the command.

```bash 
docker build --tag server:1.0
```

This creates the image for the server in the docker and will install all the required libraries and binaries from the docker hub. Then it is ready to be deployed.
```bash
docker run --publish 4000:4000 --detach --name server server:1.0
```
Now the server side app has been deployed as a docker container where `4000` is the port the app will be listening to.

Now for the frontend app we will follow the same steps. `cd /` into the `clientapp` folder from terminal and then run these commands:
```bash
docker build --tag client:1.0 
```
```bash
docker run --publish 3000:3000 --detach --name client client:1.0
```
Then open your browser and open `localhost:3000/` to access the app

### LOCAL DEPLOYMENT:
You should have Nodejs and Mongodb running on your computer to deploy the app locally. Then ‘cd /’ into the serverapp folder and type:

```npm install``` 

This will install all the node-modules libs on the folder then run:

```npm run start```

This will run the server in nodemon on the computer using nodejs and it will be listening on port 4000.

For client app `cd /` into `clientapp` folder and type:

```npm install ```

```npm run start```

So the app is running on ‘localhost:3000/’ now.

### Notes:  
> The current version of the app is using the local development and is using the latest version of the library, as to prevent any app vulnerability through open source npm packages if installing node modules or after ‘npm install’ there are updatable packages ‘npm audit fix’ should be used to update the packages.
> This app is compatible on any OS, but linux distribution is recommended.
> If you are using docker for the first time on linux you may have to add ‘sudo’ in front of the docker command during docker deployment.
> The current app was made using VSCode and Git tools.
> If you are intrested how the docker images are made for the app you can have a look in the individual ‘Dockerfile’ in the project. These files contain how each container should be prepared for deployment.
> This manual will be changed until the last submission and is not the final manual you should reference. 

### References: 

[Reference Documentation: Docker Docs](https://docs.docker.com/reference/)

[API Reference Documentation: NodeJS](https://nodejs.org/en/docs/)

[Documentation: Git](https://git-scm.com/doc)

[Reference: MongoDB](https://docs.mongodb.com/manual/reference/)

[4.x API: ExpressJS](https://expressjs.com/en/4x/api.html)

[body-parser: npm](https://www.npmjs.com/package/body-parser)

[API Docs: mongoose for mongodb](https://www.npmjs.com/package/body-parser)

