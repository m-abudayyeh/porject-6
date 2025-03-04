import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("donor"); // القيمة الافتراضية للدور
  const [status] = useState("pending"); // القيمة الافتراضية للحالة
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address] = useState("unknown"); // القيمة الافتراضية للعنوان
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/sign-up", {
        firstName,
        lastName,
        email,
        password,
        role,
        status,
        phoneNumber,
        address,
      });
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="h-screen flex">
      <div className="flex-1 bg-[#309696] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">مشكاة</h1>
      </div>
      <div className="w-1/3 flex items-center justify-center p-6">
        <div className="w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#309696]">
            إنشاء حساب
          </h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              placeholder="الاسم الأول"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309696]"
            />
            <input
              type="text"
              placeholder="الاسم الأخير"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309696]"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309696]"
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309696]"
            />
            <input
              type="text"
              placeholder="رقم الهاتف"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309696]"
            />
            <button
              type="submit"
              className="w-full bg-[#309696] text-white py-3 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#309696]"
            >
              إنشاء حساب
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
