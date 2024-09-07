// const getProductLS = () => {
//   const productId = localStorage.getItem("productId");
//   return productId ? JSON.parse(productId) : [];
// };

import toast from "react-hot-toast";

// const saveProductIdToLS = (id) => {
//   const getProductId = getProductLS();
//   const isExitProductId = getProductId.find((productId) => productId === id);

//   if (isExitProductId) {
//     toast.error("You have Already added Product");
//   } else {
//     getProductId.push(id);
//     localStorage.setItem("productId", JSON.stringify(getProductId));
//     toast.success("Product added to Cart Successfully!");
//   }
// };


// export {
//     getProductLS,
//     saveProductIdToLS,
// }




// Function to retrieve product IDs from localStorage
const getProductLS = () => {
  const productId = localStorage.getItem("productId");
  return productId ? JSON.parse(productId) : [];
};

// Function to save product ID to localStorage
const saveProductIdToLS = (id) => {
  const getProductId = getProductLS();
    getProductId.push(id);
    localStorage.setItem("productId", JSON.stringify(getProductId));
      window.location.reload();
    toast.success("Product added to Cart Successfully!");
};

// Function to remove product ID from localStorage
const removeProductIdFromLS = (id) => {
  const getProductId = getProductLS();
  const updatedProductId = getProductId.filter((productId) => productId !== id);
  window.location.reload()

  if (getProductId.length === updatedProductId.length) {
    toast.error("Product not found in Cart");
  } else {
    localStorage.setItem("productId", JSON.stringify(updatedProductId));
    toast.success("Product removed from Cart Successfully!");
  }
};

export {
  getProductLS,
  saveProductIdToLS,
  removeProductIdFromLS,
};
