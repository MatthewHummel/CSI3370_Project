//The database connector

var db = require('../database/db');

//Schema template used for updating rows convenience

var schema = {
    "Cart": [
        "cartid", "userid", "discount_amount", "sub_total", "grand_total"
    ],
    "CartContents": [
        "id", "menu_item", "cartid", "quantity"
    ],
    "Discount": [
        "discountid", "discount_code", "amount"
    ],
    "MenuCategory": [
        "categoryid", "category_name", "category_desc"
    ],
    "MenuItem": [
        "itemid", "categoryid", "item_name", "item_desc", "price", "image"
    ],
    "OrderContents": [
        "id", "itemid", "orderid", "quantity"
    ],
    "Orders": [
        "orderid", "userid", "total", "discount_amount", "sub_total", "order_status"
    ],
    "Reviews": [
        "reviewid", "userid", "rating", "review_desc"
    ],
    "SupportQuestions": [
        "questionid", "userid", "subject", "message"
    ],
    "User": [
        "userid", "passwrd", "user_name", "first_name", "last_name", "phone_number"
    ]
};


//Thee CRUD functions simplified maybe idk java script pls

function readTable (table, cb) {
    let sql = `SELECT * FROM ${table}`;
    let data = {};
    db.all(sql, function(err, rows) {        // Return all results of query 
      if (err) throw(err);            // If there's an error, terminate app 
      rows.forEach(function(row) {       // For each row matching the query 
        data[row.id] = {};                  // init row id as top-level key 
        Object.keys(row).forEach(function(k) {    // For each column of row 
          data[row.id][k] = unescape(row[k]);     // add the key-value pair 
        });
      });
      cb(data);    // data = { id: { "colname" : value }, ... }, id2: ... } 
    });
};
  
function createRow (table, cb) {
    let sql = `INSERT INTO ${table} DEFAULT VALUES`;
    db.run(sql, cb);
};
  
function updateRow (table, rb, cb) {
    var pairs = "";           // for constructing 'identifier = value, ...'
    for (field of schema[table].slice(1)) {   //for every column except id
        if (pairs) pairs += ", ";    // insert comma unless string is empty 
        pairs += `${field} = '${escape(rb[field])}'`;   //
    }
    let sql = `UPDATE ${table} SET ${pairs} WHERE id = ?`;  // ? = rb['id']
    db.run(sql, rb['id'], cb);
};
  
function deleteRow (table, id, cb) {
    let sql = `DELETE FROM ${table} WHERE id = ${id};`;
    db.run(sql, cb);
};
  
module.exports = {   
    schema,
    readTable,
    createRow,
    updateRow,
    deleteRow
}