import React from "react";
import { Link } from "react-router-dom";

const Project = ({
  index,
  programs,
  img,
  name,
  description,
  link,
  workWith,
}) => {
  return (
    <div className="works__each-work">
      <div
        className="works__image-container animated"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h3 className="works__number">{index}.</h3>
        <img src={img} alt={name} />
      </div>
      <div
        className="works__work-info animated"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="works__name-git">
          <h4>{name}</h4>
        </div>

        <div className="works__program">
          {programs.map((eachProgram, i) => {
            return <p key={i}>{eachProgram}</p>;
          })}
        </div>
        <p className="works__description ">{description}</p>
        {workWith && (
          <div className='works__work-with'>
            <p>
              work with: <i className="fab fa-github"></i> {workWith}
            </p>
          </div>
        )}
        <div className="base__square-btn ml-10 works__btn">
          <Link to={link} target="_blank">
            <span>
              visit project <i className="fa fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Project;
