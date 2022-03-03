import Image from 'next/image';
import profilePic from '../public/Me.png'


export default function Home() {
  return (
    // background
    <div className='font-roboto text-gray-50'>
      
      {/* heading start */}
      <div className='min-h-screen grid grid-cols-4 gap-4 p-28 bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-500'>
          <div className='my-8 py-3 col-start-1 col-end-3'>
            <p className='text-4xl py-1 hover:text-cyan-300'>Hi, </p>
            <p className='text-4xl py-1 hover:text-cyan-300'>I'm Tim,</p>
            <p className='text-4xl py-1 hover:text-cyan-300'>Front End Web Developer.</p>
            <p className='text-sm text-gray-400'>CSS / JavaScript / React</p>

            <button className="mt-8 py-1 px-4 rounded-lg text-gray-100 bg-cyan-500 ease-in-out duration-500 hover:bg-blue-500">Contact Me</button>
          </div>    

          <div className='col-start-4 col-span-1 '>
              <Image className='rounded-lg' src={profilePic} alt="Timothy Cafarella" />
          </div>

          <div className='col-start-2 col-span-2 flex justify-around items-center'>
            <a href="https://github.com/Tcaf351" target="_blank"><img className='h-8 w-8 hover:h-10 hover:w-10 ease-in-out duration-300' src='/github.png' alt="github icon" /></a>

            <p className='text-lg'>Click <a className='text-sky-400 underline decoration-cyan-300 hover:text-2xl hover:text-cyan-400 ease-in-out duration-300' href="mailto:tcaf.351@gmail.com">here</a> for my email</p>

            <a href="https://au.linkedin.com/in/timothy-cafarella-a742731bb" target="_blank"><img className='h-8 w-8 hover:h-10 hover:w-10 ease-in-out duration-300' src='/linkedin.png' alt="linkedin icon"></img></a>
          </div>
      </div>    
      {/* heading end */}


    {/* About section start */}
      <div id='about' className='min-h-screen bg-gradient-to-tl from-slate-500 via-slate-600 to-slate-800 py-28 flex items-center justify-center relative'>

        {/* glass panel start */}
        <div className='bg-[#111928] rounded-xl h-[80vh] w-9/12 p-10 shadow-2xl shadow-cyan-800 z-20 bg-opacity-60 backdrop-blur-md flex justify-center flex-col text-center'>
          <div>
            <p className='text-xl'>My name is Tim Cafarella and I began my journey in web development in early 2020 when I came across a video from a youtuber I watched freqently at the time of a friend of his building his website. I then checked out this coders youtube and was instantly mesmorised about the endless possibilities that you have with coding, and the man things that are possible to build with enough time and dedication. It was at this point that I new web development was my next chapter for my jounrney.</p>
            
            <p className='text-xl py-20'>I am currently looking for a junior front end developer position to take my skills and abilities to the next level.</p>
          </div>

          <div>
            <p className='text-xl'>I have completed a certificate IV of Information Technology (Web Development). <br /> 
            <br />
            I am currently half way through my Diploma of Information Technology (Full Stack Development).</p>
          </div>  
          
        </div>
        {/* glass panel end */}
          
        {/* top left corner of glass */}
        <h1 className='text-9xl text-cyan-300 opacity-20 absolute left-2 top-[3%] z-10'>About</h1>
        {/* top left corner of glass */}

        {/* circle bottom right side start */}
        <div className='bg-cyan-300 h-64 w-64 rounded-full absolute right-20 bottom-2 z-10'></div>
        {/* circle bottom right side end */}

        {/* circle middle left side start */}
        <div className='bg-sky-400 h-36 w-36 rounded-full absolute left-28 z-10'></div>
        {/* circle middle left side end */}

        {/* circle top right side start */}
        <div className='bg-slate-500 h-40 w-40 rounded-full absolute right-28 top-36 z-10'></div>
        {/* circle top right side end */}

      </div>
    {/* About section end */}


    {/* Skills section start */}
    <div className='min-h-screen bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-500 py-48 flex items-center justify-center relative'>

      {/* glass panel start */}
          <div className='bg-slate-500 rounded-xl h-[80vh] w-9/12 shadow-2xl shadow-cyan-400 z-20 bg-opacity-40 backdrop-blur-md flex justify-center flex-col text-center'>
            <p className='text-xl p-10'>I have skills in Javascript using the "FERN" stack which consists of <br />
            <br />
            - Firebase <br />
            - Express <br />
            - Node <br />
            - React
            <br />
            <br />
            I then use Tailwind CSS as my CSS framework of choice to truely bring out my creativity as a developer.</p>

          </div>
      {/* glass panel end */}

       {/* top right corner of glass */}
       <h1 className='text-9xl text-cyan-300 opacity-20 absolute right-2 top-[9%] z-10'>Skills</h1>
        {/* top right corner of glass */}

    </div>
    {/* Skills section end */}


      {/* Project section start */}
      <div className='min-h-screen bg-gradient-to-tl from-slate-500 via-slate-600 to-slate-800 text-gray-900 flex items-center justify-center relative'>

        {/* Glass Section Start */}
        <div className='bg-[#52ACE3] rounded-xl h-[80vh] w-9/12 shadow-2xl shadow-blue-300 z-20 bg-opacity-60 backdrop-blur-lg flex justify-center flex-col relative py-10'>

            <div className='flex items-center justify-center absolute'>

                <div className='flex items-center justify-center'>
                  <h1>test</h1>
                </div>

            </div>
        </div>
        {/* Glass Section End */}

       

            {/* top left corner of glass */}
            <h1 className='text-9xl text-cyan-300 opacity-20 absolute left-2 -top-[4%] z-10'>My Work</h1>
            {/* top left corner of glass */}

            {/* circle top right side start */}
            <div className='bg-[#5BFDB5] h-60 w-60 rounded-full absolute right-48 top-44 z-10 shadow-2xl shadow-sky-500'></div>
            {/* circle top right side end */}

            {/* circle top right side start */}
            <div className='bg-[#5B95FD] h-40 w-40 rounded-full absolute left-28 bottom-56 z-10'></div>
            {/* circle top right side end */}

      </div>
      {/* Project section end */}


    </div>
  )
}
