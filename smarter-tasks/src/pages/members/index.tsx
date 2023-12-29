import NewMember from "./NewMember";
import MemberList from "./MemberList";

const Members = () => {
    return (
      <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-medium tracking-tight">Member</h2>
        <NewMember />
      </div>
      <MemberList />
    </>
    )
  }
  export default Members;