# SrvFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.0-rc.1.

## Architecture sketch

This project using microservices architecture, please find below the architectural sketch

<a href="https://ibb.co/MnRQrSX"><img src="https://i.ibb.co/wyKjVgv/Vehicles-Tracher-Arch.png" alt="Vehicles-Tracher-Arch" border="0"></a>

Find above the structure that services calling each other,
as it displayed in the sketch, the front-end service calling only the authentication service,
then the auth servers navigate to the business services to navigate to each dal to the database

## Technologies

This project using Nodejs as a backend, Angular as front, MongoDB and for the DevOps, Using Jenkins and Docker

## Development server

System is deployed and running on an Azure machine

## Demo
<a href="http://40.114.48.59"> Vehicle Tracker
## CI/CD

We are using Jenkins as CI/CD tool over Azure 
Jenkins jobs are responsible to call the pipeline script that already exists in the services Jenkinsfile on GitHub Repos

so the pipeline stages are building the dockers then push to docker hub finally deploy on the Azure server.
