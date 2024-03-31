**Asignación de tareas de GitHub**

## Introducción

El seguimiento y la asignación eficiente de tareas son elementos fundamentales en la gestión de proyectos de desarrollo de software.  
Este documento establece los procedimientos y las mejores prácticas para la asignación de tareas en GitHub, con el objetivo de optimizar la organización del trabajo, mejorar la comunicación entre los miembros del equipo y garantizar el éxito del proyecto. Desde la creación de tareas hasta su asignación, seguimiento y cierre, se detallan los pasos necesarios para una gestión efectiva y transparente de las actividades del proyecto a través de GitHub.

## ¿Cómo se realizan las estimaciones?

Para realizar las estimaciones de las tareas, utilizaremos la técnica de Planning Poker. Esta técnica se basa en la estimación por consenso, donde cada miembro del equipo aporta su propia estimación del esfuerzo o tamaño relativo de la tarea.

En el proceso de estimación de tareas, el equipo se reúne y se presenta la tarea a ser estimada. Cada miembro recibe cartas de Planning Poker, y se establece una unidad de medida para las estimaciones, como puntos de historia o días. Luego, cada miembro del equipo elige una carta que representa su estimación individual de la tarea. Este enfoque ayuda a obtener una estimación consensuada al facilitar la discusión y considerar diferentes perspectivas antes de llegar a un acuerdo sobre la magnitud de la tarea.

Durante la sesión de Planning Poker, cada miembro del equipo elige en privado una carta que refleje su estimación individual del esfuerzo o tamaño de la tarea, sin comunicarse con los demás. Posteriormente, todos revelan simultáneamente sus cartas. Si todas las cartas coinciden, esa es la estimación final. Sin embargo, si las cartas difieren, se abre una discusión para comprender mejor las distintas perspectivas. Se repite el proceso de selección de cartas y discusión hasta que el equipo alcance un consenso sobre la estimación de la tarea, facilitando así una evaluación más precisa y colaborativa del trabajo por realizar.

Una vez que el equipo llega a un consenso sobre la estimación final para la tarea durante la sesión de Planning Poker, esta se registra en el backlog del proyecto para su seguimiento y planificación. Además, se tiene la opción de registrar las diferentes estimaciones proporcionadas por cada miembro del equipo, lo que permite mantener un historial de las decisiones tomadas y proporciona insights sobre la variabilidad en las percepciones de esfuerzo o tamaño de las tareas. Esto puede ser útil para futuras evaluaciones y para mejorar la precisión en las estimaciones de proyectos posteriores.

Para la estimación poker haremos uso de la siguiente página web: <https://www.scrumpoker-online.org/es/>

## Etiquetas utilizadas

Las etiquetas que hemos definido para una rápida identificación de tareas son las siguientes:

- **En función del subgrupo**: Se han definido 4 etiquetas que siguen la sintaxis Subgrupo X, en función del subgrupo responsable de realizar la tarea.
- **En función de la prioridad**: Se han definido las etiquetas "Alta Prioridad", "Media Prioridad" y "Baja Prioridad" con el objetivo de ayudar a destacar las tareas más urgentes y asegurar que se aborden en consecuencia. Esta etiqueta estará basada en el resultado de la estimación poker.
- **En función del tipo de tarea**. Se han definido las etiquetas “Desarrollo”, “Refactorización”, “Pruebas”, “Diseño”, “Documentación”. Esto facilitará la identificación de las actividades específicas que deben realizarse en cada etapa del proyecto.
- **En función del área funcional**. Con el objetivo de categorizar las tareas según la parte del sistema al que pertenecen definimos las etiquetas “Frontend”, “Backend”, “Base de datos”, “Configuración”.

##

## Nombres de las tareas en GitHub Projects

Nombrar las tareas en un proyecto de GitHub de manera clara y descriptiva es fundamental para facilitar la comprensión y la gestión del trabajo. Aquí tienes algunas sugerencias para nombrar las tareas en un proyecto:

