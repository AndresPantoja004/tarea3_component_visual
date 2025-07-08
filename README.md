# Doumentacion de Tarea 3 Grupo 1
## Componente ESPE Search
ESPE Search es una interfaz web basada en Lit que permite buscar asignaturas mediante un campo de entrada con sugerencias dinámicas, y visualizar tarjetas informativas con el progreso y detalles de cada asignatura. Este proyecto combina dos componentes personalizados (`<espe-search-input>` y `<espe-course-card>`) y se adapta a la identidad visual de la ESPE.
## Funcionalidades de los componentes
### 1. Componente `<espe-search-input>`
Un campo de búsqueda interactivo con sugerencias automáticas y eventos personalizados.

Propiedades:
- sugerencia-seleccionada: Se dispara al hacer clic en una sugerencia.
- buscar-enter: Se dispara al presionar Enter.

Comportamiento:
- Filtra las sugerencias dinámicamente.
- Soporta selección con clic o teclado.
- Muestra sugerencias debajo del input.

### 2. Componente `<espe-course-card>`
Una tarjeta visual para mostrar información de la asignatura buscada (también se muestra en la interfaz gráfica principal)
Composición:
- Imagen (placeholder).
- Título y descripción.
- Barra de progreso animada.
- Botón interactivo.

## ¿Cómo interáctuan o cuál es su lógica general en la interfaz?
El sistema está diseñado para facilitar la búsqueda visual e interactiva de asignaturas. El mismo combina un componente de entrada `<espe-search-input>` que gestiona la búsqueda del usuario con un conjunto de tarjetas de asignatura `<espe-course-card>` que se filtran en tiempo real según la entrada del usuario.

### Función Inicial: Carga del componente

El componente <espe-search-input> recibe un arreglo de sugerencias (asignaturas disponibles) mediante la propiedad suggestions. Cada `<espe-course-card>` representa una asignatura y tiene un atributo data-nombre de la cual permite identificarla dentro del input para fines de búsqueda.


### Evento del componente: Filtrado dinámico

El usuario comienza a escribir, el componente `<espe-search-input>` actualiza automáticamente la lista de sugerencias visibles, filtrando aquellas que coinciden parcial o totalmente con el nombre a buscar. Al presionar una sugerencia o la tecla Enter, el componente emite un evento personalizado (sugerencia-seleccionada o buscar-enter).

### Resultado: Respuesta al evento

- La lógica de filtrado está implementada en un <script> externo, que escucha los eventos disparados por `<espe-search-input>`.
- Al capturar el evento, se obtiene el valor seleccionado o ingresado y se compara con los atributos data-nombre de cada tarjeta de curso.
- Las tarjetas cuyo data-nombre incluye el texto buscado se mantienen visibles (style.display = 'block'), mientras que las que no coinciden se ocultan (style.display = 'none').

### Interacción visual

El componente muestra una animación de carga si el usuario presiona Enter (loading = true) para simular una búsqueda más realista. Luego de 1 segundo, se oculta automáticamente (loading = false). Las tarjetas se mantienen estilizadas con indicadores visuales como colores en la barra de progreso (progressColor) y botones personalizables (buttonTheme).
## Ejemplo de uso en diferentes navegadores
### Navegador 1
![Navegador 1]()
### Navegador 2
![Navegador 2]()
### Navegador 3
![Navegador 3]()
