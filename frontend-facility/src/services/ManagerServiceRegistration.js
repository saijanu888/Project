import axios from "axios";
import AuthService from "./AuthService";

class ManagerServiceRegistration
{
    URL = "http://localhost:8080/v1/manager";
    RESIDENT_URL = "http://localhost:8080/v1/resident";

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

    createManager(manager)
    {
        return axios.post(this.URL+"/register",manager);
    }
    
    updateManager(id)
    {
        if (this.role === 'Resident') {
            console.error("Only a Manager can update a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.put(this.URL+"/"+id, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    }

    getManager()
    {
        if (this.role === 'Resident') {
            console.error("Only a Manager can update a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.get(this.URL, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    }
    
    approveResident(username) {
        if (this.role === 'Resident') {
            console.error("Only a Manager can update a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.put(this.URL + "/approve-signup/" + username, {}, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    }

    declineResident(username) {
        if (this.role === 'Resident') {
            console.error("Only a Manager can update a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.put(this.URL + "/approve-signup/decline/" + username, {}, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    }

    getAllResidents() {
        return axios.get(this.RESIDENT_URL, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    deleteResident(id)
    {
        return axios.delete(this.RESIDENT_URL+"/"+id, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })
    }
}
export default new ManagerServiceRegistration();