import axios from "axios";
import AuthService from "./AuthService";

class ResidentRegistrationService
{
    URL = "http://localhost:8080/v1/resident"

    constructor() {
        this.user = AuthService.getCurrentUser();
        this.token = AuthService.getToken();
        this.role = AuthService.getRole();

        if (!this.token) {
            console.error('No token found');
        } else {
            if (this.role === 'Manager') {
                console.log('Manager Token found : ', this.token);
            } else if (this.role === 'Resident') {
                console.log('Resident Token found : ', this.token);
            }
        }
    }

    fnCreateResident(resident) {
        return axios.post(this.URL+"/register", resident);
    }

    fnDeleteResident(id) {
        return axios.delete(this.URL+"/"+id, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnUpdateResident(id) {
        return axios.put(this.URL+"/"+id, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnGetResidentById(id) {
        return axios.get(this.URL+"/"+id, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnGetAllResidents() {
        return axios.get(this.URL, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    //Delete is not working on giving delete request from local host front end
    
    

}
export default new ResidentRegistrationService();