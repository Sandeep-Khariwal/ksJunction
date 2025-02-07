"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import Service, { ServiceType } from "@/app/components/content/services";
import Course, { CourseType } from "@/app/components/content/About";

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

export default function Page() {
  const params = useParams();
  const [course, setCourse] = useState<CourseType>();

  useEffect(() => {
    const selectedCourse: CourseType[] = Course.filter(
      (d: CourseType) => d.id === Number(params.id)
    );
    if (selectedCourse.length > 0) {
      console.log("course : ", selectedCourse);
      
      setCourse(selectedCourse[0]);
    }
  }, [params.id]);
  return (
    <>
      <div

        className="course-content bg-white "
        dangerouslySetInnerHTML={{ __html: course?.data!! }}
      />
    </>
  );
}
