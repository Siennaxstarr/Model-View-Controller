The Tech Blog is a CMS-style blog site designed for developers to publish their articles, blog posts, and thoughts about various tech-related topics. It follows the MVC (Model-View-Controller) architectural pattern and utilizes Handlebars.js as the templating language, Sequelize as the ORM (Object-Relational Mapping), and the express-session npm package for authentication. With this application, developers can easily create an account, log in, create new blog posts, comment on existing posts, update their posts, and delete their posts.

User Story
As a developer who writes about tech, I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.

Acceptance Criteria
When visiting the site for the first time, users are presented with the homepage, including existing blog posts (if any), navigation links for the homepage and the dashboard, and the option to log in.
Users can sign up by providing a username and password and then log in to the site.
Once logged in, users have access to navigation links for the homepage, the dashboard, and the option to log out.
On the homepage, users can view existing blog posts, including the post title and the date created.
Users can click on an existing blog post to view its details, leave comments, and see comments from other users.
Users can access their dashboard to view and manage their own blog posts, including adding new posts, updating existing posts, and deleting posts.
Users can log out of the site, and if idle for more than a set time, they will be prompted to log in again before performing any actions.
Technologies Used
Frontend:
HTML/CSS
JavaScript
Handlebars.js (templating engine)
Backend:
Node.js
Express.js (web application framework)
Sequelize (ORM)
Express-Session (authentication middleware)
Database:
MySQL or PostgreSQL (configured through Sequelize)
Deployment:
Heroku
Installation
To run the Tech Blog locally, follow these steps:

Clone the repository: git clone https://github.com/your-username/tech-blog.git
Install dependencies: npm install
Set up the database configuration in the .env file.
Initialize the database schema and seed data (if provided).
Start the server: npm start
Access the application at http://localhost:3000 in your web browser.
Usage
Upon visiting the site, users can browse existing blog posts on the homepage.
To interact with the site's features, users need to sign up for an account or log in if they already have one.
Once logged in, users can navigate to the homepage to view blog posts, click on posts to read full details and leave comments, and access their dashboard to manage their own posts.
In the dashboard, users can create new blog posts, update existing posts, and delete their posts as needed.
Users can log out of the site when done.
