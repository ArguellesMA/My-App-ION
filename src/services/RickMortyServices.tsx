
export default function RickMortyServices(props: any) {
    const { services, setservices } = props;
 
    const resetCharacter = () => {
        setservices(null);
    }

    return (
    <div className="characteres">

        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacter}>Volver a la home</span>

        <div className="container-characters">
            {services.map((services: any, index: any) => (
                <div className="character-container" key={index}>
                   <div>
                       <img src={services.image} alt={services.name} />
                   </div>

                   <div>
                       <h3>
                           {services.name}
                       </h3>
                       <h6>
                           {services.status === "Alive" ? (
                               <>
                               <span className="alive" />
                               Alive
                               </>
                           ) : (
                               <>
                               <span className="dead" />
                               Dead
                               </>
                           )}
                       </h6>
                       <p>
                           <span className="text-grey" >Episodios: </span>
                           <span>{services.episode.length}</span>
                        </p>
                        <p>
                           <span className="text-grey" >Especie: </span>
                           <span>{services.species}</span>
                        </p>
                   </div>
                </div>
            ))}
        </div>
        
        <span className="back-home" onClick={resetCharacter}> Volver a la home</span>
    </div>
    )
}