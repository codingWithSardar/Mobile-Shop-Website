import React, { useContext, useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Create");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { navigate, loginUser } = useContext(UserContext);

  const submitFormData = (e) => {
    e.preventDefault();

    if (!email || !password || (currentState === "Create" && !name)) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    const userData = {
      _id: "demo-user",
      name: currentState === "Create" ? name : "Demo User",
      email,
    };

    loginUser(userData);

    setLoading(false);

    toast.success(
      currentState === "Create"
        ? "Account created successfully"
        : "Login successful",
    );

    setName("");
    setEmail("");
    setPassword("");

    navigate("/");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-5"
      style={{ backgroundImage: `url(${assets.userBg})` }}
    >
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,.35)] p-4"
      >
        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold">
            Elite Couture
          </p>

          <h1 className="luxury-font text-5xl text-white mt-4">
            {currentState} Account
          </h1>

          <p className="text-gray-200 mt-3 text-sm leading-6">
            Begin your luxury shopping journey and enjoy exclusive collections
            crafted for timeless elegance.
          </p>
        </div>

        <form className="space-y-5" onSubmit={submitFormData}>
          {currentState === "Create" && (
            <div className="relative">
              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
              />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 rounded-xl bg-white/10 border border-white/20 pl-12 pr-4 text-white placeholder:text-gray-300 outline-none focus:border-[#D4AF37] transition"
              />
            </div>
          )}

          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full h-14 rounded-xl bg-white/10 border border-white/20 pl-12 pr-4 text-white placeholder:text-gray-300 outline-none focus:border-[#D4AF37] transition"
            />
          </div>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 rounded-xl bg-white/10 border border-white/20 pl-12 pr-12 text-white placeholder:text-gray-300 outline-none focus:border-[#D4AF37] transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-xl bg-[#D4AF37] text-white font-semibold tracking-wide hover:bg-[#c79d22] transition-all duration-300 cursor-pointer"
          >
            {loading ? (
              <Loader size={30} className="animate-spin mx-auto" />
            ) : (
              `${currentState} Account`
            )}
          </button>
        </form>

        <div>
          {currentState === "Create" ? (
            <p className="mt-8 text-center text-gray-300">
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="text-[#D4AF37] cursor-pointer hover:underline font-semibold"
              >
                Login
              </span>
            </p>
          ) : (
            <p className="mt-8 text-center text-gray-300">
              New account?{" "}
              <span
                onClick={() => setCurrentState("Create")}
                className="text-[#D4AF37] cursor-pointer hover:underline font-semibold"
              >
                Create account
              </span>
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Register;