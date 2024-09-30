<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IA-INTELIGENCIA ARTIFICIAL</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        .header {
            background-color: red;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .nav-buttons {
            text-align: center;
            margin: 20px;
        }
        .nav-buttons a {
            background-color: red;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin: 0 10px;
            display: inline-block;
        }
        .nav-buttons a:hover {
            background-color: darkred;
        }
        .section {
            padding: 40px;
            text-align: left;
            background-color: white;
            margin: 10px 0;
            border: 1px solid #ddd;
        }
        .footer {
            background-color: red;
            color: white;
            text-align: center;
            padding: 10px;
        }
            
        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* Aspect ratio 16:9 */
            height: 0;
            overflow: hidden;
            max-width: 100%;
            background: #000;
        }
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        #btnArriba {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: none; /* Ocultar inicialmente */
            padding: 10px 15px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        #btnArriba:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>INTELIGENCIA ARTIFICIAL</h1>
        <div class="nav-buttons">
            <a href="#section1">¿Qué es?</a>
            <a href="#section2">Ventajas y desventajas</a>
            <a href="#section3">Tipos de IA</a>
            <a href="#section4">Conclusiones</a>
        </div>
    </div>

    <div id="section1" class="section">
        <h2>¿Qué es la inteligencia artificial?</h2>
        <p>La inteligencia artificial (IA) es una tecnología que permite a las máquinas ejecutar tareas que normalmente requieren inteligencia humana, como aprender y tomar decisiones. Existen diferentes tipos: IA débil (para tareas específicas), IA fuerte (teórica, comparable a la inteligencia humana) e IA superinteligente (hipotética, que supera la inteligencia humana).</p>
             <img src="https://www.seguritecnia.es/wp-content/uploads/2022/03/inteligencia-artificial-1200x630.jpg" alt="robotito" width="500" height="auto">
    <button id="btnArriba" onclick="volverArriba()">↑ Volver Arriba</button>

    <script>
        // Mostrar el botón al hacer scroll
        window.onscroll = function() {
            const btnArriba = document.getElementById("btnArriba");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btnArriba.style.display = "block";
            } else {
                btnArriba.style.display = "none";
            }
        };

        // Función para volver arriba
        function volverArriba() {
            document.body.scrollTop = 0; // Para Safari
            document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
        }
    </script>
    </div>

    <div id="section2" class="section">
        <h2>Ventajas</h2>
            <p>A continuación presentamos algunas ventajas de esta IA</p>
            <p> <b>1.</b> Automatización de Tareas Repetitivas: La IA puede realizar tareas repetitivas y monótonas de manera eficiente, liberando a los humanos de trabajos tediosos y permitiéndoles enfocarse en tareas más creativas y estratégicas. </p>
            <p> <b>2.</b>Mejora de la Precisión: Los sistemas de IA pueden realizar tareas con alta precisión, minimizando errores humanos y mejorando la calidad en sectores como la medicina, la manufactura y la logística. </p>
            <p> <b>3.</b>Procesamiento de Grandes Cantidades de Datos: La IA puede analizar y extraer información útil de grandes volúmenes de datos mucho más rápido que los humanos, lo que permite tomar decisiones basadas en datos más precisos.</p>
            <p> <b>4.</b>Adaptación y Aprendizaje Continuo: Los algoritmos de aprendizaje automático permiten a los sistemas de IA mejorar con el tiempo a medida que reciben más datos, adaptándose a nuevas condiciones y optimizando su desempeño.</p>
            <p> <b>5.</b>Disponibilidad Continua: Los sistemas de IA pueden operar las 24 horas del día, los 7 días de la semana, sin necesidad de descanso, lo que mejora la eficiencia y la disponibilidad en servicios y procesos.</p>
            <p> <b>6.</b>Personalización y Recomendaciones: La IA puede ofrecer experiencias personalizadas al analizar comportamientos y preferencias, lo que es útil en aplicaciones como el marketing, el entretenimiento y la atención al cliente.</p>
            <p> <b>7.</b>Avances en Investigación y Desarrollo: La IA facilita la investigación al modelar y simular escenarios complejos, acelerar descubrimientos científicos y optimizar procesos de diseño y prueba en diversas disciplinas.</p>
            <p> <b>8.</b>Asistencia en Tareas Complejas: En campos como la medicina, la IA puede ayudar en el diagnóstico de enfermedades, la interpretación de imágenes médicas y la recomendación de tratamientos personalizados.</p>
            <p> <b>9.</b>Optimización de Recursos: La IA puede optimizar la gestión de recursos en áreas como la energía, la logística y la producción, reduciendo costos y mejorando la eficiencia operativa.</p>
             <img src="https://bigprofiles.com/wp-content/uploads/2024/02/image-13.png" alt="asombroso" width="500" height="auto">
        <h2>Desventajas</h2>
            <p><b>1.</b>Desplazamiento de Empleos: La automatización impulsada por la IA puede llevar a la pérdida de empleos en ciertos sectores, especialmente en tareas repetitivas y rutinarias, generando incertidumbre económica para los trabajadores afectados.</p>
            <p><b>2.</b>Desigualdades Sociales: La implementación de IA puede exacerbar las desigualdades, ya que las empresas y países con más recursos tienen una mayor capacidad para desarrollar y adoptar tecnologías avanzadas, dejando atrás a los menos favorecidos.</p>
            <p><b>3.</b>Privacidad y Seguridad: Los sistemas de IA a menudo requieren grandes cantidades de datos personales, lo que puede poner en riesgo la privacidad. Además, estos sistemas pueden ser vulnerables a ataques cibernéticos o mal uso de la información.</p>
            <p><b>4.</b>Bias y Discriminación: Los algoritmos de IA pueden heredar sesgos presentes en los datos con los que fueron entrenados, lo que puede llevar a decisiones discriminatorias o injustas en áreas como la contratación, el crédito o la justicia penal.</p>
            <p><b>5.</b>Dependencia Tecnológica: Una dependencia excesiva de la IA puede llevar a una disminución en las habilidades humanas y una mayor vulnerabilidad a fallos tecnológicos, además de generar problemas en caso de errores o mal funcionamiento.</p>
            <p><b>6.</b>Costos de Implementación: Aunque la IA puede generar eficiencias a largo plazo, los costos iniciales para desarrollar, implementar y mantener sistemas de IA pueden ser altos, especialmente para pequeñas empresas y organizaciones.</p>
            <p><b>7.</b>Ética y Responsabilidad: La toma de decisiones automatizada plantea desafíos éticos, como determinar quién es responsable en caso de errores o daños causados por sistemas de IA, y cómo asegurar que estas decisiones sean justas y transparentes.</p>
    </div>

    <div id="section3" class="section">
        <h2>Tipos de Inteligenia Artificial</h2>
            <p>La inteligencia artificial (IA) se clasifica en diferentes tipos según su capacidad, sus aplicaciones y su nivel de sofisticación. Aquí te presento una visión general de los principales tipos de IA:</p>

