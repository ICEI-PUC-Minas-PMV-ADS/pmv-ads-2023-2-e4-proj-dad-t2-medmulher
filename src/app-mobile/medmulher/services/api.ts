import axios, { Axios, AxiosResponse } from "axios"
import { IAddress, IBooks, IUser } from "../ui/interfaces";

export const apiBase = axios.create({
    // baseURL: " http:// 192.168.0.104:3000/"
    baseURL: " http://localhost:3000//"
    // baseURL: " http://192.168.1.2:3000/"
})

export const getUsers = async () => {
    try {
        const response = await apiBase.get(`Users`);
        
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

export const postLogin = async (data: IUser) => {
    try {
        const response = await apiBase.post(`login`, data);
        
        if(response.status >= 200 || response.status < 300){
            return "success post";
        }
    } catch (error) {
        return "failed request";
    }
}

export const getBooks = async () => {
    try {
        const response = await apiBase.get(`books`);
        
        if(response.status === 200){
            return response.data;
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const postBooks = async (data: IBooks) => {
    try {
        const response = await apiBase.post(`books`, data);
        
        if(response.status >= 200 || response.status < 300){
            return true;
        }
    } catch (error) {
        alert(error);
        return false;
    }
}

export const putBooks = async (id: number, data: {}) => {
    try {
        const response = await apiBase.patch(`books/${id}`, data);
        
        if(response.status >= 200){
            return "success patch";
        }
    } catch (error) {
        return "failed request";
    }
}

export const deleteBooks = async (id: number) => {
    try {
        const response = await apiBase.delete(`books/${id}`);
        
        if(response.status >= 200){
            return "success delete";
        }
    } catch (error) {
        return "failed request";
    }
}