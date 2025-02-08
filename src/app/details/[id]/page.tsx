"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Course, { CourseType } from "@/app/components/content/About";


export default function Page() {
  const params = useParams();
  const [course, setCourse] = useState<CourseType>();

  useEffect(() => {
    const selectedCourse: CourseType[] = Course.filter(
      (d: CourseType) => d.id === Number(params.id)
    );
    if (selectedCourse.length > 0) {
      setCourse(selectedCourse[0]);
    }
  }, [params.id]);
  return (
    <>
      <div
        className="course-content bg-white "
        dangerouslySetInnerHTML={{ __html: course?.data || ""
         }}
      />
    </>
  );
}
