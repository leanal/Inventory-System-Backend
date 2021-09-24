const suppliersService = require("./suppliers.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function hasValidProperties (req, res, next) {
    const validProperties = [
        "supplier_name",
        "supplier_notes",
    ]
    const { data = {} } = req.body;
    const invalidProperties = Object.keys(data).filter((property) => !validProperties.includes(property))

    if (invalidProperties.length) next({ message: "Invalid property"})
    res.locals.supplier = data
    next()
}

function hasSupplierName(req, res, next) {
    const requiredProperty = "supplier_name"
    const newSupplier = res.locals.supplier
    if (!newSupplier[requiredProperty]) {
        next({ message: `must have ${property}`})
    }
    next()
}

function valuesAreNotNull(req, res, next) {
    const newSupplier = res.locals.supplier
    for (const property in newSupplier) {
        if (!newSupplier[property]) {
            next({ message: "Cannot have null property"})       
        }
    }
    next()
}

async function create(req, res) {
    const data = await suppliersService.create(req.body.data)
    res.json({ data: data })
}

async function list(req, res ) {
    const data = await suppliersService.list()
    res.json({ data: data})
}

async function supplierExists(req, res, next) {
    const { supplierId } = req.params;
    const foundSupplier = await suppliersService.read(Number(supplierId))
   
    if(foundSupplier) {
        res.locals.supplier = foundSupplier;
        return next()
    }
    
    next({ message: `Id ${supplierId} is not found`})
}
async function read(req, res) {
    res.json({data: res.locals.supplier })
}

async function update(req,res) {
    const updatedSupplier = {
        ...req.body.data,
        supplier_id: res.locals.supplier.supplier_id
    }
    const [data] = await suppliersService.update(updatedSupplier)
    res.json({ data: data })
}

async function destroy(req,res) {
    await suppliersService.destroy(res.locals.supplier.supplier_id)
    res.sendStatus(204)
}

module.exports = {
    create: [
        hasValidProperties, 
        hasSupplierName, 
        asyncErrorBoundary(valuesAreNotNull), 
        asyncErrorBoundary(create)
    ],
    list: [ asyncErrorBoundary(list) ],
    read: [ 
        asyncErrorBoundary(supplierExists), 
        asyncErrorBoundary(read) 
    ],
    update: [ 
        asyncErrorBoundary(supplierExists), 
        asyncErrorBoundary(update)
    ],
    delete: [ supplierExists, destroy ]
}