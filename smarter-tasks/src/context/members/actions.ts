import { API_ENDPOINT } from "../../config/constants";
export const fetchUsers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error while fetching the users:", error);
    dispatch({
      type: "FETCH_USERS_FAILURE",
      payload: "Unable to load users",
    });
  }
};
export const addUser = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error("Failed to creating the user");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }
    dispatch({ type: "ADD_USER_SUCCESS", payload: data.user });
    return { ok: true };
  } catch (error) {
    console.error("Operation is failed :", error);
    return { ok: false, error };
  }
};

export const deleteUser = async (dispatch: any, id: number) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({ type: "DELETE_USER_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete the user");
    }

    dispatch({ type: "DELETE_USER_SUCCESS", payload: id });
    return {
       ok: true };
  }
   catch (error) {
    console.error("Operation failed:", error);
    return { ok: false, error };
  }

};