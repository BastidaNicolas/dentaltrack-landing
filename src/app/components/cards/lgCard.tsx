type LgCardTypes = {
    title:string,
    description:string,
    colors:{
        secondary:string,
        primary:string,
        text:string
    },
    icon:any
}

export default function LgCard({title, description, colors, icon}: LgCardTypes) {
    return (
      <div className={`relative border-2 border-black ${colors.primary} px-8 sm:px-5 md:px-8 pb-9 sm:pb-6 pt-14 sm:pt-5 rounded-2xl`}>
        <div className={`font-bold mb-7 text-2xl ${colors.text} sm:max-w-[75%]`} >{title}</div>
        <p className={`text-base sm:text-lg ${colors.text}`}>{description}</p>
        <div className="absolute -top-9 sm:top-2 md:top-3 right-3 sm:right-1 md:right-3" >
            <div className="relative">
                <div className={`absolute -top-1 right-1 ${colors.secondary} p-2 rounded-2xl border-2 border-black`} >
                    {icon}
                </div>
                <div className={`bg-black p-2 rounded-2xl border-2 border-black`} >
                    {icon}
                </div>
            </div>
        </div>
      </div>
    );
  }
  