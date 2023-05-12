import Image from "next/image";

type XlCardType = {
  content:{
    title:string,
    description:string
  },
  colors:{
    background:string,
    text:string
  }
  image:any,
  reverse:boolean
}


export default function XlCard({content, colors, image, reverse}:XlCardType) {
  return (
    <div className="relative w-full md:grid md:grid-cols-12 items-center mb-24">
      <div className={`z-10 relative flex flex-col items-center md:border-2 md:border-black md:${colors.background} md:rounded-2xl md:grid md:grid-cols-11 ${reverse ? 'md:col-start-1 col-end-12':'md:col-start-2 col-end-13'} py-6 md:py-16`}>
        <div className={`md:absolute mb-5 md:mb-0 m-auto z-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-none md:w-auto md:-top-[20%] ${reverse ? 'md:-right-[20%] md:col-start-7 md:col-end-13':'md:-left-[20%] md:col-start-1 md:col-end-6'}`}>
          <Image src={image} alt="think" className="block w-full" />
        </div>
        <div className={`max-w-[477px] z-10 ${colors.text} mx-4 ${reverse?'md:col-start-1 md:col-end-7 md:mr-3 md:ml-16':'md:col-start-6 md:col-end-12 md:ml-3 md:mr-16'}`}>
          <div className="font-bold mb-4 text-2xl">
            {content.title}
          </div>
          <p className="text-lg">
            {content.description}
          </p>
        </div>
      </div>
      <div className={`z-0 absolute top-[23%] sm:top-[25%] border-2 border-black ${colors.background} rounded-2xl w-full h-[80%] md:hidden`}></div>
    </div>
  );
}
