---
sidebar_label: 'Procedimiento de pruebas'
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
| 29/02/2024 | 1.0 | Creación del documento |
| --- | --- | --- |
|     |     |     |
| --- | --- | --- |

# **Proceso de Pruebas y Cobertura**

Para realizar el proceso de pruebas vamos a utilizar un conjunto de pruebas unitarias y de modelos para dar cobertura a todas las funcionalidades de las que va a disponer nuestro sistema. Además, debemos realizar otras pruebas para garantizar que nuestra aplicación sea Progressive, Responsive, Faster (después de la primera carga) y Segura.

Para dar como satisfecha la cobertura el porcentaje de código que cubre debe de ser de mínimo un 80%

Para realizar los test, el asignado a una funcionalidad la implementará, cuando esté totalmente desarrollada procederá a realizar los test correspondientes.

## Pruebas Unitarias

Implementaremos pruebas unitarias para la mayoría de las funcionalidades, ya que cubren extensamente todas las funciones y métodos implementados. Estas pruebas son fundamentales para garantizar una buena cobertura y evaluar la correcta ejecución de todas las partes clave de nuestro código.

Siempre que se pueda realizar, se implementarán pruebas tanto en el valor máximo como en el mínimo de una posible entrada.

## Pruebas de Modelo

Para dar mayor cobertura al código, es esencial ampliar nuestro enfoque más allá de las pruebas unitarias tradicionales y considerar la implementación de pruebas de modelos. Estas pruebas están específicamente diseñadas para evaluar la funcionalidad y la lógica de los modelos de datos en nuestra aplicación. Los modelos, que actúan como representaciones de la estructura y las relaciones en la base de datos, desempeñan un papel crucial en la consistencia y la integridad de la información almacenada.

Al implementar pruebas de modelos, buscamos asegurarnos de que nuestros modelos no solo cumplan con los requisitos y restricciones definidos, sino que también se comporten correctamente durante las operaciones de creación, lectura, actualización y eliminación de datos. Estas pruebas pueden incluir la validación de campos, la verificación de relaciones entre modelos, la evaluación de la ejecución adecuada de métodos personalizados en los modelos y la comprobación de la interacción con la base de datos.

##

## Otro tipo de Pruebas

En este apartado vamos a definir las pruebas que debe pasar nuestra aplicación para ser reconocida como Progressive, Responsive, Faster, App-like y Safe.

### Progressive

- **Service Workers**: Implementa Service Workers para permitir funciones como la capacidad de trabajar sin conexión, mejorar la velocidad de carga y proporcionar una experiencia más confiable.

Por tanto, para probarlo desconectamos la conexión a internet y debe seguir funcionando después de que haya sido cargada por primera vez.

### Responsive

- **Diseño Responsivo**: Adopta un diseño responsivo para garantizar que la aplicación se adapte a diferentes tamaños de pantalla y dispositivos.
- **Media Queries**:Utilizar media queries en las hojas de estilo para aplicar estilos específicos según las características del dispositivo.

Para probar que es Responsive, utilizaremos varios dispositivos para asegurarnos que se adapta a todos ellos y cambiaremos la resolución de la página en el navegador con ayuda de sus herramientas y revisar mediante la herramienta de inspección de chrome si es compatible con diferentes dispositivos.

### Faster (Después de la carga)

- **Carga Diferencial**_:_ Implementa técnicas de carga diferencial para cargar solo el contenido necesario y reducir los tiempos de carga en visitas posteriores.
- **Optimización de Recursos**: Minimiza y comprime archivos CSS, JavaScript e imágenes para mejorar la velocidad de carga.
- **Caché Eficiente**: Utiliza estrategias de caché, incluida la caché de recursos estáticos y dinámicos, para acelerar la entrega de contenido.

Para asegurarnos de que sea rápida tras la primera carga podemos utilizar diversas herramientas que miden la velocidad de carga, como por ejemplo Lighthouse.

### App-like

- **Interfaz de Usuario (UI) Interactiva**: Diseña la interfaz de usuario para que sea intuitiva y responda rápidamente a las interacciones del usuario.
- **Transiciones Suaves**: Implementa transiciones y animaciones suaves para proporcionar una experiencia de usuario más parecida a una aplicación nativa.
- **Navegación Asíncrona**: Utiliza técnicas de navegación asíncrona para cargar contenido de manera eficiente sin recargar la página completa.

Para probar que sea App-like, recogemos en los formularios de los usuarios piloto preguntas relacionadas con la sencillez y fluidez de la página

### Segura

- **HTTPS**: Sirve la aplicación a través de HTTPS para garantizar la seguridad de la comunicación entre el usuario y el servidor.

Para demostrar que nuestra aplicación web es segura se realizarán varias pruebas unitarias que cubran el aspecto de la seguridad.