"use client";

import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { error } from "console";
interface Props {
  title: string;
  description: string;
  id?: string;
  setIsChange:any;
  IsChange:boolean;
  created:string;
}

function Cards({ title, description, id ,IsChange,setIsChange,created}: Props) {
  const router = useRouter();
 async function handleDelete() {
  try {
    const response=await(await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/notes/${id}`,{
  method:"DELETE",
})).json();
if(response.success){
  toast.success(response.message);

  }
  else{
    toast.error(response.message);
  }
setIsChange(!IsChange)
  } catch (error) {
    toast.error("something went wrong");
  }

}
  return (
    <div className="relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex absolute right-5 top-2 text-2xl gap-5 ">
        {" "}
        <FaEye
          title="view"
          className="text-blue-500 hover:opacity-50 cursor-pointer"
          onClick={() => router.push(`/view/${id}`)}
        />
        <FaEdit
          title="edit"
          className="text-yellow-500 hover:opacity-50 cursor-pointer"
          onClick={() => {
            
            router.push(`/edit/${id}`)}}
        />
        <MdDelete
          title="delete"
          onClick={handleDelete}
          className="text-red-500 hover:opacity-50 cursor-pointer"
        />{" "}
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description?.slice(0, 130)} ...
      </p>
      <p className="text-sm font-bold pt-5 text-gray-700 dark:text-gray-400">Date:-{created.split(":")[0]} </p>
    </div>
  );
}




function CardSection({setIsChange ,IsChange}:{
  setIsChange:any; IsChange:boolean
}){
const [CardsData, setCardsData] = useState <any> ()

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/notes`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCardsData(data);
    } catch (error:any) {
      toast.error(error?.message);
    }
  };

  // Immediately fetch data when component mounts
  fetchData();

  // Fetch data whenever IsChange changes
}, [IsChange]);


  return(
    <>
    <div className="flex gap-5 flex-wrap my-5">
    {
    CardsData?.data?.map((data:any)=>(
  
  <Cards created={data?.createdAt} setIsChange={setIsChange} IsChange={IsChange} key={data?._id} title={data?.title} description={data?.content} id={data?._id} />
    ))
  }
  
  </div>

    </>
  )
  
}
export default CardSection;