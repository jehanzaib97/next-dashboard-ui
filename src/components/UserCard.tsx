import Image from "next/image";

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
        <div className="flex justify-between items-center">
            <span className="text-[10px] bg-white px-1 py-1 rounded-full text-green-600">2044/05</span>
            <Image src="/more.png" alt="avatar" width={32} height={32} />
        </div>
        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  )
}

export default UserCard