---
title: "Building a microservice app with AWS, Golang and NextJs"
date: 2018-06-09T21:52:43+02:00
draft: true
featured_image: '/images/gohugo-default-sample-hero-image.jpg'
---

In this article I will explain the architecture of Nomad, a forum application to post, read and rate travel articles. The details of each technology used to build this application will be explained in future articles.

Source code of Nomad is available on <a href="https://github.com/nomad-project/" target="_blank">GitHub</a>.


Architecture

The application consists of two services one for the backend and another for the frontend. The Backend is a REST api build in Go using <a href="https://github.com/urfave/negroni" target="_blank">Negroni</a> HTTP Middleware and a mySql Database.

{{< figure src="/images/diagram.jpg" title="Nomad architecture diagram" >}}

Continuous integration with Travis and AWS ECS

{{< figure src="/images/" title="Nomad architecture diagram" >}}