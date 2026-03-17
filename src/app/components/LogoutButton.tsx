"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/signin");
  };

  return (
    <div className="mt-3 flex justify-center items-center">
        <button
      onClick={handleLogout}
      className="bg-red-400 text-white px-4 py-2 text-2xl font-semibold rounded"
    >
      Logout
    </button>
    </div>
    
  );
}