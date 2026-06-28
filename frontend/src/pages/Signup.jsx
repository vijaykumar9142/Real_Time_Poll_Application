import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return alert("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      alert("Account Created Successfully");

      navigate("/home");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Signup Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-blue-500 overflow-hidden">
      <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-[120px] opacity-40 top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-[120px] opacity-40 bottom-0 right-0"></div>

      <div className="relative z-10 w-[420px] p-10 rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl">
            👤
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold text-white mb-8">
          SIGN UP
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-3 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-3 outline-none"
            required
          />

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
              className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-3 outline-none"
              required
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

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            value={
              formData.confirmPassword
            }
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-3 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-900 to-blue-400 text-white font-bold tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            CREATE ACCOUNT
          </button>

          <p className="text-center text-white">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;