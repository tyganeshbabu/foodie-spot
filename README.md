Foodie spot is an online website where users can login and order food items. Users can add / edit / delete products into their cart. Users can then checkout and place their order. Users can also view their past orders under Orders screen.

## **Technologies Used:**

- React JS
- Node JS
- Mongo Database
- AWS EC2 instance ( For React and Node Deployment)
- AWS S3 (For storing images)

**Github Links:**

**HTML Design:** [https://github.com/tyganeshbabu/foodie-spot-design](https://github.com/tyganeshbabu/foodie-spot-design)

**React App:** [https://github.com/tyganeshbabu/foodie-spot/](https://github.com/tyganeshbabu/foodie-spot/)

**Node JS App** :[https://github.com/tyganeshbabu/foodie-spot-node](https://github.com/tyganeshbabu/foodie-spot-node)

**Images:**

All the food product images used in Foodie Spot are free licensed and taken from[_https://pexels.com_](https://pexels.com/). Images are uploaded via S3 bucket UI provided by Amazon Web Services.

**Logo:**

Logo used in website is generated free via[_https://logomaker.thehoth.com/_](https://logomaker.thehoth.com/)

**HTML Responsive Design:**

**Technologies / Libraries Used:** HTML, CSS, Bootstrap CSS, Bootstrap JS, Jquery Font Awesome Icons

**React App:**

**External Libraries Used:**

- Axios
- Alertify
- React Bootstrap
- React Router DOM
- Redux
- React Redux
- Redux Thunk
- Bootstrap CSS
- Font Awesome Library

**Authentication:**

Json Web Tokens (JWT) are currently set for authentication, which is valid for 30 minutes. The timing can be adjusted from the node backend environment variable file.

**Services Accessed:**

- POST /login - Returns JWT which should be shared in Authorization Header for further calls
- GET /products - Returns list of food products and their details
- GET /orders - Returns list of orders made by login user
- POST /orders - Saves order

**State Management:**

State of the application is managed by Redux state container. Steps involved:

- Created Store
- Created Reducer functions and combined via Combined Reducer for accessing states
- Actions are dispatched from actions and action creator
- User details are stored in local storage to avoid removal of data from Redux on page refresh

**Components:**

- All the components are functional arrow components that uses useState and useEffect hooks for managing internal states
- Components are broke up into smaller components wherever possible
- Components are connected to Redux Store by using Connect function from React Redux library
- Routing to invalid url will result in 404 page designed as separate component
- AddToCart component is used in both product listing page and checkout page. It is used for adding products to cart, Removing products from cart, Incrementing units of product, Decrementing units of product
