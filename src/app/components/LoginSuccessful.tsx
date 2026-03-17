"use client";

import { useEffect, useState } from "react";
import React from 'react'

export default function LoginSuccessful() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  return (
    <div className="flex justify-center items-center text-white text-2xl font-semibold">
          <p className='p-5 bg-green-300 rounded-[10px]'>Login Successful ✅</p>
        </div>
  )
}
