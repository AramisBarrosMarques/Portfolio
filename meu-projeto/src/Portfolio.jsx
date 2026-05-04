import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./style.css";

import Hero from "./Hero";
import diploma from "./diploma.png";
import foto from "./foto.jpeg";
import whatsappIcon from "./whatssap.png";
import Proj from "./Projeto1.png";
import Proje from "./Projeto2.png";
import Projet from "./Projeto3.png";


export default function Portfolio() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <h2>Aramis Barros</h2>
          <p>Analista Full Stack</p>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#formacoes">Formações</a></li>
            <li><a href="#contatos">Contatos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>

          </ul>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="conteudo">
         <Hero />
         
        <section id="sobre">
          <h1>Sobre</h1>

          <div className="foto">

          <p>Nascido e criado no interior de Pernambuco, sou um estudante autodidata de programação, com foco
             em análise de dados, até a produção de software. Sou formado em Análise e Desenvolvimento de Sistemas
            na Unifavip Wyden, da turma de 2022. Fiz projetos na faculdade envolvendo diversas linguagens de programação,
            das quais usei para empreender no meu estágio de Full Stack no Armazém da Criatividade | Porto Digital em 2024. Possuo conhecimento ativo
            em Python(Pandas, Matplotlib, Ploty Express, Seaborn, Scikit-learn, BeautifulSoup ), Front-end(Html, Css, Javascript, React, Node.Js), Back-end(MySQL, Python) e API's(FastAPI) .
          </p>
          
          <img src={foto} alt="foto de perfil" />
          </div>
        </section>

        <section id="projetos">
          <h1>Projetos</h1>
          <p>Trabalhos e projetos autodidatas</p>
          
          <h2>Projeto Aprendizado de Máquina com Regressão Linear</h2>
           <img src={Proj} alt="print de projeto" />
           <p><a href="https://github.com/AramisBarrosMarques/Aprendizado-de-Maquina-com-Regressa-o-Linear" target="_blank" rel="noopener noreferrer">link do projeto</a></p>
           
           <h2>Projeto Análise de Dados</h2>
           <img src={Proje} alt="print de projeto" />
           <p><a href="https://github.com/AramisBarrosMarques/Analise-de-Dados-Metricas-de-IA" target="_blank" rel="noopener noreferrer">link do projeto</a></p>
          
           
           <h2>Projeto EPTA</h2>
           <img src={Projet} alt="print de projeto" />
          <p><a href="https://github.com/AramisBarrosMarques/ProjetoChallengeEPTA" target="_blank" rel="noopener noreferrer">Link do projeto</a></p> 

        </section>

        <section id="formacoes">

          <h1>Formação</h1>
          <div className="diplomas">
          <p>Diploma de conclusão do curso Análise e Desenvolvimento de Sistemas. Graduação Tecnóloga de Ensino Superior na Unifavip-Wyden. Turma de 2022 </p>
          <img src={diploma} alt="Diploma" />
          </div>
        </section>

        <section id="contatos">
        
          <h1>Contatos</h1>

          <div className="social-links">
          
          <a href="https://github.com/AramisBarrosMarques" target="_blank" rel="noopener noreferrer" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          <span>GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/aramis-barros-28927a22b/" target="_blank" rel="noopener noreferrer" className="social-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>

             <a href="https://mail.google.com/mail/u/0/#sent/KtbxLthtFjnMvngFkkjqHbGXnkhGGWsNJq?compose=DmwnWstsCnfbvLgDlwtnjxGxxNgXRBDVSKTsXCzvsVPGGLnqlNxbcnhVnlVQtxfhgGjRBHhVnFxg" className="social-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" />
            <span>aramisbarrosmarques26@gmail.com</span>
          </a>
          </div>


          <a href="https://wa.me/5581999999999" target="_blank" rel="noopener noreferrer" className="social-btn">
          <img src={whatsappIcon} alt="WhatsApp" />
          <span>whatssap</span>
          </a>

        </section>

       
       
       
    <section id="habilidades">
          <h1>Soft e Hard Skills</h1>
          <p>Hard Skills e Soft Skills</p>
          <div className="habilidades-container">
    
    
    <div className="hard-skills">
      <h2>Hard Skills</h2>
      <ul>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" /> Python</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />HTML</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" /> CSS</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />JavaScript</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />React</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />Node.js</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />MySQL</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-plain.svg" />FastAPI</li>
      </ul>
    </div>

      <div className="soft-skills">
      <h2>Soft Skills</h2>
      <ul>
        <li>Comunicação</li>
        <li>Trabalho em equipe</li>
        <li>Resolução de problemas</li>
        <li>Adaptabilidade</li>
        <li>Proatividade</li>
      </ul>
    </div>
  </div>

    </section>
  
      </main>
    </>
  );
}