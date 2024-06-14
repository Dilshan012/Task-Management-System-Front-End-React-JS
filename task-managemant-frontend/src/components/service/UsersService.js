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


    static async getAllUsers(token) {
        try{
            const response = await axios.get(`${UserService.BASE_URL}/admin/get-all-users`,{
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

    static async getYourProfile(token) {
        try{
            const response = await axios.get(`${UserService.BASE_URL}/adminuser/get-profile`,{
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

    static async getUserById(userId, token) {
        try{
            const response = await axios.get(`${UserService.BASE_URL}/admin/get-user/${userId}`,{
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

    static async deleteUser(userId, token) {
        try{
            const response = await axios.delete(`${UserService.BASE_URL}/admin/delete/${userId}`,{
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

    static async updateUser(userId, userData, token) {
        try{
            const response = await axios.delete(`${UserService.BASE_URL}/admin/update/${userId}`,{
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

    /**AUTHENTIFICATION CHECKER */
    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        return localStorage.getItem('token') !== null
    } 
}