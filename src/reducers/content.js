import * as contentActions from "../actions/content";

const defaultState = {
  fetching: false,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case contentActions.CONTENT_LOADED: {
      const {content, type, uid} = action.payload;
      if (!uid) {
        return {
          ...state,
          [type]: {
            content: content
          },
          fetching: false,
        }
      }
      else {
        const typeState = {...(state[type] || {})};
        const newTypeState = {
          ...typeState,
          content: {
            ...typeState.content || {},
            [uid]: content
          }
        };
        return {
          ...state,
          [type]: newTypeState,
          fetching: false,
        };
      }
    }
      break;
    case contentActions.CONTENT_SET_PAGE: {
      const {type} = action.payload;
      return {
        ...state,
        [type]: {
          ...state[type],
          page: action.payload.page,
        }
      };
    }
      break;
    case contentActions.CONTENT_FETCHING: {
      return {
        ...state,
        fetching: action.payload.status,
      };
    }
      break;
    default:
      return state;
  }
};