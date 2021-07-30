import React from 'react';

export default function Orcamento(props) {
    return (
        <div className="p-0 p-md-5" id="orcamento" style={{ backgroundColor: "#000" }}>
            <article className="container">
                <div className="row my-5 py-5">
                    <div className="text-white col-12 col-md-8">
                        <h4 className="text-left">Faça um orçamento agora mesmo!</h4>
                        <p className="text-left py-3">
                            Orçamento sem compromisso, serviço com excelência e garantia.
                        </p>
                    </div>

                    <div className="col text-right align-self-center">
                        <a className="btn btn-light w-100" href="#orcamento" onClick={()=> {alert("orc")} } ><strong className="h4">Fazer orçamento</strong></a>
                    </div>
                </div>
            </article>

            <form className="">
                <button className="submit btn text-white">Enviar</button>
            </form>
        </div>
    );
}