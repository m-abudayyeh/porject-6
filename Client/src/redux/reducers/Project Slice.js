import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../store/projectSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects.project);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/projects/AllProject/${id}`)
      .then(response => dispatch(setProject(response.data)))
      .catch(error => console.error("Error fetching project details:", error));
  }, [dispatch, id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded" />
      <p className="text-gray-600">{project.category}</p>
      <p>Organization: {project.organization}</p>
      <p>Target: {project.targetAmount}</p>
      <p>Current: {project.currentAmount}</p>
      <p>Support: {project.supportAmount}</p>
      <p>Donors: {project.donorsCount}</p>
      <p>Progress: {project.progress}%</p>
      <p className={project.isCompleted ? "text-green-600" : "text-red-600"}>
        {project.isCompleted ? "Completed" : "Ongoing"}
      </p>
      <p>Why Support: {project.whySupport}</p>
      {project.youtubeUrl && (
        <iframe
          width="100%"
          height="315"
          src={project.youtubeUrl}
          title="Project Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {[...Array(8).keys()].map((i) => (
          project[`photo${i + 1}Url`] && (
            <img
              key={i}
              src={project[`photo${i + 1}Url`]}
              alt={`Project Photo ${i + 1}`}
              className="w-full h-32 object-cover rounded"
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
