const User = require('../model/userModel');


const userController = async (req, res) => {
    try {
      const userId = req.params.id;

      const user = await User.findOne({userId: userId});

      if (!user) {
        return res.status(404).send({ Success: false, Error: 'User not found' });
      }

      res.status(200).send({
      success: true,
      message: "user found",
      user: user
      })
    } catch (error) {
      res.status(500).json({ Success: false, Error: error.message });
    }
  }

module.exports = userController;