import { useTranslation } from 'react-i18next';
import ProjectsCard from './ProjectsCard';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="wrapper h-[100vh]" id="projects">
        <div className='flex w-[90vw] mt-30 lg:max-w-[1024px] flex-col'>
            <h1 className='figtree-400'><span className='accent tracking-widest'>/</span>{t("projects")}</h1>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto'>
            <ProjectsCard 
            image = "/assets/promptopia.png"
            tools = "tools"
            header = "header"
            desc = "desc"
            />
        </div>
        </div>
    </section>
  )
}

export default ProjectsSection;