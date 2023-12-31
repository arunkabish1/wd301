import React, { createContext, useContext, useReducer } from "react";
import { CommentListState, CommentActions } from "./types";
import { commentReducer, initialCommentState } from "./reducer";

const CommentStateContext =
  createContext<CommentListState>(initialCommentState);
const CommentDispatchContext = createContext<React.Dispatch<CommentActions>>(
  () => {}
);

export const CommentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(commentReducer, initialCommentState);

  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>

        {children}
      
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};

export const useCommentState = () => useContext(CommentStateContext);

export const useCommentDispatch = () => useContext(CommentDispatchContext);