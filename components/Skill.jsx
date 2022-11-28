import React from "react";

const Skill = () => {
  var skillLists = [
    {
      name: "C++",
      score: 60,
    },
    {
      name: "Java",
      score: 60,
    },
    {
      name: "Python",
      score: 80,
    },
    {
      name: "HTML/CSS",
      score: 40,
    },
    {
      name: "Flutter",
      score: 20,
    },
    {
      name: "Microsoft Office",
      score: 80,
    },
    {
      name: "JavaScript",
      score: 80,
    },
    {
      name: "ReactJS/NextJS",
      score: 80,
    },
    {
      name: "TailwindCSS",
      score: 80,
    },
  ];
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src="./skill.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title pb-4">My Skills!</h2>
          <div className="card-actions justify-center">
            {skillLists.map((skill) => (
              <div className="flex flex-row items-center gap-2">
                <div className="badge h-full">{skill.name}</div>
                <progress
                  className="progress progress-info w-56"
                  value={skill.score}
                  max="120"
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
