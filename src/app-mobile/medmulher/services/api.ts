import axios, { Axios, AxiosResponse } from "axios"
import { IAddress, IAuth, IBooks, IUser } from "../ui/interfaces";

export const apiBase = axios.create({
    baseURL: " http://10.0.2.2:3000/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getUsers = async () => {
    try {
        const response = await apiBase.get(`users`);

        if(response.status === 200){
            return response.data;
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const deleteUsers = async (id: number) => {
    try {
        const response = await apiBase.delete(`users/${id}`);
        
        if(response.status >= 200 || response.status < 300){
            return "success delete";
        }
    } catch (error) {
        return "failed request";
    }
}

export const postUsers = async (data: IUser) => {
    try {
        const response = await apiBase.post(`users/`, {name: data.name, email: data.email, password: data.password, cpf: data.cpf});
       /* const response: AxiosResponse<IAuth> = await apiBase.post("users/", {
            name,
            email,
            password,
            cpf,
          });
        */
        if(response.status >= 200 || response.status < 300){
            return "success post";
        }
    } catch (error) {
        return "failed request";
    }
}

export const patchUsers = async (id: number, data: {}) => {
    try {
        const response = await apiBase.patch(`users/${id}`, data);
        
        if(response.status >= 200){
            return "success patch";
        }
    } catch (error) {
        return "failed request";
    }
}

export const postLogin = async (data: IAuth) => {
    try {
        const response = await apiBase.post(`users/auth/login`, data);
        
        if(response.status === 200){
            return response;
        }
    } catch (error) {
        return error;
    }
}
