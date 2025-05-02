interface DoctorCardProps {
  photoUrl?: string;
  name: string;
  specialty?: string;
  yearsExperience?: string;
  qualifications?: string;
  location?: string;
  clinic?: string;
  rating?: number;
  ratingCount?: string;
  onlineFee?: number;
  visitFee?: number;
}

const DoctorCard = ({
  photoUrl,
  name,
  specialty,
  yearsExperience,
  qualifications,
  location,
  clinic,
  rating,
  ratingCount,
  onlineFee,
  visitFee,
}: DoctorCardProps) => {
  return (
    <div className="border border-gray-200 max-w mx-auto bg-white overflow-hidden hover:shadow-md lg:grid lg:grid-cols-2 min-h-[150px] sm:min-h-[130px]">
      <div className="flex items-center p-3 sm:p-2">
        <img
          src={photoUrl || "https://images.apollo247.in/images/consult_home/icons/male.png?tr=q-80,f-auto,w-100,dpr-2,c-at_max"}
          alt="Doctor"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          {specialty && <p className="text-gray-600 text-sm w-80 font-semibold">{specialty}</p>}
          {(yearsExperience || qualifications) && (
            <p className="text-purple-400 text-xs font-semibold">
              {yearsExperience} YEARS {yearsExperience && qualifications ? '•' : ''} {qualifications}
            </p>
          )}
          {location && <p className="text-gray-500 text-xs">{location}</p>}
          {clinic && <p className="text-gray-500 text-xs">{clinic}</p>}
          {rating !== 0 && ratingCount && (
            <p className="text-green-600 text-xs">👍 {rating} ({ratingCount})</p>
          )}
        </div>
      </div>
      <div className="flex justify-around items-center p-3 gap-3 lg:pt-15 sm:p-2">
        {onlineFee !== 0 && (
          <div className="text-center w-full">
            <p className="text-gray-700 font-bold text-base">₹{onlineFee}</p>
            <button className="w-full mt-2 border border-cyan-800 text-cyan-800 px-4 py-3 rounded-lg hover:bg-cyan-100 hover:shadow-lg">
              Consult Online
            </button>
          </div>
        )}
        {visitFee !== 0 && (
          <div className="text-center w-full">
            <p className="text-gray-700 font-bold text-base">₹{visitFee}</p>
            <button className="w-full mt-2 bg-cyan-800 text-white px-4 py-3 rounded-lg hover:shadow-lg">
              Visit Doctor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
