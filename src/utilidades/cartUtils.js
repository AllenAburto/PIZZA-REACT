export const reduceItemQuantity = (cartItems, index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].count > 1) {
      updatedCartItems[index].count--;
    } else {
      updatedCartItems.splice(index, 1); 
    }
    return updatedCartItems;
  };
  
  export const increaseItemQuantity = (cartItems, index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].count++;
    return updatedCartItems;
  };
  
  export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
  };
  