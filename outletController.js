// Import outlet model
Outlet = require('./outletModel');
// Handle index actions
exports.index = function (req, res) {
    Outlet.get(function (err, outlets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Outlets retrieved successfully",
            data: outlets
        });
    });
};
// Handle create outlet actions
exports.new = function (req, res) {
    var outlet = new Outlet();
    outlet.name = req.body.name ? req.body.name : outlet.name;
    outlet.street_name = req.body.street_name;
    outlet.postal_code = req.body.postal_code;
    outlet.phone = req.body.phone;
// save the outlet and check for errors
    outlet.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New outlet created!',
            data: outlet
        });
    });
};
// Handle view outlet info
exports.view = function (req, res) {
    Outlet.findById(req.params.outlet_id, function (err, outlet) {
        if (err)
            res.send(err);
        res.json({
            message: 'Outlet details loading..',
            data: outlet
        });
    });
};
// Handle update outlet info
exports.update = function (req, res) {
    Outlet.findById(req.params.outlet_id, function (err, outlet) {
        if (err)
            res.send(err);
        outlet.name = req.body.name ? req.body.name : outlet.name;
        outlet.street_name = req.body.street_name;
        outlet.postal_code = req.body.postal_code;
        outlet.phone = req.body.phone;
// save the outlet and check for errors
        outlet.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Outlet Info updated',
                data: outlet
            });
        });
    });
};
// Handle delete outlet
exports.delete = function (req, res) {
    Outlet.remove({
        _id: req.params.outlet_id
    }, function (err, outlet) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Outlet deleted'
        });
    });
};