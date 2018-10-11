DELETE FROM products
WHERE product_id = ${id} returning *;