
const SpotifyPlayer = () => {
  return (
  <div> 
    <iframe data-testid="embed-iframe" 
    style={{ borderRadius: '12px' }}
    src="https://open.spotify.com/embed/playlist/6qiFkzFwmlwJlpVYaHY0dd?utm_source=generator&theme=0"
    width="100%" 
    height="152" 
    frameBorder="0" 
    allowFullScreen={true} 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy">
    </iframe>
</div>
  )
}

export default SpotifyPlayer