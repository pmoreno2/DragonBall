# DragonBall
Proyecto para el curso de Github Copilot, donde pretendo montar una aplicación web de temática Dragon Ball, y con tecnologia Angular.

Este proyecto es una aplicación web de temática Dragon Ball, desarrollada con Angular. La aplicación permite explorar personajes de Dragon Ball, ver detalles de cada personaje y consultar un calendario de eventos relacionados con la serie.

## Características

- **Listado de personajes**: Muestra una lista de personajes de Dragon Ball con información detallada.
- **Detalle de personajes**: Permite ver información detallada de cada personaje.
- **Calendario de eventos**: Muestra un calendario con eventos relacionados con Dragon Ball.
- **Navegación**: Incluye un menú de navegación para acceder fácilmente a las diferentes secciones de la aplicación.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:
```bash
DragonBall/
├── .github/
├── DragonBall/
│   ├── .angular/cache/19.0.5
│   ├── .vscode/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .editorconfig
│   ├── .gitignore
│   ├── angular.json
│   ├── karma.conf.js
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
├── node_modules/
├── package-lock.json
├── package.json
├── README.md
```
Y en cuanto a la parte de la carpeta src:
```bash
src/
├── app/
│   ├── components/
│   │   ├── character-list/
│   │   │   ├── character-list.component.html
│   │   │   ├── character-list.component.scss
│   │   │   ├── character-list.component.spec.ts
│   │   │   └── character-list.component.ts
│   │   ├── home/
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   └── home.component.ts
│   │   ├── navbar/
│   │   │   ├── navbar.component.html
│   │   │   ├── navbar.component.scss
│   │   │   ├── navbar.component.spec.ts
│   │   │   └── navbar.component.ts
│   │   └── not-found/
│   │       ├── not-found.component.html
│   │       ├── not-found.component.scss
│   │       ├── not-found.component.spec.ts
│   │       └── not-found.component.ts
│   ├── directives/
│   │   └── highlight-dates.directive.ts
│   ├── pages/
│   │   ├── calendario-page/
│   │   │   ├── calendario-page.component.html
│   │   │   ├── calendario-page.component.scss
│   │   │   ├── calendario-page.component.spec.ts
│   │   │   └── calendario-page.component.ts
│   │   ├── character-detail-page/
│   │   │   ├── character-detail-page.component.html
│   │   │   ├── character-detail-page.component.scss
│   │   │   ├── character-detail-page.component.spec.ts
│   │   │   └── character-detail-page.component.ts
│   │   └── character-list-page/
│   │       ├── character-list-page.component.html
│   │       ├── character-list-page.component.scss
│   │       ├── character-list-page.component.spec.ts
│   │       └── character-list-page.component.ts
│   ├── services/
│   │   ├── calendar-data.service.ts
│   │   ├── dragonball.service.spec.ts
│   │   ├── dragonball.service.ts
│   │   ├── episode.model.ts
│   │   └── dragon-ball-episodes.json
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.server.ts
│   ├── app.module.ts
│   ├── app.routes.server.ts
│   └── app.routes.ts
├── assets/
│   └── images/
├── environments/
│   ├── environment.prod.ts
│   └── environment.ts
├── index.html
├── main.server.ts
├── main.ts
├── server.ts
├── styles.scss

```

## Instalación
Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Servidor de Desarrollo
Para iniciar un servidor de desarrollo local, ejecuta:
```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a http://localhost:4200/. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

## Generación de Código
Angular CLI incluye herramientas poderosas para la generación de código. Para generar un nuevo componente, ejecuta:
```bash
ng generate component component-name
```

Para obtener una lista completa de los esquemas disponibles (como components, directives o pipes), ejecuta:
```bash
ng generate --help
```

## Compilación
Para compilar el proyecto, ejecuta:
```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de compilación en el directorio dist/. Por defecto, la compilación de producción optimiza tu aplicación para rendimiento y velocidad.

## Ejecución de Pruebas Unitarias
Para ejecutar las pruebas unitarias con el corredor de pruebas Karma, usa el siguiente comando:
```bash
ng test
```

## Ejecución de Pruebas End-to-End
Para pruebas end-to-end (e2e), ejecuta:
```bash
ng e2e
```

Angular CLI no incluye un marco de pruebas end-to-end por defecto. Puedes elegir uno que se adapte a tus necesidades.

## Recursos Adicionales
Para más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visita la página Angular CLI Overview and Command Reference.

Este archivo `README.md` proporciona una descripción completa del proyecto, sus características, la estructura del proyecto, y cómo instalar, desarrollar, y probar la aplicación.
