
import React from 'react';
import Icons from './../componentes/icons';

export default function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="flex-wrap-reverse py-4 row">
                    <span className="py-3 size-3 col-12 col-sm-6 justify-content-center justify-content-md-start d-flex">GGleyser 2020, todos os direitos reservados</span>
                    <Icons class="py-3 sobre_icones ml-auto col-12 col-sm-6 justify-content-center justify-content-md-end d-flex" />
                </div>
            </div>
        </footer>
    );
}
