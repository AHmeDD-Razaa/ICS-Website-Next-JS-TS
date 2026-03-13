import Button from '@/app/components/Button'
import DashboardService from '@/app/components/DashboardService'
import React from 'react'

export default function page() {
    return (
        <div className='text-white container mx-auto'>
            <div className="flex pt-17.5 pb-17.5 justify-between">
              <span className='text-[32px]'>Booking Service</span>
              <Button text={'View All'} image={false} />
            </div>
            <div className="pb-50 gap-17.5 grid grid-cols-12">
              <div className="col-span-4">
                <DashboardService text={'--'} />
              </div>
              <div className="col-span-4">
                <DashboardService text={'Michael'} />
              </div>
              <div className="col-span-4">
                <DashboardService text={'Michael'} />
              </div>
              <div className="col-span-4">
                <DashboardService text={'--'} />
              </div>
              <div className="col-span-4">
                <DashboardService text={'Michael'} />
              </div>
              <div className="col-span-4">
                <DashboardService text={'Michael'} />
              </div>
            </div>
        </div>
    
    )
}
