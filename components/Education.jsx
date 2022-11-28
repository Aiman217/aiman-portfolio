import React from "react";

const Education = () => {
  var educationLists = [
    {
      status: "Finished",
      place: "KOLEJ MATRIKULASI SELANGOR",
      level: "Matriculation",
      color: "badge-warning",
    },
    {
      status: "Current",
      place: "UNIVERSITI SAINS MALAYSIA",
      level: "Bachelor of Computer Science (Honours)",
      color: "badge-success",
    },
  ];

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src="./education.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title pb-4">My Education!</h2>
          <div className="card-actions justify-start">
            {educationLists.map((edu, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <div className={"badge h-full " + edu.color}>
                    {edu.status}
                  </div>
                  <div className={"badge h-full " + edu.color}>{edu.level}</div>
                </div>
                <div className={"badge h-full " + edu.color}>{edu.place}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
