import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { testimonialService } from "./services";

// create root reducer
const rootReducer = {
  [testimonialService.reducerPath]: testimonialService.reducer,
};

// setup store
const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testimonialService.middleware),
});

export default Store;
setupListeners(Store.dispatch);
