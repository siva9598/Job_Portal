import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Features/UserSlice";
import { recuiterSlice } from "./Features/RecuiterSlice";
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    recuiter: recuiterSlice.reducer,
  },
});
