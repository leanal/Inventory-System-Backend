const productsService = require("./products.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, next) {
  const data = await productsService.list();
  res.json({ data });
}

async function productExists(req, res, next) {
  const product = await productsService.read(req.params.productId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({ status: 404, message: `Product cannot be found.` });
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

async function listOutOfStockProducts(req, res, next) {
  let outOfStockProducts = await productsService.listOutOfStockProducts()
  if (outOfStockProducts.length === 0) {
    outOfStockProducts = "All products are in stock"
  }
  res.json({ data: outOfStockProducts });
}

// Checks if the product_name does not exists
async function productNameDoesNotExists(req, res, next) {
    const product = await productsService.readName(req.body.data.product_name);
    if (product) {
      return next({message: `A product named "${product.product_name}" already exists` });
    }
    next();
  }
  
async function create(req, res) {
    const data = await productsService.create(req.body.data);
    res.status(201).json({ data });
  }

module.exports = {
  read: [
      asyncErrorBoundary(productExists), 
      read
    ],
  list: asyncErrorBoundary(list),
  listOutOfStockProducts: asyncErrorBoundary(listOutOfStockProducts),
  create: [
      asyncErrorBoundary(productNameDoesNotExists),
      asyncErrorBoundary(create)
    ]
};
