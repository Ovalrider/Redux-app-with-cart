import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export function fetchCartData() {
  return async (dispatch) => {
    const abortController = new AbortController();
    const { signal } = abortController;
    async function fetchData(signal) {
      const response = await fetch(
        "https://module-20-udemy-react-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "GET",
          signal,
        }
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      abortController.abort();
      return data;
    }
    try {
      const cartData = await fetchData(signal);
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Could not fetch cart data!",
        })
      );
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    const sendRequest = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://module-20-udemy-react-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error sending cart data!");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };

  //{type: '', payload : {}}
}
