const { returning } = require("../db/connection");
const knex = require("../db/connection");

function create (supplier) {
    return knex("suppliers")
        .insert(supplier)
        .returning("*")
        .then(updatedRecords => updatedRecords[0])
}

function list() {
    return knex("suppliers")
        .select("*")
}

function read(supplierId) {
    return knex("suppliers")
        .select("*")
        .where("supplier_id", supplierId)
        .first()
}

function update(supplier) {
    return knex("suppliers")
        .where("supplier_id", supplier.supplier_id)
        .update(supplier)
        .returning("*")
}

function destroy(supplierId) {
    return knex("suppliers")
        .where("supplier_id", supplierId)
        .del()
}

module.exports = {
    create,
    list,
    update,
    destroy,
    read
}