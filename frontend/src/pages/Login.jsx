import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
const navigate = useNavigate();

const [showPassword, setShowPassword] =
useState(false);

const [formData, setFormData] =
useState({
email: "",
password: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]:
e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

 
try {
  const { data } = await axios.post(
    "http://localhost:5000/api/auth/login",
    formData
  );

  localStorage.setItem(
    "userInfo",
    JSON.stringify(data)
  );

  alert("Login Successful ✅");

  navigate("/home");
} catch (error) {
  alert(
    error.response?.data?.message ||
      "Login Failed"
  );
}
 

};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-blue-500 overflow-hidden">

 
  {/* Blur Background */}
  <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-[120px] opacity-40 top-0 left-0"></div>

  <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-[120px] opacity-40 bottom-0 right-0"></div>

  {/* Login Card */}
  <div className="relative z-10 w-[380px] p-10 rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

    {/* Avatar */}
    <div className="flex justify-center mb-8">
      <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center text-5xl">
        👤
      </div>
    </div>

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email ID"
          required
          className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-3 outline-none"
        />
      </div>

      <div className="relative">
        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-3 outline-none"
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
          className="absolute right-0 top-3 text-white"
        >
          {showPassword
            ? "🙈"
            : "👁️"}
        </button>
      </div>

      <div className="flex justify-between items-center text-sm text-white">

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Remember Me
        </label>

        <Link
          to="/forgot-password"
          className="hover:underline"
        >
          Forgot Password?
        </Link>

      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-900 to-blue-400 text-white font-bold tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        LOGIN
      </button>

      <p className="text-center text-white">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </p>

    </form>

  </div>
</div>
 

);
};

export default Login;
