import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();


  return (
    <section className="wrapper">
        <div className="section-wrapper mt-25 text-amber-50 h-[100vh]">
            <h1 className='figtree-400'><span className='accent tracking-widest'>/</span>{t("about")}</h1>
            <div className='flex lg:justify-between justify-center flex-wrap gap-10'>
                  <div className="poppins-400 mt-10 max-w-[520px]">
                    <div className='mb-5'>
                      <p>


                      </p>
                    </div>
                    <div className='mb-5'>
                      <p>
                        


                      </p>
                    </div>
                    <div>
                      <p>
                        


                      </p>
                    </div>
                    <button className="btn-card p-2 figtree-400 mt-5">
                      <span>Read more</span>
                      <img src="/assets/arrow4.png" alt="" className='w-min h-min arrow3' />
                    </button>
                  </div>
              {/* <img src="" alt="" className='w-[300px]'/> */}
            </div>
        </div>

    </section>
  )
}

export default AboutSection