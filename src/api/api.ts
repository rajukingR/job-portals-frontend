import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/sign-in`, {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data.message : "API error";
  }
};

////
