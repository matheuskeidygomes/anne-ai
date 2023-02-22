import api from "./api";

export async function callAnne(message: string): Promise<string> {
    try {
        const response = await api.post("/", { message });
        return response.data;
    } catch (error: any) {
        return error.message;
    } 
}

