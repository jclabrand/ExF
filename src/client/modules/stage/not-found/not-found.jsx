
import React from 'react';

/****************************************************************************************/

function notFound() {
	return (
		<div className="container notfound">
			<div className="notfound-header">
				<img className="" src="/images/exf.png"/>
			</div>
			<div className="notfound-body">
				<span>Página no encontrada</span>
				<p>¡Lo sentimos!, La página que buscas no se ha encontrado. Puede deberse a que la dirección se ha escrito incorrectamente o a que la página ha sido cancelada. Revisa la dirección URL e inténtalo de nuevo.</p>
			</div>
		</div>
	);
}

/****************************************************************************************/

export default notFound;
