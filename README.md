
# Humber Shop

Humber Shop is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to browse products, add them to a shopping cart, and place orders. This README file provides information on how to set up and run the Humber Shop application on your local machine.

## Prerequisites

To run the Humber Shop application, make sure you have the following installed on your machine:

- Node.js (v12 or higher)
- MongoDB (v4 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd humber-shop
```

3. Install the dependencies for both the server and the frontend:

```
cd server && npm install
cd ../frontend && npm install
```

## Configuration

1. Create a `.env` file in the `server` directory and provide the following configuration:

```
PORT=5001
MONGODB_URI=<your-db>
JWT_SECRET=<your-jwt-secret>
```

- `PORT`: The port on which the server will run. The default value is 5001.
- `MONGODB_URI`: The URI for your MongoDB database. The default value is a local MongoDB connection.
- `JWT_SECRET`: A secret key used for JSON Web Token (JWT) generation. Choose a strong, unique value for security purposes.

## Running the Application

1. Open two terminal windows or tabs.

2. In the first terminal, navigate to the main directory

```
npm run dev
```

The server will start running on the specified port (default: 5001).
and the frontend will start on port 3000
default web browser at `http://localhost:3000`.

## Usage

Once the application is running, you can access it in your web browser at `http://localhost:3000`. The Humber Shop interface allows users to:

- Browse products: View a list of available products, sorted by categories or search for specific items.

- Manage the cart: View the contents of the shopping cart, modify quantities, or remove items.
- Place an order: Proceed to checkout and provide shipping and payment information to place an order.
- Admin functionality: Edit or Delete Users if logged in as an Admin


## Contributing

If you wish to contribute to the Humber Shop project, please fork the repository, create a new branch, and submit a pull request with your proposed changes. We appreciate your contributions!

## License

The Humber Shop application is open-source and released under the [MIT License](https://opensource.org/licenses/MIT). You are free to modify and distribute the application as per the terms of this license.

## Contact

If you have any questions or need further assistance, please feel free to contact Rehan Ali[dev.rayhan98@gmail.com](mailto:dev.rayhan98@gmail.com).

Happy shopping with Humber Shop!
### To test the Admin's UI signin using email: 
user: dev.rayhan98@gmail.com
password: 123456                           

