# My Blog App - MERN Stack Project

Welcome to **My Blog App**, a full-stack blogging application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This project showcases a comprehensive implementation of server-side rendering with EJS, file uploads with Multer, authentication and authorization using JSON Web Tokens (JWT) and cookies, and MongoDB for storing user data.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Dependencies](#dependencies)
6. [Server-Side Details](#server-side-details)
    - [Middleware](#middleware)
    - [User Model](#user-model)
    - [Authentication Routes](#authentication-routes)
    - [Authentication Controller](#authentication-controller)
    - [Post Model](#post-model)
    - [Post Routes](#post-routes)
    - [Post Controller](#post-controller)
7. [Client-Side Details](#client-side-details)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

My Blog App is a robust blogging platform that leverages the power of the MERN stack to provide a seamless and engaging experience for both bloggers and readers. The project focuses on implementing best practices, security measures, and an efficient code structure.

## Features

- **Server-Side Rendering with EJS**: Utilizes EJS for efficient server-side rendering, enhancing the user experience with dynamic content.
- **User Authentication**: Implements secure user authentication and authorization using JSON Web Tokens and cookies.
- **File Uploads with Multer**: Allows users to upload images seamlessly with the Multer library, enhancing blog posts with visuals.
- **MongoDB Database**: Stores user and blog post data in a MongoDB database, ensuring scalability and flexibility.
- **Clean and Scalable Code**: Adheres to best practices, creating a modular and well-organized codebase for easy maintenance and future enhancements.

## Project Structure

```
/blogging
  /middleware
  /models
  /node_modules
  /public
  /routes
  /services
  /views
  .gitignore
  package.json
  index.js
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/TaNiShQ-000/blogging.git
cd blogging
```

2. Install dependencies:

```bash
npm install
cd client
npm install
```

3. Run the application:

```bash
npm run dev
```

Visit [http://localhost:8000](http://localhost:8000) to explore My Blog App!

## Dependencies

- Express.js
- MongoDB
- EJS
- Multer
- JSON Web Token
- Bcrypt
- Axios (on the client side)

## Server-Side Details

### Middleware

Middleware functions include body parsing, cookie handling, and serving static files. Additionally, an authentication middleware ensures secure routes.
This function is crucial for securing routes that require authentication in a Node.js application. It checks for the presence of an authentication token stored in a specified cookie (cookieName). If the token is found in the incoming request, the middleware attempts to validate it using the validateToken function from an external authentication service. If the validation is successful, the decoded user payload is attached to the req.user.

### User Model

Defines the user schema for MongoDB, including fields for username, email, and password.

### Authentication Routes

Handles user signup, login, logout, and fetching user details routes.

### Authentication Controller

Implements user authentication logic, including signup, login, logout, and user detail retrieval.

### Post Model

Defines the blog post schema for MongoDB, including title, content, image, and author.

### Post Routes

Handles routes related to blog posts, including creating new posts and fetching all posts.

### Post Controller

Implements blog post-related logic, such as creating new posts and fetching existing posts.

## Client-Side Details

The client-side code is organized into components and views using React. Axios is used for making HTTP requests to the server.

## Contributing

We welcome contributions! If you have suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project's specific features and requirements. The goal is to provide a comprehensive and clear overview that showcases your skills and attention to detail.
