// "use client";

// import { EyeOff } from "lucide-react";

// export default function RegisterForm() {
//   return (

//     <div className="w-full">

//       <div className="grid md:grid-cols-2 gap-4">

//         {/* Company */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             Company Name
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">
//             <input
//               placeholder="Company Name"
//               className="bg-transparent outline-none w-full text-base"
//             />
//           </div>

//         </div>

//         {/* Phone */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             Phone Number
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center gap-3">

//             <span className="text-base">+91</span>

//             <input
//               placeholder="9524530255"
//               className="bg-transparent outline-none w-full text-base"
//             />

//           </div>

//         </div>

//         {/* Password */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             New Password
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center">

//             <input
//               type="password"
//               placeholder="********"
//               className="bg-transparent outline-none w-full text-base"
//             />

//             <EyeOff size={20} className="text-gray-500" />

//           </div>

//         </div>

//         {/* Confirm Password */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             Confirm Password
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center">

//             <input
//               type="password"
//               placeholder="********"
//               className="bg-transparent outline-none w-full text-base"
//             />

//             <EyeOff size={20} className="text-gray-500" />

//           </div>

//         </div>

//         {/* Email */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             Email
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">

//             <input
//               placeholder="name@example.com"
//               className="bg-transparent outline-none w-full text-base"
//             />

//           </div>

//         </div>

//         {/* OTP */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             OTP
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">

//             <input
//               placeholder="123456"
//               className="bg-transparent outline-none w-full text-base"
//             />

//           </div>

//         </div>

//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between items-center mt-6">

//         <button className="border border-[#006B68] px-6 py-2 rounded-xl text-[#006B68] text-base font-semibold">
//           Send OTP
//         </button>

//         <button className="bg-[#006B68] px-10 py-2 rounded-xl text-white text-base font-semibold">
//           Register
//         </button>

//       </div>

//     </div>

//   );
// }

// "use client";

// import { useState } from "react";
// import { EyeOff } from "lucide-react";
// // import { registerUser } from "../services/apiServices";
// import { registerUser } from "../apiservices/apiServices";

// export default function RegisterForm() {

//   const [formData, setFormData] = useState({
//     companyName: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     email: "",
//     otp: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRegister = async () => {

//     if (formData.password !== formData.confirmPassword) {
//       return alert("Passwords do not match");
//     }

//     try {
//       const payload = {
//         companyName: formData.companyName,
//         phone: formData.phone,
//         password: formData.password,
//         email: formData.email,
//         otp: formData.otp,
//       };

//       const response = await registerUser(payload);

//       console.log(response);

//       alert(response.message || "Registration Successful");

//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleSendOTP = () => {
//     alert("Integrate Send OTP API here");
//   };

//   return (

//     <div className="w-full">

//       <div className="grid md:grid-cols-2 gap-4">

//         {/* Company */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             Company Name
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">
//             <input
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               placeholder="Company Name"
//               className="bg-transparent outline-none w-full text-base"
//             />
//           </div>

//         </div>

//         {/* Phone */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             Phone Number
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center gap-3">

//             <span className="text-base">+91</span>

//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="9524530255"
//               className="bg-transparent outline-none w-full text-base"
//             />

//           </div>

//         </div>

//         {/* Password */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             New Password
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center">

//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="********"
//               className="bg-transparent outline-none w-full text-base"
//             />

//             <EyeOff size={20} className="text-gray-500" />

//           </div>

//         </div>

//         {/* Confirm Password */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             Confirm Password
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center">

//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="********"
//               className="bg-transparent outline-none w-full text-base"
//             />

//             <EyeOff size={20} className="text-gray-500" />

//           </div>

//         </div>

//         {/* Email */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             Email
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="name@example.com"
//               className="bg-transparent outline-none w-full text-base"
//             />

//           </div>

//         </div>

//         {/* OTP */}
//         <div>

//           <label className="text-sm font-semibold text-[#304E72]">
//             OTP
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">

//             <input
//               name="otp"
//               value={formData.otp}
//               onChange={handleChange}
//               placeholder="123456"
//               className="bg-transparent outline-none w-full text-base"
//             />

//           </div>

//         </div>

//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between items-center mt-6">

//         <button
//           onClick={handleSendOTP}
//           className="border border-[#006B68] px-6 py-2 rounded-xl text-[#006B68] text-base font-semibold"
//         >
//           Send OTP
//         </button>

//         <button
//           onClick={handleRegister}
//           className="bg-[#006B68] px-10 py-2 rounded-xl text-white text-base font-semibold"
//         >
//           Register
//         </button>

//       </div>

//     </div>

//   );
// }

// "use client";

// import { useState } from "react";
// import { EyeOff } from "lucide-react";
// import { registerUser, sendOTP } from "../apiservices/apiServices";

// export default function RegisterForm() {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     companyName: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     email: "",
//     otp: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Phone validation
//     if (name === "phone") {
//       if (!/^\d*$/.test(value)) return;
//       if (value.length > 10) return;
//     }

//     // OTP validation
//     if (name === "otp") {
//       if (!/^\d*$/.test(value)) return;
//       if (value.length > 6) return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleRegister = async () => {
//     if (
//       !formData.companyName ||
//       !formData.phone ||
//       !formData.email ||
//       !formData.password ||
//       !formData.confirmPassword ||
//       !formData.otp
//     ) {
//       alert("Please fill all fields.");
//       return;
//     }

