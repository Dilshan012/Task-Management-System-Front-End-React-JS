import axios from "axios";

class TaskService{
    static BASE_URL = "http://localhost:1010"

    static async showTasks(title, description, status){
        try{
            const response = await axios.post(`${TaskService.BASE_URL}/auth/showtasks`, {title, description, status})
            return response.data;

        }catch(err){
            throw err;
        }
    }

    static async createtasks(taskData){
        try{
            const response = await axios.post(`${TaskService.BASE_URL}/auth/createtasks`, taskData)
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getalltasks(){
        try{
            const response = await axios.get(`${TaskService.BASE_URL}/admin/getalltasks`)
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async getTaskById(taskId){
        try{
            const response = await axios.get(`${TaskService.BASE_URL}/admin/gettasks/${taskId}`)
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async deleteTask(taskId){
        try{
            const response = await axios.delete(`${TaskService.BASE_URL}/admin/deleteT/${taskId}`)
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async updateTask(taskId, taskData){
        try{
            const response = await axios.put(`${TaskService.BASE_URL}/admin/updateT/${taskId}`, taskData)
            return response.data;
        }catch(err){
            throw err;
        }
    }

}

export default TaskService;