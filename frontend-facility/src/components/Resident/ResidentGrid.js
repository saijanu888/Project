import { useEffect, useState } from "react";
import ManagerServiceRegistration from "../../services/ManagerServiceRegistration";

const ResidentGrid = () => {
    const [residents, setResidents] = useState([]);
    const [id, setId]=useState();

    useEffect(() => {
        ManagerServiceRegistration.getAllResidents()
            .then(response => {
                setResidents(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the resident data!", error);
            });
    }, []);

    const updateStatus = (userName) => {
        ManagerServiceRegistration.approveResident(userName)
            .then(response => {
                setResidents(prevResidents => 
                    prevResidents.map(resident => 
                        resident.userName === userName ? { ...resident, status: "Approved" } : resident
                    )
                );
            })
            .catch(error => {
                console.error("There was an error approving the resident status!", error);
            });
    };

    const deleteStatus = (userName) => {
        ManagerServiceRegistration.declineResident(userName)
            .then(response => {
                setResidents(prevResidents => 
                    prevResidents.map(resident => 
                        resident.userName === userName ? { ...resident, status: "Declined" } : resident
                    )
                );
            })
            .catch(error => {
                console.error("There was an error approving the resident status!", error);
            });
    };

    const deleteResident = (id) => {
        ManagerServiceRegistration.deleteResident(id)
            .then(response => {
                setResidents(prevResidents =>
                    prevResidents.filter(resident => resident.id !== id)
                );
            })
            .catch(error => {
                console.error("There was an error deleting the resident!", error);
            });
    };

    return (
        <div>
            <h1>Residents List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Flat No</th>
                        <th>Flat Type</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Picture</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {residents.map(resident => (
                        <tr key={resident.id}>
                            <td>{resident.id}</td>
                            <td>{resident.userName}</td>
                            <td>{resident.status}</td>
                            <td>{resident.name}</td>
                            <td>{resident.flatNo}</td>
                            <td>{resident.flatType}</td>
                            <td>{resident.phone}</td>
                            <td>{resident.email}</td>
                            <td>{resident.picture}</td>
                            <td>
                                <button
                                    className="btn btn-success"
                                    onClick={() => updateStatus(resident.userName)}
                                    disabled={resident.status === "Active"}
                                >
                                    Approve
                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteStatus(resident.userName, false)}
                                    disabled={resident.status === "Declined"}
                                >
                                    Decline
                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteResident(resident.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ResidentGrid;
