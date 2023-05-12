import Image from "next/image";
import think from "public/think.svg";

export default function XlCard() {
  return (
    <div className="relative w-full md:grid md:grid-cols-12 items-center">
      <div className="z-10 relative flex flex-col items-center md:border-2 md:border-black md:bg-blue-500 md:rounded-2xl md:grid md:col-start-2 col-end-13 md:grid-cols-11 py-6 md:py-16">
        <div className="md:absolute mb-5 md:mb-0 md:-top-[20%] md:-left-[20%] m-auto z-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-none md:w-auto md:col-end-6">
          <Image src={think} alt="think" className="block w-full" />
        </div>
        <div className="max-w-[477px] z-10 text-white md:col-start-6 md:col-end-12 mx-4 md:ml-3 md:mr-16">
          <div className="font-bold mb-4 text-2xl">
            Efficient Appointment Management
          </div>
          <p className="text-lg">
            With DentalTrack, managing appointments has never been easier. Our
            app allows dentists to schedule and reschedule appointments, mark
            them as completed, and track cancellations and no-shows, all in one
            place. Say goodbye to confusing schedules and missed appointments!
          </p>
        </div>
      </div>
      <div className="z-0 absolute top-[20%] sm:top-[25%] border-2 border-black bg-blue-500 rounded-2xl w-full h-[80%] md:hidden"></div>
    </div>
  );
}
