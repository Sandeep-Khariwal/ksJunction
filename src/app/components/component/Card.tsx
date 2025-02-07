"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Card = (data: {
  id:number;
  image: string;
  tittle: string;
  desc: string;
  duration?: string;
  fees?: string;
}) => {
  const navigation = useRouter()
  return (
    <motion.div
      initial={{ y: "10%", opacity: 1 }}
      whileInView={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1 }}
      className=" w-full lg:w-1/4 m-4 p-2 shadow-lg bg-[#fff] rounded-2xl "
    >
      <motion.svg
        width="200"
        viewBox="-15 -15 230 230"
        initial="hidden"
        animate="visible"
        spacing={10}
        className={"m-auto  "}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#6a5cff", stopOpacity: 1, margin: "5px" }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#c34aff", stopOpacity: 1, margin: "5px" }}
            />
          </linearGradient>
        </defs>
        <motion.circle
          cx="100"
          cy="100"
          r="110"
          stroke="url(#gradient)"
          strokeWidth={10}
          variants={draw}
          custom={1}
        />
        <foreignObject x="0" y="0" width="200" height="200">
          <div className="flex justify-center items-center">
            <Image
              src={data.image}
              alt="Description of image"
              width={200}
              height={200}
              className="rounded-full "
            />
          </div>
        </foreignObject>
      </motion.svg>

      <p className="font-semibold text-[#36454F] m-2 text-2xl leading-tight text-center ">
        {data.tittle}
      </p>
      {data.duration && data.fees && (
        <div className="w-full flex items-center justify-between ">
          <p className="font-semibold text-[#36454F] m-2 text-sm  text-center ">
            Duration:{" "}
            <span className=" text-sm font-poppins text-gray-500 text-center">
              {data.duration}
            </span>
          </p>
          <p className="font-semibold text-[#36454F] m-2 text-sm  text-center ">
            Fees:{" "}
            <span className=" text-sm font-poppins text-gray-500 text-center">
              {data.fees}
            </span>
          </p>
        </div>
      )}
      <p className="mt-3 text-lg m-2 font-poppins text-gray-500 text-center ">
        {data.desc}
      </p>
      <div className="w-full flex justify-center items-center mt-10 ">
        <button
        onClick={()=>navigation.push(`/details/${data.id}`)}
          
          className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium py-2 px-6 rounded-lg hover:scale-105 transform transition duration-200"
        >
          Read more
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
