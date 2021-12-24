# Where's Waldo? the game

This project is my first MERN stack Application. It is bootstrapped with create-react-app, and I've used MongoDB Atlas to store, fetch and update data, with the use of Node.js Express.

## Access Deployment
Live implementation deployed and accessible with [Heroku](https://wheres-waldo-samuelisch.herokuapp.com/)

### Motivation
I set out on this project to push myself towards deoploying my first Full Stack application, a huge jump from my previous [Shopping cart project](https://github.com/Samuelisch/shopping-cart). I had also learnt some back-end fundamentals from FullStackOpen, and wanted to implement what I've learnt outside a tutorial setting.

### Gameplay
This application features three images for users to find waldo and his two friends with. The three images contain many characters, but have three recurring ones: 
* Waldo
* Odlaw
* Whitebeard
The user can resize their windows to get a bigger image, and select a place within the game's image. A request will be made to the backend to validate the user's choice. Feedback will be provided based on the validation's results.
After finding all characters, the application will display the user's time taken to find all three characters. The user will then be given a choice to input his name and timing into the database. He is also given the choice to try again, or view the leaderboards.

### Features
This application makes use of commion React features, such as useState, useEffect hooks, and React Routers. Each page's content is updated as it loads, and requests to the server is made with each page, or component load. 

### Complications (Fixed)
I had complications in deployment due to two issues which have been fixed since:
#### React Router Links - invalid GET request on page refresh.
* Problem: The app would crash if I navigated to a Link defined in React Router, and refreshed the page. This is caused by Express routes not being defined, to match React Router's routing. As there were no routes defined in Express, it returns invalid, or crashed.
* Solution: I served static files from my React application, and defined a request in Express (after all other requests), for all other routes '*', to be redirected to index.html.

### Application would return a timeour error (503) when making requests to MongoDB Atlas
* Problem: A 503 Error would return after awhile after loading applicaiton pages that requests data from the server at MongoDB. I later found out that although I defined the environment vairables for development in file .env (.gitignored), the environment variable that defines the database URL in production was not set to Heroku.
* Solution: Depploying database backend to Heroku production. Defined the database URL in production to Heroku with the heroku config:set command.
