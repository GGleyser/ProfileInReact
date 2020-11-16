import React from 'react';

export default function Orcamento(props) {
    return (
        <div className="p-0 p-md-5" id="orcamento" style={{ backgroundColor: "#000" }}>
            <article className="container">
                <div className="row my-5 py-5">
                    <div className="text-white col-12 col-md-8">
                        <h4 className="text-left">Faça um orçamento agora mesmo!</h4>
                        <p className="text-left py-3">
                            Nam eu ligula ut sapien sodales interdum vel sit amet urna.
                            Nam lectus eros, malesuada a efficitur id, condimentum ut magna.
              </p>
                    </div>

                    <div className="col text-right align-self-center">
                        <a className="btn btn-light w-100" href="#orcamento"><strong className="h4">Fazer orçamento</strong></a>
                    </div>
                </div>
            </article>
        </div>
    );
}