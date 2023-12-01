import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Slice/userSlice";
const CLIENT_ID = "396277747964-i3ks7qqkltcj9vc6ht9819svstah7kvb.apps.googleusercontent.com";
console.log(CLIENT_ID,"IDDD")
import { userLoginWithGoogle } from "../../Api/userApi";

const GoogleButtonUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responseMessage = async (response) => {
    try {
        console.log("hwlolo")
        console.log( jwtDecode(response.credential))
      const user = jwtDecode(response.credential);
      const res = await userLoginWithGoogle(user.email);
      if (res?.status === 200) {
          console.log(res.status,"res")
        const { token, registeredUser } = res.data;
        console.log(registeredUser,"userr");
        localStorage.setItem("usertoken", token);
        dispatch(
          userLogin({
            token: token,
            user: registeredUser,
          })
        );
        toast.success(res?.data?.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error.message);
    }
  };
  
  const errorMessage = (error) => {
    console.log(error.message);
  };

  return (
    <>
      <div>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleLogin
            className="text-black"
            onSuccess={responseMessage}
            onError={errorMessage}
           
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};
export default GoogleButtonUser;