<p>Según el Nivel de Capacidad:</p>
<p><b>IA Débil (Narrow AI):</b></p>

<p>Definición: Sistemas diseñados para realizar una tarea específica o resolver un problema concreto. No poseen conciencia ni entendimiento general, y operan dentro de un ámbito limitado.</p>
<p>Ejemplos: Asistentes virtuales como Siri o Alexa, motores de recomendación en plataformas de streaming, y chatbots de servicio al cliente.</p>
<p><b>IA General (General AI):</b></p>

<p>Definición: Un tipo de IA que tiene la capacidad de entender, aprender y aplicar inteligencia en una amplia gama de tareas, similar a la inteligencia humana. Aún no se ha logrado desarrollar una IA de este tipo.</p>
<p>Ejemplos: En teoría, una IA General podría realizar cualquier tarea cognitiva que un ser humano pueda hacer, pero en la práctica, todavía es un concepto en desarrollo y no existe.</p>
<p><b>IA Superinteligente:</b></p>

<p>Definición: Una forma de IA que supera la inteligencia humana en todos los aspectos, incluyendo creatividad, resolución de problemas y habilidades sociales. Este es un concepto teórico y especulativo que plantea tanto oportunidades como riesgos.</p>
<p>Ejemplos: No existe aún, pero es un tema de debate en la filosofía y la ética de la IA.</p>
<p> </p>
<p>Según el Método y Enfoque:</p>
<p><b>IA Basada en Reglas:</b></p>

