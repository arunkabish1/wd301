import React, { forwardRef } from "react";


const TaskList = forwardRef<HTMLDivElement | null, React.PropsWithChildren>(
  (props: React.PropsWithChildren, ref) => {
    return (
      <div ref={ref} className="grow min-h-100 dropArea" {...props}>
        {" "}
        {props.children}
      </div>
    );
  }
);

export default TaskList;
