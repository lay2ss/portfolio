const SkillsCard = ({header, tools}) => {
  return (
    <div className="card-border p-3 max-w-[250px] h-min">
        <h3 className="figtree-400 border-b-1 btn-border mb-2 pb-2">{header}</h3>
        
        <p className="poppins-400">{tools}</p>
    </div>
  )
}

export default SkillsCard