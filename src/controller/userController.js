const userModel = require("../models/userModel.js");

// GET
const getAllUser = async (req, res) => {
  try {
    const [ data ] = await userModel.getAllUser();
    res.json({
      message: "This Get User",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error fetching users",
      serverMessage: error,
    });
  }
};

const getByNimUser = async (req,res) => {
  const {nim} = req.params;
  try {
    const [data] = await userModel.getByNim(nim);
    res.json({
      message: "This Get User",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error fetching users",
      serverMessage: error,
    });
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
    res.status(201).json({
      message: "Create Sucsess",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// UPDATE
const putUpdateUser = async (req, res) => {
  const {nim} = req.params;
  const {body} = req;
  try {
    await userModel.updateUser(body, nim);
    res.json({
      message: `Success Update nim : ${nim}`,
      data: {
        nim: nim,
        ...body
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  const {nim} = req.params;
  try {
    await userModel.deleteUser(nim);
    res.json({
      message: `Success delete data : ${nim}`
    })
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
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
