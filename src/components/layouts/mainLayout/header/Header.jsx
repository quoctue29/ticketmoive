import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { quanLyNguoiDungActions } from "../../../../stores/quanLyNguoiDungReducer/quanLyNguoiDungReducer";
import { UserLogin } from "../../../../constants/api";
import { quanLyDatVeActions } from "../../../../stores/quanLyDatVeReducer/quanLyDatVeReducer";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nguoiDung = JSON.parse(localStorage.getItem(UserLogin));
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="flex sticky top-0 w-full z-30 items-center justify-between flex-wrap bg-black py-2 lg:px-12 shadow border-solid border-t-2 border-white-700">
      <div className="container">
        <div className="flex justify-between lg:items-center lg:flex">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <div className="flex items-center justify-between lg:block">
              <NavLink
                classname="flex items-center space-x-3 lg:pr-16 pr-6"
                to="home"
              >
                <svg
                  className="h-6 w-30"
                  aria-hidden="true"
                  viewBox="0 0 160 24"
                  fill="none"
                >
                  <path
                    d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                    className="fill-gray-300"
                  ></path>
                </svg>
              </NavLink>
              <div className="lg:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center py-3 lg:block lg:py-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-2 lg:flex lg:space-x-6 lg:space-y-0 mb-0 font-bold text-xl">
                <li>
                  <NavLink to="home" className="text-white hover:text-gray-600">
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="tintuc"
                    className="text-white hover:text-gray-600"
                  >
                    Tin tức
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="lienhe"
                    className="text-white hover:text-gray-600"
                  >
                    Liên hệ
                  </NavLink>
                </li>
              </ul>

              <div className="mt-3 space-x-2 lg:hidden ">
                {nguoiDung ? (
                  <div className="inline-block space-x-2">
                    <NavLink
                      to="profile"
                      className="inline-block text-lg rounded-lg px-6 py-2 text-white bg-gray-800 hover:bg-gray-500 hover:text-white transition duration-300"
                    >
                      Chào! {nguoiDung.taiKhoan}
                    </NavLink>
                    <button
                      onClick={() => {
                        dispatch(quanLyNguoiDungActions.dangXuat());
                        dispatch(quanLyDatVeActions.huyErrKetQuaDatVe());
                        navigate("/home");
                      }}
                      className="inline-block px-4 py-2 text-black bg-white rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                    >
                      Đăng xuất
                    </button>
                    {nguoiDung.maLoaiNguoiDung === "QuanTri" ? (
                      <NavLink
                        to="/admin/films"
                        className="inline-block px-4 py-2 text-white bg-gray-800 rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                      >
                        Page Admin
                      </NavLink>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className="inline-block space-x-2">
                    <NavLink
                      to="/user/login"
                      className="inline-block px-4 py-2 text-center text-white bg-gray-800 rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                    >
                      Đăng nhập
                    </NavLink>
                    <NavLink
                      to="/user/register"
                      className="inline-block px-4 py-2 text-gray bg-dark rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                    >
                      Đăng kí
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            {nguoiDung ? (
              <div className="inline-block space-x-2">
                <NavLink
                  to="profile"
                  className="inline-block text-lg rounded-lg px-6 py-2 text-white bg-gray-800 hover:bg-gray-500 hover:text-white transition duration-300"
                >
                  Hello! {nguoiDung.taiKhoan}
                </NavLink>
                <button
                  onClick={() => {
                    dispatch(quanLyNguoiDungActions.dangXuat());
                    dispatch(quanLyDatVeActions.huyErrKetQuaDatVe());
                    navigate("/home");
                  }}
                  className="inline-block px-4 py-2 text-black bg-white rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                >
                  Đăng xuất
                </button>
                {nguoiDung.maLoaiNguoiDung === "QuanTri" ? (
                  <NavLink
                    to="/admin/films"
                    className="inline-block px-4 py-2 text-white bg-gray-800 rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                  >
                    Page Admin
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div className="inline-block space-x-2">
                <NavLink
                  to="/user/login"
                  className="inline-block px-4 py-2 text-center text-white bg-gray-800 rounded-md shadow hover:bg-white-500 hover:text-white transition duration-300"
                >
                  Đăng nhập
                </NavLink>
                <NavLink
                  to="/user/register"
                  className="inline-block px-4 py-2 text-white bg-gray-400 rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300"
                >
                  Đăng kí
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
