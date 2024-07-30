import { useEffect, useRef, useState } from "react";
import UserLoginService from "../../services/UserLoginService";

const AuthenticationLogin = () => {
    const[username, setUsername]=useState();
    const[password, setPassword]=useState();

    const classname = useRef();

    useEffect(()=>{
        classname.userName="form-control";
        classname.password="form-control";
    },[]);

    function fnLogin()
    {
        var authenticationRequest = {"username":"","password":""};
        authenticationRequest.username=username;
        authenticationRequest.password=password;

        UserLoginService.fnLogin(authenticationRequest)
        .then((response)=>{
            console.log(response.data)
            window.location.reload(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return  (
        <div>
          
            <nav class="navbar navbar-expand-lg  fixed-top">
        <div class="container">
          <a class="navbar-brand " href="index.html">Apartment Facility</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Apartment Facility</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active " aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="page.html">Signup</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    <section class="form d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center"> 
                <div class="col-md-6"> 
                    <form onClick={handleLogin} class="p-4 d-flex flex-column  align-items-center"> 
                        <h5 class="mb-4">Welcome to AuthenticationLogin Page!</h5>
                        <input type="text" class="form-control mb-3" placeholder="Username" name="username" required="required"id="userName" className={classname.username} onChange={(event)=>{setUsername(event.target.value)}}/>
                        <input type="password" class="form-control mb-3" placeholder="Password" name="password" required="required" className={classname.password} onChange={(event)=>{setPassword(event.target.value)}} />
                        <input type="submit" class="btn btn-dark mb-3"  value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}


// import { useEffect, useRef, useState } from "react";
// import UserLoginService from "../../services/UserLoginService";

// const AuthenticationLogin = () => {
//     const[username, setUsername]=useState();
//     const[password, setPassword]=useState();

//     const classname = useRef();

//     useEffect(()=>{
//         classname.userName="form-control";
//         classname.password="form-control";
//     },[]);

//     function fnLogin()
//     {
//         var authenticationRequest = {"username":"","password":""};
//         authenticationRequest.username=username;
//         authenticationRequest.password=password;

//         UserLoginService.fnLogin(authenticationRequest)
//         .then((response)=>{
//             console.log(response.data)
//             window.location.reload(false)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }

//     return <div>
//         Username : <input type="text" id="userName" style={{ width: '300px' }} className={classname.username} onChange={(event)=>{setUsername(event.target.value)}} /><br/><br/>
//         Password : <input type="text" id="password" style={{ width: '300px' }} className={classname.password} onChange={(event)=>{setPassword(event.target.value)}} /><br/><br/>
//         <div>
//         <input type="button" className="btn btn-primary" value="Login" onClick={fnLogin} />
//         </div>
//     </div>
// }