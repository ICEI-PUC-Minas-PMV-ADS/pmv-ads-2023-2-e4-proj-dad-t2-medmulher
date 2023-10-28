import { apiBase } from "./api"

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