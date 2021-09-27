exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE marketplaces RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("marketplaces").insert([
        { marketplace_name: "Instagram", marketplace_solds: 100, marketplace_returns: 10, marketplace_exchanges: 13, marketplace_revenue: 8909.98 },
        { marketplace_name: "BigCommerce", marketplace_solds: 245, marketplace_returns: 16, marketplace_exchanges: 6, marketplace_revenue: 19870.50 },
        { marketplace_name: "eBay", marketplace_solds: 123, marketplace_returns: 34, marketplace_exchanges: 9, marketplace_revenue: 10987.07 },
        { marketplace_name: "Amazon", marketplace_solds: 345, marketplace_returns: 17, marketplace_exchanges: 78, marketplace_revenue: 23567.76 },
        // { marketplace_name: "", marketplace_solds: , marketplace_returns: , marketplace_exchanges: , marketplace_revenue: },
      ]);
    });
};