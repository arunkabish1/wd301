import { Reducer } from "react";
import {
  CommentActions,
  CommentListState,
  CommentAvailableAction,
} from "./types";
export const initialCommentState: CommentListState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentListState, CommentActions> = (
  state = initialCommentState,
  action
) => {
  switch (action.type) {
    case CommentAvailableAction.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentAvailableAction.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, comments: action.payload };
    case CommentAvailableAction.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case CommentAvailableAction.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentAvailableAction.CREATE_COMMENT_SUCCESS:
      return { ...state, isLoading: false ,comments: [action.payload, ...state.comments],};
    case CommentAvailableAction.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
