//@desc     Get all
//@route    GET /routertesting
//@access   Public
exports.getAll = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show tests!" });
};

//@desc     Get one
//@route    GET /routertesting/:id
//@access   Public
exports.getOne = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show tests!" });
};

//@desc     Save one
//@route    POST /routertesting
//@access   Public
exports.createOne = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show tests!" });
};

//@desc     Update One
//@route    PUT /routertesting/:id
//@access   Public
exports.updateOne = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show tests!" });
};

//@desc     Delete one
//@route    DELETE /routertesting/:id
//@access   Public
exports.deleteOne = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show tests!" });
};
