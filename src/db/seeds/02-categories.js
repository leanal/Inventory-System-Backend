
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category_name: 'Wallets', category_description: ''},
        {category_name: 'Wristlets', category_description: ''},
        {category_name: 'Backpacks', category_description: ''},
        {category_name: 'Belt Bags & Fanny Packs', category_description: ''},
        {category_name: 'Convertible Bags', category_description: ''},
        // {category_name: '', category_description: ''},
      ]);
    });
};
