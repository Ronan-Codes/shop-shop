export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// The end goal here is to store the data retrieved for products by Apollo in this global state. 
// This way, we can add offline capabilities later and persist our product data!

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
// connecting data from previous 2 actions. select a category from the state created by the 
    // UPDATE_CATEGORIES action and display products for that category from the list we create from the UPDATE_PRODUCTS action.