
import React from 'react';
import Icons from './../componentes/icons';

export default function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="row p-3">
                    <span className="size-3">GGleyser 2020, todos os direitos reservados</span>
                    <Icons class="sobre_icones ml-auto" />
                </div>
            </div>
        </footer>
    );
}
