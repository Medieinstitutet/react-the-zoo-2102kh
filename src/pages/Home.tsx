export const Home=()=>{
    return(
    <div className="home-background">
    <div className="video-player">
      <video  className="video" autoPlay loop muted>
      <source src="/src/media/118059-713859239_tiny.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
    </div>
    </div>
    
    )
}