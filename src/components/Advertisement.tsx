export default function Advertisement() {
  return (
    <div className="relative">
      <div className="sticky top-[190px] w-55 ml-6 bg-blue-900 text-white p-4 rounded-lg h-60 cursor-pointer hidden lg:block">
        <div>
          <img
            src="https://images.apollo247.in/images/doctor-listing/consult_doctor.png?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
            alt="adv"
          />
        </div>
        <p className="font-semibold">Need help consult the right doctor?</p>
        <a href="tel:+918040245807" className="underline">
          Call +91-8040245807 to book instantly
        </a>
      </div>
    </div>
  );
}
