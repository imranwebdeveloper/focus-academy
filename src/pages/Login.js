import React from "react";

const Login = () => {
  return (
    <section className=" flex min-h-screen  text-gray-800">
      <div className=" flex-1 flex flex-col justify-center  p-4">
        <div className="text-center">
          <img
            className="mx-auto w-48"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo"
          />
          <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
            We are The Lotus Team
          </h4>
        </div>
        <form className="max-w-[450px] w-full mx-auto">
          <p className="mb-4">Please login to your account</p>
          <div className="mb-4">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Password"
            />
          </div>
          <div className="text-center pt-1 mb-12 pb-1">
            <button
              className="inline-block px-6 py-3 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-gradient  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Log in
            </button>
            <a className="text-gray-500" href="#!">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
      <div className="text-white flex-1   justify-center md:flex hidden items-center  bg-gradient">
        <div className=" w-full mx-auto px-4 lg:px-16">
          <h4 className="text-2xl font-semibold mb-6">
            We are more than just a company
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
