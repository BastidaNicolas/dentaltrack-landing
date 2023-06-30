import Link from "next/link";

type PlanCardType = {
  content: {
    title: string;
    price: string;
    type: string;
    features: string[];
    disabled: boolean;
  };
};

function DisabledPlanCard({ content }: PlanCardType) {
  return (
    <div className="drop-shadow-[4px_4px_0px_rgb(115_115_115)] duration-100 min-h-[423px] bg-white border-4 border-neutral-500 text-neutral-500 p-6 xl:p-8 rounded-2xl h-full w-full">
      <div className="font-bold text-4xl capitalize mb-4 truncate">
        {content.title}
      </div>
      <div className="flex items-end mb-4">
        <div className="text-5xl mr-2">${content.price}</div>
        <div className="capitalize text-xl truncate">
          {`per ` + content.type}
        </div>
      </div>
      <ul className="list-disc ml-5 text-base xl:text-lg mb-8 capitalize">
        {content.features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PlanCard({ content }: PlanCardType) {
  return (
    <div className="max-w-[354px] w-full">
      {!content.disabled ? (
        <Link href={"#form"}>
          <div className="drop-shadow-[4px_4px_0px_#000000] active:drop-shadow-[0px_0px_0px_#000000] hover:cursor-pointer duration-100 min-h-[423px] bg-white border-4 border-black p-6 md:p-8 rounded-2xl h-full w-full">
            <div className="font-bold text-4xl capitalize mb-4 truncate">
              {content.title}
            </div>
            <div className="flex items-end mb-4">
              <div className="text-5xl mr-2">${content.price}</div>
              <div className="capitalize text-xl truncate">
                {`per ` + content.type}
              </div>
            </div>
            <ul className="list-disc ml-5 text-base xl:text-lg mb-8 capitalize">
              {content.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {/* <NotifyBtn text="get notified" style="" /> */}
          </div>
        </Link>
      ) : (
        <DisabledPlanCard content={content} />
      )}
    </div>
  );
}
