import React, { Suspense } from "react";
import NewMember from "./NewMember";
const MemberList = React.lazy(() => import("./MemberList"));
import ErrorBoundary from "../../components/ErrorBoundary";


const Members = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 p-4">
        <h2 className="text-3xl font-medium text-white tracking-tight">Members</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <MemberList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Members;
