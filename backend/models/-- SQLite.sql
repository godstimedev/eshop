-- SQLite
-- INSERT into categories (name,specification) VALUES ("phones","specific accessories");

--SELECT * FROM products;
SELECT * FROM users;
-- UPDATE products SET category_id = 1 WHERE id= 1;
-- INSERT INTO products (
--     name,
--     likes,
--     category_id,
--     description,
--     price,
--     specification,
--     stars,
--     in_stock
-- )
-- VALUES (
--     "iphone6",
--     5,
--     1,
--     "a smartphone for all use cases",
--     500000.0,
--     "20000mAh,LTE,",
--     4.5,
--     true

-- );

UPDATE users SET is_admin = true WHERE id = 1;
