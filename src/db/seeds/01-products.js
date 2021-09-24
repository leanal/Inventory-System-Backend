
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          product_sku: '',
          product_brand: 'KS',
          product_name: 'bixby pl neda - blk',
          product_quantity_in_stock: 1,
          product_weight_in_oz: 7,
          supplier_id: 36,
        },
        {
          product_sku: '',
          product_brand: 'KS',
          product_name: 'cindi tri dome cosmetic - pink multi',
          product_description: '',
          product_quantity_in_stock: 1,
          product_weight_in_oz: 10,
          supplier_id: 36,
        },
        {
          product_sku: '',
          product_brand: 'KS',
          product_name: 'hollie spade clover geo sm slim bifold - multi',
          product_description: '',
          product_quantity_in_stock: 1,
          product_weight_in_oz: 3,
          supplier_id: 36,
        },
        {
          product_sku: '',
          product_brand: 'KS',
          product_name: 'hollie spade clover geo emboss sm slim card - ltfrznlilc',
          product_description: 'no gr',
          product_quantity_in_stock: 2,
          product_weight_in_oz: 3,
          supplier_id: 37,
        },
        {
          product_sku: '',
          product_brand: 'MK',
          product_name: 'Jst large doublezip wristlet - brown signature',
          product_quantity_in_stock: 1,
          product_weight_in_oz: 9,
          supplier_id: 40,
        },
        // {
          // product_sku: '',
          // product_brand: '',
          // product_name: '',
          // product_description: '',
          // product_quantity_in_stock: ,
          // product_weight_in_oz: ,
          // supplier_id: ,
        // },
      ]);
    });
};