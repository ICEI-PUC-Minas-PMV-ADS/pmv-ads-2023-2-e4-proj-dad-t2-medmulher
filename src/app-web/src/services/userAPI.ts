import { apiBase } from "./api";

export const login = async (email: string, password: string) => {
  try {
    const response = await apiBase.post("users/auth/login", {
      email,
      password,
    });

    if (response.status === 201) {
      console.log(response);
      response.data;
    }
  } catch (err) {
    return err;
  }
};


export const getUsers = async () => {
  try {
    const response = await apiBase.get("users/");
    console.log(response)
    if (response.status === 200) {
      response.data;
    }
  } catch (err) {
    return err;
  }
};
