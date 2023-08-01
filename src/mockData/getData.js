import data from "./data";

// for real API fetch or axios is used
export const getData = () => {
  return data?.results;
};

export const getCount = () => {
  return data?.count;
};
