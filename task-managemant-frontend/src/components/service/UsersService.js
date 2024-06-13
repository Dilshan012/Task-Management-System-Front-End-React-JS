import axios from 'axios';

class UsersService {
    static BASE_URL = 'http://localhost:1010'

    static async login(email, password) {
        try{
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {email, password});
            return response.data;
        }
        catch(err){
            throw err;
        }

    }

    static async register(userData, token) {
        try{
            const response = await axios.post(`${UserService.BASE_URL}/admin/register`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        }
        catch(err){
            throw err;
        }

    }


    static async getAllUsers(userData, token) {
        try{
            const response = await axios.post(`${UserService.BASE_URL}/admin/get-all-users`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        }
        catch(err){
            throw err;
        }

    }


}