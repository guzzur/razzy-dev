import { TOGGLE_MENU, CLOSE_MENU, SCROLLED_Y } from "../actions/ui";

export default {
  showMenu: (state = false, action) => {
    switch (action.type) {
      case TOGGLE_MENU:
        return !state;
      case CLOSE_MENU:
        return false;
      default:
        return state;
    }
  },

  yScrollPercent: (state = 0, action) => {
    switch (action.type) {
      case SCROLLED_Y:
        return action.percent
      default:
        return state;
    }
  }

  // snackbarData: (state = {show: false, type: 'success', text: '' }, action) => {
  //   switch (action.type) {
  //     case SHOW_SNACKBAR:
  //       let data = {text: action.text}
  //       data[action.messageType] = true
  //       return {show: true, ...data};
  //     case HIDE_SNACKBAR:
  //       return {show: false, ...action};
  //     default:
  //       return state;
  //   }
  // },
};
