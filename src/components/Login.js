import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup }  from '../utils/refreshToken';

const clientId =
  '824296096613-hj384bdkbqb1gfa0dpjpq11dbsjljdr2.apps.googleusercontent.com';

const Login = (props) => {
  const onSuccess = (res) => {
    console.log(res);
    console.log('inside success');
    localStorage.setItem('authToken', res.tokenObj.id_token);
    refreshTokenSetup(res);
    props.toggleBtn('login');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
  });

  return (
    <button onClick={signIn} className="button">
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default Login;
