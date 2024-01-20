import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";

import "./Home.css";

//TODO(weblab student): REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "519761739942-5fsi4qta3t5gb19e8d8i9bc6aib29fuo.apps.googleusercontent.com";

type Props = {
  userId?: string;
  handleLogin: (credentialResponse: CredentialResponse) => void;
  handleLogout: () => void;
};
const Home = (props: Props) => {
  const { handleLogin, handleLogout } = props;

  return (
    <>
      <div>
        
      </div>
    </>
  );
};

export default Home;
