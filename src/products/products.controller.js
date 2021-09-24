const productsService = require("./products.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const data = await productsService.list()
    res.json({ data: data })
}

async function productExists(req, res, next) {
    const product = await productsService.read(req.params.productId)    
    if (product) {
        res.locals.product = product
        next()
    }
}

async function read(req, res) {
    const data = res.locals.product
    res.json({ data: data })
}

async function create(req, res) {
    
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [productExists, asyncErrorBoundary(read)],
    create: [productExists, asyncErrorBoundary(create)]
}