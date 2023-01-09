const Database = require('better-sqlite3');

const db = new Database(`${__dirname}/app.db`);

// making table and adding products in database
if (!table_exists('products')) {
    db.prepare('CREATE TABLE products (productId int PRIMARY KEY NOT NULL, productCode varchar(255) NOT NULL, productName varchar(255) NOT NULL, productTitle varchar(255) NOT NULL, productSubTitle varchar(255) NOT NULL, productDescription varchar(255) NOT NULL, productPlatform varchar(255) NOT NULL, productSmallImage varchar(255) NOT NULL, productPrice int NOT NULL);').run();

    db.prepare("INSERT INTO products VALUES (1, '101', 'Phones', 'I Phone 8', 'I Phone 8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Electronics Mall', '../assets/game1.jpg', 32), (2, '102', 'Phones', 'I Phone 9', 'I Phone 9', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Steam', '../assets/game2.jpeg', 20), (3, '103', 'Phones', 'I Phone 10', 'I Phone 10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Org', '../assets/game3.jpg', 26), (4, '104', 'Phones', 'I Phone 11', 'I Phone 11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Our Store', '../assets/game4.jpg', 25), (5, '105', 'Phone', 'I Phone 12', 'I Phone 12', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Steam', '../assets/game5.jpg', 60), (6, '106', 'Product', 'Watches', 'Watches', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Steam', '../assets/small1.jpg', 30), (7, '107', 'Product', 'Laptops', 'Laptops', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Steam', '../assets/small2.jpg', 30), (8, '108', 'Product', 'Phones', 'Phones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'EC Mall', '../assets/small3.jpg', 30)").run();
}

// function to check if the table already exists or not
function table_exists(name) {
    const rows = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?;").get(name);
    return !!rows;
}

module.exports = db;