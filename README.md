# SrvFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.0-rc.1.

## Architecture sketch

This project using microservices architecture, please find below the architectural sketch

<a href="https://ibb.co/MnRQrSX"><img src="https://i.ibb.co/wyKjVgv/Vehicles-Tracher-Arch.png" alt="Vehicles-Tracher-Arch" border="0"></a>

As per above architecture front end server is the only exposed service which get all requests from users then route coming requests to corresponding service. As per microservices architecture standards all business services have its ownd DAL to communicate independantly to database.

## Technologies

This project using Nodejs as a backend, Angular as front, and MongoDB as DB engine
All servers are created as Dockers containers

## Development server

System is deployed and running on an Azure machine its connection details will be shared by email 

## Demo
<a href="http://40.114.48.59"> Vehicle Tracker
  
## CI/CD

used Jenkins as CI/CD tool over Azure 
All environment services are deployed using Jenkins' pipeline scripts
