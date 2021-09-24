
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('products_categories').insert([
        {product_id: 31, category_id: 6},
        {product_id: 32, category_id: 6},
        {product_id: 33, category_id: 6},
        {product_id: 34, category_id: 7},
        {product_id: 35, category_id: 7}
      ]);
    });
};
