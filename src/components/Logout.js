import { useGoogleLogout } from 'react-google-login';

const clientId =
  '824296096613-hj384bdkbqb1gfa0dpjpq11dbsjljdr2.apps.googleusercontent.com';

const Logout = (props) => {
  
  const onLogoutSuccess = (res) => {
    props.toggleBtn('logout');
  };

  const onFailure = () => {
    console.log('failure');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div><button onClick={signOut} className="button"><span className="buttonText">Sign out</span></button></div>
  );
}

export default Logout;
