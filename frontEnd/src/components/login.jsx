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



import React, { useState } from 'react';

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
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="button" onClick={handleRegister}>
            Register
          </button>
          <p>Already have an account? <a href="#" onClick={switchToLogin}>Login</a></p>
        </form>
      </div>
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
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <p>Don't have an account? <a href="#" onClick={switchToRegister}>Register</a></p>
        </form>
      </div>
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

  return (
    <div>
      {showLogin ? <LoginPage switchToRegister={switchToRegister} /> : <RegisterPage switchToLogin={switchToLogin} />}
    </div>
  );
};

export default AuthenticationPage;
