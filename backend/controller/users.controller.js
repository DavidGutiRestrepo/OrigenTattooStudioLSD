const usersUseCases = require('../usecases/users.usecase');

exports.showUserController = async (req, res) =>{
  try {
    const result = await usersUseCases.showUsers();

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.createUserController = async (req, res) =>{
  try {
    const result = await usersUseCases.createUser(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateUserController = async (req, res) =>{
  try {
    const result = await usersUseCases.updateUser(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUserController = async (req, res) => {
  try {
    const result = await usersUseCases.deleteUser(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
