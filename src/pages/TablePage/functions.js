//=======filter base on item changed ==============
export const filterItems = (items, searchQueries) => {
  const filteredItems = items.filter((item) =>
    Object.keys(searchQueries).every(
      (key) =>
        !searchQueries[key] || // Skip empty search queries
        item[key].toLowerCase().includes(searchQueries[key].toLowerCase())
    )
  );
  return filteredItems;
};

//======get data and show the number of every field in an array========

export const getGroupedData = (data, field) => {
  const newArray = data?.map((d) => d[field]);
  const groupedObj = newArray.reduce(
    (item, value) => ({
      ...item,
      [value]: (item[value] || 0) + 1,
    }),
    {}
  );

  const groupedArray = Object.entries(groupedObj).map(([name, value]) => ({
    [field]: name,
    count: value,
  }));

  return groupedArray;
};
