
# 📘 ESPE Course Card Component

Este repositorio contiene la implementación del componente web `espe-course-card`, desarrollado con **LitElement**. Este componente está diseñado siguiendo los lineamientos visuales de la **Universidad de las Fuerzas Armadas ESPE**, con un enfoque modular y adaptable para representar cursos u otros contenidos similares.

---

## 🎯 Objetivo del Proyecto

Diseñar e implementar un **componente web reutilizable** que:

- Se adapte a los colores y estilos institucionales de ESPE.
- Permita representar visualmente la información de un curso.
- Acepte parámetros dinámicos como título, descripción, progreso, color de botón, y una imagen.
- Sea mantenible y extensible desde distintas ramas de trabajo.

---

## 📂 Estructura del Repositorio

```
espe-course-card/
│
├── src/                         # Código fuente del componente
│   └── espe-course-card.ts      # Implementación principal del componente
│
├── styles/                      # Estilos personalizados del componente
│   └── espe-theme.css           # Estilos específicos basados en identidad ESPE
│
├── docs/                        # Documentación e imágenes de referencia
│   └── preview.png              # Imagen de cómo luce el componente en uso
│
├── README.md                    # Este archivo
└── .gitignore
```

---

## 🌱 Ramas del Proyecto

Este proyecto está organizado en **tres ramas principales**, cada una con una responsabilidad clara:

### 1. `feature/develop`
- Rama principal de desarrollo técnico del componente.
- Contiene la lógica del componente (`espe-course-card.ts`) y su configuración básica.
- Se incluye el **link al diseño en Figma** para referencias visuales:
  > 🔗 Figma: [https://www.figma.com/file/tu-componente-espe](https://www.figma.com/file/tu-componente-espe) *(actualízalo con tu enlace real)*

---

### 2. `feature/style-specialist`
- Rama dedicada exclusivamente a los **estilos visuales**.
- Aquí se trabaja la adaptación del componente a los colores y lineamientos visuales institucionales (ESPE).
- Contiene archivos CSS personalizados y variantes temáticas si las hubiera.

---

### 3. `feature/DocumentacionG1`
- Contiene la **documentación del proyecto**.
- Aquí se explica el uso del componente, ejemplos de integración, parámetros configurables y buenas prácticas.
- Ideal para onboarding y mantenimiento futuro del código.

---

## 🖼️ Vista Previa del Componente

A continuación puedes ver una imagen del componente en uso, que se encuentra en la carpeta `docs` del proyecto:

![Vista previa del componente](./docs/2f8d44e8-2457-4af6-80fe-2100f44089f8.png)

---

## 🚀 Cómo Usar

Ejemplo básico de uso del componente:

```html
<espe-course-card
  title="Inteligencia Artificial"
  description="Curso introductorio sobre IA"
  imageUrl="https://via.placeholder.com/280x150"
  progress="75"
  progressColor="green"
  buttonTheme="green">
</espe-course-card>
```

---

## 📌 Notas Finales

- La rama `main` no está protegida, pero es utilizada como rama base.
- Este proyecto sigue una estructura de trabajo **colaborativo por ramas feature** para facilitar la integración continua.
- La carpeta `docs/` contiene todos los recursos gráficos utilizados en la documentación.

---

✏️ Desarrollado por el equipo del componente `espe-course-card` — G1
