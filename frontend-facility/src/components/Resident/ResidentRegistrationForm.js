import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResidentRegistrationService from "../../services/ResidentRegistrationService";

const ResidentRegistrationForm = () => {
 const [id, setId] = useState("");
 const [userName, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [status, setStatus] = useState("");
 const [name, setName] = useState("");
 const [flatNo, setFlatNo] = useState("");
 const [flatType, setFlatType] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [picture, setPicture] = useState("");
 const [ResidentData, setResidentData] = useState();
 const navigation = useNavigate();

 const inputClassName = "form-control mb-3";

 function fnCreate() {
  const resident = {
   userName,
   password,
   role: "Resident",
   status,
   name,
   flatNo,
   flatType,
   phone,
   email,
   picture,
  };

  //   const loadFacilityData = () => {
  //     FacilityService.fnGetFacilityById(id)
  //      .then((response) => {
  //       const facility = response.data;
  //       setFacilityData(facility);
  //       setName(facility.name);
  //       setStatus(facility.status);
  //       setDescription(facility.description);
  //       setPicture(facility.picture);
  //      })
  //      .catch((error) => {
  //       console.error("Error loading facility data:", error);
  //      });
  //    };

  // const loadResidentData = () => {
  //     ResidentRegistrationService.fnGetResidentById(id)
  //     .then((response)=> {
  //        const resident =  response.data;
  //        setResidentData(resident);

  //     })

  // }

  ResidentRegistrationService.fnCreateResident(resident)
   .then((response) => {
    console.log(response.data);
    navigation("/residentcreationmessage");
    // window.location.reload(false);
   })
   .catch((error) => {
    console.log(error);
   });
 }

 function fnUpdate() {
  const resident = {
   id,
   userName,
   password,
   role: "Resident",
   status,
   name,
   flatNo,
   flatType,
   phone,
   email,
   picture,
  };

  ResidentRegistrationService.fnUpdateResident(id)
   .then((response) => {
    console.log(response.data);
    navigation("/residentupdatemessage");
    // window.location.reload(false);
   })
   .catch((error) => {
    console.log(error);
   });
 }

 function fnDelete() {
  ResidentRegistrationService.fnDeleteResident(id)
   .then((response) => {
    console.log("response data delete is running");
    navigation("/register-resident");
    console.log(response.data);
   })
   .catch((error) => {
    console.log(error);
   });
 }

 return (
  <div>
   <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
     <a className="navbar-brand" href="index.html">
      Apartment Facility
     </a>
     <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
     >
      <span className="navbar-toggler-icon"></span>
     </button>
     <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
     >
      <div className="offcanvas-header">
       <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
        Apartment Facility
       </h5>
       <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
       ></button>
      </div>
      <div className="offcanvas-body">
       <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="index.html">
          Home
         </a>
        </li>
        <li className="nav-item">
         <a className="nav-link" href="page.html">
          Signup
         </a>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </nav>

   <section className="form d-flex align-items-center justify-content-center mt-5">
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-md-6">
       <form className="p-4">
        <h2>Create account</h2>
        <h5 className="mb-4">Welcome to Resident Signup!</h5>
        <input
         type="text"
         className={inputClassName}
         placeholder="Id"
         name="Id"
         id="id"
         onChange={(event) => setId(event.target.value)}
        />
        <input
         type="text"
         className={inputClassName}
         placeholder="Username"
         name="username"
         id="userName"
         onChange={(event) => setUsername(event.target.value)}
        />
        <input
         type="password"
         className={inputClassName}
         placeholder="Password"
         name="password"
         id="password"
         onChange={(event) => setPassword(event.target.value)}
        />
        <input
         type="text"
         className={inputClassName}
         placeholder="Name"
         name="name"
         id="name"
         onChange={(event) => setName(event.target.value)}
        />
        <input
         type="text"
         className={inputClassName}
         placeholder="Flat No"
         name="Flat No"
         id="flatNo"
         onChange={(event) => setFlatNo(event.target.value)}
        />
        <input
         type="text"
         className={inputClassName}
         placeholder="Flat Type"
         name="Flat Type"
         id="flatType"
         onChange={(event) => setFlatType(event.target.value)}
        />
        <input
         type="text"
         className={inputClassName}
         placeholder="Phone"
         name="Phone"
         id="phone"
         onChange={(event) => setPhone(event.target.value)}
        />
        <input
         type="text"
         className={inputClassName}
         placeholder="Email"
         name="email"
         id="email"
         onChange={(event) => setEmail(event.target.value)}
        />
        <input
         type="text"
         className={inputClassName}
         placeholder="Picture Link"
         name="Picture Link"
         id="picture"
         onChange={(event) => setPicture(event.target.value)}
        />
        <input
         type="button"
         className="btn btn-dark mb-3 me-3"
         value="Create Resident"
         onClick={fnCreate}
        />
        <input
         type="button"
         className="btn btn-dark mb-3 me-3"
         value="Update Resident"
         onClick={fnUpdate}
        />
        <input
         type="button"
         className="btn btn-dark mb-3"
         value="Delete Resident"
         onClick={fnDelete}
        />
       </form>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};

export default ResidentRegistrationForm;



// import { useEffect, useRef, useState } from "react";
// import ResidentRegistrationService from "../../services/ResidentRegistrationService";
// import ResidentGrid from "./ResidentGrid";

// const ResidentRegistrationForm = () => {
//     const[id, setId]=useState("");
//     const[userName, setUsername]=useState("");
//     const[password, setPassword]=useState("");
//     const[status, setStatus]=useState("");
//     const[name, setName]=useState("");
//     const[flatNo, setFlatNo]=useState("");
//     const[flatType , setFlatType]=useState("");
//     const[phone, setPhone]=useState("");
//     const[email, setEmail]=useState("");
//     const[picture, setPicture]=useState("");
//     const[residentData, setResidentData]=useState({});

//     const classname = useRef();

//     useEffect (() => {
//         classname.id="form-control";
//         classname.userName="form-control";
//         classname.password="form-control";
//         classname.status="form-control";
//         classname.name="form-control";
//         classname.flatNo="form-control";
//         classname.flatType="form-control";
//         classname.phone="form-control";
//         classname.email="form-control";
//         classname.picture="form-control";
//     },[]);

//     function fnCreate()
//     {
//         var resident = {"userName":"","password":"","role":"Resident","status":"","name":"","flatNo":"","flatType":"","phone":"","email":"","picture":""};
//         resident.userName=userName;
//         resident.password=password;
//         resident.status=status;
//         resident.name=name;
//         resident.flatNo=flatNo;
//         resident.flatType=flatType;
//         resident.phone=phone;
//         resident.email=email;
//         resident.picture=picture;

//         ResidentRegistrationService.fnCreateResident(resident)
//         .then((response)=>{
//             console.log(response.data)
//             window.location.reload(false)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }

//     const fnUpdate = () => {
//         const updatedResident = {};

//         if (name) updatedResident.name = name;
//         if (status) updatedResident.status = status;
//         if (flatNo) updatedResident.flatNo = flatNo;
//         if (flatType) updatedResident.flatType = flatType;
//         if (phone) updatedResident.phone = phone;
//         if (email) updatedResident.email = email;
//         if (picture) updatedResident.picture = picture;

//         ResidentRegistrationService.fnUpdateResident(id, updatedResident)
//             .then((response) => {
//                 console.log('Facility updated:', response.data);
//             })
//             .catch((error) => {
//                 console.error('Error updating facility:', error);
//             });
//     };

//     const loadResidentData = () => {
//         ResidentRegistrationService.fnGetResidentById(id)
//             .then(response => {
//                 const resident = response.data;
//                 setResidentData(resident);
//                 setName(resident.name);
//                 setStatus(resident.status);
//                 setFlatNo(resident.flatNo);
//                 setFlatType(resident.flatType);
//                 setPhone(resident.phone);
//                 setEmail(resident.email);
//                 setPicture(resident.picture);
//             })
//             .catch(error => {
//                 console.error('Error loading facility data:', error);
//             });
//     };

//     function fnDelete()
//     {
//         ResidentRegistrationService.fnDeleteResident(id)
//         .then((response)=>{
//             console.log("response data delete is running");
//             console.log(response.data)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }

//     return <div>
//         <h1>Resident Registration</h1>
//         ID       : <input type="number" id="id" style={{ width: '300px' }} className={classname.id} onChange={(event)=>{setId(event.target.value)}} /><br/><br/>
//         {/* <button onClick={loadResidentData}>Load Resident Data</button> <br /><br /><br /> */}
//         Username : <input type="text" id="userName" style={{ width: '300px' }} className={classname.userName} onChange={(event)=>{setUsername(event.target.value)}} /><br/><br/>
//         Password : <input type="text" id="password" style={{ width: '300px' }} className={classname.password} onChange={(event)=>{setPassword(event.target.value)}} /><br/><br/>
//         Name     : <input type="text" id="name" style={{ width: '300px' }} className={classname.name} onChange={(event)=>{setName(event.target.value)}} /><br/><br/>
//         Flat No  : <input type="text" id="flatNo" style={{ width: '300px' }} className={classname.flatNo} onChange={(event)=>{setFlatNo(event.target.value)}} /><br/><br/>
//         Flat Type: <input type="text" id="flatType" style={{ width: '300px' }} className={classname.flatType} onChange={(event)=>{setFlatType(event.target.value)}} /><br/><br/>
//         Phone    : <input type="number" id="phone" style={{ width: '300px' }} className={classname.phone} onChange={(event)=>{setPhone(event.target.value)}} /><br/><br/>
//         Email    : <input type="text" id="email" style={{ width: '300px' }} className={classname.email} onChange={(event)=>{setEmail(event.target.value)}} /><br/><br/>
//         Picture  : <input type="text" id="picture" style={{ width: '300px' }} className={classname.picture} onChange={(event)=>{setPicture(event.target.value)}} /><br/><br/>
//         <div>
//             <input type="button" className="btn btn-primary" value="Create Resident" onClick={fnCreate} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input type="button" className="btn btn-secondary" value="Update Resident" onClick={fnUpdate} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input type="button" className="btn btn-danger" value="Delete Resident" onClick={fnDelete} />
//         </div>
//         <div>
//             <br/><br/><br/>
//             <ResidentGrid />
//         </div>
//     </div>
// }
// export default ResidentRegistrationForm;
