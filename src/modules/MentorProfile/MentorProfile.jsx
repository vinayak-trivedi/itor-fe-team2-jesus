import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import mentor1 from "../../assets/mentor_pics/01.jpg";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import TimeRange from "../../components/CalendlyWidget/CalendlyWidget";
import "./MentorProfile.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MentorProfile = () => {
  const [mentor, setMentor] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMentor = async () => {
      const response = await fetch(
        `https://itor-simple-node-api.herokuapp.com/api/v1/mentor/${id}`,
        {headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }}
      );
      const data = await response.json();
      setMentor(data.mentor);
    };
    fetchMentor();
  }, []);

  return (
    <div>
      <DashboardHeader id={mentor._id} />
      <div className="mentor_profile_wrapper">
        <div className="profile_details">
          <div className="mentor_name">
            <img src={mentor.photo?.secure_url} alt={mentor.name} />
            <div>
              <strong>{mentor.name}</strong> <br />
              <p>Product Manager, {mentor.companyName}</p>
            </div>
            <div>
              <br />
            </div>
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            I'm a Software Engineer with a demonstrated history of working with
            Kotlin, Python, C, and C++. Worked on multiple business domains and
            helped scale a product from scratch to hundreds-of-thousands users.
          </p>
          <h4>Education</h4>
          <p>Indian Institute of Technology, Bombay (BTech - CSE)</p>
          <h4>Interests</h4>
          <p>Reading, cooking, Playing Table Tennis</p>
          <div className='social_links'>
            <TwitterIcon />
            <LinkedInIcon />
          </div>
          <TimeRange />
        </div>

        <aside className='profile_right'>
          <h3>Expertise</h3>
          <div className='highlights'>Product Management</div>
          <div className='highlights'>Software Development</div>
          <h3>Fluent in</h3>
          <div className='highlights language_fluent'>English</div>
          <div className='highlights language_fluent'>Hindi</div>
        </aside>
      </div>
    </div>
  );
};

export default MentorProfile;
