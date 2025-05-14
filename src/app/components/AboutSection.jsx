"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>SpringBoot</li>
        <li>MySQL</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Java - EBAC</li>
        <li>Análise e desenvolvimento de sistemas - FAESA</li>
        <li>Programa Oracle Next Education F2 T6 Back-end</li>
        <li>Programa Oracle Next Education F2 T7 Front-end</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Formação IA Generativa - ONE</li>
        <li>Formação Oracle Cloud Infrastructure - ONE</li>
        <li>Formação SQL com MySQL Server da Oracle - ONE</li>
        <li>Formação Java Web: crie aplicações usando Spring Boot</li>
        <li>Formação Java e Spring Boot T4 - ONE</li>
        <li>Formação Java e Orientação a Objetos T4 - ONE</li>
        <li>Formação React T7 - ONE</li>
        <li>Java Básico - Loiane Groner</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="imagem sobre" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Sendo um desenvolvedor em aprendizado, e com um perfil de adaptabilidade e aprendizado contínuo, busco oportunidades 
          desafiadoras na área de desenvolvimento front-end, back-end e full-stack. Acredito que a tecnologia pode 
          ser uma ferramenta poderosa para solucionar problemas e impactar positivamente a sociedade.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
