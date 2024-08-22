export const Home=()=>{
    return(
    <div className="home-background">
    <div className="video-player">
      <video  className="video" autoPlay loop muted>
      <source src="/src/media/118059-713859239_tiny.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
    </div>
    <div className="home-text">
      <div className="hometext-header">
        <h2>Välkommen till</h2>
        <h1>The Zoo</h1> 
      </div>
<p>Där ditt äventyr börjar med att ta hand om våra fantastiska djur! 
Följ med oss och hjälp till att mata djuren när de är hungriga, så att de förblir glada och friska. Utforska djurparken, 
lär dig om olika arter och se till att varje djur får rätt mat vid rätt tidpunkt. Ditt uppdrag som djurvårdare börjar nu!</p>
    </div>
    </div>
    
    )
}