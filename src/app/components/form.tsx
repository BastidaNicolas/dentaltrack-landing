export default function Form() {
  return (
    <div className="px-3 lg:px-0 mb-24" id="form">
      <div className="max-w-5xl m-auto bg-blue-500 border-black border-2 rounded-2xl text-white p-5 sm:py-8">
        <div className="font-bold text-3xl mb-4 sm:mb-8 sm:text-center">
          Stay up-to-date on DenalTrack’s launch!
        </div>
        <form
          action=""
          method="post"
          className="flex flex-col sm:flex-row md:justify-center mb-14 md:mb-5"
        >
          <label
            htmlFor="emailInput"
            className="absolute -left-full w-1 h-1 overflow-hidden top-auto"
          >
            email
          </label>
          <input
            type="email"
            name="emailInput"
            id="emailInput"
            placeholder="thisismyemail@email.com"
            className="px-3 py-2 sm:py-3 border-black border-2 rounded-lg text-black mb-3 sm:mb-0 w-full max-w-xl mr-4"
            required
          />
          <div className="relative bg-white font-bold text-base capitalize rounded-lg py-2 px-3 w-fit group">
            Get_Notified
            <button
              type="submit"
              className="z-10 absolute top-0 left-0 group-hover:-translate-x-1 group-hover:-translate-y-1 duration-75 bg-white font-bold text-base capitalize border-2 border-black rounded-lg py-2 px-5 text-black w-fit h-full truncate"
            >
              Get Notified
            </button>
            <div className="z-0 absolute top-0 left-0 bg-black font-bold text-base capitalize border-2 border-black rounded-lg py-2 px-5 text-black w-fit h-full truncate">
              Get Notified
            </div>
          </div>
        </form>
        <div className="text-xs text-center">
          E-mail Will only be used to notify updates & launch date
        </div>
      </div>
    </div>
  );
}
