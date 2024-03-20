import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Manager() {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const showPassword = () => {
    if (ref.current.src.includes("icons/closeEye.png")) {
      ref.current.src = "icons/openEye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/closeEye.png";
      passwordRef.current.type = "text";
    }
  };
  const handleSave = () => {
    if (form.site=='' || form.username==''||form.password=='') {
      alert("All field Required!");
    } else {
      setPasswordArray([...passwordArray, { ...form, id: new Date() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: new Date() }])
      );
      setForm({ site: "", username: "", password: "" });
    }
  };
  const handleDelete = (id) => {
    setPasswordArray(passwordArray.filter((element) => element.id != id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((element) => element.id != id))
    );
  };
  const handleEdit = (id) => {
    setForm(passwordArray.filter((item) => item.id === id)[0]);
    setPasswordArray(passwordArray.filter((element) => element.id != id));
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* https://bg.ibelick.com/  - bg from this website */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transitio="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="mx-auto max-w-4xl my-12 space-y-5">
        <div className="text-center space-y-1">
          <div className="font-bold text-3xl">
            <span className="text-green-600">&lt;</span>
            <span>Pass</span>
            <span className="text-green-600">OP/&gt;</span>
          </div>
          <p className="text-xl text-green-700 font-medium">
            Your Own Password Manager
          </p>
        </div>
        <div className="flex flex-col items-center px-4 gap-y-8">
          <input
            value={form.site}
            onChange={handleChange}
            type="text"
            className="rounded-full border-2 border-green-700 outline-green-400 w-full text-green-700 px-3 py-1"
            placeholder="Enter your website name"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row gap-y-5  w-full justify-between gap-x-3 md:gap-x-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="md:w-1/2 w-full rounded-full border-2 border-green-700 outline-green-400 py-1  text-green-700 px-3"
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
            />
            <div className="relative md:w-1/2">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className="rounded-full border-2 border-green-700 outline-green-400 w-full py-1  text-green-700 px-3"
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
              />
              <span
                className="absolute right-3 top-[6px] cursor-pointer"
                onClick={showPassword}
              >
                <img width={25} src="icons/openEye.png" alt="" ref={ref} />
              </span>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="flex w-fit items-center justify-center text-xl gap-x-1 bg-green-500 px-5 py-1 rounded-full hover:bg-green-400 border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="passwords space-y-5 px-5 md:px-0">
          <h1 className="font-bold text-xl text-green-800">Your passwords</h1>
          {passwordArray.length == 0 && <div>No password to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-xl overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="text-center  py-2 gap-x-4">
                        <span className="flex justify-center  gap-x-3">
                          <a className="" href={item.site} target="__blank">
                            {item.site}
                          </a>
                          <div
                            onClick={() => copyText(item.site)}
                            className="cursor-pointer"
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </div>
                        </span>
                      </td>
                      <td className="text-center py-1 gap-x-4">
                        <span className="flex justify-center gap-x-3">
                          {item.username}{" "}
                          <div
                            onClick={() => copyText(item.username)}
                            className="cursor-pointer"
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </div>
                        </span>
                      </td>
                      <td className="text-center py-1">
                        <span className="flex justify-center  gap-x-3">
                          {item.password}{" "}
                          <div
                            onClick={() => copyText(item.password)}
                            className="cursor-pointer"
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </div>
                        </span>
                      </td>
                      <td className="text-center py-1">
                        <span
                          className="cursor-pointer mx-2"
                          onClick={() => handleEdit(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer  mx-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
