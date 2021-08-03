import React, {useState} from 'react';

export default function Orcamento(props) {
    const [dForm, setDForm] = useState("none")
    return (
        <div className="p-0 p-md-5" id="orcamento" style={{ backgroundColor: "#000" }}>
            <article className="container">
                <div className="row py-5">
                    <div className="text-white col-12 col-md-8">
                        <h4 className="text-left">Faça um orçamento agora mesmo!</h4>
                        <p className="text-left py-3">
                            Orçamento sem compromisso.
                        </p>
                    </div>

                    <div className="col text-right align-self-center">
                        <a className="btn btn-light w-100" href="#orcamento" onClick={ dForm == "block" ? ()=> {setDForm("none")}: ()=> {setDForm("block") }} ><strong className="h4">Fazer orçamento</strong></a>
                    </div>
                </div>
            </article>

            <div className="container" style={{display: dForm}}>
                <form className="" method="get">
                    <input className="form-control my-2" type="text" name="nome" placeholder="nome"></input>
                    <input className="form-control my-2" type="email" name="email" placeholder="seu email"></input>
                    <textarea className="form-control my-2" name="desc" placeholder="Descrição" rows="10" maxLength="500"></textarea>
                    
                    <button type="submit" onClick={()=>{}} className="btn btn-primary text-white my-2" text="bla">Enviar</button>
                </form>
            </div>
        </div>
    );
}

function Validate(){
    
}