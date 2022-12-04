import SignUp from "../../components/signup/signup_component";
import Navbar from '../../components/cart/Header';
import './style.css';

function Signup() {
  return (
    <div className="Applest">
      <Navbar />
      <div className="auth-wrapper" style={{paddingTop: 100}}>
        <div className="auth-inner">
          <SignUp/>
        </div>
      </div>
    </div>
  );
}

export default Signup;
