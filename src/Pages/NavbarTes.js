import { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Pastikan path ini benar

function Navbar() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("User state berubah:", user); // Debugging
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Login berhasil:", result.user); // Debugging
      setUser(result.user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setDropdownOpen(false);
      console.log("Logout berhasil");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="bg-zinc-900 text-zinc-400 p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold text-white">LOGO</div>
      <ul className="flex gap-6">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Project</li>
        <li className="hover:text-white cursor-pointer">Certificate</li>
        <li className="hover:text-white cursor-pointer">Blog</li>
      </ul>
      <div className="relative">
        {user ? (
          <>
            {/* Avatar & Nama (Klik untuk Toggle Dropdown) */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={user?.photoURL || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
                alt="avatar"
                className="w-8 h-8 rounded-full border border-gray-500"
              />
              <span>{user?.displayName?.split(" ")[0]}</span>
            </div>

            {/* Dropdown Logout */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <button onClick={handleLogin} className="px-4 py-1 bg-blue-500 text-white rounded">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
