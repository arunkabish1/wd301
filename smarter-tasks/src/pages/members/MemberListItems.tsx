import { useUsersState } from "../../context/members/context";
import { deleteUser } from "../../context/members/actions";
import { useUsersDispatch } from "../../context/members/context";

export default function MemberListItems() {
  let state: any = useUsersState();
  const dispatchUsers = useUsersDispatch();
  const handleDelete = (id: number) => {deleteUser(dispatchUsers, id);};
  const { users, isLoading, isError, errorMessage } = state;
  console.log(users);

  if (users.length === 0 && isLoading) {
    return <span>Loading</span>;
  }

  if (isError) {
    
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {users.map((user: any) => (
        <div
          key={user.id} id="member"
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5
            className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white"
            
          >
            {user.name}
          </h5>
          <p className="text-gray-600 dark:text-gray-400" >
            Email: {user.email}
          </p>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(user.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path d="M3 3H21V5H3z"></path>
              <path d="M16.1,22H7.9c-1,0-1.9-0.7-2-1.7L4,4.1l2-0.2L7.9,20l8.2,0L18,3.9l2,0.2l-1.9,16.1C18,21.3,17.1,22,16.1,22z"></path>
              <path
                d="M5,4l1.9,16.1c0.1,0.5,0.5,0.9,1,0.9h8.2 c0.5,0,0.9-0.4,1-0.9L19,4H5z"
                opacity=".3"
              ></path>
              <path d="M15 3L15 4 9 4 9 3 10 2 14 2z"></path>
            </svg>
          </button>
        </div>
      ))}
    </>
  );
}