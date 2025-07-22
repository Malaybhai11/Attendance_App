"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"

export function LogoutButton() {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <style>
        {`
          @keyframes shake {
            0% { transform: scale(1) rotate(0deg); }
            20% { transform: scale(1.05) rotate(-8deg); }
            40% { transform: scale(1.1) rotate(8deg); }
            60% { transform: scale(1.08) rotate(-8deg); }
            80% { transform: scale(1.05) rotate(8deg); }
            100% { transform: scale(1) rotate(0deg); }
          }
          @keyframes throw {
            0% { opacity: 1; transform: scale(1) rotate(0deg) translateY(0); }
            60% { opacity: 1; transform: scale(1.1) rotate(-15deg) translateY(-10px); }
            80% { opacity: 0.7; transform: scale(0.8) rotate(15deg) translateY(40px); }
            100% { opacity: 0; transform: scale(0.5) rotate(45deg) translateY(120px); }
          }
        `}
      </style>
      <button
        onClick={() => {
          setClicked(true)
          setTimeout(() => signOut({ callbackUrl: "/" }), 1200)
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered
            ? "radial-gradient(circle at center, #3b82f6 0%, #2563eb 60%, #ef4444 100%)"
            : "radial-gradient(circle at center, #ef4444 0%, #f59e42 60%, #3b82f6 100%)",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          border: "none",
          fontWeight: "bold",
          fontSize: "1.1rem",
          boxShadow: hovered
            ? "0 0 32px 12px #3b82f6, 0 2px 8px rgba(0,0,0,0.18)"
            : "0 2px 8px rgba(0,0,0,0.10)",
          cursor: "pointer",
          outline: "none",
          transition: "background 1.5s cubic-bezier(.4,0,.2,1), box-shadow 0.5s",
          animation: clicked
            ? "throw 1.2s cubic-bezier(.4,0,.2,1) forwards"
            : hovered
            ? "shake 0.7s cubic-bezier(.4,0,.2,1)"
            : "none",
          position: "relative",
          zIndex: 1,
        }}
        disabled={clicked}
      >
        {clicked ? (
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.3rem" }}>🗑️</span>
            <span>Session Deleted...</span>
          </span>
        ) : (
          "Sign Out"
        )}
      </button>
    </>
  )
}