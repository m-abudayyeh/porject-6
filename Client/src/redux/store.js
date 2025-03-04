import { configureStore } from "@reduxjs/toolkit"; // استيراد configureStore
import { thunk } from "redux-thunk"; // لا يزال استخدام thunk كما هو
import rootReducer from "./reducers"; // Assuming you have this

const store = configureStore({
  reducer: rootReducer, // تحديد الreducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // إضافة thunk إلى الmiddleware
});

export default store;   