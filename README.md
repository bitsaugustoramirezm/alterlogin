Modules extend your site functionality beyond Drupal core.

Módulo alterlogin
--------------------------------

Este módulo tiene el propósito de demostrar la integración en drupal 8, del webcomponent "captcha", disponible en el siguiente repositorio:

https://github.com/bitsaugustoramirezm/webcomponents

El componente se instala en la carpeta components. El archivo
/components/captcha/captcha.js se incluye como una libreria.

Un script javascript adicional se incluye para demostrar la interacción
con los mensajes enviados por el componente. Cuando el evento captcha
es una validación negativa, se muestra un mensaje de error. Y cuando el
usuario trata de ingresar un nuevo código, se borra el mensaje de error.

El código fuente está adecuadamente documentado para propósitos de estudio y mejora.

augusto.ramirez@bitsamericas.com
