import { useTranslation } from 'react-i18next';
import Globe from './Globe';
import SkillsCard from './SkillsCard';

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="wrapper h-[100vh]">
        <div className='flex w-[90vw] mt-30 lg:max-w-[1024px] flex-col'>
            <h1 className='figtree-400'><span className='accent tracking-widest'>/</span>{t("skills")}</h1>
            <div className='flex flex-wrap mt-5 justify-center gap-5'>
              <div style={{ height: '35vh'}} className='cursor-grabbing'>
                  <Globe />
              </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto h-min'>
                  <SkillsCard
                    header = ''
                    tools = ''
                  />
              </div>
            </div>
        </div>

    </section>
  )
}

export default SkillsSection