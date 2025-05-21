import axios from "axios";
import { addToWishlistUrl, getUserWishlistUrl, removeFromWishListUrl } from "../urls";


export async function addToWishlist(id, userId) {
  try {
    const response = await axios.put(
      addToWishlistUrl,
      {
        productId: id,
        userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response?.status === 200 && response?.data?.isSuccess) {
      console.log("user wishlist data changed");
      return response?.data?.user;
    }
  } catch (error) {
    console.log(error);
  }
}

// function to remove the product from user wishlist
export async function removeFromWishlist(id, userId) {
  try {
    const response = await axios.put(
      removeFromWishListUrl,
      {
        productId: id,
        userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response?.status && response?.data?.isSuccess) {
      console.log("item removed from user wishlist");
      return response?.data?.user;
    }
  } catch (error) {
    console.log(error);
  }
}

// function to get user wishlist details
export async function getUserWishlist(id) {
  try {
    const response = await axios.get(getUserWishlistUrl, {
      headers: {
        "Content-Type": "application/json",
        userId: id,
      },
    });
    if (response?.status === 200 && response?.data.isSuccess) {
      return response?.data?.user;
    }
  } catch (error) {
    console.log(error);
  }
}
