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
  const response = await axiosLocalHost.normalRequest(fullUrl);
  return response;
};

const searchAllTour = async (currentPage, pageSize, sortBy, sortOrder, keyWord) => {
  const serviceUrl = urlConstant.endpoint.tour.filterTour + "?";
  const pagingUrl = urlConstant.endpoint.tour.paging
    .replace("${currentPage}", currentPage)
    .replace("${pageSize}", pageSize);
  const sortUrl = urlConstant.endpoint.tour.sorting
    .replace("${sortBy}", sortBy)
    .replace("${sortOrder}", sortOrder);
  const keywordUrl = urlConstant.endpoint.tour.keyWord.replace("${keyWord}", keyWord);
  const fullUrl = serviceUrl + pagingUrl + '&' + sortUrl + '&' + keywordUrl;
  const response = await axiosLocalHost.sendAuthorizedRequest(fullUrl, "POST");
  return response;
}

const getDetailTourByCustomer = async (tourId) => {
  const serviceUrl =
    urlConstant.endpoint.tour.getTourDetailByID.replace(
      "${tourId}",
      tourId
    );
  const response = await axiosLocalHost.normalRequest(
    serviceUrl
  );
  return response;
};

const getDetailSlotByStaff = async (timeId) => {
  const serviceUrl =
    urlConstant.endpoint.tour.getSlotDetailByID.replace(
      "${timeId}",
      timeId
    );
  const response = await axiosLocalHost.sendAuthorizedRequest(
    serviceUrl,
    "GET"
  );
  return response;
};


const createTour = async (formData) => {

  const baseUrl = urlConstant.endpoint.tour.createTour;
  try {
    const response = await axiosLocalHost.sendAuthorizedRequest(baseUrl, "POST", formData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

const addMoreImage = async(formData) => {
  const baseUrl = urlConstant.endpoint.staff.addMoreImage;
  try{
    const response = await axiosLocalHost.sendAuthorizedRequest(baseUrl, "POST", formData);
    return response.data;
  }catch(error) {
    console.error("Error add more image", error);
    throw error;
  }
}

const updateImage = async(formData) => {
  const baseUrl = urlConstant.endpoint.staff.updateImage;
  try{
    const response = await axiosLocalHost.sendAuthorizedRequest(baseUrl, "PUT", formData);
    return response.data;
  }catch(error){
    console.error("Error update Image", error);
    throw error;
  }
}

const deleteImage = async (imageId) => {
  const serviceUrl =
    urlConstant.endpoint.staff.deleteImage.replace(
      "${imageId}",
      imageId
    );
  const response = await axiosLocalHost.sendAuthorizedRequest(
    serviceUrl,
    "DELETE"
  );
  return response;
};


const getAllCity = async () => {
  const serviceUrl = urlConstant.endpoint.tour.city;
  const response = await axiosLocalHost.sendAuthorizedRequest(serviceUrl, "GET");
  return response;
};


export default {
  getAllTourAndPaging,
  getDetailTourByCustomer,
  createTour,
  getDetailSlotByStaff,
  searchAllTour,
  addMoreImage,
  updateImage,
  deleteImage,
  getAllCity,
}
