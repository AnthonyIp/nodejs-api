/*
    @desc       Get all bootcamps
    @route      GET /api/v1/bootcamps
    @access     Public
*/
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
};

/* 
    @desc       Get single bootcamp
    @route      GET /api/v1/bootcamps/:id
    @access     Public
*/
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
};

/* 
    @desc       create bootcamps
    @route      POST /api/v1/bootcamps
    @access     Public
*/
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'create bootcamp'});
};

/* 
    @desc       Update bootcamps
    @route      PUT /api/v1/bootcamps/:id
    @access     Public
*/
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `update bootcamp ${req.params.id}`});
};

/* 
    @desc       Delete bootcamps
    @route      DELETE /api/v1/bootcamps/:id
    @access     Public
*/
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `delete bootcamp ${req.params.id}`});
};
