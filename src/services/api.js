import axios from "axios";

const api = axios.create({
  baseURL: "https://678864de2c874e66b7d51094.mockapi.io/planner/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

async function request(endpoint, method = "GET", data = null) {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(
      `Erro ao fazer requisição ${method} para ${endpoint}:`,
      error
    );
    throw error;
  }
}

export default request;
