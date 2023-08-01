export const searchItems = (axiosInstance, data) => {
  try {
    const response = axiosInstance.put(`/request/search`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
