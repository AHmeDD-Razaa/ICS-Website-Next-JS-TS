"use client"

import DisputeDetail from '@/app/components/DisputeDetail'
import React, { useEffect, useRef, useState } from 'react'

export default function Page() {

  const [detail, setDetail] = useState<boolean>(false)

  const modalRef = useRef<HTMLDivElement | null>(null)

  const viewDetail = () => {
    setDetail(true)
  }

  useEffect(() => {

    function handleClick(event: MouseEvent) {

      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setDetail(false)
      }

    }

    if (detail) {
      document.addEventListener("mousedown", handleClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }

  }, [detail])


  return (
    <>
      <div className='container mx-auto pt-17.5 pb-50 text-white'>

        <p className='text-[32px]'>Dispute History</p>

        <div className='pt-17.5 pb-6.5'>

          <table className='w-full'>

            <thead className='border-b border-white'>
              <tr>
                <th>Dispute ID</th>
                <th>Service</th>
                <th>Issue Description</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr className='border-b border-white'>
                <td>DP202501</td>
                <td>Website Development</td>
                <td>Lorem Ipsum is simply dummy ...</td>

                <td>
                  <button className=' text-[#B5850B] flex px-3 py-1.5 bg-white justify-center items-center gap-x-1.5 rounded-[4px]'>
                    <img src="/images/Vector.png" />
                    <span>Pending</span>
                  </button>
                </td>

                <td>Feb 20, 2024</td>

                <td>
                  <button
                    onClick={viewDetail}
                    className='hover:cursor-pointer text-white px-7 py-3 border items-center border-white rounded-[60px]'
                  >
                    View Detail
                  </button>
                </td>

              </tr>
              <tr className='border-b border-white'>
                <td>DP202501</td>
                <td>Website Development</td>
                <td>Lorem Ipsum is simply dummy ...</td>

                <td>
                  <button className=' text-[#B5850B] flex px-3 py-1.5 bg-white justify-center items-center gap-x-1.5 rounded-[4px]'>
                    <img src="/images/Vector.png" />
                    <span>Pending</span>
                  </button>
                </td>

                <td>Feb 20, 2024</td>

                <td>
                  <button
                    onClick={viewDetail}
                    className='hover:cursor-pointer text-white px-7 py-3 border items-center border-white rounded-[60px]'
                  >
                    View Detail
                  </button>
                </td>

              </tr>
              <tr className='border-b border-white'>
                <td>DP202501</td>
                <td>Website Development</td>
                <td>Lorem Ipsum is simply dummy ...</td>

                <td>
                  <button className='text-[#B5850B] flex px-3 py-1.5 bg-white justify-center items-center gap-x-1.5 rounded-[4px]'>
                    <img src="/images/Vector.png" />
                    <span>Pending</span>
                  </button>
                </td>

                <td>Feb 20, 2024</td>

                <td>
                  <button
                    onClick={viewDetail}
                    className='hover:cursor-pointer text-white px-7 py-3 border items-center border-white rounded-[60px]'
                  >
                    View Detail
                  </button>
                </td>

              </tr>
              

            </tbody>

          </table>

        </div>
      </div>

      {detail && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <div ref={modalRef}>
            <DisputeDetail />
          </div>
        </div>
      )}

    </>
  )
}