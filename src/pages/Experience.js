import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011-2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kendriya Vidyalaya No 1, Bathinda Cantt, Punjab
          </h3>

          <p>High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dr. B.R. Ambedkar National Institute of Technology, Jalandhar,
            Punjab, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Technology
          </h4>

          <p> Textiles</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018-present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">SWO - Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Canara, Chandigarh
          </h4>
          <p>
            As a team manager I am working as a line of communication between
            frontline staff and senior management with a variety of people, from
            entry-level employees to heads of departments.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
