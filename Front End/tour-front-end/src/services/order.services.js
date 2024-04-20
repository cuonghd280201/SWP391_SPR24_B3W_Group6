const createOrder = async (
    tourTimeId,
    name,
    phone,
    isCard,
    dateOfBirth,
) => {
    const serviceUrl = urlConstant.endpoint.order.createOrder
    const response = await axiosLocalHost.sendAuthorizedRequest(
        serviceUrl,
        "POST",
        {
            tourTimeId,
            name,
            phone,
            isCard,
            dateOfBirth,
        }
    );
    return response;
};


export default {
    createOrder,
}