import React from 'react'

import NavBar from '../components/nav_bar'

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <div className="content" style={{padding: "50px 50px 50px 50px"}}>
      <div class="container-fluid">
                        <div class="row">
            <div class="col-md-12">
                <div class="card card-pl">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Procesos disponibles para postulación</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table id="procesos" class="table compact">
                                        <tbody>
                                                <tr>
                                                    <td>
                                                        <a>Ingeniería Informática 2022-2</a>
                                                    </td>
                                                    <td>Vacantes disponibles: 120</td>
                                                    <td class=" text-center">
                                                        <div class="btn-group btn-group-sm" role="group">
                                                            <a href="/" target="_blank" class="btn btn-sm btn-outline-info" rel="tooltip" data-toggle="tooltip" data-original-title="Ir a vacantes">Ver Asignaturas</a>
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                                                                            <tr>
                                                    <td>
                                                        <a>Ingeniería Metalúrgica y de Materiales 2022-2</a>
                                                    </td>
                                                    <td>Vacantes disponibles: 102</td>
                                                    <td class=" text-center">
                                                        <div class="btn-group btn-group-sm" role="group">
                                                            <a href="/" target="_blank" class="btn btn-sm btn-outline-info" rel="tooltip" data-toggle="tooltip" data-original-title="Ir a vacantes">Ver Asignaturas</a>
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                                                                            <tr>
                                                    <td>
                                                        <a>Ingeniería Mecánica 2022-2</a>
                                                    </td>
                                                    <td>Vacantes disponibles: 160</td>
                                                    <td class=" text-center">
                                                        <div class="btn-group btn-group-sm" role="group">
                                                            <a href="/" target="_blank" class="btn btn-sm btn-outline-info" rel="tooltip" data-toggle="tooltip" data-original-title="Ir a vacantes">Ver Asignaturas</a>
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                                                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



      
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div id="noticias-card" className="card">
                    <div className="card-header card-header-info">
                        <div className="row align-items-center">
                            <div className="col-9">
                                <h3 className="card-title">Noticias</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-1">
                                        <label htmlFor="filtro-etiquetas">Filtro:</label>
                                    </div>
                                    <div className="col-11">
                                        <select id="filtro-etiquetas" className="select2 w-100 select2-hidden-accessible" multiple="" data-select2-id="filtro-etiquetas" tabIndex="-1" aria-hidden="true">
                                          <option value="1" defaultValue="" data-select2-id="2">Informática</option>
                                        </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{width: "832.578px"}}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1" aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-selection__choice" title="Informática" data-select2-id="5"><span className="select2-selection__choice__remove" role="presentation">×</span>Informática</li>
                                        
                                        </ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <div className="card noticia">
                                <div className="card-header card-header-primary">
                                    <div className="row align-items-center">
                                        <div className="col-9">
                                            <h4 className="card-title">Inicio proceso de postulación 2022-2 - INFORMÁTICA</h4>
                                                                                            <span className="badge badge-pill badge-info etiqueta-1">#Informática</span>
                                                                                    </div>
                                                                            </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <p><br/></p><p><span style={{fontSize: "0.875rem"}}>Estimad@s:<br/></span>Se les informa que para efecto de las ayudantías del 2022-2 del Departamento de Informática, las fechas que se manejarán son:</p><p><br/></p><table className="table"><tbody><tr><td><br/></td><td><span style={{fontWeight: "bold"}}>Fecha Inicio</span><br/></td><td><span style={{fontWeight: "bold"}}>Fecha Término</span><br/></td></tr><tr><td style={{width: "50%"}}><b>Postulaciones</b><br/></td><td>25-07-2022<br/></td><td>05-08-2022<br/></td></tr><tr><td><b>Selección por parte de profesores</b><br/></td><td>06-08-2022<br/></td><td>10-08-2022<br/></td></tr><tr><td><b>Postulaciones a vacantes no cubiertas en 1er llamado</b></td><td>11-08-2022<br/></td><td>16-08-2022<br/></td></tr><tr><td><br/></td><td></td><td><br/></td></tr></tbody></table><p><b>Recuerda ingresar a tu perfil de usuario y subir tu resumen académico actualizado antes de postular a una ayudantía.<br/></b><br/>Cualquier duda enviarla a <a href="mailto:spa@inf.utfsm.cl">spa@inf.utfsm.cl</a>.</p><p>Atte.</p>
                                            <footer className="blockquote-footer pull-right"><b>Autor</b> el <cite title="Source Title">25-07-2022</cite></footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default HomePage
