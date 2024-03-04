---
sidebar_label: 'Gestión de código'
sidebar_position: 3
---

# Gestión del código fuente
En el proyecto en el que participamos, compuesto por 17 personas, es crucial establecer una sólida política de gestión del código fuente y del repositorio. Esto asegurará la eficiencia, la colaboración y la calidad del código producido. A continuación, detallamos nuestras decisiones y prácticas clave.

## Política de ramas: Git Flow
Hemos optado por adoptar la metodología Gitflow para la gestión de ramas. Gitflow es un modelo de branching que facilita el desarrollo paralelo de características, versiones y hotfixes. En resumen, este flujo se compone de las siguientes ramas principales:
* 1.-**Master (Main)**: Representa la rama de producción estable. El código aquí refleja siempre una versión estable y lista para ser implementada en producción.
* 2.-**Develop**: Esta rama es donde se integran todas las características completadas. Se considera la rama "en desarrollo" y sirve como base para todas las nuevas características.
Además de estas ramas principales, se crean ramas de características, hotfixes y versiones para desarrollar funcionalidades, corregir errores y gestionar versiones del software.
Todas las ramas deberán ser nombradas en inglés.
Para dejar claro el funcionamiento veamos un ejemplo de creación de ramas para cada una de las posibles casuísticas.
* _Creación de una rama para una nueva característica_:
* * feature/nombre_nueva_caracterísitca
* * feature/search_catering
* * feature/book_catering
* _Creación de una rama de corrección_:
* * fix/nombre_de_corrección
* _Creación de una rama de corrección urgente_:
* * hotfix/nombre_de_corrección
* * hotfix/fix_security_vulnerability
* _Creación de una rama de publicación_:
* * release/número_versión
* * release/1.0.0

Para asegurar el correcto integramiento de los cambios con la rama develop, se deberá realizar siempre un pull de dicha rama y comprobar que no existen conflictos antes de realizar una pull request.
## Política de versionado
El proyecto seguirá la convención de versionado semántico para facilitar la comprensión de la versión. El número de versión se representará como x.y.z, donde:

* **X, número de versión principal**: Aumentará cuando se realicen cambios estructurales, es decir, cuando se introduce una nueva arquitectura, funcionalidades principales o cambios que rompen la compatibilidad.
Ejemplos: 1.0, 2.0, 3.0.

* **Y, número de versión secundaria**: Aumentará cuando se introduzcan nuevas características que no afecten la compatibilidad con las versiones anteriores.
Ejemplos: 1.1, 1.2, 2.1.
* **Z, número de la versión de parche**: Aumenta cuando se corrigen errores, se optimiza el rendimiento o se realizan pequeñas mejoras.
Ejemplos: 1.0.1, 1.2.2, 2.1.3.

Aquí podemos ver un ejemplo de la evolución del versionado:
* A:  1.0.0: Versión inicial del software.
* B:  1.1.0: Se añade una nueva función sin afectar la compatibilidad con la versión 1.0.0.
* C:  1.2.1: Se corrige un error menor en la versión 1.1.0.
* D:  2.0.0: Se introduce una nueva arquitectura que rompe la compatibilidad con versiones anteriores.
* E:  2.1.0: Se añade una nueva función a la versión 2.0.0 sin afectar la compatibilidad.
* F:  2.1.3: Se corrige un error de seguridad en la versión 2.1.0.

## Política de commits: Conventional Commits
Para mantener la coherencia y la comprensión del historial de cambios, hemos decidido adoptar el estándar de Conventional Commits. Este enfoque define un conjunto de reglas para crear mensajes de commit significativos y estructurados, que incluyen un prefijo indicativo del tipo de cambio ("feat" para una nueva característica, "fix" para una corrección de errores, etc.) seguido de una descripción concisa del cambio.
Para dejar claro el funcionamiento veamos algunos ejemplos de cómo realizar un commit para cada una de las posibles casuísticas.
* _Commit para una nueva funcionalidad_:
* * feat: título [breve descripción opcional]
* * feat: Add menu management feature
* _Commit para una corrección_:
* * fix:título [breve descripción opcional]
* * fix: Fix event booking functionality
* _Commit referentes a documentación_:
* * doc:título [breve descripción opcional]
* * doc: Update installation guide with new dependencies
* _Commit referentes a refactorización_:
* * refactor:título [breve descripción opcional]
* * refactor: Improve report generation code
* _Commit referentes a la realización de test_:
* * test:título [breve descripción opcional]
* * Add tests for booking confirmation feature

