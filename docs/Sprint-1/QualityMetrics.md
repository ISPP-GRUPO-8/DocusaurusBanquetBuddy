---
sidebar_label: 'Métricas de calidad'
sidebar_position: 3
---

| **Grupo de prácticas: 8** |
| --- |
| Alberto Benitez Morales |
| Álvaro Carrera Bernal |
| Álvaro Navarro Rivera |
| Álvaro Jose Sanchez Flores |
| Artemio Rodriguez Asensio |
| Eduardo de Bustamante Lucena |
| Fernando Barroso Barroso |
| Francisco Jose Vargas Castro |
| Gonzalo Santigo Martín |
| Guillermo Alonso Pacheco Rodrigues |
| Jaime Caballero Hernandez |
| Javier Nunes Ruiz |
| Javier Rodríguez Cordero |
| Juan Martínez Cano |
| Marco Antonio Roca Rodríguez |
| Mario Sanchez Naranjo |
| Pablo Martínez Valladares |

**Control de Versiones**

| **Fecha** | **Versión** | **Descripción** |
| --- | --- | --- |
| 25/02/2024 | 1.0 | Primera versión del documento |
| --- | --- | --- |
| 26/02/2024 | 1.1 | Descripción de las métricas de rendimiento |
| --- | --- | --- |

# Introducción

En este documento planteamos métricas de código que nos servirán para medir la calidad del mismo.Tenemos que tener en cuenta que la app debe ser **Responsive**(accesible y adaptable a todos los dispositivos),**Progressive**(ofrecer una experiencia de usuario similar a la de una aplicación nativa),**rápida**(después de carga inicial) y **segura**.

A la hora de implementar funcionalidad,prestaremos atención a métricas relacionadas con la **Cohesión,Acoplamiento,Seguridad,Rendimiento,Usabilidad y Adaptabilidad del código**

# Atributos de calidad

## Atributo 1:Cohesión del código

La **Cohesión** del código se refiere al grado en que las partes de un programa están interrelacionadas y trabajan juntas para lograr un objetivo común.Si un módulo tiene una **alta cohesión**,entonces es que sus funciones están estrechamente relacionadas,mientras que si es **baja cohesión**,entonces es que desempeña funciones poco relacionadas. En nuestro caso buscamos que se produzca una alta cohesión. La mediremos con las siguientes métricas:

### Métrica 1:Dependencia de métodos

- Definición: La métrica de dependencia de métodos mide la cantidad de métodos de una clase que son llamados por otros métodos dentro de la misma clase o desde clases externas. Esto nos permitirá evaluar el acoplamiento entre módulos, un bajo acoplamiento indica una alta cohesión y viceversa.
- Fórmula: Se puede calcular dividiendo el número de métodos del que son llamados por otros métodos (llamados dependientes) entre el total de métodos del módulo.
- Interpretación: Cuanto mayor sea el porcentaje de métodos dependientes en relación con el total de métodos de la clase, mayor será la dependencia de métodos. Una alta dependencia puede indicar una falta de modularidad y una mayor complejidad en la clase.
- Condición para cumplir la métrica: **Mantener un porcentaje bajo en el análisis.**
- Uso de herramientas: SonarCloud puede escanear el código base y generar informes que indiquen las dependencias entre módulos.

### Métrica 2:Utilidad de métodos

- Definición: La métrica de utilidad de métodos evalúa la frecuencia con la que un método es invocado por otros métodos o partes del código en la aplicación.
- Fórmula: Se puede calcular dividiendo el número de veces que un método es invocado entre el total de llamadas a métodos en la aplicación.
- Interpretación: Cuanto mayor sea el valor de esta métrica para un método específico, más útil y central es ese método para el funcionamiento de la aplicación. Los métodos con una alta utilidad suelen ser críticos para la funcionalidad y pueden requerir una atención especial durante el proceso de desarrollo y mantenimiento del software.

## Atributo 2:Acoplamiento

El acoplamiento del código se refiere al grado en el que dos módulos dependen entre sí.Si dos módulos tienen **alto acoplamiento**,entonces dependen mucho uno del otro,mientras que si tienen **bajo acoplamiento**,entonces dependen poco entre ellos. Un bajo acoplamiento indica una alta cohesión, por lo que estas métricas nos sirven para analizar la cohesión también.

###

### Métrica 1:Dependencia de métodos

- Definición: La métrica de dependencia de métodos mide la cantidad de métodos de una clase que son llamados por otros métodos dentro de la misma clase o desde clases externas. En este caso solo analizaremos los métodos dentro del módulo que estamos analizando.
- Fórmula: Se puede calcular dividiendo el número de métodos del que son llamados por otros métodos (llamados dependientes) entre el total de métodos del módulo.
- Interpretación: Cuanto mayor sea el porcentaje de métodos dependientes en relación con el total de métodos de la clase, mayor será la dependencia de métodos. Una alta dependencia puede indicar una falta de modularidad y una mayor complejidad en la clase.
- Condición para cumplir la métrica: **Mantener un porcentaje bajo**
- Uso de herramientas: SonarCloud puede escanear el código base y generar informes que indiquen las dependencias entre módulos

## Atributo 3: Seguridad

La seguridad del código se refiere a la protección del software contra amenazas y vulnerabilidades que podrían comprometer la confidencialidad, integridad y disponibilidad de los datos. Un código seguro es aquel que está diseñado y desarrollado de manera que minimiza los riesgos de explotación y previene posibles brechas de seguridad. En nuestro caso buscamos que sea seguro.

