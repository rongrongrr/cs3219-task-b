// Initialize express router
let router = require('express').Router();
// Set default API response
// Set default API response

router.get('/', (req, res) => res.send('<h1>API Page</h1><h3>Pages available:</h3><ul><li>/products</li><li>/outlets</li></ul>'));

// Import product controller
var productController = require('./productController');
// Product routes
router.route('/products')
    .get(productController.index)
    .post(productController.new);
router.route('/products/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);
// Import outlet controller
var outletController = require('./outletController');
// Outlet routes
router.route('/outlets')
    .get(outletController.index)
    .post(outletController.new);
router.route('/outlets/:outlet_id')
    .get(outletController.view)
    .patch(outletController.update)
    .put(outletController.update)
    .delete(outletController.delete);


// Export API routes
module.exports = router;