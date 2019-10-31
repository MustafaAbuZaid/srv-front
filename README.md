# SrvFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.0-rc.1.

## Application archtecture

This project using microservices architecture, please find below the architectural sketch

<a href="https://ibb.co/MnRQrSX"><img src="https://i.ibb.co/wyKjVgv/Vehicles-Tracher-Arch.png" alt="Vehicles-Tracher-Arch" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload image</a><br />

Find above the structure that services calling each other,
as it displayed in the sketch, the front-end service calling only the authentication service,
then the auth servers navigate to the business services to navigate to each dal to the database

## Development server

System is deployed and running on an Azure machine

## CI/CD

we are using Jenkins as CI/CD tool over Azure 
Jenkins jobs are responsible to call the pipeline script that already exists in the services Jenkinsfile on GitHub Repos

so the pipeline stages are building the dockers then push to docker hub finally deploy on the Azure server.
