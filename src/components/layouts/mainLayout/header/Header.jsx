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
    <nav className="flex sticky top-0 items-center justify-between flex-wrap bg-black py-2 lg:px-12 shadow border-solid border-t-2 border-white-700">
      <div className="container">
        <div className="justify-between lg:items-center lg:flex">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <div className="flex items-center justify-between lg:block">
              <NavLink to="home">
                <img classname="w-15 " src="" />
              </NavLink>
              <div className="lg:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none border"
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
