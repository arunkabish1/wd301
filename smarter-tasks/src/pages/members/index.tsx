import NewMember from "./NewMember";
import MemberList from "./MemberList";

const Members = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 p-4">
        <h2 className="text-3xl font-medium text-white tracking-tight">Members</h2>
        <NewMember />
      </div>
      <div className="bg-gray-100 p-4">
        <MemberList />
      </div>
    </>
  );
};

export default Members;
