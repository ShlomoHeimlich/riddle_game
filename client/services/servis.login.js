import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    const name = inputRefName.current?.value || "";
    const password = inputRefPassword.current?.value || "";

    if (!name.trim()) { 
      alert("לא הכנסת שם"); 
      return; 
    }
    if (!password.trim()) { 
      alert("לא הכנסת סיסמה"); 
      return; 
    }

    try {
      const res = await fetch("http://localhost:4545/player/creatnewplayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password })
      });

      const text = await res.text();
      console.log(text); 

      setMessage(text);
      if (text.includes("New player")) {
        navigate("/"); 
      }

    } catch (err) {
      console.error(err);
      setMessage("שגיאה בשרת");
    }
  };

  return (
    <div 
      id="register" 
      style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}
    >
      <input 
        type="text" 
        placeholder="הקלד את שמך המלא" 
        ref={inputRefName} 
      />
      <input 
        type="password" 
        placeholder="בחר את סיסמתך" 
        ref={inputRefPassword} 
      />
      <button onClick={handleRegister}>אישור</button>
      {message && <div>{message}</div>}
    </div>
  );
}

