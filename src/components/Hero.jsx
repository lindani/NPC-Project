// import video1 from '../assets/video1.mp4'
// import video2 from "../assets/video2.mp4";
// import photo from "../assets/ndibs.png"; // After editing the image
import {TextGenerateEffect} from "./ui/TextGenerateEffect"

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-12 px-4">      {/* Background Image */}
      {/* <img
        src={photo}
        alt="Ndithini Tyhido"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
      /> */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        <TextGenerateEffect
          className="text-5xl sm:text-7xl lg:text-8xl text-center tracking-wide"
          words={
            <>
              Mentoring Minds,{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Building Futures.
              </span>
            </>
          }
        />
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          We are a grassroots foundation committed to unlocking potential in under-resourced communities. Through mentorship, skills development, and education, we support young people in becoming leaders, change makers, and confident voices for a better future.
        </p>
        <div className="flex justify-center my-10">
          <a href="#about" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 mx-3 border rounded-md'>
            Read More
          </a>
          <a href="#contact" className="py-3 px-4 mx-3 rounded-md border">
            Contact Us
          </a>
        </div>
        {/* Image next to text */}

        {/* <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
    </div>
  )
}

export default Hero