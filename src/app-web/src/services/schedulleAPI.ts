import { apiBase } from "./api";

export const getSchedulles = async () => {
    try {
        const response = await apiBase.get("consultations/");
        if (response.status === 200) {
            return response.data;
          }
    } catch (error) {
        return { message: "Não foi possível localizar os agendamentos."}
    }
}

export const updateSchedulle = async (id: string, data: {}) => {
    try {
        const response = await apiBase.patch(`/consultations/${id}`, data);
    
        if (response.status === 200) {
          return true;
        }
      } catch (error) {
        return false;
      }
};

export const deleteSchedulle = async (id: string) => {
  try {
    const response = await apiBase.delete(`/consultations/${id}`);

    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
