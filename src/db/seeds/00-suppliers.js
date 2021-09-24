
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('suppliers').del()
    .then(function () {
      // Inserts seed entries
      return knex('suppliers').insert([
        {supplier_name: 'KS North Outlet', supplier_notes: ''},
        {supplier_name: 'KS South Outlet', supplier_notes: ''},
        {supplier_name: 'Coach North Outlet', supplier_notes: ''},
        {supplier_name: 'Coach South Outlet', supplier_notes: ''},
        {supplier_name: 'MK North Outlet', supplier_notes: ''},
        {supplier_name: 'MK South Outlet', supplier_notes: ''},
        {supplier_name: 'TB North Outlet', supplier_notes: ''},
        // {supplier_name: '', supplier_notes: ''},
        // {supplier_name: '', supplier_notes: ''},
        // {supplier_name: '', supplier_notes: ''},
        // {supplier_name: '', supplier_notes: ''},
      ]);
    });
};