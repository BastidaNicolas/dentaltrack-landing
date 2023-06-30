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
      <div className="relative h-60 sm:h-[336px] bg-slate-100 rounded-t-xl flex justify-center items-center">
        {/*add animated svg*/}
        {icon}
      </div>
      <div className="h-max p-4 sm:p-8 border-t-4 border-black rounded-b-xl text-white">
        <div className="font-bold text-xl sm:text-4xl mb-3 sm:mb-4 capitalize">
          {title}
        </div>
        <p className="text-base sm:text-2xl">{description}</p>
      </div>
    </div>
  );
}
