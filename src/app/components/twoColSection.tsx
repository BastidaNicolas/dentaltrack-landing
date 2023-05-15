import OnViewDownToUp from "./animation/onViewDownToUp";
import LgCard from "./cards/lgCard";

export default function TwoColSection() {
  return (
    <OnViewDownToUp>
      <div className="grid grid-cols-1 px-3 lg:px-0 sm:grid-cols-2 gap-16 sm:gap-8 md:gap-16 max-w-5xl m-auto mb-24">
        <LgCard
          title="Intelligent Patient Notifications"
          description="With DentalTrack, patients are automatically notified when an appointment is scheduled and when it's time to come in. Our app uses WhatsApp to send reminders, ensuring that patients never miss an appointment. This not only helps keep the schedule on track, but also leads to happier, healthier patients."
          colors={{
            primary: "bg-blue-500",
            secondary: "bg-white",
            text: "text-white",
          }}
          icon={
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.3333 21.3333H50.6667C52.0812 21.3333 53.4377 21.8952 54.4379 22.8954C55.4381 23.8956 56 25.2521 56 26.6666V42.6666C56 44.0811 55.4381 45.4377 54.4379 46.4379C53.4377 47.4381 52.0812 48 50.6667 48H45.3333V58.6666L34.6667 48H24C23.2995 48.0007 22.6058 47.863 21.9588 47.5948C21.3117 47.3267 20.7239 46.9333 20.2293 46.4373M20.2293 46.4373L29.3333 37.3333H40C41.4145 37.3333 42.771 36.7714 43.7712 35.7712C44.7714 34.771 45.3333 33.4144 45.3333 32V16C45.3333 14.5855 44.7714 13.2289 43.7712 12.2287C42.771 11.2285 41.4145 10.6666 40 10.6666H13.3333C11.9188 10.6666 10.5623 11.2285 9.5621 12.2287C8.5619 13.2289 8 14.5855 8 16V32C8 33.4144 8.5619 34.771 9.5621 35.7712C10.5623 36.7714 11.9188 37.3333 13.3333 37.3333H18.6667V48L20.2293 46.4373Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <LgCard
          title="Comprehensive Appointment History"
          description="DentalTrack provides a complete history of all appointments, allowing dentists to quickly and easily review past sessions. Our app also makes it easy to search for specific patients and appointments, ensuring that all the information you need is right at your fingertips."
          colors={{
            primary: "bg-neutral-100",
            secondary: "bg-blue-500",
            text: "text-balck",
          }}
          icon={
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M22.5 12.5H17.5C16.1739 12.5 14.9021 13.0268 13.9645 13.9645C13.0268 14.9021 12.5 16.1739 12.5 17.5V47.5C12.5 48.8261 13.0268 50.0979 13.9645 51.0355C14.9021 51.9732 16.1739 52.5 17.5 52.5H42.5C43.8261 52.5 45.0979 51.9732 46.0355 51.0355C46.9732 50.0979 47.5 48.8261 47.5 47.5V17.5C47.5 16.1739 46.9732 14.9021 46.0355 13.9645C45.0979 13.0268 43.8261 12.5 42.5 12.5H37.5M22.5 12.5C22.5 13.8261 23.0268 15.0979 23.9645 16.0355C24.9021 16.9732 26.1739 17.5 27.5 17.5H32.5C33.8261 17.5 35.0979 16.9732 36.0355 16.0355C36.9732 15.0979 37.5 13.8261 37.5 12.5M22.5 12.5C22.5 11.1739 23.0268 9.90215 23.9645 8.96447C24.9021 8.02678 26.1739 7.5 27.5 7.5H32.5C33.8261 7.5 35.0979 8.02678 36.0355 8.96447C36.9732 9.90215 37.5 11.1739 37.5 12.5M30 30H37.5M30 40H37.5M22.5 30H22.525M22.5 40H22.525"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>
    </OnViewDownToUp>
  );
}
