import styles from './ProjectsStyles.module.css';
import blog from '../../assets/blog.png';
import cff from '../../assets/cff.png';
import ct from '../../assets/ct.png';
import game from '../../assets/game.png';
import hm from '../../assets/hm.png';
import mz from '../../assets/mz.png';
import ww3 from '../../assets/ww3.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={blog}
          link="https://github.com/Vimal2023/ZuAi_BlogApp"
          h3="ZuAi Blog App"
          p="Blogging Web App"
        />
        <ProjectCard
          src={cff}
          link="https://github.com/Vimal2023/D-CraftForFund"
          h3="Craft-For-Fund"
          p="Fundraising Web App"
        />
        <ProjectCard
          src={ct}
          link="https://github.com/Vimal2023/Covid_Tantra.github.io"
          h3="CovidTantra"
          p="Covid Awareness Web App"
        />
        <ProjectCard
          src={game}
          link="https://github.com/Vimal2023/Tic_Tae_Toe.github.io"
          h3="Tic-Tac-toe"
          p="Gaming Web App"
        />
        <ProjectCard
          src={hm}
          link="https://github.com/Vimal2023/Health_Mantra.github.io"
          h3="HealthMantra"
          p="Health Awareness Web App"
        />
        <ProjectCard
          src={mz}
          link="https://github.com/Vimal2023/Zyaka"
          h3="Mera Zyaka"
          p="Restaurant Booking Web App"
        />
        <ProjectCard
          src={ww3}
          link="https://github.com/Ankur02Sarkar/World-War-3"
          h3="World War 3"
          p="War Awareness Web App"
        />
      </div>
    </section>
  );
}

export default Projects;
