const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCategory = mapProperties({
  category_id: "category.category_id",
  category_name: "category.category_name",
  category_description: "category.category_description",
});

function list() {
  return knex("products").select("*");
}

function read(product_id) {
  return knex("products as p")
    .join("products_categories as pc", "p.product_id", "pc.product_id")
    .join("categories as c", "pc.category_id", "c.category_id")
    .select("p.*", "c.*")
    .where({ "p.product_id": product_id })
    .first()
    .then(addCategory);
}

function readName(product_name) {
    return knex("products as p")
      .join("products_categories as pc", "p.product_id", "pc.product_id")
      .join("categories as c", "pc.category_id", "c.category_id")
      .select("p.*", "c.*")
      .where({ "p.product_name": product_name })
      .first()
      .then(addCategory);
  }

function listOutOfStockProducts() {
  return knex("products")
    .select("*")
    .where({ "product_quantity_in_stock": "0" })
}

function create (product) {
    return knex("products")
        .insert(product)
        .returning("*")
        .then(updatedRecords => updatedRecords[0])
}
module.exports = {
  list,
  read,
  readName,
  listOutOfStockProducts,
  create
};