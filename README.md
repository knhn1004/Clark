# Project_MEANskills
A web application based off of the MEAN stack that matches users with classes and skills, helping you find the optimal project team members

---

## Setup and Dependencies
This project was built in the Ubuntu Xenial 16.04 LTS Linux environment, and was built on
- Node.js v6.9.1
- ExpressJS NPM package v4.16.2
- Body-Parser NPM package v1.18.2
- JQuery v1.12.4
- MongoDB Official Driver NPM package v2.2.33

#### On Linux
  - Though it is not necessary to do so manually (i.e. the webpages include jquery from host servers online), you can acquire **JQuery** by going to the JQuery website and downloading the relevant version or higher.
  - You can acquire **Node.js** from *nodejs.org* or through the command line using *apt-get*. Verify installation using *node -v* on command line.
  - To acquire the other packages, you will need **npm** (the Node Package Manager), which comes pre-installed with Node.js. To verify its installation, you can run *npm -v* on command line.
  - You can acquire **ExpressJS** by using *npm install express*
  - You can acquire **Body-Parser** by using *npm install --save body-parser*
  - You can acquire the **MongoDB Driver** by using *npm install mongodb --save*

---

## Execution
#### On Linux
  To run the server on Linux command line, you can use *node server.js* in the project's root directory. It runs the webserver on port 8080 by default. The server also checks that your MongoDB server is online before running, else it throws an error and fails startup. Make sure you have started your MongoDB server _**before**_ running server.js
  
---

## Directory Structure
#### */*
  - This directory is the project root directory, and contains the following files and folders.
    1. /log/
    1. /public/
    1. /server.js
    1. /util/
#### */log/*
  - This directory contains log files generated by the server while it is running.
#### */public/*
  - This directory contains all web pages and files to be served by server.js upon request, and contains the following:
    1. /css/ - webpage css directory
    1. /js/ - webpage javascript directory
    1. /index.html - login/front-facing portal page
#### */server.js*
  - This file comprises the MEAN stack webserver that will be serving all requests with relevant endpoints.
#### */util/*
  - This directory contains various utility files for server.js, and includes
    1. settings.js - file containing core server settings
    1. logger.js - a server utility that allows server.js to log various events to logfiles in the /log/ directory
    1. route_handlers.js - a collection of endpoint handler callbacks to service the different requests coming to the server for various endpoints.

---

## Notes
- Currently working on relevant endpoints of the project
