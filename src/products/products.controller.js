const productsService = require("./products.service");
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
  let outOfStockProducts = await productsService.listOutOfStockProducts();
  res.json({ data: outOfStockProducts });
}

// Checks if the product_name does not exists
async function productNameDoesNotExists(req, res, next) {
  const product = await productsService.readName(req.body.data.product_name);
  if (product) {
    return next({
      message: `A product named "${product.product_name}" already exists`,
    });
  }
  next();
}

async function create(req, res) {
  const data = await productsService.create(req.body.data);
  res.status(201).json({ data });
}

async function update(req, res) {
  const updatedProduct = {
    ...req.body.data,
    product_id: res.locals.product.product_id,
  };
  const [data] = await productsService.update(updatedProduct);
  res.json({ data: data }); 
}

module.exports = {
  list: asyncErrorBoundary(list),
  listOutOfStockProducts: asyncErrorBoundary(listOutOfStockProducts),
  read: [asyncErrorBoundary(productExists), read],
  create: [asyncErrorBoundary(productNameDoesNotExists), asyncErrorBoundary(create)],
  update: [asyncErrorBoundary(productExists), asyncErrorBoundary(update)],
};
