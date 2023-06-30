import OnViewDownToUp from "./animation/onViewDownToUp";
import OnViewTaggin from "./animation/onViewTagging";
import LgCard from "./cards/lgCard";

export default function TwoColSection() {
  return (
    <>
      <div className="grid grid-cols-1 px-3 xl:px-6 2xl:px-0 md:grid-cols-2 gap-8 md:gap-8 lg:gap-16 max-w-7xl m-auto">
        <LgCard
          title="Powerfull Tagging System"
          description="Identify and manage appointments based on the services provided. Dentists can quickly see what kind of appointment is scheduled and what they need to do to prepare."
          icon={<OnViewTaggin/>}
        />
        <LgCard
          title="Comprehensive Appointment History"
          description="Our app also makes it easy to search for specific patients and appointments, ensuring that all the information you need is right at your fingertips."
        />
      </div>
    </>
  );
}
