import userRegistrationModel from "../model/userRegistrationModel.js";

const getAllUserDetails = async (req, res) => {
  try {
    const userDetails = await userRegistrationModel.find({});

    return res.status(200).json({
      success: true,
      message: 'User details retrieved successfully',
      data: userDetails
    });
  } catch (error) {
   
    return res.status(500).json({
      success: false,
      message: 'Error: ' + error.message
    });
  }
};

export default getAllUserDetails;
