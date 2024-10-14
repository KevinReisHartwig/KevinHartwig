"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Eplay",
    description: "Site de streaming de jogos",
    image: "/images/projects/projeto1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KevinReisHartwig/eplay",
    previewUrl: "https://eplay-theta-beige.vercel.app/",
  },
  {
    id: 2,
    title: "Efood",
    description: "Site de delivery de comida",
    image: "/images/projects/projeto2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KevinReisHartwig/efood",
    previewUrl: "https://efood-wheat-five.vercel.app/",
  },
  {
    id: 3,
    title: "Godzilla vs Kong",
    description: "Site de um filme que estava em cartaz",
    image: "/images/projects/projeto3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KevinReisHartwig/clone-pagina-godzilla-kong",
    previewUrl: "https://clone-pagina-godzilla-kong.vercel.app/",
  },
  {
    id: 4,
    title: "Decodificador de texto",
    description: "Um challenger que foi pedido em um curso da Alura",
    image: "/images/projects/projeto4.png",
    tag: ["All", "Web"],
    gitUrl: "https://kevinreishartwig.github.io/Decodificador-de-Texto/",
    previewUrl: "https://kevinreishartwig.github.io/Decodificador-de-Texto/",
  },
  {
    id: 5,
    title: "Api Forumhub",
    description: "Uma Api Rest para um forum",
    image: "/images/projects/projeto5.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/KevinReisHartwig/api-forumhub",
    previewUrl: "https://github.com/KevinReisHartwig/api-forumhub",
  },
  {
    id: 6,
    title: "Literalura",
    description: "Uma aplicação que usa uma api externa de livros, assim podera buscar livros, autores entre outras funcionalidades.",
    image: "/images/projects/projeto6.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/KevinReisHartwig/literalura-springboot",
    previewUrl: "https://github.com/KevinReisHartwig/literalura-springboot",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
