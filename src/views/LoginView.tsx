import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginView: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const submitLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3021/api/v1/login", {
        email,
        password,
      });
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Authorization error:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <div className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                Sign In
              </h3>
              <p className="mb-4 text-grey-700">
                Enter your email and password
              </p>

              <label className="mb-2 text-sm text-start text-grey-900">
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="mail@loopple.com"
                value={email}
                onChange={handleEmailChange}
                className="flex bg-gray-100 items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />
              <label className="mb-2 text-sm text-start text-grey-900">
                Password*
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter a password"
                className="flex bg-gray-100 items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />

              <button
                onClick={submitLogin}
                className="w-full bg-blue-700 px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500"
              >
                Sign In
              </button>
              <p className="text-sm leading-relaxed text-grey-900">
                Not registered yet?{" "}
                <Link to="/register" className="font-bold text-grey-700">
                  Create an Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
