import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterView: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const navigator = useNavigate();

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleRePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRePassword(event.target.value);
  }

  const sumbitRegister = async () => {
    validateFormData();

    try {
      const response = await axios.post(
        "http://localhost:3021/api/v1/register",
        {
          name,
          email,
          password,
          last_name: lastName,
          re_password: rePassword,
        }
      );

      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("token", response.data.token);
      navigator("/dashboard", { replace: true });
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

  const validateFormData = () => {
    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      rePassword.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password) ||
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    ) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }
  };

  return (
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <div className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                Sign Up
              </h3>
              <p className="mb-4 text-grey-700">
                Fill this fields and push the button
              </p>

              <div className="flex flex-wrap">
                <div className="col-12 col-md-12 text-left mr-2">
                  <label className="mb-2 text-sm text-start text-grey-900">
                    Name*
                  </label>
                  <input
                    id="name"
                    type="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="mail@loopple.com"
                    className="flex bg-gray-100 items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                </div>
                <div className="col-12 col-md-12 text-left">
                  <label className="mb-2 text-sm text-start text-grey-900">
                    Last Name*
                  </label>
                  <input
                    id="last_name"
                    type="last_name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    placeholder="mail@loopple.com"
                    className="flex bg-gray-100 items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                </div>
              </div>

              <label className="mb-2 text-sm text-start text-grey-900">
                Email*
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="mail@loopple.com"
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

              <label className="mb-2 text-sm text-start text-grey-900">
                Re-password*
              </label>
              <input
                id="re_password"
                type="re_password"
                value={rePassword}
                onChange={handleRePasswordChange}
                placeholder="Enter a password"
                className="flex bg-gray-100 items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />

              <div className="flex justify-center">
                <button
                  onClick={sumbitRegister}
                  className="w-full bg-blue-700 px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-sm leading-relaxed text-grey-900">
                Have an account?{" "}
                <Link to="/login" className="font-bold text-grey-700">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
