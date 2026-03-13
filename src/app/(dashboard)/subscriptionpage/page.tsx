import React from 'react'

export default function page() {
  return (
    <div className='container mx-auto pt-17.5 pb-50 text-white'>
      <p className='text-[32px]'>Subscription</p>
      <div className=' pt-17.5 pb-6.5 '>
        <table className='w-full'>
          <thead className='border-b border-white'>
            <tr>
              <th>Plan Name</th>
              <th>Status</th>
              <th>Billing Cycle</th>
              <th>Start Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-white'>
              <td>Active</td>
              <td>Monthly</td>
              <td>Feb 20, 2024</td>
              <td>March 20, 2024</td>
              <td>$40</td>
              <td>Stripe</td>
              <td>
                <button className='text-white px-7 py-3 border items-center border-white rounded-[60px]' >
                  Cancel
                </button></td>
            </tr>
            <tr>
              <td>Active</td>
              <td>Monthly</td>
              <td>Feb 20, 2024</td>
              <td>March 20, 2024</td>
              <td>$40</td>
              <td>Stripe</td>
              <td><button className='text-white px-7 py-3 border items-center border-white rounded-[60px]' >
                Cancel
              </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