## GitHub Actions
GitHub Actions te permite automatizar tareas repetitivas en tu proyecto, como ejecutar pruebas unitarias, realizar integraciones continuas, implementar automáticamente el código y enviar notificaciones. Esto asegurará que cada cambio propuesto pase por una serie de pruebas automatizadas antes de ser integrado en las ramas principales.

Algunos ejemplos de automatización con GitHub Actions incluyen:

* **Pruebas unitarias**: Asegurar que cada cambio de código pase las pruebas antes de ser integrado.
* **Integración continua**: Compilar y empaquetar el código automáticamente después de cada cambio.
* **Despliegue automático**: Implementar el código nuevo en un servidor de prueba o producción sin necesidad de intervención manual.
* **Notificaciones**: Enviar correos electrónicos o mensajes de Slack al equipo sobre el estado de las pruebas y las implementaciones.

## Revisión de Pull Requests
Dado que es fundamental mantener la integridad y la calidad del código, hemos establecido un proceso de revisión de Pull Requests riguroso. Se configurará github de manera que la rama develop y la rama main (ramas principales) queden protegidas evitando que se puedan hacer push directamente sobre ellas.
Al menos una persona revisará todas las Pull Requests dirigidas a la rama Develop, mientras que al menos dos personas revisarán las Pull Requests dirigidas a la rama Main (Master), antes de su fusión. Esta revisión se centrará en la funcionalidad, calidad del código, pruebas y cumplimiento de estándares.
En el caso de cualquier rechazo de la pull request con respecto a las normas de revisión definidas en el documento “Procedimiento de revisión de tareas”, se deberá revisar el código con respecto al feedback dado antes de realizar una nueva pull request.

## Gestión de Issues
Utilizaremos el sistema de seguimiento de problemas de GitHub (Issues) para gestionar y priorizar las tareas, errores y solicitudes de características. Cada problema se clasificará con etiquetas que indiquen su prioridad (por ejemplo, "alta", "media", "baja"), su tipo (por ejemplo, "bug", "mejora", "nueva característica") y en función del subgrupo al que pertenezca la tarea (“subgrupo 1”, “subgrupo 2”, “subgrupo 3”, “subgrupo 4”). 
Se creará una plantilla que facilite la redacción de las issues en función de su naturaleza facilitando la rápida compresión y la estandarización de este proceso. 

## GitHub Projects.
Para el seguimiento de requisitos e issues, utilizaremos el tablero Kanban de GitHub. Este tablero nos permitirá visualizar el flujo de trabajo de manera clara, desde la creación de una issue hasta su resolución. Podremos mover las issues a través de diferentes columnas que representarán estados como "To Do", "In Progress", "In Review" y "Done", facilitando así la coordinación y el seguimiento del trabajo realizado.
Las tareas in review deberán tener su correspondiente pull request asignada para su revisión.

## Team practices
* Al menos el 75% de las issues en “in progress” deben tener creada una rama asociada.
* Al menos el 75% de las issues en “In review” deben tener asociadas una pull request
* Al menos el 75% de las issues en “Done” deben tener asociadas una pull request aceptada y mergeada
* Al menos debe haber una review positiva del revisor en cualquier pull  request aceptada
* Un mismo miembro del equipo no debe tener más de una tarea en la columna “in progress”
* Todos los miembros del equipo deben haber completado al menos una tarea a la semana
* Todas las pull request deben llevar un comentario asociado
