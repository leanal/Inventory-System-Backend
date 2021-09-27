exports.up = function(knex) {
    return knex.schema.createTable("marketplaces", (table) => {
      table.increments("marketplace_id").primary(); // sets marketplace_id as the primary key
      table.string("marketplace_name");
      table.text("marketplace_notes");
      table.integer("marketplace_solds");
      table.integer("marketplace_returns");
      table.integer("marketplace_exchanges");
      table.decimal("marketplace_revenue");
      table.timestamps(true, true);
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable("marketplaces");
};
