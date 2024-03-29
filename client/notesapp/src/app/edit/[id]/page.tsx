"use client"
import CardSection from '@/components/Cards';
import Cards from '@/components/Cards'
import Form from '@/components/Form'

import { useState } from "react";

interface Props  {
    params:{id:string}
}
 function Page({params}:Props) {

  const [IsChange, setIsChange] = useState(false)
  return (
    <section className=" bg-slate-900 w-full  min-h-screen p-10 ">

<Form id={params.id} setIsChange={setIsChange} IsChange={IsChange} />
<CardSection setIsChange={setIsChange} IsChange={IsChange} />


 </section>
  )
}

export default Page