<p>Definición: Sistemas que operan siguiendo un conjunto de reglas y lógica predefinidas para tomar decisiones o realizar tareas.</p>
<p>Ejemplos: Sistemas expertos utilizados en diagnóstico médico o en asesoría financiera.</p>
<p><b>IA Basada en Aprendizaje Automático (Machine Learning):</b></p>

<p>Definición: Sistemas que aprenden de datos y mejoran su desempeño con el tiempo sin necesidad de ser programados explícitamente para cada tarea.</p>
<p></p>
<p>Subtipos:</p>
<p><b>Aprendizaje Supervisado:</b> Modelos entrenados con datos etiquetados para hacer predicciones o clasificaciones.</p>
<p><b>Aprendizaje No Supervisado:</b> Modelos que encuentran patrones y estructuras en datos no etiquetados.</p>
<p><b>Aprendizaje por Refuerzo:</b> Modelos que aprenden a tomar decisiones a través de prueba y error, recibiendo recompensas o penalizaciones.</p>
<p><b>IA Basada en Redes Neuronales:</b></p>

<p>Definición: Sistemas que simulan el funcionamiento del cerebro humano para procesar información y resolver problemas complejos.</p>
<p>Ejemplos: Redes neuronales profundas utilizadas en el reconocimiento de imágenes y el procesamiento del lenguaje natural.</p>
<p><b>IA Cognitiva:</b></p>

<p>Definición: Sistemas diseñados para imitar los procesos cognitivos humanos, como el razonamiento, la comprensión y la interacción en lenguaje natural.</p>
<p>Ejemplos: Asistentes personales avanzados y sistemas de análisis de sentimientos en redes sociales.</p>
<p></p>
<p>Según el Tipo de Aplicación:</p>
<p><b>IA en Procesamiento de Lenguaje Natural (NLP):</b></p>

<p>Definición: Sistemas que permiten a las máquinas entender, interpretar y generar lenguaje humano.</p>
<p>Ejemplos: Traductores automáticos, chatbots y sistemas de análisis de texto.</p>
<p><b>IA en Visión por Computadora:</b></p>

<p>Definición: Sistemas que permiten a las máquinas interpretar y analizar información visual del mundo.</p>
<p>Ejemplos: Reconocimiento facial, análisis de imágenes médicas y vehículos autónomos.</p>
<p><b>IA en Robótica:</b></p>

<p>Definición: Aplicación de la IA en robots para realizar tareas físicas y tomar decisiones basadas en sensores.</p>
<p>Ejemplos: Robots industriales, robots de servicio y robots de asistencia personal.</p>
    </div>

    <div id="section4" class="section">
        <h2>Conclusiones</h2>
            <p>La inteligencia artificial (IA) es un campo de la informática que está transformando muchos aspectos de nuestra vida y trabajo. Va desde la IA débil, que realiza tareas específicas eficientemente, hasta conceptos teóricos como la IA General y Superinteligente. Incluye enfoques como el aprendizaje automático, redes neuronales y procesos cognitivos, con aplicaciones en áreas como el procesamiento del lenguaje, la visión por computadora y la robótica.</p>
            <p>Aunque la IA promete mejorar la eficiencia y precisión en múltiples campos, también plantea desafíos como el desplazamiento laboral, problemas de privacidad y sesgos en los algoritmos. Abordar estos problemas de manera ética y equitativa es esencial para asegurar que la IA beneficie a la sociedad en su conjunto.</p>
             <img src="https://pontia.tech/wp-content/uploads/2023/06/imagen-blog-ia-pontia-1.jpg" alt="amén" width="500" height="auto">
    </div>
    <h5>Un video para entender mejor </h5>
    <div class="video-container">
        <iframe width="640" height="360" src="https://www.youtube.com/embed/xPGvDNRFzqYowQZe" 
            title="Video de YouTube" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    <div class="footer">
        <p>Gracias xd</p>
    </div>
</body>
</html>