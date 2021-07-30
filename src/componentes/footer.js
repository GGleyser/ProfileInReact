
import React from 'react';
import Icons from './../componentes/icons';

export default function Footer(props) {
    return (
        <footer style={{backgroundColor: "#fff"}}>
            <div className="container">
                <div className="flex-wrap-reverse py-4 row">
                    <Icons class="py-3 sobre_icones ml-auto col-12 col-sm-6 justify-content-center justify-content-md-end d-flex" />
                </div>
            </div>
        </footer>
    );
}
