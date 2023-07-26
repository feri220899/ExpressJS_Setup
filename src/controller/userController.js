const userModel = require('../models/userModel.js');

// GET
const getAllUser = async (req, res) => {
  try {
    const [ data ] = await userModel.getAllUser();
    res.json({
      message: "This Get User",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error fetching users',
      serverMessage: error,
    })
  }
};

// POST
const postNewUser = async (req, res) => {
  const { body } = req
  if (!body.nim || !body.nama) {
    return res.status(400).json({
      message: "Gagal"
    })
  }
  try {
    await userModel.createUser(body);
    res.status(201).json({
      message: 'Create Sucsess',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

// UPDATE
const putUpdateUser = (req, res) => {
  const { id } = req.params
  res.json({
    message: `This Update id : ${id}`
  })
}

// DELETE
const deleteUser = (req, res) => {
  const { id } = req.params
  res.json({
    message: `Delete User from id : ${id}`
  })
}

// EXPORT THIS MODULE
module.exports = {
  getAllUser,
  postNewUser,
  putUpdateUser,
  deleteUser,
}