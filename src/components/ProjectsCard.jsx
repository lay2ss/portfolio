const ProjectsCard = ({image, tools, header}) => {  
  return (
    <>
    <div className="card-border p-3">
        <div className="flex justify-center">
            <img src={image}  alt="project image" className="object-cover rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"/>
        </div>
        <h2 className="mt-5 figtree-400">{header}</h2>
        <div className="flex gap-7 justify-between items-center mb-2">
        <p className="poppins-400 text-sm">{tools}</p>
        <div className="flex gap-3 h-min">
            <button className="btn-card p-4 figtree-400 rounded-xl min-w-14 min-h-14">
                <img className="h-min" src="/assets/live.png" alt="code icon" />
            </button>
            <button className="btn-card-sec figtree-400 p-4 rounded-xl min-w-14 min-h-14">
                <img className="h-min" src="/assets/code.png" alt="code icon" />
            </button> 
        </div>
        </div>
    </div>
    </>
  )
}

export default ProjectsCard