exports.up = function(knex) {
    return knex.schema.createTable("suppliers", (table) => {
      table.increments("supplier_id").primary(); // sets supplier_id as the primary key
      table.string("supplier_name");
      table.text("supplier_notes");
      table.timestamps(true, true); // adds created_at and updated_at columns; passing true as the first argument sets the columns to be a timestamp type while passing true as the second argument sets those columns to be non-nullable and to use the current timestamp by default
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable("suppliers");
};
