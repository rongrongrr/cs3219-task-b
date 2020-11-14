var mongoose = require('mongoose');
// Setup schema
var outletSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    street_name: {
        type: String,
        required: true
    },
    postal_code: Number,
    phone: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Outlet model
var Outlet = module.exports = mongoose.model('outlet', outletSchema);
module.exports.get = function (callback, limit) {
    Outlet.find(callback).limit(limit);
}