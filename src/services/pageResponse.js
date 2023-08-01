export const pageResponse = (axiosInstance, id) => {
  try {
    const response = axiosInstance.get(`/request/response/page?id=${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
