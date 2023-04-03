/*
 *  Creation and initializing site content db
 *  
 *  If data base is created delete it before running
 *  
 *  > cd src/database
 *  > sqlite3 database.sqlite -init init/db.sql
 */


-- User --

CREATE TABLE IF NOT EXISTS User (
    userid INTEGER PRIMARY KEY,
    passwrd TEXT NOT NULL,
    user_name TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone_number TEXT
);

INSERT INTO User ("userid", "passwrd", "user_name", "first_name", "last_name", "phone_number")
VALUES
    (1, 'admin', 'admin', 'admin', 'admin', NULL);



-- Reviews -- 

CREATE TABLE IF NOT EXISTS Reviews (
    reviewid INTEGER PRIMARY KEY,
    userid INTEGER NOT NULL,
    rating INTEGER NOT NULL, 
    review_desc TEXT NOT NULL, 
    FOREIGN KEY (userid) 
        REFERENCES User (userid)
            ON DELETE CASCADE
            ON UPDATE NO ACTION
);



-- Support Questions --

 CREATE TABLE IF NOT EXISTS SupportQuestions (
    questionid INTEGER PRIMARY KEY,
    userid INTEGER NOT NULL,
    subject TEXT NOT NULL, 
    message TEXT NOT NULL, 
    FOREIGN KEY (userid)
        REFERENCES User (userid)
            ON DELETE CASCADE
            ON UPDATE NO ACTION
);



-- Discount -- 

CREATE TABLE IF NOT EXISTS Discount (
    discountid INTEGER PRIMARY KEY,
    discount_code TEXT NOT NULL UNIQUE,
    amount REAL NOT NULL
);



-- Menu Category --

CREATE TABLE IF NOT EXISTS MenuCategory (
    categoryid INTEGER PRIMARY KEY,
    category_name TEXT NOT NULL,
    category_desc TEXT NOT NULL
);

INSERT INTO MenuCategory ("categoryid", "category_name", "category_desc")
VALUES
    (1, 'Coffe', 'Different kinds of coffee drinks'),
    (2, 'Other Items', 'Drinks other than coffee');



-- Menu Item --

CREATE TABLE IF NOT EXISTS MenuItem (
    itemid INTEGER PRIMARY KEY,
    categoryid INTEGER NOT NULL, 
    item_name TEXT NOT NULL, 
    item_desc TEXT, 
    price REAL NOT NULL,
    image BLOB,
    FOREIGN KEY (categoryid)
        REFERENCES MenuCategory (categoryid)
            ON DELETE CASCADE
            ON UPDATE NO ACTION
);

INSERT INTO MenuItem ("itemid", "categoryid", "item_name", "item_desc", "price", "image")
VALUES
    (1, 1, 'Black Coffee', 'Black coffee only', 2.49, NULL),
    (2, 1, 'Coffee and Cream', 'Black coffee with cream', 2.79, NULL),
    (3, 1, 'Espresso', 'Cup of espresso', 2.99, NULL), 
    (4, 1, 'Cappuccino', 'Cup of cappuccino', 2.89, NULL),
    (5, 1, 'Latte', 'Cup of hot latte', 2.89, NULL),
    (6, 2, 'Water', 'Bottled water', 1.49, NULL), 
    (7, 2, 'Lemonade', 'House made lemonade', 2.99, NULL),
    (8, 2, 'Tea', 'Cup of black tea', 1.89, NULL),
    (9, 2, 'Sandwich', 'House made Sandwich', 3.99, NULL), 
    (10, 2, 'Croissant', 'house made hot croissants', 2.49, NULL), 
    (11, 2, 'Mixed Fruit', 'Small bowl of mixed fruit chopped', 2.99, NULL),
    (12, 1, 'Frappuccino', 'Cup of frappucino', 2.79, NULL);



-- Order --

CREATE TABLE IF NOT EXISTS Orders (
    orderid INTEGER PRIMARY KEY,
    userid INTEGER NOT NULL,
    total REAL NOT NULL,
    discount_amount REAL,
    sub_total REAL NOT NULL,
    order_status TEXT NOT NULL,
    FOREIGN KEY (userid)
        REFERENCES User (userid),
    FOREIGN KEY (discount_amount)
        REFERENCES Discount (amount)
);



-- Order Contents --

CREATE TABLE IF NOT EXISTS OrderContents (
    id INTEGER PRIMARY KEY,
    itemid INTEGER NOT NULL,
    orderid INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (itemid)
        REFERENCES MenuItem (itemid),
    FOREIGN KEY (orderid)
        REFERENCES Orders (orderid)
);

-- Cart --

CREATE TABLE IF NOT EXISTS Cart (
    cartid INTEGER PRIMARY KEY,
    userid NOT NULL UNIQUE,
    discount_amount REAL,
    sub_total REAL NOT NULL,
    grand_total REAL NOT NULL,
    FOREIGN KEY (userid)
        REFERENCES User (userid)
            ON DELETE CASCADE
            ON UPDATE NO ACTION,
    FOREIGN KEY (discount_amount)
        REFERENCES Discount (amount)
);



-- Cart Contents--

CREATE TABLE IF NOT EXISTS CartContents (
    id INTEGER PRIMARY KEY,
    menu_item INTEGER NOT NULL,
    cartid INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (menu_item)
        REFERENCES MenuItem (itemid)
            ON DELETE CASCADE
            ON UPDATE NO ACTION,
    FOREIGN KEY (cartid)
        REFERENCES Cart (cartid)
            ON DELETE CASCADE
            on UPDATE NO ACTION
);