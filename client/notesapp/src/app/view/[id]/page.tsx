import CardSection from "@/components/Cards";
import Cards from "@/components/Cards"



interface Props  {
    params:{id:string}
}
async function page({params}:Props) {
const response=await(await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/notes/${params.id}`)).json();


  return (
    <section className=" bg-slate-900 w-full h-[100%] min-h-screen p-10 ">

<div className="w-full min-h-[50vh] bg-slate-800">
<h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">

        {response?.data?.title}
      </h1>
      <p className="font-normal text-gray-700 dark:text-gray-400  text-xl">
        {response?.data?.content}
       
      </p>
</div>

    </section>
  )
}

export default page