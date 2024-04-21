
import urlConstant from "../common/urlConstant";
import axiosLocalHost from "../utils/customAxios";

const createOrder = async (tourTimeId, passengers) => {
 
    const baseUrl = urlConstant.endpoint.order.createOrder.replace("${tourTimeId}", tourTimeId).replace("${paid}", 1);;   
    // const serviceUrl = `${baseUrl}?tourTimeId=${encodeURIComponent(tourTimeId)}&paid=1`;
    try {
        const response = await axiosLocalHost.sendAuthorizedRequest(baseUrl, "POST", passengers);
        return response.data; 
    } catch (error) {
        console.error("Error creating order:", error);
        throw error; 
    }
};


const getAllOrder = async () => {
    const serviceUrl = urlConstant.endpoint.order.getAllTour;
    const response = await axiosLocalHost.sendAuthorizedRequest(serviceUrl, "GET");
    return response;
  };
  
  const getDetailOrder = async (orderId) => {
    const serviceUrl =
      urlConstant.endpoint.order.getOrderDetailByID.replace(
        "${orderId}",
        orderId
      );
    const response = await axiosLocalHost.sendAuthorizedRequest(
      serviceUrl,
      "GET"
    );
    return response;
  };

export default {
    createOrder,
    getAllOrder,
    getDetailOrder
};
