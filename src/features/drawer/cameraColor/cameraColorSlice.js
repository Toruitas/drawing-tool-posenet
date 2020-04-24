import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'color',
  initialState: {
    color1: [124,124,124,1],
    expression:"neutral",
  },
  reducers: {
    updateColor: (state, action) => {
        let payload = action.payload;

        state.color1 = payload.color;
        state.expression = payload.expression;
    }
  },
});

export const { updateColor } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectColor1 = state => state.color.color1;
export const selectSelectedExpression = state => state.color.expression;

export default slice.reducer;
