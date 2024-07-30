import { useEffect, useState } from "react";
import FacilityService from "../../services/FacilityService";

const FacilityGrid=()=>{

    const [facility, setFacility]=useState([]);
    const [id, setId]=useState();

    //we need a life cycle hook to call that service
    useEffect(()=>{
        //call service here
        FacilityService.fnGetAllFacilities()
        .then((response)=>{
            setFacility(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

    const deleteFacility = (id) => {
        FacilityService.fnDeleteFacility(id)
            .then(response => {
                setFacility(prevFacility =>
                    prevFacility.filter(facility => facility.id !== id)
                );
            })
            .catch(error => {
                console.error("There was an error deleting the resident!", error);
            });
    };

    return <div>
    <table className="styled-table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Description</th>
                <th>Picture</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                facility.map((f)=>
                    <tr key={f.id}>
                        <td>{f.id}</td>
                        <td>{f.name}</td>
                        <td>{f.status}</td>
                        <td>{f.description}</td>
                        <td>{f.picture}</td>
                        <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteFacility(f.id)}
                        >
                            Delete
                        </button>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </div>
}
export default FacilityGrid;