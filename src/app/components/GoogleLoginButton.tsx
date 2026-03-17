"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {

  const router = useRouter();



  return (
      <GoogleLogin
      onSuccess={(credentialResponse) => {

        console.log("Login Success:", credentialResponse);
        console.log("Credential:", credentialResponse.credential);

        // Fake user save
        localStorage.setItem("user", JSON.stringify(credentialResponse));

        router.push("/");

      }}

      onError={() => {
        console.log("Login Failed");
      }}
    />
    
  );
}

