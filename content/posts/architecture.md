---
title: "Building a microservice app with AWS, Golang and NextJs"
date: 2018-06-09T21:52:43+02:00
draft: true
featured_image: '/images/gohugo-default-sample-hero-image.jpg'
---

In this article I will explain the architecture of Nomad, a forum application to post, read and rate travel articles. The details of each technology used to build this application will be explained in future articles.

Source code of Nomad is available on <a href="https://github.com/nomad-project/" target="_blank">GitHub</a>.


<h2>Architecture</h2>

The application consists of two services:

- The Backend is a REST api build in Go using <a href="https://github.com/urfave/negroni" target="_blank">Negroni</a> HTTP Middleware and a mySql Database.

- The Frontend is a nodeJs application build with React-Redux using the <a href="https://github.com/zeit/next.js" target="_blank">NextJS</a> framework to facilitate the server-side rendering. All data is retrieved from the REST api service.

Implementation on Amazon Web Service

Each service is running on its own docker container on an ECS Cluster. The Cluster has 2 instances and each instance is running 1 Frontend service and one Backend Service.

The Elastic Load Balancer is enrouting all /api/* calls to the backend service on one of the two instances and all the other calls to the frontend service on one of the instances.

{{< figure src="/images/diagram.jpg" >}}


<h2>Continuous integration with Travis and AWS ECS</h2>

{{< figure src="/images/diagramCI.jpg" >}}