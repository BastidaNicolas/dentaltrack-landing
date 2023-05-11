import NotifyBtn from "../notifyBtn";

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
    <div className="bg-white border-2 border-neutral-500 text-neutral-500 py-6 px-5 rounded-2xl min-h-[395px] h-full w-full">
      <div className="font-bold text-3xl capitalize mb-4">{content.title}</div>
      <div className="flex items-end mb-4">
        <div className="text-4xl mr-2">${content.price}</div>
        <div className="capitalize text-xl">{`per ` + content.type}</div>
      </div>
      <ul className="list-disc ml-5 text-base mb-8 capitalize">
        {content.features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PlanCard({ content }: PlanCardType) {
  return (
    <div className="relative">
      {!content.disabled ? (
        <>
          <div className="absolute top-0 left-0 hover:-translate-x-1 hover:-translate-y-1 duration-75 min-h-[395px] bg-white border-2 border-black py-6 px-5 rounded-2xl h-full w-full">
            <div className="font-bold text-3xl capitalize mb-4">
              {content.title}
            </div>
            <div className="flex items-end mb-4">
              <div className="text-4xl mr-2">${content.price}</div>
              <div className="capitalize text-xl">{`per ` + content.type}</div>
            </div>
            <ul className="list-disc ml-5 text-base mb-8 capitalize">
              {content.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <NotifyBtn text="get notified" />
          </div>
          <div className=" bg-black border-2 border-black py-6 px-5 rounded-2xl w-full min-h-[395px]">
            <div className="font-bold text-3xl capitalize mb-4">
              {content.title}
            </div>
            <div className="flex items-end mb-4">
              <div className="text-4xl mr-2">${content.price}</div>
              <div className="capitalize text-xl">{`per ` + content.type}</div>
            </div>
            <ul className="list-disc ml-5 text-base mb-8 capitalize">
              {content.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="bg-white font-bold text-base capitalize border-2 border-black rounded-lg py-2 px-3 truncate  ">
              get notified
            </div>
          </div>
        </>
      ) : (
        <DisabledPlanCard content={content} />
      )}
    </div>
  );
}
