import SmCard from "./cards/ smCard";

const cardContent = [
    {
        title: "Manage Appointments",
        description: 'Keep track of all your appointments in one place, create "offices" for each location and filter by status, date and patient name.'
    },
    {
        title: "Automate Reminders",
        description: "Never forget an appointment again!  Automatically sends reminders to your patients via WhatsApp, saving you the hassle of manual reminders."
    },
    {
        title: "Customize Tags",
        description: "Categorize your appointments by types. This makes it easy to see what type of appointment is coming up and what needs to be done."
    },
    {
        title: "Status Updates",
        description: "Easily reschedule appointments and mark them as done, canceled or no show. Keep track of patient history and stay on top."
    },
    {
        title: "Improved Productivity",
        description: "By reducing missed appointments and sending timely reminders, you'll increase patient loyalty and referrals."
    },
    {
        title: "Easy to Use ",
        description: "With a user-friendly interface and intuitive design, you'll be up and running in no time. Even when you're on the go."
    },
]

export default function GridSection() {
    return (
      <div className="px-3 pt-24 pb-24 md:pb-48 lg:px-0" id="features">
        <div className="max-w-5xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10 md:gap-[53px]">
            {cardContent.map((item, index) => (
                <SmCard key={index} title={item.title} description={item.description}/>
            ))}
        </div>
      </div>
    );
  }
  