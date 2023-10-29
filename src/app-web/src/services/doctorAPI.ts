import { AxiosResponse } from "axios";
import { apiBase } from "./api";

interface Doctor {
  _id: string;
  name: string;
  specialty: string;
}

export const getDoctors = async (): Promise<Doctor[]> => {
  try {
    const response: AxiosResponse<Doctor[]> = await apiBase.get('/doctors/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar médicos:', error);
    throw error;
  }
};

export const getDoctorID = async (id: string) => {
    try {
        const response = await apiBase.get(`doctors/${id}`);

        if(response.status === 200){
            return response.data;
        }
    } catch (err) {
        return { message: "Doutor não encontrado!" };
    }
}

export const deleteDoctor = async (id: string) => {
  try {
    const response = await apiBase.delete(`/doctors/${id}`);
    return response;
  } catch (error) {
    return { message: 'Erro ao deletar médico:', error};
  }
};