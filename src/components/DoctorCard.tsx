interface DoctorCardProps {
    name: string;
    specialty: string;
    yearsExperience: string;
    qualifications: string;
    location: string;
    clinic: string;
    rating: number;
    ratingCount: string;
    onlineFee: number;
    visitFee: number;
}

const DoctorCard = ({ name, specialty, yearsExperience, qualifications, location, clinic, rating, ratingCount, onlineFee, visitFee }: DoctorCardProps) => {
    return (
      <div className="border border-gray-200 max-w mx-auto bg-white overflow-hidden hover:shadow-md lg:grid lg:grid-cols-2">
        <div className="flex items-center p-4">
          <img src="https://via.placeholder.com/50" alt="Doctor" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm">{specialty}</p>
            <p className="text-gray-500 text-xs">{yearsExperience} • {qualifications}</p>
            <p className="text-gray-500 text-xs">{location}</p>
            <p className="text-gray-500 text-xs">{clinic}</p>
            <p className="text-green-600 text-xs">👍 {rating} ({ratingCount})</p>
          </div>
        </div>
        <div className="flex justify-around items-center p-4 gap-3 lg:pt-15">
          <div className="text-center w-full">
            <p className="text-gray-700 font-bold text-base">₹{onlineFee}</p>
            <button className="w-full mt-2 border border-cyan-800 text-cyan-800 px-4 py-2 rounded-lg hover:bg-cyan-100 hover:shadow-lg">Consult Online</button>
          </div>
          <div className="text-center w-full ">
            <p className="text-gray-700 font-bold text-base">₹{visitFee}</p>
            <button className="w-full mt-2 bg-cyan-800 text-white px-4 py-2 rounded-lg hover:shadow-lg">Visit Doctor</button>
          </div>
        </div>
      </div>
    );
  };

export default DoctorCard;