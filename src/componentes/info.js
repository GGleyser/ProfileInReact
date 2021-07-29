import React from 'react';
import Card from './card';

export default function Info()
{
    return(
        <div className="" style={{backgroundColor: "rgb(218, 218, 218)"}}>
            <div className="my-5 py-5">
                
                <div className="mt-5">
                    <div className="text-center pb-3 h5">
                        Análista de Sistemas, Desenvolvedor com 3 anos de experiência; 
                    </div>
                  
                        <p className="text-center py-3 h4">
                            Habilidades:
                        </p>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="p-2 m-1 d-flex" style={{width: "150px"}}>
                            <ul className="p-2 w-100" style={{backgroundColor: "white"}}>
                                <h6>Organização</h6>
                                <li className="" style={{listStyle: "none"}}>Gestão de projetos</li>
                                <li className="" style={{listStyle: "none"}}>UML</li>
                                <li className="" style={{listStyle: "none"}}>Scrum</li>
                            </ul>      
                        </div>
                         <div className="p-2 m-1 d-flex" style={{width: "150px"}}>
                            <ul className="p-2 w-100" style={{backgroundColor: "white"}}>
                                <h6>PHP</h6>
                                <li className="" style={{listStyle: "none"}}>Laravel</li>
                                <li className="" style={{listStyle: "none"}}>Wordpress</li>
                                <li className="" style={{listStyle: "none"}}>PDO</li>
                            </ul>  
                         </div>
                        <div className="p-2 m-1 d-flex" style={{width: "150px"}}>
                            <ul className="p-2 w-100" style={{backgroundColor: "white"}}>
                                <h6>JS</h6>
                                <li className="" style={{listStyle: "none"}}>Jquery</li>
                                <li className="" style={{listStyle: "none"}}>Ajax</li>
                                <li className="" style={{listStyle: "none"}}>React</li>
                            </ul>   
                        </div>
                        <div className="p-2 m-1 d-flex" style={{width: "150px"}}>
                            <ul className="p-2 w-100" style={{backgroundColor: "white"}}>
                                <h6>HTML</h6>
                                <li className="" style={{listStyle: "none"}}>CSS</li>
                                <li className="" style={{listStyle: "none"}}>SASS</li>
                                <li className="" style={{listStyle: "none"}}>Bootstrap</li>
                            </ul>     
                        </div>                        
                        <div className="p-2 m-1 d-flex" style={{width: "150px"}}>
                            <ul className="p-2 w-100" style={{backgroundColor: "white"}}>
                                <h6>Banco de dados</h6>
                                <li className="" style={{listStyle: "none"}}>Mysql</li>
                                <li className="" style={{listStyle: "none"}}>SQL Server</li>
                            </ul>     
                        </div>                    
                    </div>
                </div>

            </div>
        </div>
    );
}