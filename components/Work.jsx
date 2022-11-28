import React from "react";

const Work = () => {
  var workLists = [
    {
      date: "(02/2022 - 09/2022)",
      place: "UNIVERSITI SAINS MALAYSIA",
      details:
        "Intern as front-end engineer. Responsible on implementingg features, fixing bugs, and testing",
      color: "badge-warning",
    },
  ];

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src="./work.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title pb-4">My Work Experience!</h2>
          <div className="card-actions justify-start">
            {workLists.map((work, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <div className={"badge h-full " + work.color}>
                    {work.place}
                  </div>
                  <div className={"badge h-full " + work.color}>
                    {work.date}
                  </div>
                </div>
                <div className={"badge h-full " + work.color}>
                  {work.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
