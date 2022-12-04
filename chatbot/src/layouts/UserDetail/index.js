import UserDetails from "../../components/userdetail/userDetails";
import './style.css';

function UserDetail() {
  return (
    <div className="Applest">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
