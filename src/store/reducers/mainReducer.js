import {
  SET_DATA,
  SET_SERVANT,
  SET_TABLE,
  SET_FOOD,
  SET_FOOD_COUNT,
  SET_ROW,
  SET_INITIAL,
} from "../actions/actionTypes";

const initialState = {
  menu: [],
  orders: [],
  ordersSum: 0,
  ordersCount: 0,
  selectedServant: "",
  selectedTable: "",
  selectedFood: null,
  foodCount: 0,
};

const setData = (state, action) => {
  const newOrdersSum = action.orders.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
  return {
    ...state,
    orders: action.orders,
    menu: action.menu,
    ordersSum: newOrdersSum,
    ordersCount: action.orders.length,
  };
};
const setRow = (state, action) => {
  return {
    ...state,
    orders: [...state.orders, action],
    ordersSum: state.ordersSum + action.amount,
    ordersCount: state.ordersCount + 1,
  };
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return setData(state, action.payload);
    case SET_SERVANT:
      return { ...state, selectedServant: action.payload };
    case SET_TABLE:
      return { ...state, selectedTable: action.payload };
    case SET_FOOD:
      return { ...state, selectedFood: action.payload };
    case SET_FOOD_COUNT:
      return { ...state, foodCount: action.payload };
    case SET_INITIAL:
      return {
        ...state,
        selectedServant: "",
        selectedTable: "",
        selectedFood: null,
        foodCount: 0,
      };
    case SET_ROW:
      return setRow(state, action.payload);

    default:
      return state;
  }
}

export default mainReducer;
