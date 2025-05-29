export const categoryDataFetch = async () => {
  let res = await fetch(`${process.env.BASE_URL}/api/v1/category`);
  let data = await res.json();
  return data;
};
