
import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const ResidentLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        AuthService.login(username, password, 'Resident')
            .then(response => {
                console.log('Resident logged in:', response);
            })
            .catch(error => {
                console.error('Login error:', error);
            });
    };

    return (
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
                <form  onSubmit={handleLogin} class="p-4 d-flex flex-column  align-items-center"> 
                    <h5 class="mb-4">Welcome to Resident Login!</h5>
                    <input type="text" class="form-control mb-3" placeholder="Username" name="username" required="required"value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" class="form-control mb-3" placeholder="Password" name="password" required="required"value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" class="btn btn-dark mb-3"  value="Login"/>
                </form>
            </div>
        </div>
    </div>
</section>
    </div>
    );
};

export default ResidentLogin;



// import React, { useState } from 'react';
// import AuthService from '../../services/AuthService';

// const ResidentLogin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         AuthService.login(username, password, 'Resident')
//             .then(response => {
//                 console.log('Resident logged in:', response);
//             })
//             .catch(error => {
//                 console.error('Login error:', error);
//             });
//     };

//     return (
//         <div>
//             <h2>Resident Login</h2>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// };

// export default ResidentLogin;
