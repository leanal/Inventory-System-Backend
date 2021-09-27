const marketplacesService = require("./marketplaces.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const { is_showing } = req.query;
  const data = is_showing === "true" ? await marketplacesService.listShowing() : await marketplacesService.list();
  res.json({ data });
}

async function marketplaceExists(req, res, next) {
  const marketplace = await marketplacesService.read(Number(req.params.marketplaceId));
  if (marketplace) {
    res.locals.marketplace = marketplace;
    return next();
  }
  next({ status: 404, message: "marketplace cannot be found." });
}

async function read(req, res) {
  const data = res.locals.marketplace;
  res.json({ data: data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(marketplaceExists), read],
  marketplaceExists,
};
