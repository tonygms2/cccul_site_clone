import Input from "./Input";

function LoginModal({ show, closeModal }) {
  if (!show) return null;

  return (
    <>
      <section className="fixed inset-0 z-50 flex translate-x-0 animate-fadeIn items-center justify-center overflow-hidden  bg-gray-900 bg-opacity-95 text-onSurface transition-all duration-300 animate-delay-75">
        <div className="md:px-15 relative w-full animate-zoomIn overflow-hidden rounded-md bg-surface py-12 px-6 shadow-sm md:w-3/5 lg:w-2/5 lg:px-20">
          <div className="flex p-2 right-0 flex-row-reverse">
            <button
              onClick={closeModal}
              className=" transition duration-200 hover:scale-110 hover:ease-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 stroke-1 hover:stroke-red-700 fill-red-500 "
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-5 flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <img src="/assets/images/logo/logocccul.png" alt="" />
                <h1 className="text-3xl font-extrabold">MEMBER LOGIN</h1>
                <h1>Login to your account</h1>
              </div>
              <form className="flex w-full flex-col gap-6">
                <div className="relative">
                  <Input
                    type="text"
                    id="username"
                    focus={true}
                    Class="peer h-[42px] w-full rounded border-b py-1 transition-colors focus:border-b-2 focus:border-indigo-600 focus:outline-none"
                    autoComplete="off"
                    name={"username"}
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-[10px] top-[9px] cursor-text text-gray-600 transition-all peer-focus:-top-[9px] peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-indigo-600"
                  >
                    Username
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="password"
                    className="peer h-[42px] w-full rounded border-b py-1 transition-colors focus:border-b-2 focus:border-indigo-600 focus:outline-none"
                    autoComplete="off"
                    name="password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-[10px] top-[9px] cursor-text text-gray-600 transition-all peer-focus:-top-[9px] peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-indigo-600"
                  >
                    Password
                  </label>
                </div>

                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-violet-600 checked:bg-violet-600 focus:outline-none"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Show password
                  </label>
                </div>
              </form>

              <input
                className="h-10 w-full rounded bg-primary text-white transition duration-300 hover:scale-105 hover:cursor-pointer"
                type="button"
                value="Login"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginModal;
