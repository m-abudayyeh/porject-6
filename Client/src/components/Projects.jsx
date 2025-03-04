import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/projects/AllProject');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div>
            <h1>مشاريع</h1>
            <div className="projects-container">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h2>{project.title}</h2>
                        <img src={project.image} alt={project.title} />
                        <p>الفئة: {project.category}</p>
                        <p>المنظمة: {project.organization}</p>
                        <p>المبلغ المستهدف: {project.targetAmount}</p>
                        <p>المبلغ الحالي: {project.currentAmount}</p>
                        <p>مبلغ الدعم: {project.supportAmount}</p>
                        <p>عدد المتبرعين: {project.donorsCount}</p>
                        <p>التقدم: {project.progress}%</p>
                        <p>{project.isCompleted ? 'مكتمل' : 'غير مكتمل'}</p>
                        <Link to={`/project/${project.id}`}>معرفة المزيد</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;