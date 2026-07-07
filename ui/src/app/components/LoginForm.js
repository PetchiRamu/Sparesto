// "use client";

// import { EyeOff } from "lucide-react";

// export default function LoginForm() {
//   return (
//     <div className="max-w-md mx-auto">

//       {/* Email */}
//       <div className="mb-5">

//         <label className="text-base font-semibold text-[#304E72]">
//           Emaill
//         </label>

//         <div className="mt-2 bg-[#E6EBF0] rounded-xl px-4 py-3">
//           <input
//             type="email"
//             placeholder="name@example.com"
//             className="bg-transparent outline-none w-full text-base"
//           />
//         </div>

//       </div>

//       {/* Password */}
//       <div className="mb-6">

//         <label className="text-base font-semibold text-[#304E72]">
//           Password
//         </label>

//         <div className="mt-2 bg-[#E6EBF0] rounded-xl px-4 py-3 flex items-center">

//           <input
//             type="password"
//             placeholder="********"
//             className="bg-transparent outline-none w-full text-base"
//           />

//           <EyeOff size={20} className="text-gray-500" />

//         </div>

//       </div>

//       {/* Button */}
//       <button className="w-full h-12 rounded-xl bg-[#006B68] text-white text-lg font-semibold hover:bg-[#005a57]">
//         Login
//       </button>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { EyeOff } from "lucide-react";
// import { loginUser } from "../services/apiServices";
import { loginUser } from "../apiservices/apiServices";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(formData);

      console.log(response);

      alert(response.message || "Login Successful");

      // Save token if returned
      if (response.token) {
        localStorage.setItem("token", response.token);
      }

      alert(response.message || "Login Successful");

      window.location.href = "/services/ecommerce";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Email */}
      <div className="mb-5">
        <label className="text-base font-semibold text-[#304E72]">Emaill</label>

        <div className="mt-2 bg-[#E6EBF0] rounded-xl px-4 py-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="bg-transparent outline-none w-full text-base"
          />
        </div>
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="text-base font-semibold text-[#304E72]">
          Password
        </label>

        <div className="mt-2 bg-[#E6EBF0] rounded-xl px-4 py-3 flex items-center">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            className="bg-transparent outline-none w-full text-base"
          />

          <EyeOff size={20} className="text-gray-500" />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleLogin}
        className="w-full h-12 rounded-xl bg-[#006B68] text-white text-lg font-semibold hover:bg-[#005a57]"
      >
        Login
      </button>
    </div>
  );
}
