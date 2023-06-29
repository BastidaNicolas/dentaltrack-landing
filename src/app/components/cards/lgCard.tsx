type LgCardTypes = {
  title: string;
  description: string;
  colors?: {
    secondary: string;
    primary: string;
    text: string;
  };
  icon?: any;
};

export default function LgCard({
  title,
  description,
  colors,
  icon,
}: LgCardTypes) {
  return (
    <div className="w-full border-4 border-black rounded-2xl bg-blue-600">
      <div className="h-80 md:h-[336px] bg-slate-100 rounded-t-xl ">
        {/*add animated svg*/}
      </div>
      <div className="h-max p-7 sm:p-8 border-t-4 border-black rounded-b-xl text-white">
        <div className="font-bold text-3xl sm:text-4xl mb-3 sm:mb-4 capitalize">
          {title}
        </div>
        <p className="text-lg sm:text-2xl">{description}</p>
      </div>
    </div>
  );
}