Métrica 1: Nivel de vulnerabilidades

- Definición: Esta métrica evalúa la cantidad y gravedad de las vulnerabilidades de seguridad presentes en el código. Se puede determinar mediante el uso SonarCloud.
- Condición para cumplir la métrica: El análisis de SonarCloud **no debe proporcionarnos más de una vulnerabilidad por cada 1000 líneas de código**.

Métrica 2: Cumplimiento de estándares de seguridad

- Definición: Verifica si el código cumple con estándares de seguridad reconocidos, como OWASP Top 10 o normativas de cumplimiento específicas de la industria (por ejemplo, PCI-DSS para el procesamiento de tarjetas de crédito). Se puede medir mediante la realización de auditorías de cumplimiento y análisis de estática de código en busca de violaciones.
- Condición para cumplir la métrica: **Asegurarse de que cumple las normativas de seguridad definidas previamente.**

Métrica 3: Security Hotspots (Puntos calientes de seguridad)

- Definición: Partes de código sensibles de las que puede surgir una vulnerabilidad. Esta métrica también la aporta el análisis estático de SonarCloud.
- Condición para cumplir la métrica: **No superar el umbral de dos puntos calientes por cada 1000 líneas de código.**

## Atributo 4: Rendimiento

El rendimiento del código se refiere a la capacidad del software para ejecutar sus funciones de manera eficiente y rápida, garantizando tiempos de respuesta rápidos y uso eficiente de recursos como CPU, memoria y ancho de banda. Un código bien optimizado puede mejorar la experiencia del usuario y reducir los costos operativos asociados con la infraestructura de hardware y la escalabilidad del sistema.

Métrica 1: Tiempo de carga inicial

- Definición: Mide el tiempo que tarda la aplicación en cargarse completamente después de la carga inicial. Este tiempo afecta la percepción del usuario sobre la velocidad de respuesta de la aplicación y puede influir en la retención de usuarios.
- Condición para cumplir la métrica: Los tiempos de respuesta deben ser razonables, **se debe reducir lo máximo posible el tiempo de carga inicial**.

Métrica 2: Tiempo de respuesta

- Definición: Evalúa el tiempo que tarda la aplicación en responder a las solicitudes del usuario. Un tiempo de respuesta más rápido mejora la experiencia del usuario y puede aumentar la satisfacción del cliente.
- Condición para cumplir la métrica: Los tiempos de respuesta deben ser razonables, **se debe reducir lo máximo posible el tiempo de respuesta**.

## Atributo 5: Usabilidad

La usabilidad del código se refiere a la facilidad con la que los usuarios pueden interactuar con el software y realizar tareas de manera efectiva, eficiente y satisfactoria. Un código con una buena usabilidad garantiza una experiencia de usuario positiva, lo que puede aumentar la adopción del software y la satisfacción del cliente.

Métrica 1: Tiempo de aprendizaje

- Definición: Mide el tiempo que un usuario necesita para aprender a utilizar la aplicación. Un tiempo de aprendizaje más corto indica una mejor usabilidad y facilita la adopción de la aplicación por parte de los usuarios. Usaremos a los usuarios pilotos para el cumplimiento de esta métrica.
- Condición para cumplir la métrica: **Satisfacer a los usuarios pilotos**.

Métrica 2: Feedback del usuario

- Definición: Recopila y analiza los comentarios y opiniones de los usuarios sobre la usabilidad de la aplicación. Esto puede realizarse mediante encuestas, entrevistas, análisis de registros de usuarios o pruebas de usabilidad. En nuestro caso usaremos a los usuarios pilotos para asegurarnos de qué se cumpla esta métrica.
- Condición para cumplir la métrica: **Satisfacer a los usuarios pilotos**.

## Atributo 6: Adaptabilidad del código

## La adaptabilidad del código se refiere a la capacidad del software para funcionar correctamente en una variedad de entornos y dispositivos, incluyendo diferentes sistemas operativos, navegadores web, dispositivos móviles y tamaños de pantalla. Un código adaptable garantiza una experiencia de usuario consistente y accesible en todos los contextos de uso

Métrica 1: Compatibilidad con navegadores

- Definición: Verifica si la aplicación funciona correctamente en diferentes navegadores web, incluidos Chrome, Firefox, Safari, Edge, etc. La compatibilidad con navegadores garantiza una experiencia consistente para todos los usuarios, independientemente del navegador que utilicen.
- Condición para cumplir la métrica: **Comprobar que la aplicación funciona en distintos navegadores y dispositivos**.

Métrica 2: Cumplimiento de estándares de diseño responsivo

- Definición: Evalúa si la aplicación se adapta correctamente a diferentes tamaños de pantalla y dispositivos, como computadoras de escritorio, tabletas y teléfonos móviles. El cumplimiento de estándares de diseño responsivo es esencial para garantizar una experiencia de usuario consistente y accesible en todos los dispositivos.
- Condición para cumplir la métrica: **Comprobar que la aplicación se adapta a diferentes tamaños de pantallas y dispositivos**.
- Herramientas: En el navegador Chrome se puede usar la herramienta inspeccionar para probar distintos tamaños de pantalla.

## Otras métricas

BUGS

- Definición: Errores detectados en el código, estos bugs pueden ser causantes de comportamientos no deseados o errores en la aplicación. Usaremos Sonar Cloud para priorizar la corrección de los bugs más críticos que afectan la funcionalidad principal de la aplicación
- Condición para cumplir la métrica: **El resultado del análisis de SonarCloud no debe encontrar más de un bug por cada 1000 líneas de código**.