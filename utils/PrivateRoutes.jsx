import { createSlice } from "@reduxjs/toolkit";

export const greetingSlice = createSlice({
  name: "greeting",
  initialState: {
    currentTime: new Date().getHours(),
    greeting_time:
      new Date().getHours() < 12
        ? "Good Morning"
        : new Date().getHours() < 18
        ? "Good Afternoon"
        : "Good Evening", // Update greeting directly in state
  },
  reducers: {
  },
});

export const { setTime } = greetingSlice.actions;
export default greetingSlice.reducer;