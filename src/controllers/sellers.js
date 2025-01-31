const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async blockSeller(req, res) {
    const { sellerId } = req.body;
    const result = await sellerService.blockSeller(sellerId);
    res.status(httpStatus.OK).send(result);
  }
  async searchSeller(req, res) {
    const { seller, page, limit } = req.body;
    const result = await sellerService.searchSeller(seller, parseInt(page), parseInt(limit));
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;