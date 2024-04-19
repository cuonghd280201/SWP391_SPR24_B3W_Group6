import urlConstant from "../common/urlConstant";
import axiosLocalHost from "../utils/customAxios";

const getUserProfile = async () => {
    const serviceUrl = urlConstant.endpoint.auth.profile;
    const response = await axiosLocalHost.sendAuthorizedRequest(serviceUrl, "GET");
    return response;
  };

  const updateProfile = async (name, phone, gender, dateOfBirth) => {
    const serviceUrl = urlConstant.endpoint.auth.updateProfile;
    const image = "abc"; // Placeholder value for image

    try {
        // Send a PUT request with the user's updated data
        const response = await axiosLocalHost
       .sendAuthorizedRequest(serviceUrl, 'PUT', {
            name,
            phone,
             gender,
            dateOfBirth,
             image,         
        });

        // Return the response data
        return response;
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
    }
};
//   const updateProfile = async (
//     name,
//     phone,
//     gender,
//     dateOfBirth
// ) => {
//     const serviceUrl = urlConstant.endpoint.auth.updateProfile;
//     const image = "abc"; // Giá trị cố định cho tham số image
//     const response = await axiosLocalHost
//         .sendAuthorizedRequest(serviceUrl, 'PUT', {
//             name,
//             phone,
//             gender,
//             dateOfBirth,
//             image,
//         });
//     return response;
// };
export default {
    getUserProfile,
    updateProfile,

}