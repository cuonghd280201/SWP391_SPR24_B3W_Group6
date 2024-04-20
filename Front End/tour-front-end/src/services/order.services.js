
import urlConstant from "../common/urlConstant";
import axiosLocalHost from "../utils/customAxios";

const createOrder = async (tourTimeId, passengers) => {
 
    // Construct the service URL with tourTimeId and paid parameters
    const baseUrl = urlConstant.endpoint.order.createOrder; // Assuming this is the base URL
    const queryParams = `tourTimeId=${tourTimeId}&paid=1`; // Constructing query parameters

    // Combine the base URL with the query parameters
    const serviceUrl = `${baseUrl}?${queryParams}`;

    // Prepare the request data
    

    try {
        // Send a POST request with the request data
        const response = await axiosLocalHost.sendAuthorizedRequest(serviceUrl, "POST", passengers);
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
