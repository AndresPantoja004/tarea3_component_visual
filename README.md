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
## Ejemplo de uso en diferentes navegadores
