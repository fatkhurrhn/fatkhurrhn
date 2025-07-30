import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
