# PhotoLabs Project

## Description

PhotoLabs is a modern, responsive web application inspired by the aesthetics of popular photo-sharing platforms like Pinterest. It features a dynamic interface for exploring and interacting with a diverse collection of photographs. 

## Features

- **Dark Mode Toggle:** Allows users to switch between light and dark themes for a comfortable viewing experience. This can be done by clicking on the camera icon next to the logo in the navigation bar.
- **Interactive Photo Gallery:** Users can browse through photos and mark their favorites.
- **Topic-Based Navigation:** A navigation bar enables users to filter photos based on specific topics. Users can also see a favorites notification which keeps track of how many photos they liked.
- **Detailed Photo View:** A modal presentation provides in-depth details of each photo, including information about the photographer and a selection of similar photos.

## Installation

To set up PhotoLabs locally, follow these steps:

1. Clone the repository via SSH:
```bash
git clone git@github.com:DavidGir/PhotoLabs.git
```

2. Navigate to the project's directory:
```bash
cd PhotoLabs
```

3. Navigate to the frontend directory and the backend directory to install dependencies from both:
```bash
cd frontend
npm install
# Do the same for backend.
```

4. Once dependencies are installed, the following applies to the backend setup:

### Database Setup and Seeding

PhotoLabs uses PostgreSQL for its database. Follow these steps to set up and seed the database after cloning the project:

### Setting Up the Database

- **Install PostgreSQL:** If not already installed, [download and install PostgreSQL](https://www.postgresql.org/download/).
   
- **Create the Database:**
   - Open your terminal and log in to PostgreSQL with the command: 
     ```
     psql -U username
     ```
     Replace `username` with your PostgreSQL username.

   - Create the database with: 
     ```
     CREATE DATABASE photolabs_development;
     ```

- **Environment Configuration:**
   - Copy the `.env.example` file to a new file named `.env.development`.
   - Fill in the necessary PostgreSQL configuration in the `.env.development` file:
     ```
     PGHOST=localhost
     PGUSER=yourUsername  # Replace with your PostgreSQL username
     PGDATABASE=photolabs_development
     PGPASSWORD=yourPassword  # Replace with your PostgreSQL password
     PGPORT=5432
     ```

### Seeding the Database

- After setting up the database, you can seed it by making a GET request to `/api/debug/reset`. This can be done in two ways:
  - Use curl in the terminal: 
     ```
     curl http://localhost:8001/api/debug/reset
     ```
  - Or, navigate to `http://localhost:8001/api/debug/reset` in your web browser.

### Running the server
5. After installation, you can run the project locally. Make sure to open two terminal windows; one for the frontend and one for the backend. Friendly reminder that the backend needs to be running for the frontend to function correctly:
```bash
# In both terminal instances run the following:
npm start
# From the backend you will see that the development server is listening on port 8001 & the frontend is running the application on port 3000 in your default web browser.
```

## Technologies Used

PhotoLabs is built using a variety of technologies, separated into frontend and backend components for clarity:

### Frontend Technologies

- **React.js:** A JavaScript library for building user interfaces.
- **Sass/CSS:** Advanced styling using Sass preprocessor for more expressive CSS.
- **Axios:** A promise-based HTTP client for making API requests to the backend, known for its easy-to-use API and ability to handle requests and responses.

### Backend Technologies

- **Node.js:** JavaScript runtime environment for the backend.
- **Express.js:** Web application framework for Node.js.
- **PostgreSQL:** Database system used.

## Contributing

I welcome contributions to the PhotoLabs project. If you wish to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the original branch: `git push origin feature-name`.
5. Create the pull request.

## Future Implementation Considerations

As PhotoLabs continues to evolve, several enhancements are under consideration to enrich user experience and functionality:

- **Responsive Design:** Optimizing the application for various devices and screen sizes to ensure a seamless experience across desktops, tablets, and mobile phones.
- **Search Functionality:** Introducing a search feature to find photos by keywords, tags, locations or photographer names.
- **User Profiles:** Allowing users to create their own profiles to manage their favorite photos or upload their own, adding a personal touch to the experience.
- **Social Sharing:** Enabling users to share photos on social media or with other users directly within the application, thereby increasing user engagement.
- **User Comments and Ratings:** Implementing a system where users can leave comments on photos or rate them, fostering a community environment within the app.
- **Security Features:** Strengthening user trust with security features like secure logins and data encryption, ensuring a safe and secure user experience.

## Authors and Acknowledgment

PhotoLabs is developed by David Giroux.

Special thanks to LHL for guidance and support.


