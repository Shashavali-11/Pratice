// import React from 'react'
// import Home from './Home';
// // import { Navigate, useNavigate } from 'react-router-dom';

// const Login = () => {
//     // const Navigate = useNavigate();

//     const handleLogin = (event) => {
//         // Handle login logic here
//         event.preventDefault();
//         const email = event.target.email.value; 
//         const password = event.target.password.value;
//         // Storing the email and password in local storage

//         if(email === '' || password === '') {
//             alert("Please fill in all fields");
//             return;
//         }else {
//             alert("Login successful");
//             localStorage.setItem("email", email);
//             localStorage.setItem("password", password);

//             // Navigate("/home");



            

//         }


//         console.log("Email : ", email);
//         console.log("Password : ", password);




//     }       


//   return (
//     <>
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={handleLogin} >
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input type="email" id="email" name="email" required />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" required />
//                 </div>
//                 <button type="submit" >Login</button>
//             </form>

//         </div>
      
//     </>
//   )
// }

// export default Login







// import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

// const Login = () => {
// //   const navigate = useNavigate();

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;

//     if (email === '' || password === '') {
//       alert("Please fill in all fields");
//       return;
//     } else {
//       alert("Login successful");
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);

//       // Navigate to Home
//     //   navigate('/home');
//         <Navigate to="/home" />; 
//     }

//     console.log("Email : ", email);
//     console.log("Password : ", password);
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;









import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    } else {
      alert('Login successful');
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      console.log('Email:', email);
      console.log('Password:', password);

      // Navigate to home page
      navigate('/home');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
