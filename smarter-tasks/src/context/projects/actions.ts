import { API_ENDPOINT } from "../../config/constants";
console.log("API_ENDPOINT:", API_ENDPOINT);
export const fetchProjects = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") || "";

  try {
    dispatch({ type: "FETCH_PROJECTS_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log("Error:", response.statusText);
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    dispatch({ type: "FETCH_PROJECTS_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error while fetching the projects:", error);
    dispatch({
      type: "FETCH_PROJECTS_FAILURE",
      payload: "Unable to load the projects data", 
    });
  }
};

export const addProject = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") || "";
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      throw new Error(`Failed to add project:  ${data.errors[0].message}`);
    }
    dispatch({ type: "ADD_PROJECT_SUCCESS", payload: data });
    return { ok: true };
  } catch (error) {
    console.error("Error adding project:", error);
    return { ok: false, error: "Unable to add the project" };
  }
};
