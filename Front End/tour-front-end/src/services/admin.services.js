import urlConstant from "../common/urlConstant";
import axiosLocalHost from "../utils/customAxios";

const getOrderSumary = () => {
    const serviceUrl = urlConstant.endpoint.admin.orderSumary
    const response = axiosLocalHost.sendAuthorizedRequest(serviceUrl, "GET");
    return response;
}

const getRoleNumber = () => {
    const serviceUrl = urlConstant.endpoint.admin.getRoleNumber
    const response = axiosLocalHost.sendAuthorizedRequest(serviceUrl, "GET");
    return response;
}

export default {
    getOrderSumary,
    getRoleNumber
} 