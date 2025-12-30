
Project Overview

We are building a personal web-based dashboard to manage daily work and reduce mental overhead.

The goal is to have one single place where I can:

Track what I am working on

Manage my to-dos and work-in-progress

Generate and manage content ideas

Slowly add automation as needed


This project is for personal use, so it will be kept simple, fast, and minimal.


---

Initial Scope (Very Simple)

For the first version:

Frontend: Next.js

Backend: Golang

Architecture: Single backend service (NO microservices)

Deployment: Single server

Focus: Functionality over perfection


No microservices, no Kubernetes, no gRPC for now.
Just a clean monolithic backend with clear internal structure.


---

What We Are Building

1. Dashboard

A simple homepage showing:

Active projects

Current to-dos

What is in progress

What is completed



This is the main control screen.


---

2. To-Do & Work Tracking

Ability to create tasks

Each task has a status:

Todo

In Progress

Done


Ability to update status easily

Optional notes per task


This helps track daily work clearly.


---

3. Projects Section

Create simple projects

Each project can have:

Name

Description

Status


Projects help group tasks and ideas



---

4. Content Planning (Very Basic)

A section to manage content ideas

Ability to:

Add a topic manually
(example: “Post about learning Go”)

Store it as a draft idea


No auto-posting in the first version

Just idea storage and organization



---

5. Simple Backend API

Golang backend will expose REST APIs for:

Projects

Tasks

Content ideas


No background jobs initially

No scheduling initially


Just CRUD APIs.


---

What We Are NOT Doing (For Now)

❌ Microservices

❌ gRPC

❌ Kubernetes

❌ Heavy automation

❌ AI auto-posting

❌ Complex analytics


All of this can be added later, once the base is stable.


---

Guiding Principles

Build slowly and cleanly

Keep code readable

Solve real problems first

Add complexity only when needed

This is a learning + productivity project



---

Future (Optional, Later)

Once the base version is solid:

Add scheduling

Add AI content generation

Split backend into services if needed

Explore gRPC and microservices

Explore Docker and Kubernetes



--