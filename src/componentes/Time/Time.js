import Colabolador from '../Colaborador'
import './Time.css'

export const Time = (props) => {
    const cssFundo = { backgroundColor: props.corSecundaria }
    const cssTitulo = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length) > 0 && 
        <section className='time' style={cssFundo}>
            <h3 style={cssTitulo}> {props.nome} </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colabolador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                    />
                )}
            </div>
        </section>
    )
}