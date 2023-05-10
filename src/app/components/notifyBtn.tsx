"use client"
type notifyBtnType = {
    text: string,
}

const thiswillconsole = () => {
  console.log("header button clicked")
}

export default function NotifyBtn({text}: notifyBtnType) {
    return (
      <button className="bg-white font-bold text-base capitalize border-2 border-black rounded-lg py-2 px-3" onClick={thiswillconsole} >
            {text}
      </button>
    )
  }
  