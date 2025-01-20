"use client";

import { FaUser, FaBell, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    router.push("/"); // Redirect to the login page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Home</h1>
      <p>You have successfully logged in.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "20px",
        }}
      >
        {/* Profile Icon */}
        <div
          onClick={() => router.push("/profile")}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <FaUser size={40} color="blue" />
          <p>Profile</p>
        </div>

        {/* Notification Icon */}
        <div
          onClick={() => router.push("/notification")}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <FaBell size={40} color="orange" />
          <p>Notification</p>
        </div>

        {/* Logout Icon */}
        <div
          onClick={handleLogout}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <FaSignOutAlt size={40} color="red" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

