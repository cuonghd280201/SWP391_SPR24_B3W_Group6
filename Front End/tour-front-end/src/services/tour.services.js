import urlConstant from "../common/urlConstant";
import utils from "../utils/customAxios";
const getAllHiringRequest = async () => {
    const serviceUrl = urlConstant.endpoint.hiringRequest.getAll;
    const response = await utils.axiosLocalHost.get(serviceUrl);
    return response;
  };