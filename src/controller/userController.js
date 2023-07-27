const userModel = require("../models/userModel.js");
const response = require('../response.js')

// GET
const getAllUser = async (req, res) => {
  try {
    const [ data ] = await userModel.getAllUser();
    response.successRes(200, data, "get all data success", res);
  } catch (error) {
    response.errorRes("Gagal get data", error, res);
  }
};


const getByNimUser = async (req,res) => {
  const {nim} = req.params;
  try {
    const [data] = await userModel.getByNim(nim);
    response.successRes(200, data, `get data ${nim} success`, res);
  } catch (error) {
    response.errorRes("Gagal get data", error, res);
  }
}

// POST
const postNewUser = async (req, res) => {
  const { body } = req;
  if (!body.nim || !body.nama) {
    return res.status(400).json({
      message: "Gagal",
    });
  }
  try {
    await userModel.createUser(body);
    response.successRes(201, body, "sucsess post/input", res);
  } catch (error) {
    response.errorRes("Gagal get data", error, res);
  }
};

// UPDATE
const putUpdateUser = async (req, res) => {
  const {nim} = req.params;
  const {body} = req;
  try {
    await userModel.updateUser(body, nim);
    response.successRes(201, body, "sucsess update", res);
  } catch (error) {
    response.errorRes("Gagal get data", error, res);
  }
};

// DELETE
const deleteUser = async (req, res) => {
  const {nim} = req.params;
  try {
    await userModel.deleteUser(nim);
    response.successRes(201, nim, "sucsess delete", res);
  } catch (error) {
    response.errorRes("Gagal get data", error, res);
  }
};

// EXPORT THIS MODULE
module.exports = {
  getAllUser,
  getByNimUser,
  postNewUser,
  putUpdateUser,
  deleteUser,
};
