
/* 
    @desc       Get all bootcamps
    @route      GET /api/v1/bootcamps
    @access     Public
*/
export.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps' });
};

/* 
    @desc       Get all bootcamps
    @route      GET /api/v1/bootcamps
    @access     Public
*/
export.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show bootcamp' });
};

/* 
    @desc       Get all bootcamps
    @route      GET /api/v1/bootcamps
    @access     Public
*/
export.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create bootcamp' });
};

/* 
    @desc       Get all bootcamps
    @route      GET /api/v1/bootcamps
    @access     Public
*/
export.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'update bootcamp' });
};

/* 
    @desc       Get all bootcamps
    @route      GET /api/v1/bootcamps
    @access     Public
*/
export.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'delete bootcamp' });
};