# Shop-Shop [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Description
Shop-Shop is an E-commerce platform where users can create an account, login, add/remove items from cart, checkout orders via stripe, as well as view order history. Context API was initially used for the application's state management with React, which is then refactored to utilize Redux.

## Table of Contents
1. [Description](#description)
2. [Technologies](#Technologies)
3. [Installation](#installation)
4. [Deployment](#deployment)
4. [Usage](#usage)
5. [Screenshots](#Screenshots)
6. [License](#License)
7. [Contributing](#Contributing)
8. [Author](#Author)

## Technologies
```
React | Redux | MongoDB | Mongodb Atlas | Mongoose | Heroku | Express | Apollo service express | Apollo Client | IndexedDB | Stripe | GraphQL | jwt-decode | json web token | bcrypt
```

## Installation
1. For development purposes, clone the repo locally.
2. Install npm packages at root of application.
```
  npm install
```
3. Then, run locally.
```
  npm run develop
```

## Deployment
* [Heroku Link](https://shop-shop-ronancodes.herokuapp.com/)

## Usage
1. Access the deployed application in the link above.

2. Users can signup/login to start browsing for products. Once logged in, users can filter a product throught a category, view a specific product's details, and add/remove it from the shopping cart.
![demo1](./demo/demo1.gif)

4. Users can also use the shopping cart modal to add, remove, or update item count.
![demo2](./demo/demo2.gif)

5. Users can then checkout and submit their payment through Stripe. Then, past orders can be viewed in the `Order History` tab.
![demo3](./demo/demo3.gif)

## License
This project is in the public domain and free for any and all users! For more information on this (un)licensing statement, visit [unlicense.org](https://unlicense.org/).

## Contributing
* If you'd like to contribute to this project, please follow the rules of the [Contributor Covenant](https://www.contributor-covenant.org/).

## Author
* This application was written and developed by Ronan Galvez as part of the UCF Coding Bootcamp.
* For any inquiries/suggestions/concerns, open an issue in the [project repo](https://github.com/Ronan-Codes/shop-shop.git) or contact me directly at [galv.ronan@gmail.com](galv.ronan@gmail.com).
* Check out the rest of my work on GitHub at [Ronan-Codes](https://github.com/Ronan-Codes).