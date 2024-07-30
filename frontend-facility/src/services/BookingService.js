import axios from "axios";
import AuthService from "./AuthService";

class BookingService {
    URl = "http://localhost:8080/v1/booking";
    facilityUrl = "http://localhost:8080/v1/facility/status";

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

    fnCreateBooking(booking) {
        return axios.post(this.URl + "/create", booking, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnGetAllBooking() {
        return axios.get(this.URl, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnGetBookingById(id) {
        return axios.get(this.URl + "/byid/" + id, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnApproveOrRejectBooking(id, isApproved) {
        return axios.put(`${this.URl}/${id}/approveOrReject/${isApproved}`, {}, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnCancelBooking(id) {
        return axios.put(`${this.URl}/cancel/${id}`, {}, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnUpdateFacilityStatus(facilityId, status) {
        return axios.put(`${this.facilityUrl}/${facilityId}`, { status: status }, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }
}
export default new BookingService();
