import { useState } from "react";
import { useRouter } from "next/router";

export default function SignupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            router.push("/"); // Redirect to the login page
        } else {
            alert("Signup failed");
        }
    };

    // Inline styles for centering and background
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        backgroundColor: "#f4f4f9", // Light background color
    };

    const formStyle = {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "300px", // Form width
        textAlign: "center",
    };

    const inputStyle = {
        width: "100%",
        padding: "0.8rem",
        marginBottom: "1rem",
        borderRadius: "5px",
        border: "1px solid #ddd",
    };

    const buttonStyle = {
        width: "100%",
        padding: "1rem",
        backgroundColor: "#4CAF50",
        color: "white",
        fontSize: "1.1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    const linkStyle = {
        display: "inline-block",
        marginTop: "1rem",
        color: "#007BFF",
        textDecoration: "none",
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h1>Signup Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            id="name" 
                            placeholder="Name" 
                            name="name" 
                            type="text" 
                            value={formData.name} 
                            onChange={handleChange} 
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            id="password" 
                            placeholder="Password" 
                            name="password" 
                            type="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            style={inputStyle}
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>Signup</button>
                </form>
                <a href="/" style={linkStyle}>Go back to login page</a>
            </div>
        </div>
    );
}

