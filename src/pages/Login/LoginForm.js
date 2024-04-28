import React from 'react';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
  const navigate = useNavigate();
  const handleLogin=(e)=>{
     e.preventDefault();
     navigate('/dashboard');
  }

  return (
    <>
    <div className="login-box">
      <div className="login-logo">
        <a href="#"><b>Admin</b>Login</a>
      </div>
    
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="#" method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email"/>
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password"/>
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember"/>
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>
             
              <div className="col-4">
                <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block">Sign In</button>
              </div>
            
            </div>
          </form>
        </div>
      
      </div>
    </div>
   
    </>
  );
}

export default LoginForm;
