 **La curva del olvido sospechosamente plana del reino cuantico** 

Texto original：[Quantum Country’s suspiciously flat forgetting curves | Patreon en Andy Matuschak](https://www.patreon.com/posts/quantum-countrys-59365357)

desde2019Durante anos, he estado[Reino Cuantico](https://quantum.country/)lectores a realizar una serie de experimentos controlados aleatorios. La razon principal por la que no he publicado esto es que no entiendo lo que esta pasando. Los lectores olvidan muy lentamente. demasiado lento!En cada experimento tacho algunas teorias, pero estos datos parecen violar una suposicion central de los sistemas de memoria: que nuestros recuerdos siguen una curva pronunciada hacia el olvido con el tiempo. Esto me ha confundido durante todo un ano, pero ahora tengo una idea que explica lo que esta pasando. Si estoy en lo cierto, esto significaria que un sistema de memoria de proposito general no seria capaz de reutilizar los metodos que los sistemas de memoria tradicionales centrados en el vocabulario utilizan para evaluarse y mejorarse.。

Tenga en cuenta: esta es una discusion informal sobre los datos de Quantum Realm. Este analisis es preliminar y no debe citarse ni extraerse en otros trabajos. Estoy aqui[Abre la puerta y construye un auto.](https://notes.andymatuschak.org/Work_with_the_garage_door_up)。

 **Segmentos de mercado en Quantum Kingdom** 

El Reino Cuantico es una especie de observatorio de la memoria humana, o al menos un fragmento muy limitado de ella. Por supuesto, existen innumerables estudios sobre la memoria humana, pero Quantum Realm nos da una mirada a un segmento de mercado insatisfecho.：

- Los lectores son adultos en un entorno automotivado, en lugar de ninos o estudiantes universitarios en una escuela formal o en entornos de laboratorio artificiales.

- El material es principalmente conceptual, no hechos, vocabulario, definiciones, datos arbitrarios, etc.

Este nicho es importante porque representa el tipo de aprendizaje significativo que la mayoria de los adultos deben realizar en el curso de su propio trabajo creativo.。

Por supuesto, algunos profesionales usan SuperMemo、Anki y Mnemosyne herramientas, pero el analisis de estos datos tiene una limitacion importante: solo tienen un punto de datos por elemento por iteracion, ya que los elementos son (normalmente) escritos por cada usuario. Los desarrolladores deben confiar en[Supuestos importantes del modelo](https://supermemo.guru/wiki/Three_component_model_of_memory)para dar sentido a estos escasos datos. Con Quantum Realm, podemos (¡espero!) analizar el desempeno de grandes grupos de lectores en el mismo conjunto de problemas y evitar en gran medida estos supuestos del modelo.。Duolingo y Quizlet Puedes hacer lo mismo, pero principalmente para el vocabulario./Material orientado a hechos en lugar de temas conceptuales. Mientras tanto, los conjuntos de datos de estudios academicos se limitan casi exclusivamente a contextos humanos y de aula, aunque cabe senalar que sus datos generalmente son mucho mas limpios y mejor controlados.！

Para mi, el objetivo de todos estos datos es aprender algo sobre los sistemas de memoria y como funciona la memoria humana para que podamos disenar mejores sistemas que otorguen superpoderes a las personas. Estudie los datos de Quantum Realm no para comprender como las personas aprenden Quantum Realm, sino para comprender indirectamente como las personas podrian usar estos sistemas para aprender en general. A un alto nivel, queremos responder preguntas como：

- ¿Que tan eficientes pueden llegar a ser estos sistemas? De manera optima, ¿cuando deberia un usuario especifico revisar una tarjeta especifica?？

- ¿Que tan ampliamente disponibles estan estos sistemas? ¿En que no son buenos? ¿Que tan amplios pueden ser sus campos de aplicacion?？

- Como estas interacciones de revision se traducen en la capacidad de una persona para utilizar este conocimiento para resolver problemas y hacer cosas en otros contextos.？

- ......Espera。

Por supuesto, estos estan fragmentados. He estado intentando responder dos subpreguntas relacionadas.：

1. ¿Que es el contrafactual? ¿Hasta que punto las personas pueden recordar detalles clave de un texto sin un mecanismo de revision?？

2. ¿El calendario actual de Quantum Realm es demasiado corto? ¿Es demasiado largo? Para que lectores y preguntas.？

Estas preguntas resultaron ser mucho mas dificiles de lo que esperaba.！

 **Programacion de experimentos: conceptos basicos** 

En esta publicacion me centrare en el experimento que realice recientemente porque esta mas controlado, al menos para el problema que describi anteriormente.。

A cada nuevo lector se le asigna uno de cuatro programas, con intervalos iniciales de una semana, dos semanas, un mes y dos meses. Es decir, en「Dos semanas」A los lectores de la condicion se les pidio que revisaran dos semanas despues de haber respondido originalmente una pregunta en el articulo. Estoy simplificando demasiado aqui, pero eso es suficiente para comenzar.。

En conjunto, estas condiciones deberian ayudarnos a encontrar un “punto optimo” para la primera revision.”\*。Ademas, la condicion de los dos meses deberia decirnos algo sobre el contrafactual: ¿que pasaria si un lector no revisara durante dos meses completos?？（\*Traduccion y anotacion：sweet spot，si「Punto optimo」、「Mejor posicion de bateo」Significado de）

Por lo tanto, aqui estan las tasas de precision medianas de los lectores en la primera revision retrasada, por condicion (las tasas de precision para los lectores del primer y tercer cuartil estan entre parentesis）：

- 1 semanas：87%（81-92%, N=35 lectores）

- 2 semanas：87%（81-91%, N=35 lectores）

- 1 meses：85%（77-92%, N=25 lectores）

Estos datos se limitan al primer articulo de Quantum Realm (la mayor cantidad de datos que tenemos) y representan a aquellos que recopilaron al menos 50 preguntas y reviso el 90% Lectores de las preguntas anteriores.。(Notaras que he evitado intencionalmente el modelado y las pruebas estadisticas en este articulo. Esto se debe a que estamos hablando de efectos y quiero que estos efectos sean lo suficientemente grandes como para verlos de un vistazo.！)

en 2 Solo un punado de lectores en cada condicion completaron completamente su primera revision, por lo que todavia no puedo informar estadisticas para cada lector en esa condicion, pero podemos tener una idea de la situacion agrupando todas las revisiones en cada condicion en una categoria amplia y observando la proporcion de preguntas en cada categoria que se recordaron.：

- 1 semanas：86%（N=138 lectores，6381 Tiempos de revision）

- 2 semanas：84%（N=142 lectores，6319 Tiempos de revision）

- 1 meses：83%（N=90 lectores，4477 Tiempos de revision）

- 2 meses：81% (N=50 lectores，1744Tiempos de revision)

Podemos agregar 2019 Los lectores de principios de ano vienen a anadir un dato, cuando solo faltaba un dia para la primera revision. Esta no es una comparacion clara, porque puede haber efectos de cola y porque estos usuarios no「Intentalo de nuevo」Mecanismo de retroalimentacion, pero solo para tener una idea.：

- 1 dias：89%（N=2210 lectores，122139 Tiempos de revision）

Esta es una curva de olvido casi increiblemente plana: desde 89% llegar 81%，¡Durante dos meses! Esta es mi confusion. Esta pendiente poco profunda es el centro de mi confusion, pero primero hablemos de la parte significativa.。

 **Los temas que inicialmente se olvidaron deberian programarse con mayor frecuencia** 

Si nos fijamos especificamente en la primera vez que un lector responde una pregunta en un articulo **olvidar** El problema con la precision del recuerdo retrasado es que los datos se vuelven mas predecibles. Estas preguntas se vuelven a asignar un dia despues, repetidamente si es necesario, hasta que el lector las recuerde, y luego se les asigna la pregunta con un retraso. Precision de recuperacion, calculada por latencia：

- 1 semanas：84%（N = 79 lectores，626 Tiempos de revision）

- 2 semanas：77%（N = 73 lectores，447 Tiempos de revision）

- 1 meses：69%（N = 57 lectores，341 Tiempos de revision）

- 2 meses：56%（N = 27 lectores，138 Tiempos de revision）

Estos datos pintan un panorama mas familiar y sugieren una direccion bastante clara para los autores de sistemas de memoria. Si nuestro objetivo es asegurar que la velocidad de la memoria se mantenga en 90% arriba, entonces, cuando un lector olvida inicialmente una pregunta, debemos designarla rapidamente para que se revise nuevamente. Automaticamente un dia despues「Intentalo de nuevo」Vinculos insuficientes para soportar largos intervalos de seguimiento。

De hecho, el efecto es agravado. Si un lector olvida una pregunta durante la primera revision retrasada, se le asignara nuevamente un dia despues. Los lectores que tuvieron un intervalo inicial mas largo tenian menos probabilidades de recuperarse en la sesion siguiente, es decir, era mas probable que volvieran a olvidar. Tasas de recuperacion retrasadas por la primera sesion de revision (tenga en cuenta que estos tamanos de muestra ahora son cada vez mas pequenos)）：

- 1 semanas：90%（N = 31 lectores，79 Tiempos de revision）

- 2 semanas：78%（N = 33 lectores，86 Tiempos de revision）

- 1 meses：83%（N = 24 lectores，70 Tiempos de revision）

- 2 meses：57%（N = 9 lectores，44 Tiempos de revision）

Bien, eso es lo que extrajimos como una implicacion bastante clara para los disenadores de sistemas de memoria: cuando se olvida una tarjeta en el texto, el cronograma inicial deberia reducirse decisivamente.。

 **El problema comienza: cuando se recuerda el problema por primera vez.** 

Pero las preguntas no suelen olvidarse en los articulos. En estos cuatro casos, resumiendo a todos los lectores, la exactitud del articulo es 91-92%。Entonces, ¿cuales son las formas comunes en que se recuerdan las preguntas por primera vez? ese es el problema。

Tasa de recuerdo de la primera revision de las preguntas memorizadas en el texto.：

- 1 semanas：86%（N=137 lectores，6174 Tiempos de revision）

- 2 semanas：85%（N=140 lectores，5814 Tiempos de revision）

- 1 meses：84%（N=89 lectores，4108 Tiempos de revision）

- 2 meses：83%（N=49 lectores，1599 Tiempos de revision）

Como en el apartado anterior, podemos utilizar irresponsablemente 2019 Datos de lectores en 2016 1 Agrega un punto de datos todos los dias.：90%（N = 2207 lectores，109031 tiempos de revision). Como antes, tenga en cuenta que esta no es una comparacion bien controlada.。

¡Esta curva del olvido es irrazonablemente plana! Por supuesto, si queremos lograr 90% tasa de recuperacion, estos datos sugieren que deberiamos programar la primera revision en menos de una semana. Sin embargo, cada revision tiene un costo; Si los lectores pudieran saltarse una o dos revisiones iniciales a cambio de unos pocos puntos porcentuales menos de precision, sospecho que la mayoria aceptaria ese intercambio. Despues de todo, cada repeticion completa del primer articulo 112 Las preguntas tardan aprox. 25 minutos. ¿Como deberiamos pensar en este tema?？

Una consideracion es lo que vimos en la seccion anterior.「Recuperacion」efecto. ¿Las personas que olvidan despues de un periodo de tiempo mas largo tienen mas dificultades para recuperarse en la siguiente sesion que aquellas que olvidan despues de una semana? A continuacion se muestra la tasa de recuperacion (es decir, la tasa de precision un dia despues de olvidar en la primera sesion retrasada, en el articulo despues de recordar）：

- 1 semanas：84%（N=68 lectores，600 Tiempos de revision）

- 2 semanas：81%（N=66 lectores，529 Tiempos de revision）

- 1 meses：85% (N=44 lectores，384 Tiempos de revision)

- 2 meses：74%（N=16 lectores，147 Tiempos de revision）

Esto no parece muy convincente. Quizas haya problemas en dos meses, pero primero me gustaria ver mas muestras. Aqui parece que podemos posponer la primera revision un mes sin ninguna penalizacion real.。

Otra razon para posponer el examen inicial es llamar[Efecto de espaciado](https://en.wikipedia.org/wiki/Spacing_effect)，Pero dejare de discutir este tema en este articulo. Baste decir que (con datos escasos) no he observado un efecto de brecha en la interaccion entre la primera y la segunda sesion.。

¿Que pasa con la segmentacion por pregunta? Eche un vistazo a las diez preguntas del primer articulo que tuvieron la precision inicial mas baja, pero a medida que los lectores leyeron **Recuerda** Incluso con las respuestas a estas preguntas, todavia vemos una pronunciada curva de olvido durante la primera revision retrasada.：

- 1 semanas：74%（N=74 lectores，273 Tiempos de revision）

- 2 semanas：71%（N=67 lectores，277 Tiempos de revision）

- 1 meses：65%（N=47 lectores，210 Tiempos de revision）

- 2 meses：65%（N=25 lectores，85 Tiempos de revision）

Esto es muy convincente, pero la curva desaparece rapidamente. Aqui estan los proximos diez.「Lo mas dificil」Precision del problema, calculada por el retraso inicial.：

- 1 semanas：73%（N=129 lectores，474 Tiempos de revision）

- 2 semanas：74%（N=114 lectores，446 Tiempos de revision）

- 1 meses：74%（N=77 lectores，312 Tiempos de revision）

- 2 meses：75%（N=40 lectores，151 Tiempos de revision）

No teniamos datos suficientes para extraer una curva de olvido confiable por pregunta, pero la curva plana continuo aumentando en la interseccion para los diez grupos restantes. La mediana de diez es plana en 82%；Los diez pisos mas faciles de 95%

Por lo tanto, las preguntas variaron en dificultad, pero el recuerdo no parecio disminuir con el tiempo. ¿Que deberiamos sacar de esto? Por supuesto, podemos poner「Dificil」Organiza tus tarjetas antes, pero ¿funcionara esto realmente? excepto 10 Excepto por la tarjeta mas dificil, estos datos muestran que la recuperacion no mejora en intervalos mas cortos.。

Una interpretacion de esto es que la principal conclusion aqui es que solo hay que practicar. El tiempo no es muy importante. En realidad，[Anteriormente encontramos](https://www.patreon.com/posts/too-easy-to-be-49250309)，Una vez que el lector medio ha memorizado una respuesta despues de un retraso (de cualquier duracion), su tasa de recuperacion durante el siguiente ano de revision es 95%！

Pero no confio en absoluto en estos datos. La curva del olvido es demasiado plana. Esto no refleja mi experiencia. Si no practico algo que aprendi en dos meses, es mucho menos probable que lo recuerde que una semana despues. Nuestros datos sugieren que despues de un primer retiro exitoso, podemos retrasar con seguridad la revision posterior durante muchos meses. simplemente no lo creo。

¿Que paso aqui?？

 **Mi teoria: efecto senal** 

Creo que la situacion quedara mas clara si nos fijamos en una pregunta especifica. Considere este problema (su precision de recuperacion es 75% Alrededor）：

![img](https://c10.patreonusercontent.com/3/e30%3D/patreon-media/p/post/59365357/cc91155a9b514942aa6eb202f125e87e/1.png?token-time=1644969600&token-hash=wTsVuq0jlWKGfS179nIcQTlPuMqvoKLJB2lJe5UDvos%3D)

Esta tarea da forma en gran medida a las extracciones que realiza: le hace buscar conexiones entre las condiciones de normalizacion y las probabilidades de medicion. Es posible que obtenga esta respuesta de inmediato; pero tambien puedes pensar en la pregunta en el acto y deducir que es la unica respuesta razonable.。

La precision que recopilamos no diferencia entre estas dos posibilidades. ¡Pero esta distincion es importante! Si a tu vez te pidieramos que resolvieras algun problema que depende indirectamente de esta propiedad, es posible que no des el salto que necesitas。

Lo que realmente nos importa aqui es la fluidez: estas preparado para pensar en ideas interesantes, resolver problemas interesantes, notar conexiones y aplicar tus conocimientos de forma creativa. Quieres entrenar un dispositivo de razonamiento de patrones rico。

Mi corazonada es que aunque 1 Zhou He 2 entre meses， **Pistas** La recuperacion no parece disminuir significativamente, pero las tareas de recuperacion libre y transferencia muestran una curva mas clara. Esa fluidez que acabo de describir esta realmente disminuyendo. Si puede ver esta caida, es posible que desee programar su proxima revision antes。

Si esta teoria es correcta, significaria que los reinos cuanticos y los sistemas de memoria universal tendrian que seguir un camino muy diferente al de la mayoria de los trabajos anteriores en este campo. existir SuperMemo Bajo el liderazgo de , la mayoria de los sistemas generalmente consideran los problemas de programacion con un umbral simple: cuando la probabilidad de recuperacion estimada cae a 90% Cuando llegue el momento, concierte una revision. De esta manera, su tasa de recuperacion esperada en cualquier momento debe ser al menos 90%。

Creo que esta es una heuristica razonable para el aprendizaje de idiomas, pares de definicion de terminos y hechos. Por lo general, no puedes recrear estas respuestas en el acto. El objetivo es generar respuestas de memoria. Un claro recordatorio de que el efecto de la extraccion deberia ser mucho menor de lo que observamos con material conceptual como Quantum Realm.。

Si no podemos utilizar tasas de recuerdo con pistas para aproximarnos a la profundidad de codificacion de un detalle conceptual, no podemos utilizar heuristicas de programacion tradicionales. Necesitamos construir alguna otra forma de controlar el circuito de control.。

El tiempo de respuesta parece ser un indicador interesante de la fluidez, pero encontre una tasa de exito sorprendentemente baja para los patrones en los tiempos de respuesta para los lectores de Quantum Realm.。

Un enfoque mas intrusivo es insertar preguntas que requieran que los lectores utilicen el conocimiento indirectamente en algun contexto nuevo. Si los efectos de las senales son realmente particularmente importantes para el conocimiento conceptual, entonces deberiamos ver como el rendimiento de la transferencia disminuye con el tiempo, incluso si la precision de la recuperacion permanece estable. De todos modos, me gustaria hacer algo como esto para generar flexibilidad en el conocimiento reforzado por un sistema de revision.。

Otra forma de probar esta teoria es considerar aquellas que creo que se comparan「Memorizacion de memoria」、Problemas con conceptos conceptuales debiles. Estas preguntas deberian tener una curva de olvido mas pronunciada. Por ejemplo, se requiere lo siguiente X、Y、Z y H Problema de tasa de recuperacion del valor de la matriz de puertas：

- 1 semanas：56%（N=91 lectores，234 Tiempos de revision）

- 2 semanas：60%（N=87 lectores，215 Tiempos de revision）

- 1 meses：56%（N=59 lectores，144 Tiempos de revision）

- 2 meses：48%（N=26 lectores，54 Tiempos de revision）

No es una muestra grande aqui, pero estos datos no respaldan mi teoria.。1 Zhou He 1 La curva plana entre meses todavia me parece muy poco confiable. Me imagino que la gente pudo haber recreado estos valores basandose en su memoria de los efectos esperados de las puertas, pero no creo que eso sea particularmente creible.。

Hay una respuesta simple aqui, y probablemente la respuesta a todo este lio, y es que la gente simplemente esta mintiendo. Quantum Realm tiene una puntuacion propia. ¿Quizas la gente marca las respuestas como recordadas de manera inapropiada? No lo encuentro creible. Recuerde, el lector medio es 1 Pensativo 1 Precision del autoinforme durante el mes 85-87%。Este usuario medio todavia marca un gran numero de preguntas como olvidadas. Lo que es confuso es por que 1 Los usuarios medios por mes no son mas que 1 Marca de usuario mediana por semana **Mas** El problema es el olvido？

Otro factor importante que sesgo mis datos fue el sesgo de supervivencia.。2 Es mas probable que los lectores que vuelven a revisar despues de unos meses 1 Los lectores que revisan despues de semanas son mas serios. Es posible que les importe mas el tema y lo lean con mas atencion. Este efecto puede inflar el rendimiento tardio, pero no tengo una buena manera de determinar cuanto。

Supongo que mi siguiente paso aqui es profundizar en la literatura, que incluye muchos experimentos de memoria centrados en el conocimiento conceptual y el aprendizaje por transferencia. Quizas algunos de estos metodos o discusiones puedan ayudarme aqui.。

————————

gracias Gary Bernhardt Util discusion sobre este tema. Tambien me gustaria agradecerles a todos por su continuo apoyo, que me permite realizar investigaciones a largo plazo. Ahora tenemos aproximadamente 3/4 Asi se hace, equivalente al de la Fundacion Nacional de Ciencias CAREER Financiacion, constantemente me sorprende que algo asi pueda suceder. felices fiestas！