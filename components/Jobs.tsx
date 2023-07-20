import type { NextPage } from "next";
import portimg from "../assets/14.webp";
import { useEffect, useRef, useState } from "react";

export const Jobs: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);
  return (
    <>
    {isLoading ? (
      <div className="loading-interface"><img src={portimg.src} alt="" /></div>
    ) : (
      <>
      {" "}
      <h1 className="contact_heading">Experience</h1>
      <div className="container">
        <div className="timeline">
          <ul>
            <li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className="timeline-content">
                <h3 style={{ color: "orange" }} className="date">
                  20th May, 2023
                </h3>
                <h1 style={{ color: "blue" }}>GFG SELF PLACED LEARNING</h1>
                <p>
                   SQL Foundation, JavaScript
                  Foundation, and Git GitHub Self-paced Learning • Successfully completed three
                  courses in SQL Foundation, JavaScript Foundation, and Git GitHub,resulting in a
                  25% increase in productivity in my team
                </p>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className="timeline-content">
                <h3 style={{ color: "orange" }} className="date">
                  20th May, 2010
                </h3>
                <h1 style={{ color: "blue" }}>META THROUGH COURSERA </h1>
                <p>
                 
                  Developer Duration: 7 months • Completed intensive training in fulls stack
                  development with 98% grade. • Equipped with advanced skills in version control,
                  and Reactresulting in a 50% reduction in website loading time.
                </p>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className="timeline-content">
                <h3 style={{ color: "orange" }} className="date">
                  20th May, 2010
                </h3>
                <h1 style={{ color: "blue" }}>
                  TRAVERSY MEDIA - MODERN JAVASCRIPT FROM THE BEGINNING 2.0{" "}
                </h1>
                <p>
                  Duration: 37+ hours • Explored fundamental and advanced concepts of modern
                  JavaScriptresulting in a 40/{" "}
                </p>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className="timeline-content">
                <h3 style={{ color: "orange" }} className="date">
                  20th May, 2010
                </h3>
                <h1 style={{ color: "blue" }}>COURSEKHOJ -ONLINE EDU TECH PLATEFORM</h1>
                <p>
                  COURSEKHOJ -ONLINE EDU TECH PLATEFORM |Graphic Designer Duration: 3 months •
                  Completed intensive training in Graphic Design with 300+ points grade. • Equipped
                  with advanced skills in Designing
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
    )}
   </>
  );
};
