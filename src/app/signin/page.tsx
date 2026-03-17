"use client"
import ProfileButton from '@/app/components/ProfileButton'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useLogin } from '../hooks/useLogin';
import GoogleLoginButton from '../components/GoogleLoginButton';


export default function page() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginMutation = useLogin()

    const handleSubmit = (e: any) => {

        e.preventDefault()

        loginMutation.mutate(
            {
                email,
                password,
                from: "front",
                deviceId: "assadfsafdf"
            },
            {
                onSuccess: (data) => {
                    toast.success(data.message)
                },

                onError: (error: any) => {
                    toast.error(error.response?.data?.message)
                }
            }
        )
    }

    return (
        <div className='container my-30 mx-auto flex flex-col gap-5 justify-center items-center'>
            <form onSubmit={handleSubmit} className='text-white w-[50%] flex flex-col gap-y-10'>
                <div>
                    <label className='font-cairo font-medium text-[20px]'>
                        Email
                        <div className='mt-4 px-6 py-4 flex justify-between items-center bg-[#192439] border-b border-[#A3A7B0]'>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                className='text-[18px] w-[80%]'
                                placeholder='Enter Email'
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label className='font-cairo font-medium text-[20px]'>
                        Password
                        <div className='mt-4 px-6 py-4 flex justify-between items-center bg-[#192439] border-b border-[#A3A7B0]'>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                className='text-[18px] w-[80%]'
                                placeholder='Enter password'
                            />
                        </div>
                    </label>
                </div>
                <div className='flex justify-center'>
                    <ProfileButton
                        text={loginMutation.isPending ? "Loading..." : "Submit"}
                        type='submit'
                    />
                </div>
            </form>
            <h1 className="text-green-300 text-3xl font-bold mb-2">
                Login with Google
            </h1>

            <GoogleLoginButton />
        </div>
    )
}

