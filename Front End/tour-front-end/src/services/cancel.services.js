import urlConstant from "../common/urlConstant";
import axiosLocalHost from "../utils/customAxios";


const customerCancel = async (orderId) => {
    const serviceUrl =
      urlConstant.endpoint.cancel.customerCancel.replace(
        "${orderId}",
        orderId
      );
    const response = await axiosLocalHost.sendAuthorizedRequest(
      serviceUrl,
      "POST"
    );
    return response;
  };

  const getStaffOrderStatus = async (tourTimeId) => {
 
    const baseUrl = urlConstant.endpoint.cancel.getAllOrderStatus.replace("${tourTimeId}", tourTimeId);   
    try {
        const response = await axiosLocalHost.sendAuthorizedRequest(baseUrl, "GET");
        return response.data; 
    } catch (error) {
        console.error("Error get order:", error);
        throw error; 
    }
};

const staffCancelOrder = async (orderId) => {
    const serviceUrl =
      urlConstant.endpoint.cancel.staffCancel.replace(
        "${orderId}",
        orderId
      );
    const response = await axiosLocalHost.sendAuthorizedRequest(
      serviceUrl,
      "POST"
    );
    return response;
  };



export default {
   customerCancel,
   getStaffOrderStatus,
   staffCancelOrder,

}