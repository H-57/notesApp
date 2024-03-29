"use client"
import CardSection from "@/components/Cards";

import Form from "@/components/Form";
import { useState } from "react";

export default  function Home() {
  const [IsChange, setIsChange] = useState(false)
  // console.log(cardData)
  return (
 <>
 <section className=" bg-slate-900 w-full  min-h-screen p-10 ">

<Form setIsChange={setIsChange} IsChange={IsChange} />
<CardSection setIsChange={setIsChange} IsChange={IsChange} />

 
 


 </section>
 
 </>
  );
}
