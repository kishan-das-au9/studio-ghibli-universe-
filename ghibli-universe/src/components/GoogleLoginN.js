import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login'


const responseGoogle = (response) => {
  console.log(response);
  
}
function GoogleLoginN() {
  return (
    <div>
       <GoogleLogin
    clientId="739455083699-remof1giqmtt97ap3ceit0kst544s0n0.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}
export default GoogleLoginN
