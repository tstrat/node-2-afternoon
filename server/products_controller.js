

create = (req, res) => {
    const db = req.app.get('db');
    db.create_product(req.body)
    .then(newlyCreatedProducts => {
        res.status(200).json(newlyCreatedProducts);
    })
    .catch( error => {
        console.error("error in POST /api/products", error);
        res.status(500).send("Error in creating product");
    })
}

getOne = (req, res) => {
    const db = req.app.get('db');
    const id = req.params.id;
    
    db.read_product({id})
    .then(newlyCreatedProducts => {
        res.status(200).json(newlyCreatedProducts);
    })
    .catch( error => {
        console.error("error in GET /api/products/:id", error);
        res.status(500).send("Error in getting product");
    })
}

getAll = (req, res) => {
    const db = req.app.get('db');
    db.read_products()
    .then(newlyCreatedProducts => {
        res.status(200).json(newlyCreatedProducts);
    })
    .catch( error => {
        console.error("error in GET /api/products", error);
        res.status(500).send("Error in getting all products");
    })
}

update = (req, res) => {
    const db = req.app.get('db');
    const id = req.params.id;
    const description = req.query.desc;
    db.update_product({description, id})
    .then(newlyCreatedProducts => {
        res.status(200).json(newlyCreatedProducts);
    })
    .catch( error => {
        console.error("error in PATCH /api/products", error);
        res.status(500).send("Error in Updating product");
    })
}


module.exports = {
    create,
    getOne,
    getAll,
    update,
    delete: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;
    
        db.delete_product({id})
        .then(newlyCreatedProducts => {
            res.status(200).json(newlyCreatedProducts);
        })
        .catch( error => {
            console.error("error in DELETE /api/products/:id", error);
            res.status(500).send("Error in deleting product");
        })
    }
};