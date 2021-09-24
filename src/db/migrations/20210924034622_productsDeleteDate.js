
exports.up = function(knex) {
    return knex.schema.table("products", (table) => {
        table.dropColumn("date");
    })
};

exports.down = function(knex) {
    return knex.schema.table("products", (table) => {
        table.date("date");
    })
};
