const ProjectsCard = ({image, tools, name, preview, code}) => {  
  return (
    <>
    <div className="card-border p-3">
        <div className="flex justify-center">
            <a href={preview} aria-label="Preview">
                <img src={image}  alt="project image" className="object-cover rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer" loading="lazy"/>
            </a>
        </div>
        <h2 className="mt-5 figtree-400">{name}</h2>
        <div className="flex gap-7 justify-between items-center mb-2">
        <p className="poppins-400 text-sm">{tools}</p>
        <div className="flex gap-3 h-min">
            <a href={preview} aria-label="Preview">
                <button className="btn-card p-4 figtree-400 rounded-xl min-w-14 min-h-14">
                    <img className="h-min" src="/assets/icons/live.png" alt="live icon" loading="lazy"/>
                </button>
            </a>
            <a href={code} aria-label="Github">
                <button className="btn-card-sec figtree-400 p-4 rounded-xl min-w-14 min-h-14">
                    <img className="h-min" src="/assets/icons/code.png" alt="code icon" loading="lazy"/>
                </button> 
            </a>
        </div>
        </div>
    </div>
    </>
  )
}

export default ProjectsCard