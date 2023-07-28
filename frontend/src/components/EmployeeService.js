
import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080";
class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + '/employees');
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + '/employee', employee);
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/employee/' + id)
    }

}

export default new EmployeeService();