//     if (formData.phone.length !== 10) {
//       alert("Enter a valid phone number.");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const payload = {
//         companyName: formData.companyName,
//         phone: formData.phone,
//         password: formData.password,
//         email: formData.email,
//         otp: formData.otp,
//       };

//       const response = await registerUser(payload);

//       console.log(response);

//       alert(response?.message || "Registration Successful");

//       setFormData({
//         companyName: "",
//         phone: "",
//         password: "",
//         confirmPassword: "",
//         email: "",
//         otp: "",
//       });
//     } catch (error) {
//       console.error(error);

//       alert(
//         error?.response?.data?.message ||
//           error?.message ||
//           "Registration Failed",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

// const handleSendOTP = async () => {
//   if (!formData.email) {
//     alert("Enter email first");
//     return;
//   }

//   try {
//     const response = await sendOTP({
//       email: formData.email,
//     });

//     alert(response?.message || "OTP sent successfully");
//   } catch (error) {
//     console.error(error);
//     alert(error?.message || "Failed to send OTP");
//   }
// };

//   return (
//     <div className="w-full">
//       <div className="grid md:grid-cols-2 gap-4">
//         {/* Company */}
//         <div>
//           <label className="text-sm font-semibold text-[#304E72]">
//             Company Name
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">
//             <input
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               placeholder="Company Name"
//               className="bg-transparent outline-none w-full text-base"
//             />
//           </div>
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="text-sm font-semibold text-[#304E72]">
//             Phone Number
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center gap-3">
//             <span>+91</span>

//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="9876543210"
//               className="bg-transparent outline-none w-full text-base"
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div>
//           <label className="text-sm font-semibold text-[#304E72]">
//             New Password
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center">
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="********"
//               className="bg-transparent outline-none w-full text-base"
//             />

//             <EyeOff size={20} className="text-gray-500" />
//           </div>
//         </div>

//         {/* Confirm Password */}
//         <div>
//           <label className="text-sm font-semibold text-[#304E72]">
//             Confirm Password
//           </label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center">
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="********"
//               className="bg-transparent outline-none w-full text-base"
//             />

//             <EyeOff size={20} className="text-gray-500" />
//           </div>
//         </div>

//         {/* Email */}
//         <div>
//           <label className="text-sm font-semibold text-[#304E72]">Email</label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="name@example.com"
//               className="bg-transparent outline-none w-full text-base"
//             />
//           </div>
//         </div>

//         {/* OTP */}
//         <div>
//           <label className="text-sm font-semibold text-[#304E72]">OTP</label>

//           <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">
//             <input
//               name="otp"
//               value={formData.otp}
//               onChange={handleChange}
//               placeholder="123456"
//               className="bg-transparent outline-none w-full text-base"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={handleSendOTP}
//           className="border border-[#006B68] px-6 py-2 rounded-xl text-[#006B68] font-semibold"
//         >
//           Send OTP
//         </button>

//         <button
//           onClick={handleRegister}
//           disabled={loading}
//           className="bg-[#006B68] px-10 py-2 rounded-xl text-white font-semibold disabled:opacity-50"
//         >
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </div>
//     </div>
//   );
// };


"use client";

import { useState } from "react";
import { EyeOff } from "lucide-react";
import { registerUser, sendOTP } from "../apiservices/apiServices";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    email: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    // OTP validation
    if (name === "otp") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 6) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SEND OTP
  const handleSendOTP = async () => {
    if (!formData.email.trim()) {
      alert("Please enter your email first");
      return;
    }

    try {
      setLoading(true);

      const response = await sendOTP({
        email: formData.email,
      });

      alert(response?.message || "OTP sent successfully");

      setOtpSent(true);
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const handleRegister = async () => {
    if (!otpSent) {
      alert("Please send OTP first");
      return;
    }

    if (
      !formData.companyName ||
      !formData.phone ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.otp
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Enter a valid phone number.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        companyName: formData.companyName,
        phone: formData.phone,
        password: formData.password,
        email: formData.email,
        otp: formData.otp,
      };

      const response = await registerUser(payload);

      console.log(response);

      alert(response?.message || "Registration Successful");

      setFormData({
        companyName: "",
        phone: "",
        password: "",
        confirmPassword: "",
        email: "",
        otp: "",
      });

      setOtpSent(false);
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          error?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Company */}
        <div>
          <label className="text-sm font-semibold text-[#304E72]">
            Company Name
          </label>

          <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="bg-transparent outline-none w-full text-base"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-semibold text-[#304E72]">
            Phone Number
          </label>

          <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center gap-3">
            <span>+91</span>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="bg-transparent outline-none w-full text-base"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-semibold text-[#304E72]">
            New Password
          </label>

          <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center">
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

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-semibold text-[#304E72]">
            Confirm Password
          </label>

          <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2 flex items-center">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="bg-transparent outline-none w-full text-base"
            />

            <EyeOff size={20} className="text-gray-500" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-semibold text-[#304E72]">
            Email
          </label>

          <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">
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

        {/* OTP */}
        <div>
          <label className="text-sm font-semibold text-[#304E72]">
            OTP
          </label>

          <div className="bg-[#E6EBF0] rounded-xl px-4 py-3 mt-2">
            <input
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="123456"
              disabled={!otpSent}
              className="bg-transparent outline-none w-full text-base disabled:opacity-50"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleSendOTP}
          disabled={loading}
          className="border border-[#006B68] px-6 py-2 rounded-xl text-[#006B68] font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="bg-[#006B68] px-10 py-2 rounded-xl text-white font-semibold disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}