// import React, { useState } from 'react';


// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const { user, token } = await response.json();

//         // Save user data and token to local storage or state
//         localStorage.setItem('user', JSON.stringify(user));
//         localStorage.setItem('token', token);

//         // Redirect or update UI as needed after successful login
//         window.location.href = '/'; // Redirect to the homepage
//       } else {
//         // Authentication failed
//         const errorMessage = await response.json();
//         setError(errorMessage.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('An unexpected error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form>
//           <div className="user-box">
//             <input
//               type="text"
//               name="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label>Email</label>
//           </div>
//           <div className="user-box">
//             <input
//               type="password"
//               name="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <label>Password</label>
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <button type="button" onClick={handleLogin}>
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// AuthenticationPage.js



// AuthenticationPage.js

import React, { useState } from 'react';
import './css/Login.css'; // Import your CSS file for styling


const RegisterPage = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { user, token } = await response.json();

        // Save user data and token to local storage or state
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);

        // Redirect or update UI as needed after successful registration
        window.location.href = '/'; // Redirect to the homepage
      } else {
        // Registration failed
        const errorMessage = await response.json();
        setError(errorMessage.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="popup-content">
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="button" onClick={handleRegister} className="btn btn-primary">
        Register
      </button>
      <p className="login-link">Already have an account? <a href="#" onClick={switchToLogin}>Login</a></p>
    </div>
  );
};

const LoginPage = ({ switchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { user, token } = await response.json();

        // Save user data and token to local storage or state
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);

        // Redirect or update UI as needed after successful login
        window.location.href = '/'; // Redirect to the homepage
      } else {
        // Authentication failed
        const errorMessage = await response.json();
        setError(errorMessage.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="popup-content">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="button" onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
      <p className="register-link">Don't have an account? <a href="#" onClick={switchToRegister}>Register</a></p>
    </div>
  );
};

const AuthenticationPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const switchToRegister = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  const handleClose = () => {
    // Close the popup by toggling its visibility
    setShowLogin(false);
  };

  return (
    <div>
      {showLogin && (
        <div className="popup-container">
          <div className="popup-box">
            <button className="close-button" onClick={handleClose}>X</button>
            <div className="popup-content">
              {showLogin ? <LoginPage switchToRegister={switchToRegister} /> : <RegisterPage switchToLogin={switchToLogin} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationPage;
