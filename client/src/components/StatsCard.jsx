function StatsCard({title,value}){
    return (
<div
  className="
  bg-[#111827]
  rounded-2xl
  p-6
  border
  border-gray-800
  hover:border-purple-500
  hover:scale-105
  transition-all
  duration-300
"
>
<p className="text-sm text-gray-400 ">{title}</p>
<h2 className="text-2xl font-bold text-white mt-2">{value}</h2>


</div>
    );
}
export default StatsCard;