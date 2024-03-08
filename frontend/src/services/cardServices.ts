import { api } from "./api";

export const getCards = async (limit: number, offset: number) => {
  try {
    const response = api.get(`/streaming?limit=${limit}&offset=${offset}`);
    return response;
  } catch (error) {
    throw new Error("Streamings não encontrados");
  }
};

export const getCardsTitle = async (query: any) => {
  try {
    const response = await api.get(
      `http://localhost:8080/streaming/title?title=${query}`
    );
    return response;
  } catch (error) {
    throw new Error("Erro ao buscar os cards");
  }
};
