import { ADD, DELETE, THEME, CHANGE_STATUS } from "../action/actionTypes";

const initialState = {
  list: [],
  theme: { bg: "light", variant: "light", name: "Light" },
  themes: [
    { bg: "primary", variant: "dark", name: "Primary" },
    { bg: "secondary", variant: "dark", name: "Secondary" },
    { bg: "success", variant: "dark", name: "Success" },
    { bg: "info", variant: "dark", name: "Info" },
    { bg: "warning", variant: "dark", name: "Warning" },
    { bg: "danger", variant: "dark", name: "Danger" },
    { bg: "light", variant: "light", name: "Light" },
    { bg: "dark", variant: "dark", name: "Dark" },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: state.list.concat(action.value),
      };
    case DELETE:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.value),
      };
    case CHANGE_STATUS:
      return {
        ...state,
        list: state.list.map((item) => {
          if(item.id === action.value) {
            item.isReady = !item.isReady
          }
          return item
        }),
      }
    case THEME:
      return {
        ...state,
        theme: state.themes.find((theme) => theme.bg === action.value),
      };
    default:
      return {
        ...state,
      };
  }
}
