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

### Visual Guide

![Landing Page and UI](image.png)
![App Router Implementation](image-1.png)
![Code Organization in Components Folder](image-2.png)
