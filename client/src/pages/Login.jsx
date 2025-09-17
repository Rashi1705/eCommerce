import React from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.bazar.userInfo);

  // Google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        toast.success("Login Successful!");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login Failed!");
      });
  };

  // Sign out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success("Signed Out Successfully");
      dispatch(removeUser());
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to eBazaar
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>

        {/* If not logged in → show login button */}
        {!userInfo ? (
          <div className="mt-8 space-y-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#4285F4"
                  d="M24 9.5c3.94 0 6.64 1.7 8.16 3.12l5.96-5.96C34.08 3.48 29.48 1.5 24 1.5 14.64 1.5 6.48 7.9 3.64 16.26l6.96 5.42C12.14 15.74 17.6 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.5 24c0-1.6-.14-3.12-.4-4.6H24v9h12.7c-.54 2.86-2.14 5.28-4.54 6.92l7.08 5.5C43.58 37.74 46.5 31.4 46.5 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.6 28.68c-.64-1.9-1-3.92-1-6s.36-4.1 1-6l-6.96-5.42C1.78 14.72 0 19.18 0 24s1.78 9.28 4.64 12.74l6.96-5.42z"
                />
                <path
                  fill="#EA4335"
                  d="M24 46.5c6.48 0 11.9-2.14 15.88-5.82l-7.08-5.5c-2 1.36-4.54 2.18-8.8 2.18-6.4 0-11.86-6.24-13.4-12.18l-6.96 5.42C6.48 40.1 14.64 46.5 24 46.5z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        ) : (
          // If logged in → show logout button
          <button
            onClick={handleSignOut}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm bg-red-600 text-sm font-medium text-white hover:bg-red-700"
          >
            Sign Out of eBazaar
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
