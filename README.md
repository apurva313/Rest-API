# REST API

This is a REST API built with Express.js, demonstrating CRUD operations for managing products. The project is structured with modular routes and controllers for better organization.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Basic CRUD operations for products
- Modular code structure
- Built with Express.js
- Uses `nodemon` for development

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/apurva313/Rest-API.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Rest-API
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Start the server:**

    ```bash
    npm start
    ```

    This command uses `nodemon` to automatically restart the server on code changes.

2. **The server will start on port 3000 by default. You can access the API at:**

    - `http://localhost:3000/product`

## API Endpoints

### Get All Products

- **Endpoint:** `GET /product`
- **Description:** Retrieve a list of all products.

### Create a New Product

- **Endpoint:** `POST /product`
- **Description:** Create a new product.
- **Request Body:**
    ```json
    {
      "name": "Product Name",
      "price": 123.45,
      "Quantity": 10,
      "active": true
    }
    ```

### Get Product by ID

- **Endpoint:** `GET /product/:id`
- **Description:** Retrieve a single product by its ID.

### Update a Product

- **Endpoint:** `PUT /product/:id`
- **Description:** Update an existing product by its ID.
- **Request Body:**
    ```json
    {
      "name": "Updated Product Name",
      "price": 543.21,
      "Quantity": 20,
      "active": false
    }
    ```

### Delete a Product

- **Endpoint:** `DELETE /product/:id`
- **Description:** Delete a product by its ID.

## Folder Structure

- `/routes`: Contains route definitions for the application.
- `/controllers`: Contains controller logic for handling requests.
- `/models`: (Optional) Contains data model definitions if using a database.
- `index.js`: Main application file where the server is set up.

## Contributing

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Make your changes.**
4. **Commit your changes:**

    ```bash
    git add .
    git commit -m "Add your commit message"
    ```

5. **Push to the branch:**

    ```bash
    git push origin feature/your-feature
    ```

6. **Open a pull request.**

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
