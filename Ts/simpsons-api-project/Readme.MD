**Scripts de Desarrollo**
Estos scripts se encuentran en el archivo package.json y utilizan el compilador de TypeScript (tsc).

**"build": "tsc"**
Este script se utiliza para compilar el código.
Ejecuta el compilador de TypeScript para tomar todos los archivos fuente (.ts) y transformarlos en archivos de JavaScript puro (.js), listos para producción o ejecución. Se usa para crear el build final de la aplicación.

**"watch": "tsc --watch"**
Este script se utiliza para el desarrollo en vivo.
Inicia el compilador de TypeScript en modo de vigilancia continua. El compilador se mantiene activo, monitoreando los archivos .ts y, cada vez que detectas un cambio y guardas, recompila automáticamente solo los archivos modificados. Esto acelera el ciclo de desarrollo.
