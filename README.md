# Pokédex utilizando PokéAPI

Para esta práctica comencé  realizando las peticiones a la API:
<hr>

## PokeVariables

Recuperando el JSON accedí a la información que requería, realizando una lectura en ciclo para la mayoriía de datos y aplicando unos arreglos a la información antes de guardarla, como la capitalización de la primera letra de cada por resultado y la adición de etiquetas HTML para que se aplicaran directamente al contenedor.

Para prevenir errores agregué una función dentro de la verificación del estado la cual limpia los contenedores en caso de hacer una llamada que arroje un error en el status junto con una imagen.

Todo el documento de JS se encuentra aquí: <a href="assets/dex.js">Funcionamiento Pokedex</a>
<hr>

## La Pokédex

En este caso el diseño de la Pokedex es una con bastante similitud a una tablet, dado que su diseño no tiene formas complejas la plantilla se puede usar orientandola de manera horizontal o vertical detras de los elementos, los estilos evaluan el ancho de la ventana y despliegan la vista según se ajuste, usando un solo contenedor ubicado en el centro de la pantalla que mantiene centrados los elementos.

Los estilos se encuentran aquí: <a href="assets/dex.css">Estilos Pokedex</a>

Esta es la plantilla utilizada: <a href="assets/images/dexBackground.png">Plantilla Pokedex</a>


Como notas de esta práctica:
La vista desde dispositivos móviles maneja un zoom en vez de reajustar el tamaño de la ventana como en una navegador visto desde una PC, en su lugar se recorren al verse afectados por otros elemntos como el teclado virtual.
