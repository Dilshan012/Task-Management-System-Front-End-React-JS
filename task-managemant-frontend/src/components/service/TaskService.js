import axios from "axios";

class TaskService{
    static BASE_URL = "http://localhost:1010"

    static async showTasks(email, password){
        try{
            const response = await axios.post(`${TaskService.BASE_URL}/auth/show-tasks`, {email, password})
            return response.data;

        }catch(err){
            throw err;
        }
    }

    static async createtasks(taskData, token){
        try{
            const response = await axios.post(`${TaskService.BASE_URL}/auth/createtasks`, taskData, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getAllTasks(token){
        try{
            const response = await axios.get(`${TaskService.BASE_URL}/admin/get-all-tasks`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async getTaskById(taskId, token){
        try{
            const response = await axios.get(`${TaskService.BASE_URL}/admin/get-tasks/${taskId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async deleteTask(taskId, token){
        try{
            const response = await axios.delete(`${TaskService.BASE_URL}/admin/delete/${taskId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async updateTask(taskId, taskData, token){
        try{
            const response = await axios.put(`${TaskService.BASE_URL}/admin/update/${taskId}`, taskData,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

}

export default TaskService;