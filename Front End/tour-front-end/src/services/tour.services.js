import urlConstant from "../common/urlConstant";
import axiosLocalHost from "../utils/customAxios";

const getAllTourAndPaging = async (currentPage, pageSize, sortBy, sortOrder) => {
  const serviceUrl = urlConstant.endpoint.tour.getAllTour + "?";
  const pagingUrl = urlConstant.endpoint.tour.paging
    .replace("${currentPage}", currentPage)
    .replace("${pageSize}", pageSize);
  const sortUrl = urlConstant.endpoint.tour.sorting
    .replace("${sortBy}", sortBy)
    .replace("${sortOrder}", sortOrder);

  const fullUrl = serviceUrl + pagingUrl + '&' + sortUrl;
  const response = await axiosLocalHost.sendAuthorizedRequest(fullUrl, "GET");
  return response;
};



const getDetailTourByCustomer = async (tourId) => {
  const serviceUrl =
    urlConstant.endpoint.tour.getTourDetailByID.replace(
      "${tourId}",
      tourId
    );
  const response = await axiosLocalHost.sendAuthorizedRequest(
    serviceUrl,
    "GET"
  );
  return response;
};

export default {
  getAllTourAndPaging,
  getDetailTourByCustomer,
}
