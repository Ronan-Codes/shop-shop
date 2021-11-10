// import React, { createContext, useContext } from "react";
// // instantiate a new Context object. Create the container to hold our global state data and 
//     // functionality so we can provide it throughout our app!

// import { useProductReducer } from "./reducers";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props}) => {
//     const [state, dispatch] = useProductReducer({
//         products: [],
//         categories: [],
//         currentCategory: '',
//         cart: [],
//         cartOpen: false
//     });
//     // use this to confirm it works!
//     console.log(state);
//     return <Provider value={[state, dispatch]} {...props} />
// }

// const useStoreContext = () => {
//     return useContext(StoreContext)
// }
// // Created our own custom React Hook. This means that any component that has access to our 
//     // StoreProvider component can use any data in our global state container or update it 
//     // using the dispatch function. 

// export { StoreProvider, useStoreContext };