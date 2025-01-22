import blog_app_image from "../../assets/blog-app.png";
export const projectsData = [
  {
    id: 1,
    title: "Blog app",
    description:
      "Your blog app is a full-featured platform that allows users to register, log in, and log out securely using JWT authentication. It offers complete CRUD functionality for blog posts, enabling users to create, read, update, and delete posts that include a title, content, and images stored in Base64 format. The app establishes a one-to-many relationship between users and posts using Mongoose, allowing users to view their own and others' posts. Social interaction features such as likes, comments, and shares are integrated, with comments linked to specific posts along with user details. An admin dashboard is available to manage all posts and users efficiently. The technology stack includes React, Redux Toolkit, React Router, and Axios on the frontend, while the backend is powered by Express.js, MongoDB, and Mongoose, with Cloudinary used for image storage. Security is prioritized through proper data validation, hashing, and role-based access control for secure API endpoints. The app features a responsive UI designed with React-Bootstrap, ensuring compatibility across various devices. Performance optimizations include efficient API requests using Redux Toolkit Query, lazy loading for images, and pagination for posts, enhancing the overall user experience.",
    image: blog_app_image,
    linkes: {
      live: "https://blogplatformapp-production.up.railway.app/",
      repo: "https://github.com/Alaaadeln7/blog_platform_app",
    },
  },
];
