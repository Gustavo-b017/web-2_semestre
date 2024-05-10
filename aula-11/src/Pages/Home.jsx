import data from '../../artigos.json'

function Home() {
    return ( 
        <>
            <input type="text" name="buscaFilme" id="buscaFilme" placeholder="digite sua busca aki" />
             
            <div id="listaFilmes">
                {
                    data.map(
                    (post, index) =>(
                        <div className="card" key={index}>

                            <h1>{post.title}</h1>

                            <img src={post.image} alt="" />

                            <div id='tags'>
                                {post.tags.map(tags =>(
                                    <span key={tags}>{tags}</span>
                                ))}
                            </div>

                            <div className="textos">
                                {post.text.map((texto, index) =>(
                                    <p key={index}>{texto}</p>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </> 
    );
}

export default Home ;

/*<div id="listaFilmes">
    <div className="cards">
        <h1>Titulo do Filme</h1>

         <img src="" alt="" />

        <div id="tags">
            <span></span>
            <span></span>
        </div>

        <div id="">
            <p></p>
            <p></p>
        </div>
    </div>
</div>*/