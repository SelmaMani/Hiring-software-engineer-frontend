## Project: Edity

### Overview

This branch encompasses the front-end development for the landing page, login, and signup functionality, as well as a simple home page indicating a successful user login.

### Technologies Used

- **Next.js 14.0.4**: Leveraged for its server-side rendering capabilities and efficient routing system.
- **Tailwind CSS**: Utilized for a streamlined and customizable styling approach.
- **Supabase**: Employed for robust authentication functionalities.
- **Framer Motion**: Integrated for smooth and interactive animations.

### Authentication

To enhance security, server-side authentication methods are implemented, accessible within the `/auth` folder.

### Router

The application router (`App router`) is effectively utilized to manage navigation and route handling.

### Access Control

Access to the Home page is restricted to authenticated users. Unauthorized attempts redirect users to the Login page for authentication.

### Code Organization

- **Components Folder**: Structured to enhance code readability and maintainability by segregating components into a dedicated folder.

### Environmental Setup

A `.env.example` file is provided as a guide to showcase the usage of `.env.local` for declaring environment variables.


### Getting started

1. To get started create a supabase project first [](https://supabase.com/) you should have an account.

2. Rename the `.env.example` file to `.env.local` and add the environment variables, you can find a better explanaition in the following path:
[](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

3. run `npm install`

4. run `npm run dev`


### Resources
to get better view of how the work is structured please have a look on the resources:

[](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
[](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
[](https://supabase.com/docs/guides/auth/auth-helpers/nextjs?language=ts#server-side)
[](https://www.framer.com/motion/introduction/)


### Visual Guide

**Home** : 

<img width="1280" alt="Capture d’écran 2023-12-20 à 16 32 36" src="https://github.com/SelmaMani/Hiring-software-engineer-frontend/assets/109527893/5d551d10-831d-4a61-b9bb-11110c09c603">

**Login** : 

<img width="173" alt="Capture d’écran 2023-12-20 à 16 31 31" src="https://github.com/SelmaMani/Hiring-software-engineer-frontend/assets/109527893/6babc072-6c33-498a-b62b-a07a63c026f1">

<img width="458" alt="Capture d’écran 2023-12-20 à 16 31 03" src="https://github.com/SelmaMani/Hiring-software-engineer-frontend/assets/109527893/3583a4c8-ed09-47d1-8779-9dd7c6cb6739">

<img width="458" alt="Capture d’écran 2023-12-20 à 16 30 44" src="https://github.com/SelmaMani/Hiring-software-engineer-frontend/assets/109527893/5197fbb1-2500-487b-894b-44fd5c816ea3">

**Signup** : 

<img width="173" alt="Capture d’écran 2023-12-20 à 16 31 24" src="https://github.com/SelmaMani/Hiring-software-engineer-frontend/assets/109527893/9fb50be3-cd69-4567-acbd-49b99ae64f5f">

<img width="190" alt="Capture d’écran 2023-12-20 à 16 29 45" src="https://github.com/SelmaMani/Hiring-software-engineer-frontend/assets/109527893/57ead428-46aa-4049-a2b2-d95b7ef191b8">

<img width="458" alt="Capture d’écran 2023-12-20 à 16 30 15" src="https://github.com/SelmaMani/Hiring-software-engineer-frontend/assets/109527893/355204f6-edf5-4f0e-afb3-724bd120c2a4">

**Leanding page** : 

<img width="455" alt="Capture d’écran 2023-12-20 à 16 30 04" src="https://github.com/SelmaMani/Hiring-software-engineer-frontend/assets/109527893/28a387a3-548b-4335-b681-9331e0aa6a89">



