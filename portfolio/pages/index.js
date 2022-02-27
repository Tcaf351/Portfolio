import Image from 'next/image';
import profilePic from '../public/Me.png'

// page sections

export default function Home() {
  return (
    // background
    <div className='font-roboto text-gray-50'>
      
      {/* heading start */}
      <div className='grid grid-cols-3 gap-4 p-28 bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-500'>
          <div className='my-8 py-3 col-start-1 col-end-2'>
            <p className='text-4xl py-1 hover:text-cyan-300'>Hi, </p>
            <p className='text-4xl py-1 hover:text-cyan-300'>I'm Tim,</p>
            <p className='text-4xl py-1 hover:text-cyan-300'>Web Developer.</p>
            <p className='text-sm text-gray-400'>CSS / JavaScript / React</p>

            <button className="mt-8 py-1 px-4 rounded-lg text-gray-100 bg-cyan-500">Contact Me</button>
          </div>    

          <div className='col-end-7 col-span-2'>
              <Image className='rounded-lg' src={profilePic} alt="Timothy Cafarella" />
          </div>
      </div>    
      {/* heading end */}

      <div className='py-28'></div>

    {/* About section start */}
      <div className='min-h-screen bg-gradient-to-tr from-slate-500 via-slate-600 to-slate-800 py-48 flex items-center justify-center relative'>

      {/* glass panel start */}
      <div className='bg-[#111928] rounded-xl h-[80vh] w-9/12 shadow-2xl shadow-cyan-800 z-20 bg-opacity-60 backdrop-blur-md flex items-center justify-center flex-col'>
        <p className='text-md py-10 hover:text-red-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, libero?</p>
        <p className='text-md py-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, libero?</p>
        <p className='text-md py-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, libero?</p>
      {/* glass panel end */}
      </div>
        
        {/* top left corner of glass */}
      <h1 className='text-9xl text-cyan-300 opacity-20 absolute left-2 top-[12%] z-10'>About</h1>

      {/* circle right side start */}
      <div className='bg-cyan-300 h-64 w-64 rounded-full absolute right-14 bottom-28 z-10'></div>
      {/* circle right side end */}

      </div>
    {/* About section end */}
      
    

    <div className='py-28'></div>


    </div>
  )
}
