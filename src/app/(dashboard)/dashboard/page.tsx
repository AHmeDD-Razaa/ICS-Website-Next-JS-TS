"use client";
import React, { useState } from 'react'

import dynamic from "next/dynamic";
import DashboardBox from '@/app/components/DashboardBox';
import Button from '@/app/components/Button';
import DashboardService from '@/app/components/DashboardService';

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function page() {

  const series = [30, 50, 20];

  const options: ApexCharts.ApexOptions = {
  chart: {
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
          size: "65%",
        },
      dataLabels: {
        name: {
          fontSize: "18px",
        },
        value: {
          fontSize: "36px",
          fontWeight:"600",
          color:"white"
        },
        total: {
          show: true,
          label: "Total Projects",
          formatter: () => "100",
          color:"white"
          
        },
      },
    },
  },
  labels: ["Pending Approval", "In Progress ", "Completed"],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "left",
    fontSize: "18px",

    markers: {
      size: 7,
    },

    itemMargin: {
      horizontal: 0,
      vertical: 5,
    },
  },
};


  return (
    <div>
      <div className="container mx-auto pt-17.5 pb-50 text-white">
        <p className='text-[32px]'>Dashboard Overview</p>
        <div className="grid grid-cols-12 pt-9 gap-x-13.5 ">
          <div className="col-span-4 flex flex-col gap-y-6.5">
            <DashboardBox text1={"05"} text2={'Total Projects'} />
            <DashboardBox text1={'03'} text2={' In Progress'} />
          </div>
          <div className="col-span-4 flex flex-col gap-y-6.5">
            <DashboardBox text1={"60"} text2={'Completed'} />
            <DashboardBox text1={'05'} text2={'Pending Approval'} />
          </div>
          <div className="col-span-4 rounded-[10px] px-6.25 pt-5.75 pb-3.5 bg-[#0A0F1E]">
            <h2 className='font-bold text-[24px]'>Projects Overview</h2>
            <ReactApexChart
              options={options}
              series={series}
              type="radialBar"
              height={350}
            />
          </div>
        </div>
        <div className="flex pt-15 justify-between">
          <span className='text-[32px]'>Booking Service</span>
          <Button text={'View All'} image={false} />
        </div>
        <div className="pt-7.5 gap-x-17.5 grid grid-cols-12">
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
    </div>
  )
}