1. **Descriptivo y conciso**: Utiliza nombres que describan claramente la tarea o la funcionalidad que se está abordando, pero mantén el nombre lo más conciso posible para facilitar la lectura y la identificación rápida.
2. **Acción y objetivo**: Utiliza verbos que denoten acciones específicas que deben realizarse como parte de la tarea, seguidos de un objetivo o resultado esperado. Por ejemplo, "Implementar autenticación de usuario", "Corregir error de validación de formulario".
3. **Utiliza convenciones de nomenclatura**: Puedes adoptar convenciones de nomenclatura específicas, como el formato CamelCase o snake_case, para mantener la consistencia en los nombres de las tareas y facilitar la búsqueda y la organización.
4. **Priorización y contexto**: Incluye información relevante sobre la prioridad de la tarea o el contexto en el nombre, si es necesario. Por ejemplo, puedes agregar un prefijo como "Urgente:" o "Importante:" para resaltar la prioridad, o incluir el área funcional del proyecto, como "Frontend:" o "Backend:".
5. **Identificadores únicos**: Las tareas en GitHub cuentan con identificadores únicos asignados automáticamente, como los números de issue. Estos identificadores permiten referenciar la tarea en otros sistemas o en discusiones sin necesidad de añadir información redundante al nombre de la tarea.

Ejemplos de nombres de tareas utilizando estas sugerencias podrían ser:

\- "Agregar función de búsqueda de usuarios"

\- "Optimizar el rendimiento de la carga de la página principal"

\- "Resolver bug de formato en la página de inicio de sesión"

\- "Actualizar bibliotecas de terceros a la última versión"

\- "Crear API para la gestión de pedidos de clientes"

Al seguir estas pautas, puedes crear nombres de tareas claros y significativos que ayuden a organizar y gestionar eficazmente el trabajo en tu proyecto de GitHub.

El formato a seguir será utilizar "R-" o "F-" seguido de un código de tres letras (XXX) para identificar la tarea en relación con el backlog.

\- R-001: Registro y Elección de Tipo de Usuario

\- R-002: Login de Usuario

\- F-020: Creación de procedimiento de revisión de tareas

En este ejemplo, "R-" o "F-" indica que estas tareas provienen del backlog de funcionalidades (o cualquier otro término que "R-" o "F-" pueda representar en tu contexto), y el código de tres letras identifica de manera única cada tarea en relación con el backlog.

Este enfoque ayuda a mantener una trazabilidad clara entre las tareas en el backlog y su implementación en el proyecto, lo que facilita la gestión y el seguimiento del progreso del trabajo. Asegúrate de documentar este sistema de codificación para que todos los miembros del equipo lo comprendan y lo utilicen de manera consistente.

## Criterios a seguir para repartir las tareas

Cuando se trata de repartir tareas en un proyecto de GitHub, es importante seguir algunos criterios clave para garantizar una distribución efectiva y equitativa del trabajo entre los miembros del equipo. Estos criterios pueden incluir:

1. **Habilidades y experiencia:** Asignar tareas frontend a los miembros del equipo con experiencia y habilidades en desarrollo frontend, como HTML, CSS, y JavaScript, mientras que las tareas backend deben ser asignadas a aquellos con experiencia en desarrollo de servidores, bases de datos, y lógica de aplicación.
2. **Carga de trabajo**: Distribuir las tareas de manera equitativa para evitar la sobrecarga de trabajo en algunos miembros del equipo mientras otros tienen menos responsabilidades. Esto puede ayudar a mantener un equilibrio en la productividad y evitar el agotamiento.
3. **Prioridades del proyecto:** Considerar las prioridades y objetivos del proyecto al asignar tareas. Las tareas más críticas o urgentes pueden asignarse a los miembros del equipo con la capacidad y disponibilidad adecuadas para abordarlas.
4. **Intereses y motivación:** Tener en cuenta los intereses y la motivación de los miembros del equipo al asignar tareas. Asignar tareas que despierten el interés o la pasión de un miembro del equipo puede aumentar su compromiso y productividad.
5. **Disponibilidad:** Asegurarse de que los miembros del equipo tengan la disponibilidad necesaria para completar las tareas dentro de los plazos establecidos. Considerar otros compromisos o responsabilidades que puedan afectar la disponibilidad de tiempo de cada miembro del equipo.
6. **Comunicación y colaboración:** Fomentar la comunicación y colaboración entre los miembros del equipo frontend y backend al asignar tareas. Asegurarse de que ambos grupos trabajen de manera coordinada y se mantengan informados sobre los avances y dependencias entre las tareas frontend y backend.

Al seguir estos criterios, se puede mejorar la eficiencia y la efectividad en la distribución de tareas en un proyecto de GitHub, lo que contribuye al éxito general del proyecto y al bienestar del equipo.