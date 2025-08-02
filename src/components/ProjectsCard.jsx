const ProjectsCard = ({image, tools, header, desc}) => {
  return (
    <>
    <div className="card-border p-3">
        <div className="flex justify-center">
            <img src={image} alt="project image" className="object-cover"/>
        </div>
        <p className="poppins-400 mt-4 border-t-1 border-b-1 btn-border p-1">{tools}</p>
        <h2 className="text-white text-2xl lg:text-3xl mt-2 figtree-400">{header}</h2>
        <p className="mt-2 mb-3 poppins-400">{desc}</p>
        <div className="flex gap-5">
            <button className="btn-card p-2 figtree-400">
                <span>LIVE</span>
                <img className="h-min" src="/assets/live.png" alt="code icon" />
            </button>
            <button className="btn-card-sec figtree-400">
                <p>CODE</p>
                <img className="h-min" src="/assets/code.png" alt="code icon" />
            </button> 
        </div>
    </div>
    </>
  )
}

export default ProjectsCard