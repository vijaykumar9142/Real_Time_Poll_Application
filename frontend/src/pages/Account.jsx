import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Account = () => {
const navigate = useNavigate();

const userInfo = JSON.parse(
localStorage.getItem("userInfo")
);

const [isEditing, setIsEditing] =
useState(false);

const [formData, setFormData] =
useState({
name: "",
email: "",
phone: "",
dob: "",
qualification: "",
address: "",
});

useEffect(() => {
if (!userInfo) {
navigate("/");
return;
}

 
const fetchProfile = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    setFormData({
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || "",
      dob: data.dob || "",
      qualification:
        data.qualification || "",
      address: data.address || "",
    });
  } catch (error) {
    console.log(error);
  }
};

fetchProfile();
 

}, []);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]:
e.target.value,
});
};

const saveProfile = async () => {
try {
const { data } = await axios.put(
"http://localhost:5000/api/auth/profile",
formData,
{
headers: {
Authorization: `Bearer ${userInfo.token}`,
},
}
);

 
  localStorage.setItem(
    "userInfo",
    JSON.stringify({
      ...userInfo,
      ...data.user,
    })
  );

  alert(
    "Profile Updated Successfully ✅"
  );

  setIsEditing(false);
} catch (error) {
  console.log(error);

  alert(
    "Profile Update Failed ❌"
  );
}
 

};

const logoutHandler = () => {
localStorage.removeItem(
"userInfo"
);

 
navigate("/");
 

};

return ( <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-500 flex justify-center items-center px-4">

 
  <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

    <div className="flex flex-col items-center">

      <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center text-5xl mb-4">
        👤
      </div>

      <h1 className="text-3xl font-bold text-white">
        My Account
      </h1>

    </div>

    <div className="mt-8 space-y-4">

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        disabled={!isEditing}
        className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/20"
        placeholder="Full Name"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        disabled
        className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/20"
      />

      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        disabled={!isEditing}
        className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/20"
        placeholder="Phone Number"
      />

      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        disabled={!isEditing}
        className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/20"
      />

      <input
        type="text"
        name="qualification"
        value={formData.qualification}
        onChange={handleChange}
        disabled={!isEditing}
        className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/20"
        placeholder="Current Qualification"
      />

      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        disabled={!isEditing}
        rows="3"
        className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/20"
        placeholder="Address"
      />

    </div>

    <div className="flex gap-4 mt-8">

      {!isEditing ? (
        <button
          onClick={() =>
            setIsEditing(true)
          }
          className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold cursor-pointer"
        >
          Edit Profile
        </button>
      ) : (
        <button
          onClick={saveProfile}
          className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold cursor-pointer"
        >
          Save Changes
        </button>
      )}

      <button
        onClick={logoutHandler}
        className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold cursor-pointer"
      >
        Logout
      </button>

    </div>

  </div>
</div>
 

);
};

export default Account;
