'use strict';
// oculta el filtrado si el JS está desactivado en el navegador
document.getElementById("filtros_mensajeError").style.display = "none";

//toma todos los elementos y hace un query
const botonesFiltro = document.querySelectorAll('[filtro-data]');
const proyectosFiltro = document.querySelectorAll('[filtro-proyecto]');

for (let i=0; i<botonesFiltro.length; i++) {

	// Filtro inicial
	botonesFiltro[0].classList.add('filtros__boton-actual');
	botonesFiltro[0].classList.remove('filtros__boton');

	// Comportamiento de los botones de filtros
	botonesFiltro[i].addEventListener('click', function(){
		for (let j=0; j<botonesFiltro.length; j++) {
			botonesFiltro[j].classList.remove('filtros__boton-actual');	
			botonesFiltro[j].classList.add('filtros__boton');	
		}
		this.classList.remove('filtros__boton');
		this.classList.add('filtros__boton-actual');

		// Comportamiento de proyectos
		// 1. toma el atributo de la data
		let categoriaPortafolio = this.getAttribute('filtro-data');
		

		// 2. hace un barrido proyecto por proyecto
		for(let k=0; k<proyectosFiltro.length; k++) {
			// 3. oculta todos los proyecto
			proyectosFiltro[k].classList.add('hidden')

			// 4. Muestra sólo aquellos que el filtro conincide con la propiedad
			if(categoriaPortafolio == proyectosFiltro[k].getAttribute('filtro-proyecto') || categoriaPortafolio == 'todos') {
				proyectosFiltro[k].classList.remove('hidden')
				proyectosFiltro[k].classList.add('mostrar')
			}
		}

	})
}