'use client'

export default function ScrollToTop() {
  return (
    <div
      className="block capitalize font-bold  mb-6 sm:mb-0 sm:mr-6 hover:cursor-pointer "
      onClick={() => window.scrollTo(0,0)}
    >
      scroll to top
    </div>
  );
}
