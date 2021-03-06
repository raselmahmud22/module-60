import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";
const experts = [
  { id: 1, name: "Will Smith", img: expert1 },
  { id: 2, name: "Rahim", img: expert2 },
  { id: 3, name: "Karim", img: expert3 },
  { id: 4, name: "Jubbar", img: expert4 },
  { id: 5, name: "Borkot", img: expert5 },
  { id: 6, name: "Salam", img: expert6 },
];

const Experts = () => {
  return (
    <div className="container" id="experts">
      <h1 className="text-center text-primary mt-5">Our Experts</h1>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
