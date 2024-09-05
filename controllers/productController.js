const crypto = require('crypto');

// Example in-memory product store
let products = [
    {
        "id": "2e9bf130-91ff-4d84-bf4e-1571cfa5cef2",
        name: "Laptop",
        price: 251.21,
        Quantity: 4,
        active: true
    },
    {
        "id": "2e9bf130-91ff-4d84-bf4e-1571cfa5cef3",
        name: "Keyboard",
        price: 2771.21,
        Quantity: 44,
        active: false
    }
];

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.createProduct = (req, res) => {
    const { name, price, Quantity, active } = req.body;

    if (!name) {
        return res.status(422).json({ message: "Name is Required" });
    }
    const id = crypto.randomUUID();

    products.push({
        id,
        name,
        price,
        Quantity,
        active
    });

    res.status(201).json({ message: 'Product created successfully', id });
};

exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
};

exports.updateProduct = (req, res) => {
    const p = products.find(p => p.id === req.params.id);

    if (!p) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const { name, price, Quantity, active } = req.body;

    if (name) {
        p.name = name;
    }

    if (price) {
        p.price = price;
    }

    if (Quantity) {
        p.Quantity = Quantity;
    }

    if (active) {
        p.active = active;
    }

    res.status(200).json({ message: 'Product updated successfully' });
};

exports.deleteProduct = (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    products.splice(index, 1);
    res.status(200).json({ message: 'Product deleted successfully' });
};
