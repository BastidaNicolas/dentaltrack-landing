import Image from "next/image";

type XlCardType = {
  content: {
    title: string;
    description: string;
  };
  image: any;
  reverse: boolean;
};

export default function XlCard({
  content,
  image,
  reverse,
}: XlCardType) {
  return (
    <div className={`flex mb-7 md:mb-24 ${reverse ? 'lg:flex-row-reverse':'lg:flex-row'} flex-col-reverse lg:gap-x-4 sm:gap-y-3 xl:gap-x-[106px]`}>
      <div className="relative w-full lg:min-w-[476px] xl:min-w-[528px] h-[clamp(247px,_90vw,_592px)] lg:h-[381px] xl:h-[423px]">
        <Image
          src={image}
          alt="think"
          className="object-contain w-full h-auto"
          fill
        />
      </div>
      <div className="lg:sticky lg:top-0 h-fit">
        <div className="capitalize font-bold text-3xl sm:text-5xl mb-6">
          {content.title}
        </div>
        <p className="text-lg sm:text-2xl">
          {content.description}
        </p>
      </div>
    </div>
  );
}
