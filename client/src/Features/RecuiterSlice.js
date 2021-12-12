export const createRecuiter = createAsyncThunk(
  "recuiters/createRecuiter",
  async ({ company_name, company_email }, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/create_recuiter",
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_name,
            company_email,
          }),
        }
      );
      console.log("data", response);
      let data = response.json();
      console.log("data", data);
      console.log("hlllo");
      if (response.status === 201) {
        console.log("201");
        // localStorage.setItem("token", data.token);
        return { ...data };
      } else {
        console.log("rejected");
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const recuiterSlice = createSlice({
  name: "recuiter",
  initialState: {
    id: null,
    company_name: "",
    company_email: false,
    isVerified: false,
    isError: false,
    isFetching: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [createRecuiter.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      //   state.email = payload.user.email;
      //   state.username = payload.user.username;
    },
    [createRecuiter.pending]: (state) => {
      console.log("pending");
      state.isFetching = true;
    },
    [createRecuiter.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});
