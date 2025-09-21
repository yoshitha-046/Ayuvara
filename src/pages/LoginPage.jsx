import Button from "../components/Button";
import PlaceHolder from "../components/PlaceHolder";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="background" 
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' 
    }}>
           {/* Greeting */}
        <h2 className="welcome-title">Hello!</h2>
        <p className="welcome-sub">Welcome to AyuVara</p>
    
          <div className="block"  style={{ height: '85vh', marginTop: '10rem'}}>
            <div className="Op-block">
                {/* Login Heading */}
                <h3 className="login-heading">Login</h3>

                {/* Inputs */}
                <PlaceHolder placeholder="User Name" type="text" name="username" />
                <PlaceHolder placeholder="Password" type="password" name="password" />

                <a href="#" className="forgot">Forgot Password?</a>

                {/* Login Button */}
                <Button>Login</Button>

                {/* Divider */}
                <div className="divider">
                <span>Or Login with </span> 
                </div>

                {/* Social Buttons */}
                {/* <div className="social-login">
                 <img src="/google.svg" alt="google-logo" className="logo"/>
                  <img src="/apple.svg" alt="apple-logo" className="logo"/>
                </div> */}

                {/* Signup Link */}
                <p className="signup-text">
                Don’t have an account? <a href="#">Sign Up</a>
                </p>
        </div>
     </div>
    </div>
  );
}
