# social-network-api

## This application is an API for a social network web application. Users can share their thoughts, react to friends' thoughts, and create a personalized friends list. It utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM. The API allows for the creation, updating, and deletion of users, thoughts, reactions to thoughts, and friends.

[Link to walkthrough video](https://drive.google.com/file/d/1M089zcWWYiuWGdmv-SfRl9WEZs6fpBsw/view?usp=sharing)

## Installation

To install and run this application, follow these steps:


Clone the repository to your local machine.<br>
Ensure that you have Node.js and MongoDB installed on your machine.<br>
Open a terminal and navigate to the project's root directory.<br>
Run the command npm install to install the required dependencies.<br>
Create a .env file in the root directory and add the necessary environment variables, such as the MongoDB connection string.<br>
Run the command npm start to start the server.<br>
The server will be running on http://localhost:3001.

## Usage

To use this API, you can make HTTP requests to the available routes using a tool like Insomnia or Postman. Here are the available routes:


GET /api/users: Retrieves all users in the database.<br>
GET /api/users/:userId: Retrieves a specific user by their ID.<br>
POST /api/users: Creates a new user.<br>
PUT /api/users/:userId: Updates a user by their ID.<br>
DELETE /api/users/:userId: Deletes a user by their ID.<br>
GET /api/thoughts: Retrieves all thoughts in the database.<br>
GET /api/thoughts/:thoughtId: Retrieves a specific thought by its ID.<br>
POST /api/thoughts: Creates a new thought.<br>
PUT /api/thoughts/:thoughtId: Updates a thought by its ID.<br>
DELETE /api/thoughts/:thoughtId: Deletes a thought by its ID.<br>
POST /api/thoughts/:thoughtId/reactions: Creates a new reaction to a thought.<br>
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Deletes a reaction to a thought.<br>
POST /api/users/:userId/friends/:friendId: Adds a friend to a user's friend list.<br>
DELETE /api/users/:userId/friends/:friendId: Removes a friend from a user's friend list.<br>

Refer to the walkthrough video for a demonstration of the API's functionality and how to make requests to the different routes.

Please note that this is a backend application, so you will need to use a tool like Insomnia or Postman to make requests to the API endpoints.


## Credits

I receieved guidance on this application from my instructor, JD Tadlock in class. I also referred to ChatGPT to help me figure out where my syntax was incorrect. Rene Trevino also helped me understand the conepts used in this application during a tutoring session.

## License

Please refer to the LICENSE in the repo.