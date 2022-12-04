import Login from "../../components/login/login_component";

import "./style.css";

function LoginLayout() {
  return (
    <div className="body-applest">
      <div className="Applest">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
