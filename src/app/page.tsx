
import data from "@/data/data.json"
import WebSection from '@/components/WebSection/WebSection'
import Banner from '@/components/Banner/Banner'
export default function Home() {
  return (
    <main>
     <section className='w-full px-[1rem]'>
      <div className='max-w-[1290px] mx-auto pt-[3.75rem] md:pt-[5rem] mb-[5rem] md:mb-[8.75rem]'>
        <h1 className='text-white font-extrabold text-[40px] md:text-[87px]'>LOREM IPSUM</h1>
        <WebSection sectionType="section1" data={data}/>
      </div>
     </section>

     <section className="text-white w-full px-[1rem]">
      <div  className='relative group w-full hover:bg-aboutUs bg-cover'>
      <WebSection sectionType="aboutUs" data={data}/>
      </div>
     </section>

     <section className="text-white w-[100vw] ">
      <div className='h-[46px] group'>
      <Banner/>
      </div>
     </section>

     <section className='w-full px-[1rem]'>
      <div className='max-w-[1290px] mx-auto pt-[3.75rem] md:pt-[5rem] mb-[5rem] md:mb-[8.75rem]'>
        <h1 className='text-white font-extrabold text-[40px] md:text-[87px] uppercase md:leading-[100%] md:max-w-[60.625rem]'>LOREM IPSUM DOLOR Set</h1>
        <WebSection sectionType="section2" data={data}/>
      </div>
     </section>

     <section className='w-full px-[1rem]'>
      <div className='md:max-w-[1290px] mx-auto pt-[3.75rem] md:pt-[5rem] mb-[5rem] md:mb-[8.75rem] flex justify-center flex-col items-center gap-[4.69rem]'>
        <h1 className='text-white font-extrabold text-[40px] md:text-[87px] uppercase md:leading-[100%]'>LOREM IPSUM DOLOR</h1>
        <WebSection sectionType="faqs" data={data}/>
      </div>
     </section>
    </main>
  )
}
