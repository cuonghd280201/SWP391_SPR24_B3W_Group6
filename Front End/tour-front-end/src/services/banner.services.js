import urlConstant from "../common/urlConstant";
import axiosLocalHost from "../utils/customAxios";

const getListBanner = async () => {
    const serviceUrl = urlConstant.endpoint.banner.listBanner;
    const response = await axiosLocalHost.sendAuthorizedRequest(serviceUrl, "GET");
    return response;
  };

  const deleteBanner = async (id) => {
    const serviceUrl =
      urlConstant.endpoint.tour.deleteBanner.replace(
        "${id}",
        id
      );
    const response = await axiosLocalHost.sendAuthorizedRequest(
      serviceUrl,
      "DELETE"
    );
    return response;
  };
export default {
    getListBanner,
    deleteBanner

}