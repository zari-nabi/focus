export const fullResponse = (axiosInstance, id) => {
  try {
    const response = axiosInstance.get(`/request/response/stream?id=${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
