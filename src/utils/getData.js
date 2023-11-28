const getData = () => {
  const getProduct = localStorage.getItem("Lists");

  if (getProduct) {
    return JSON.parse(getProduct);
  }
  return [];
};

export default getData;
