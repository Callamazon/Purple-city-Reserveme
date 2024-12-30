import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from "src/components/ui/badge"


const LocationDetail = () => {
  const navigate = useNavigate()
  const properties = ["cat", "dog", "mouse","cat", "dog", "mouse",]
  return (
    <div className='bg-white h-screen w-screen px-28 py-7'>
      <div className='h-16 w-full flex flex-row justify-between'>
        <div className='max-h-8 w-8 bg-blue-500'>Logo</div>
        <div>

        <button className='border border-2 border-slate-300 hover:border-slate-400 rounded-md p-2 max-h-full flex felx-row gap-2 items-center'
        onClick={()=>{
          navigate(-1)
        }}>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-from-line"><path d="m9 6-6 6 6 6"/><path d="M3 12h14"/><path d="M21 19V5"/></svg></span>
          Dashboard</button>
        </div>
      </div>
    <div className='grid grid-cols-[55%_45%] h-auto w-full gap-16'>
      <div className='col-span-1 bg-white'>
        <div className='bg-red-500 h-[370px]'>Media Carousel</div>
        <div className='flex flex-row justify-between items-start'>
          <div>
            <p className='text-slate-700 font-bold text-4xl mb-1'>Cucrid Auditorium</p>
            <p className='text-slate-500  text-16 flex flex-row gap-1 align-center mb-1'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></span>Cucrid auditorium, 1st flooe cucrid</p>
          </div>
          <div className='flex flex-row items-center'>
          <div className='text-slate-700 font-semibold text-4xl'>$450</div>
          <div className='text-slate-400 font-semibold text-xl'>/hour</div>
          </div>
        </div>
          <div className=''>
            {
              properties.map((property)=>
                
                <div className='inline-flex mr-4 items-center rounded-full px-2.5 py-0.5 text-sm text-red-500 font-semibold transition-colors  bg-rose-300  '>
  4 bedrooms
</div>


              )
            }
            
          </div>
        <div>facilities</div>
      </div>
      <div className='col-span-1 bg-yellow-500'>Calendar</div>
    </div>
    </div>
  )
}

export default LocationDetail