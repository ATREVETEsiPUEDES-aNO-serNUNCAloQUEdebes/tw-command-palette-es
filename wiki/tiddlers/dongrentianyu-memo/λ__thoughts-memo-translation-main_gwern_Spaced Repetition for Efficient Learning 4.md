## [uso](https://www.gwern.net/Spaced-repetition#using-it)

Por supuesto, no es necesario utilizarlo. SuperMemo；Hay muchas alternativas gratuitas. personalmente me gusta[Mnemosyne](https://en.wikipedia.org/wiki/Mnemosyne_(software))([Pagina de inicio](http://www.mnemosyne-proj.org/))Porque lo es[software libre](https://en.wikipedia.org/wiki/Free_software)⁠，Y hay[Ubuntu Linux](https://en.wikipedia.org/wiki/Ubuntu_Linux)⁠La version es facil de usar, tiene una aplicacion movil gratuita, lleva mucho tiempo desarrollada y es muy confiable (soy de 2008 Lo he estado usando desde el ano 2000). pero SRS software [Anki](https://en.wikipedia.org/wiki/Anki_(software))Tambien es muy popular. Sus ventajas son que tiene funciones mas ricas, una comunidad mas grande y mas activa (puede que tenga mejor soporte para materiales en idiomas del este de Asia y la calidad de la aplicacion movil es mayor, pero el terminal movil es un software propietario).）。

Ahora que tienes el software, ¿que haces con el? De hecho, esta pregunta es sorprendentemente dificil de responder. es como「La tirania de la pagina en blanco」（o wiki en blanco); Dado que tengo este poder en mi mano, este poder nunca sera olvidado como un golem mecanico, y puede hacerme recordar todo a voluntad. Entonces, ¿que debo recordar?？

### [Cuantas cartas agregar](https://www.gwern.net/Spaced-repetition#how-much-to-add)

Aunque no es facil perseverar y esperar a que aparezcan los resultados, la dificultad sigue radicando en decidir que conocimiento es lo suficientemente valioso como para requerir la elaboracion de tarjetas. Despues de hacer una tarjeta, 3 A lo largo de los anos, sera necesario aproximadamente[「30~40 segundos」](http://www.supermemo.com/articles/programming.htm)。[Estimacion teorica](http://www.supermemo.com/articles/theory.htm)El examen a largo plazo requiere mucho tiempo y es complicado. Considere una tarjeta de preguntas y respuestas. La formula para el tiempo necesario para una tarjeta diaria es Time = 1⁄500 × *n*thYear−1.5 + 1⁄30000。Al final de 20 Anos, el tiempo dedicado cada dia es *t* = 1⁄500 × 20−1.5 + 1⁄3000 minutos, o `3.557e-4`  minutos. Este es el tiempo promedio empleado por dia, por lo que para calcular el tiempo promedio por ano simplemente multipliquelo por 365。Supongamos que queremos saber si una tarjeta es 20 Cuanto tiempo de revision se necesita durante el ano. El tiempo requerido para una tarjeta diaria cambiara de un ano a otro (recuerde, el grafico de practica de revision se asemeja a una caida exponencial), por lo que para cada ano la formula debe calcularse una vez y luego sumarse; usar Haskell La escritura del lenguaje es：

```

sum $ map (\year -> ((1/500 * year**(-(1.5))) + 1/30000) * 365.25) [1..20]

# 1.8291

```

El total es 1.8 minuto. (Parece un numero pequeno, pero los usuarios dedican muy poco tiempo a revisar durante el primer ano y el tiempo de revision de los usuarios disminuye rapidamente).[55](https://www.gwern.net/Spaced-repetition#sn55)）Por ejemplo, segun un [Anki Usuario muflax]((https://www.gwern.net/docs/spaced-repetition/2012-muflax-dreamingofaworldundone.html.maff)) Segun las estadisticas, su tiempo promedio de revision por tarjeta es 71 segundos. Pero supongamos [Piotr Wozniak](https://en.wikipedia.org/wiki/Piotr_Wozniak_(researcher)) La estimacion es demasiado optimista, o no somos buenos en[Escribe tarjetas didacticas](http://www.supermemo.com/articles/20rules.htm)，Asi que simplemente duplica este numero para 5 minuto. He aqui una regla general clave para decidir que aprender y que olvidar: si analizas tu vida, cierto punto te costara mas que 5 Minutos para consultar, o no conocer este punto de conocimiento te costara 5 minutos, entonces vale la pena memorizarlo mediante repeticiones espaciadas。5 Las actas son la linea divisoria entre el conocimiento trivial y el conocimiento util。[56](https://www.gwern.net/Spaced-repetition#sn56)（Probablemente haya miles de tarjetas didacticas para esto 5 Regla del Acta. No importa. La repeticion espaciada puede manejar miles de tarjetas. Ver[Siguiente capitulo](https://www.gwern.net/Spaced-repetition#the-workload)。）

En menor medida, algunas personas pueden sentir curiosidad: ¿deberian utilizarse juntos el aprendizaje por intervalos y el aprendizaje concentrado cuando se esta ansioso? ¿Que tan cerca esta un examen objetivo o una fecha limite antes de que se pueda utilizar la repeticion espaciada? Esto es dificil de comparar porque para encontrar este punto critico se requieren indicadores detallados para la comparacion, pero para la repeticion concentrada, existe 50% El tiempo promedio que lleva recordar el conocimiento memorizado parece ser 3 a 5 dias。[57](https://www.gwern.net/Spaced-repetition#sn57)，Porque durante este tiempo habra 2 llegar 3 repeticiones, presumiblemente sera mas probable que una persona recuerde un conocimiento que 50% Hazlo mejor。5 Actas y 5 El dia parece ser una buena regla general para recordar：「Si fueras 5 El conocimiento se necesita en un dia, o el valor del conocimiento es menor que 5 minutos, no uses repeticiones espaciadas。」

#### [Sobrecarga](https://www.gwern.net/Spaced-repetition#overload)

Los novatos en la repeticion espaciada a menudo anaden demasiado: algo trivial o algo que no les importa en absoluto. Pero pronto se encontraran[Borges](https://en.wikipedia.org/wiki/Jorge_Luis_Borges)[《Funes, el hombre sabio y memorizado》](https://en.wikipedia.org/wiki/Funes_the_Memorious)⁠maldito. Si realmente no quieren aprender el material del software, pronto dejaran de revisarlo todos los dias, por lo que las revisiones se acumulan y se vuelven mas frustrantes, por lo que simplemente se dan por vencidos. Al menos cuando se trata de mejorar su salud fisica a traves del ejercicio, no hay numeros que le digan exactamente que tan atras esta, y no parece que se pueda obtener ningun beneficio con esta tecnica; simplemente parece una aburrida revision de tarjetas didacticas.。

### [Que agregar](https://www.gwern.net/Spaced-repetition#what-to-add)

Mnemosyne El uso clasico de es memorizar algunos conocimientos academicos, como geografia, tabla periodica de elementos, vocabulario de lenguas extranjeras, versiculos de la Biblia o del Coran, o amplios conocimientos medicos. Pero descubri que ademas，Mnemosyne Tambien excelente para memorizar[Palabra del dia]((https://en.wikipedia.org/wiki/A_Word_A_Day))[58]((https://www.gwern.net/Spaced-repetition#sn58))y[Wikcionario]((https://en.wikipedia.org/wiki/Wiktionary)⁠Palabras en citas que vale la pena recordar[59](https://www.gwern.net/Spaced-repetition#sn59)⁠，Cumpleanos y otra informacion personal (o numero de matricula, antes no siempre podia recordarlo), etc. Estos usos son comunes, pero muy valiosos para mi. Las tarjetas son ricas y diversas, y me resulta muy interesante revisarlas todos los dias. mio Mnemosyne Hay varias preguntas: juzgare un parrafo a la vez. Haskell ¿Es correcta la sintaxis del codigo? Lo explicare en detalle dentro de un rato.[Proverbio coreano](https://en.wikipedia.org/wiki/Hangul)，Luego escuche la grabacion de la respuesta, intente encontrar Ucrania en el mapa por un tiempo y disfrutelo por un tiempo. [A.E. Housman](https://en.wikipedia.org/wiki/A.E._Housman) Cierto poema de , y luego leelo [LessWrong](https://www.lesswrong.com/) Citas en publicaciones entre comillas, etc. Otros tienen diversos usos; algunos se utilizan para recordar los nombres y caras de los estudiantes (tres ejemplos [1](https://www.lesswrong.com/posts/YbCc3NRrr5avvWSHT/who-wants-to-start-an-important-startup?commentId=CyxaAxbokswt6ZyPh) [2](https://www.lesswrong.com/posts/YbCc3NRrr5avvWSHT/who-wants-to-start-an-important-startup?commentId=RC2TbuNbD9sXTiH9e) [3](https://www.lesswrong.com/posts/YbCc3NRrr5avvWSHT/who-wants-to-start-an-important-startup?commentId=qPQGQd6E3hZ5DsLz4)），Sencillo y practico, me impresiono, claro[Aprende notas musicales.](https://www.gwern.net/images/spacedrepetition/2012-chessdata-perfectpitchspacedrepetition.webm)El uso de tambien es bueno.。

### [Carga de trabajo](https://www.gwern.net/Spaced-repetition#the-workload)

En promedio, cuando aprendo un tema nuevo, aumento 3-20 preguntas. Combinado con mi nivel de memoria personal, normalmente reviso sobre 90 o 100 tarjetas (el numero total de tarjetas excede 18,300）。La revision solo requiere menos de 20 Las actas son aceptables. (Espero que el tiempo de revision real sea mas largo porque cuando comence a aprender nuevos temas, todavia estaba desarrollando pautas de formato de tarjetas y no tenia un sistema de clasificacion completo. Por supuesto, ahora que he disenado un sistema, tengo que detenerme y editar la clasificacion de tarjetas de vez en cuando.）

Si no he aprendido nada nuevo recientemente, la cantidad de revisiones disminuira exponencialmente, por lo que la cantidad de revisiones diarias disminuira lentamente. Por ejemplo en 2011 anos 3 Mes, no aprendi nada, asi que desde 2011-03-24 llegar 2011-03-26 Durante este periodo, la cantidad de revisiones que se me asignan todos los dias es 73, 83, 74; Despues de eso, el numero de revision se reducira a aproximadamente 60 Mas, y luego, en una semana o dos, probablemente bajara a 50 Esto continuara hasta que el numero de revisiones se estabilice y alcance el valor mas bajo, y luego disminuira gradualmente cada ano. (No se cual es el minimo porque no paso mucho tiempo sin anadir nuevas tarjetas). llegar 2012 anos 2 Mes, el numero de revisiones diarias es 40 Varias imagenes, a veces 50 Hay muchas, pero en general la cantidad de resenas sigue disminuyendo. La disminucion en la cantidad de resenas es real y perceptible, e incluso puede compararse con la curva de olvido original. Mientras dejemos Mnemosyne 2.0 Simplemente use la cantidad de tarjetas revisadas todos los dias del proximo ano para hacer una grafica, es decir, hasta 2013 anos 2 Mes (suponiendo que no se agreguen nuevas tarjetas, no se revisen todos los dias, etc.）：

[img [A wildly varying but clearly decreasing graph of predicted cards per day|https://www.gwern.net/images/spacedrepetition/scheduled-cards.png]] El numero de tarjetas pronosticadas cada dia varia mucho, pero obviamente esta disminuyendo.

Si Mnemosyne No uses repeticiones espaciadas si quieres evitar quedarte atras. 18,300 La progresion de las flashcards es muy dificil. pero Mnemosyne Usar repeticiones espaciadas hace que sea mucho mas facil mantener el ritmo.。

18.3k La cantidad de cartas no es sorprendente. Muchos usuarios tienen mazos con entre 6.000 y 7.000 cartas.，Mnemosyne Desarrollador [Peter Bienstman](https://groups.google.com/group/mnemosyne-proj-users/browse_frm/thread/433872b155ad7451/31c1e4c556680a0c) Mas de 8.500 tarjetas，Patrick Kenny Mas de 27.000，[Hugh Chen](https://groups.google.com/group/mnemosyne-proj-users/browse_frm/thread/eff44f5fdb1d738b/7a7b654ca87e63be) Hay una baraja con mas de 73.000 cartas. [#anki](irc://irc.Libera.chat#anki) IRC En el canal, alguien me dijo que el mazo de un usuario contenia mas de 20 Miles de tarjetas, tanto que se desencadeno. bug。 20 Diez mil tarjetas puede ser un poco demasiado, pero para la gente normal, es posible tener menos tarjetas que esta. SRS Es divertido comparar el mazo con algunas proezas de memoria, p.[Memoria "Paraiso perdido"》](https://www.gwern.net/docs/spaced-repetition/2010-seamon.pdf)，O recuerda sobre 80000 Palabras del Coran para musulmanes [‘hafiz’](https://en.wikipedia.org/wiki/Hafiz_(Qur‘an))⁠ ，O mas estricto ’Hafid‘，Recitar el Coran y 100,000 Articulo[Hadiz](https://en.wikipedia.org/wiki/Hadiths)personas. Otras formas de memoria son mas poderosas。[60](https://www.gwern.net/Spaced-repetition#sn60)(Sospecho que la repeticion espaciada ocurre en los pocos bien documentados.「[Hiperamnesia](https://en.wikipedia.org/wiki/Hyperthymesia)」El caso involucra，[Jill Price](https://en.wikipedia.org/wiki/Jill_Price)：Lectura [《Conectar》](https://web.archive.org/web/20131208072327/http://www.wired.com/medtech/health/magazine/17-04/ff_perfectmemory?currentPage=all)⁠，Su memoria para el material no preparado era la misma que la de una persona normal, y era igualmente propensa a olvidar, sin diferencias anatomicas observables. Su hiperamnesia se limita a la memoria.「Su historia personal y determinadas categorias como la television y los accidentes aereos.」；Ademas, es una coleccionista obsesiva que ha grabado mas de 5 Miles de paginas de un diario detallado, que pueden haber sido atribuidas a un trauma infantil y su tendencia a relacionar involuntariamente los acontecimientos diarios con acontecimientos pasados.。Marcus Digamos que otros ejemplos de hiperamnesia estan relacionados con Price Similitud。)

### [Cuando revisar](https://www.gwern.net/Spaced-repetition#when-to-review)

¿Cuando debo revisar? ¿Manana? ¿noche? ¿En cualquier momento? Los estudios que confirmaron la existencia del efecto de espaciamiento no controlaron la variable del momento de la revision, por lo que en cierto sentido, R: El momento de la revision no importa; si el momento de la revision si importa, entonces el momento de la revision por parte de los sujetos del estudio es diferente, y el efecto del efecto de espaciamiento tambien deberia ser significativamente diferente.。

Asi que revisa cuando sea conveniente. Este tipo de conveniencia hace que sea mas facil perseverar, y la perseverancia es cien veces mejor que cualquier mejora a corto plazo.。

Si no estas satisfecho con esta respuesta, en terminos generales, debes hacer una revision antes de acostarte. Esto esta relacionado con[Consolidacion de la memoria](https://en.wikipedia.org/wiki/Memory_consolidation#Spacing_effect)Relevante, conocido[dormir](https://en.wikipedia.org/wiki/Sleep_and_memory)El sueno tiene un impacto importante en la conversion de la memoria en memoria a largo plazo, y el sueno tiene un efecto importante en el material aprendido poco antes de acostarse.[Refuerzo](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0033079)su memoria y capacidad para[Mejorar la creatividad](https://www.pnas.org/content/106/25/10130.full)：Algunos experimentos han demostrado que si se interrumpe el sueno de los ratones, incluso si el tiempo total de sueno o la calidad del sueno permanecen constantes,，[La formacion de memoria en ratones tambien se ve obstaculizada](https://www.pnas.org/content/early/2011/07/20/1015633108) [61](https://www.gwern.net/Spaced-repetition#sn61)。Por ello, se recomienda repasar antes de acostarse. (Otras actividades mentales tambien mejoran si se realizan antes de acostarse; por ejemplo，[dual n-back](https://www.gwern.net/DNB-FAQ#sleep)⁠）。 Un posible mecanismo por el cual el sueno mejora la memoria es que repasar antes de acostarse mejora la capacidad de repasar o realizar pruebas en el futuro.[ **Expectativas** ](http://www.jneurosci.org/content/31/5/1563.full)，Por tanto, se favorecera la consolidacion de la memoria durante el sueno. Desde este punto de vista, si te acuestas inmediatamente despues de repasar, tus expectativas seran mayores que si eliges repasar en el desayuno. Despues de vivir muchas cosas en el dia, te has olvidado de revisar las cartas. (ver  Hartwig & Dunlosky 2012 Respecto al tiempo de aprendizaje y GPA Estudios sobre la relacion) el crecimiento neuronal tambien puede estar relacionado; de Stahl 2010 ：

> Hemos logrado nuevos avances en la neurobiologia de la formacion normal de la memoria humana, demostrando que el aprendizaje no es un evento unico sino un proceso que se desarrolla lentamente con el tiempo.。[16](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1876761/)⁠,[17](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3650827/)⁠,[18](https://www.gwern.net/docs/spaced-repetition/2010-oneill.pdf)⁠,[Squire 2003 *[Fundamental Neuroscience](https://www.amazon.com/Fundamental-Neuroscience-Second-Larry-Squire/dp/0126603030/?tag=gwernnet-20)*],[20](https://www.gwern.net/docs/www/davidjf.free.fr/12f68acf6714e8d2200c12fddf7b1b1241fc1f82.pdf) Por tanto, no sorprende que las estrategias de aprendizaje que se repiten en el tiempo mejoren la retencion de los estudiantes.。20,[21](https://www.gwern.net/docs/spaced-repetition/1980-glenberg.pdf)⁠,[22](https://www.gwern.net/docs/spaced-repetition/1991-toppino.pdf)⁠,[23](https://www.gwern.net/docs/spaced-repetition/1978-landauer.pdf)⁠,[24](https://www.gwern.net/docs/www/www.wsu.edu/992e041a4a60ef70f816fadb6ac3ecc7409ba6c1.html)⁠,[25](https://pdfs.semanticscholar.org/6698/bf91c9333faa0d333a800254b8063230d4f4.pdf)⁠,[26](https://www.gwern.net/docs/www/www.pashler.com/77a5d5b695ed619b5815a3a0b00300eec93ae4ed.html)

>

> …Cada dia se crean miles de nuevas celulas en esta zona, aunque muchas de estas celulas mueren a las pocas semanas de su creacion.。[31](https://pdfs.semanticscholar.org/45c2/7c08fbb43f8728e69a7447366d4a4f74e088.pdf)Existe evidencia de que la supervivencia de las neuronas de la circunvolucion dentada aumenta a medida que los animales aprenden. Los animales que aprenden bien retienen mas neuronas de la circunvolucion dentada que los animales que aprenden mal. Ademas, durante las pruebas 2 Despues de semanas, los animales son entrenados a intervalos discretos durante un periodo de tiempo, y el efecto de memoria es mejor que recordar la misma informacion de una vez, o llamado「Entrenamiento concentrado」。Aun no se han identificado los mecanismos especificos que vinculan la supervivencia neuronal con el aprendizaje. Una teoria es que las neuronas del hipocampo que sobreviven preferentemente son aquellas que se activan de alguna manera durante el aprendizaje.。16-20[62](https://www.gwern.net/Spaced-repetition#sn62) Difundir el aprendizaje a lo largo del tiempo puede promover la supervivencia neuronal de manera mas efectiva porque permite cambios mas prolongados en la expresion genetica y la sintesis de proteinas, procesos que aumentan la vida util de las neuronas involucradas en el proceso de aprendizaje.。

>

> …La etapa de codificacion se realiza en estado de alerta y vigilia. Para que la memoria se transfiera de la etapa de codificacion a la etapa de consolidacion, se debe reducir la interferencia en la formacion de la memoria en este momento.。17,18 Un periodo adecuado para esta transferencia es durante el sueno, especificamente el sueno con movimientos oculares no rapidos, cuando el hipocampo puede comunicarse con otras regiones del cerebro sin verse perturbado por nuevas experiencias.。[32](https://pdfs.semanticscholar.org/d0a7/f06ed267f3193daab1175a65abb7a067bef4.pdf)⁠,[33](https://pdfs.semanticscholar.org/77fd/0cf03de8a6c4f56c5decc7c47ebe69cf98c1.pdf)⁠,[34](https://www.gwern.net/docs/spaced-repetition/2001-maquet.pdf) Quizas esto explique por que algunas decisiones se toman mejor despues de una noche de descanso, y por que estudiar toda la noche sin dormir lo suficiente puede permitirle aprobar un examen una hora mas tarde, pero no retener el material un dia despues.。

#### [Perspectivas: expansion de tarjetas didacticas](https://www.gwern.net/Spaced-repetition#prospects-extended-flashcards)

Ahora tomate un momento para dar un paso atras. ¿Que hacen por nosotros todas nuestras tarjetas didacticas, grandes y pequenas? por que para「anent」¿Que pasa con los pares de tarjetas didacticas para esta palabra y muchas, muchas otras? Puedo simplemente buscar las palabras.。

Pero en comparacion con la memorizacion de conocimientos, la consulta temporal de conocimientos requiere mas tiempo. (Ignore lo discutido anteriormente 5 regla del minuto) Si considera este asunto de manera abstracta en el contexto de la informatica, encontrara que se trata de una cuestion de memoria o consulta, que involucra conceptos clasicos en los campos de los algoritmos y la optimizacion.——[Compensacion de tiempo y espacio](https://en.wikipedia.org/wiki/Space-time_tradeoff)⁠. Lo que compensamos es el tiempo de busqueda y la capacidad cerebral limitada.。

Consideremos el tipo de datos facticos ya dados como ejemplo: podriamos necesitar conocer la precipitacion anual promedio en Honolulu o Austin en un dia determinado, pero tomaria demasiado espacio recordar la precipitacion anual promedio en todas las capitales. Hay millones de palabras en ingles, pero en realidad hay mas de 10 Diez mil son demasiados. Aun mas sorprendente es el conocimiento procesal. Una forma extrema de compensacion espacio-tiempo en las computadoras es reemplazar los calculos con constantes precalculadas. tomar una matematica[Funcion](https://en.wikipedia.org/wiki/Function_(mathematics))，Y calcula su salida para cada entrada posible. Tal entrada a salida[tabla de busqueda](https://en.wikipedia.org/wiki/Lookup_table)Generalmente muy grande. Pienselo, para alguien entre 1 y 10 Todas las posibles multiplicaciones de numeros enteros entre miles de millones, ¿cuantas cartas habria en una tabla asi? Pero a veces el tamano de la tabla de busqueda es muy pequeno (como las funciones booleanas binarias), o relativamente pequeno (como las tablas de funciones trigonometricas), o grande pero aun utilizable.（[Mesa arcoiris](https://en.wikipedia.org/wiki/Rainbow_table)Generalmente de GB Empezar, facil de lograr TB）。

Dada una tabla de busqueda infinita, simplemente busque la tabla「completamente」Habilidades que reemplazan la suma o la multiplicacion. No se requiere calculo. En este momento, la compensacion espacio-tiempo llega al extremo en el lado espacial.。(Para ir al extremo en el lado del tiempo, simplemente defina la multiplicacion o la suma como un calculo lento sin conocer ningun detalle computacional, p.[Tabla de multiplicar](https://en.wikipedia.org/wiki/Multiplication_table)——Similar a cada vez que quieres calcular 2+2 Cuando, debe romperse 4 dedos。)

Supongamos que somos ninos que queremos aprender a multiplicar. La multiplicacion no es un hecho atomico concreto, por lo que SRS y Mnemosyne No servira de nada, ¿verdad? De hecho, desde la perspectiva del equilibrio entre espacio y tiempo, podemos deconstruir los pasos de la multiplicacion y descomponerlos parcialmente en hechos atomicos. Podemos escribir facilmente scripts o macros para generar tarjetas aleatorias (por ejemplo 500 Zhang), requiere calculo AB Multiplicar  XY valorarlo e importarlo Mnemosyne. [63](https://www.gwern.net/Spaced-repetition#sn63)

¿Pero que quieres hacer? ¿Eres mejor para calcular la multiplicacion de dos numeros (se generan dos numeros segun sea necesario) o eres mejor para recordar? 500 diferentes problemas de multiplicacion（[Memorizacion](https://en.wikipedia.org/wiki/Memoize)）？En mi propia experiencia, cuando hay varias cartas con solo diferencias menores, el cerebro rapidamente deja de memorizar y resuelve problemas para cada carta individualmente, que es exactamente lo que queremos practicar en este punto. Felicidades; lograste lo imposible。

Desde la perspectiva de la ingenieria de software, siempre sera necesario modificar o mejorar la tarjeta; 500 Las tarjetas de solo texto que se utilizan para practicar la multiplicacion son algo dificiles de actualizar. entonces「Tarjetas dinamicas」Nacio el concepto de. estar en Mnemosyne Implementado en 2020, tal vez agregando otros nuevos. HTML Marcado, p.e.`<eval src="">`，deja Mnemosyne poner src Entrada de parametros Python Interprete, y espere a que el interprete ajuste el texto de la pregunta y el texto de la respuesta en[tupla](https://en.wikipedia.org/wiki/Tuple)Regreso. Luego muestre el texto de la pregunta como una tarjeta normal, espere a que el usuario piense en ello, verifique la respuesta y califique la respuesta.。Anki China apoya el uso de Javascript, Mientras estes  HTML Unete `<script>`Simplemente agregue una etiqueta (actualmente solo se puede hacer directamente en la plantilla de la tarjeta)[Incrustar]((https://apps.ankiweb.net/docs/manual.html#_javascript))，Pero tal vez algunos puedan importarse de forma predeterminada Javascript biblioteca), de modo que[Resaltado de sintaxis](http://ojisanseiuchi.com/2016/03/12/JavaScript-in-Anki-cards/)，Crea tarjetas dinamicas como quieras。

Por lo tanto, para la multiplicacion, las tarjetas dinamicas generaran 2 enteros aleatorios, la salida es similar a `x * y = ?` pregunta y luego generar el resultado como respuesta. De vez en cuando, encontraras un nuevo problema de multiplicacion y, a medida que mejores en la multiplicacion, tendras menos problemas de multiplicacion, y asi es como debe ser. otro[Matematicas](https://www.gwern.net/docs/www/old.reddit.com/c881c585a4d97b4d66ba264ec9f31bed874f4a68.html)⁠La idea es generar multiples variaciones de una formula o programa (donde una opcion es correcta y las demas son cripticamente incorrectas); Hago esto manualmente para mis tarjetas de programacion (especialmente si cometo un error mientras hago un ejercicio y el error significa que hay un detalle que requiere que haga varias tarjetas), pero la generacion de variantes se puede automatizar completamente.。[kpreid](https://www.lesswrong.com/posts/3r4GETDPMf335HfpA/memory-spaced-repetition-and-life?commentId=Mpc8rgQC4THkh38SF) [Descripcion](https://www.lesswrong.com/posts/3r4GETDPMf335HfpA/memory-spaced-repetition-and-life?commentId=Mpc8rgQC4THkh38SF)Una de sus herramientas：

> he escrito[Un programa](https://github.com/kpreid/mathquiz/)（es[sitio web](https://kpreid.github.com/mathquiz/mathquiz.html)formulario), este programa generara「Formula rota」，Es una tarjeta dinamica especializada. Hay generadores de formulas y formulas rotas en el programa. Cuando se ejecuta, se muestran algunas formulas similares cada vez (como∫ 2x dx = x^2 + C），Pero una de las formulas esta rota (p. ej.∫ 2x dx = 2x^2 + C）。

Este metodo es adecuado para problemas que pueden generar preguntas aleatorias o tener una gran cantidad de ejemplos. Aparentemente, Khan Academy implementa algo asi como tarjetas dinamicas, entrelazando una gran cantidad de preguntas (¿generadas algoritmicamente?) en pequenos modulos del curso y rastreando la retencion de habilidades para decidir cuando revisar mas el modulo. Por ejemplo, es posible que este aprendiendo Go y este interesado en aprender[Vida o muerte](https://en.wikipedia.org/wiki/Life_and_death)⁠Me interesa mucho el ajedrez. Estos pueden ser generados por un programa Go de computadora o desde algo como [GoProblems.com](http://www.goproblems.com/)⁠ Consiguelo en un lugar asi. Para una gran cantidad de paradigmas, el Go es rotacionalmente invariante: un buen movimiento es el mismo independientemente de la orientacion del tablero, y dado que el tablero no tiene una orientacion prescrita (al igual que el ajedrez), un buen jugador deberia ser igualmente bueno en ello independientemente de cuan gris sea el tablero, por lo que cada ejemplo especifico puede reflejarse de otras tres maneras. O puedes escribir una tarjeta dinamica para probar.「Lectura」La habilidad del tablero de ajedrez, siempre que haya algo como [GNU Go](https://en.wikipedia.org/wiki/GNU_Go) Un programa de Go de este tipo dice que el mejor movimiento no ha cambiado debido al ruido anadido, y la tarjeta dinamica aparecera con cada tablero de ejemplo./pregunta y agrega algunas piezas de ajedrez al azar。

Aprender de esta manera es muy gratificante. Los lenguajes de programacion se pueden aprender asi: aprenda [Haskell](https://en.wikipedia.org/wiki/Haskell_(programming_language)) La gente puede Prelude Modulo o Haskell Todas las funciones del libro de texto, utilice. [QuickCheck](https://en.wikipedia.org/wiki/QuickCheck) Genere parametros aleatorios para estas funciones e ingrese la funcion y sus parametros. [GHC](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler) Interprete `ghci` ，Vea cuales son los resultados. Otros juegos ademas del Go, como el ajedrez, podrian funcionar (un ejemplo de la vida real es [Chess Tempo](http://chesstempo.com/user-guide/en/probSearchSpacedRepetition.html) & [LiStudy](https://listudy.org/)，Y comprueba [Dan Schmidt](http://dfan.org/blog/2013/07/07/mnemosyne-part-3/) Ejemplos; o [*⁠Smash Brothers*](https://waleedkhan.name/blog/smash-training-retrospective/)）。Conocimiento considerable de matematicas. Si la tarjeta dinamica tiene acceso a Internet, puede acceder a Internet desde[RSS Fuente](https://en.wikipedia.org/wiki/RSS_feed)O simplemente un sitio web que muestra nuevas preguntas; Esta caracteristica es muy util en un entorno de aprendizaje de idiomas extranjeros, donde cada dia trae una nueva oracion para traducir u otro ejercicio.。

Puedes usar NLP software para escribir tarjetas didacticas dinamicas que ponen a prueba una variedad de conocimientos: si alguien confunde un verbo, ingrese una plantilla para crear tarjetas en el programa, como “$PRONOUN $VERB $PARTICLE $OBJECT % {right: caresse, wrong: caresses}” ，Esta plantilla producira algo como “Je Caresses le chat” o “Tu caresse le chat” Se pueden utilizar tarjetas didacticas como esta para determinar si la transposicion es correcta durante la prueba.。(La naturaleza dinamica de las tarjetas ayuda a evitar recordar oraciones especificas en lugar de conjugaciones). Implementar tarjetas dinamicas altamente versatiles puede ser dificil, pero algo tan simple como una plantilla podria ser suficiente.。Jack Kinsella：

> Espero tener dinamica SRS Deck para aprender un idioma (u otra materia). Este tipo de mazo contara cuantas oraciones ha revisado el usuario que aplican ciertas reglas gramaticales, o la forma de un determinado vocabulario, como la forma singular del vocabulario./Numeros plurales/Cambios en tercera persona/Forma dativa. Dinamico SRS La plataforma presenta al usuario ejemplos nuevos cada vez que revisa, lo que evita que el usuario memorice respuestas especificas y, en cambio, le pide que aplique las reglas gramaticales y reviva realmente el proceso. Ademas, estos mazos pueden aportar nuevas ideas y los usuarios no se aburriran; Al cambiar el vocabulario sin importancia en las oraciones de ejemplo, los mazos tambien pueden brindar oportunidades sutiles de aprendizaje de vocabulario. Un sistema de este tipo tiene rotaciones de revision de varios niveles, lo que no solo evita el aprendizaje excesivo, sino que tambien aumenta la cantidad total de conocimiento aprendido por minuto. Tal eficiencia vale mi inversion.。

Incluso si estas cosas parecen「Habilidades」en lugar de「Datos」！

# [Popularidad](https://www.gwern.net/Spaced-repetition#popularity)

A partir de 2011-05-02：

|      Indicadores      | Mnemosyne                                                    | [Mnemododo](http://www.tbrk.org/software/mnemododo.html)     | [Anki](https://en.wikipedia.org/wiki/Anki_(software))        |                           iSRS                           |                [AnyMemo](http://anymemo.org/)                |

| :--------------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------------: | :----------------------------------------------------------: |

|  Pagina de inicio Alexa Clasificacion | [383k](https://www.alexa.com/siteinfo/mnemosyne-proj.org)    | [27.5m](https://www.alexa.com/siteinfo/tbrk.org#)            | [112k](https://www.alexa.com/siteinfo/ankisrs.net#)          |                                                          | [1,766k](https://www.alexa.com/siteinfo/anymemo.org#)[64](https://www.gwern.net/Spaced-repetition#sn64) |

| ML/Miembros del foro | [461](https://groups.google.com/group/mnemosyne-proj-users)  |                                                              | [4129](https://groups.google.com/group/ankisrs/)⁠/[215](https://groups.google.com/group/ankisrs-users/about) |   [129](https://groups.google.com/group/isrs-support)    |                                                              |

| UbuntuDescargas  | [7k](http://popcon.ubuntu.com/universe/by_inst)              |                                                              | [9k](http://popcon.ubuntu.com/unknown/by_inst)               |                                                          |                                                              |

| Debian Volumen de instalacion  | [164](https://qa.debian.org/popcon.php?package=mnemosyne)    |                                                              | [364](https://qa.debian.org/popcon.php?package=anki)         |                                                          |                                                              |

|    Arch votar    | [85](https://aur.archlinux.org/packages/mnemosyne/)          |                                                              | [96](https://aur.archlinux.org/packages/anki20-bin/)         |                                                          |                                                              |

|  iPhone Calificacion  | No publicado[65](https://www.gwern.net/Spaced-repetition#sn65) |                                                              | [193](https://itunes.apple.com/us/app/ankisrs/id373493387)   | [69](https://itunes.apple.com/app/isrs-free/id332350042) |                                                              |

| Calificacion de Android  |                                                              | [20](https://market.android.com/details?id=org.tbrk.mnemododo) | [703](https://market.android.com/details?id=com.ichi2.anki)  |                                                          | [836](https://market.android.com/details?id=org.liberty.android.fantastischmemo) |

| Numero de instalaciones de Android |                                                              | [100-500](https://market.android.com/details?id=org.tbrk.mnemododo) | [10-50k](https://market.android.com/details?id=com.ichi2.anki) |                                                          | [50-100k](https://market.android.com/details?id=org.liberty.android.fantastischmemo) |

SuperMemo Estas clasificaciones no se aplican, pero tras el lanzamiento del software 20 ano，SuperMemo Cientos de miles de copias vendidas.：

> Biedalak es SuperMemo World de CEO, La empresa vende y otorga licencias sobre los inventos de Wozniak. ahora，SuperMemo World Solo contratado 25 empleados. Al capital de riesgo no le gusto y la empresa no se mudo a California.。2006 anos，SuperMemo El volumen de ventas es de aprox. 50,000 copias, la mayoria de las cuales se venden por menos de 41 dolares estadounidenses (total 302006 USD). Probablemente haya mas copias pirateadas.。[66](https://www.gwern.net/Spaced-repetition#sn66)

Parece seguro estimar，Anki、Mnemosyne、iSRS y otros SRS Las aplicaciones tienen una cuota de mercado combinada de menos de 5 Diez mil usuarios (puede haber algunas discrepancias teniendo en cuenta los usuarios que instalaron varias veces, los usuarios que lo instalaron y lo abandonaron, etc.). pocos usuarios de SuperMemo Migre a esos nuevos programas, asi que simplemente agregue dos cincuenta mil y podra concluir razonablemente，SRS La base mundial de usuarios es de aproximadamente 10 Alrededor de 10.000 (pero puede ser 10 000 o menos）。

# [¿A donde debo ir?？](https://www.gwern.net/Spaced-repetition#where-was-i-going-with-this)

No hay a donde acudir, para ser honesto。Mnemosyne/SR El software Wait es solo una de mis herramientas favoritas: se basa en efectos famosos encontrados en la ciencia.[67](https://www.gwern.net/Spaced-repetition#sn67)，Y usa este efecto con gracia[68](https://www.gwern.net/Spaced-repetition#sn68)，Y es muy util。SR El software cumple el ideal de la Ilustracion de utilizar la razon para mejorar la naturaleza humana y superar los defectos humanos.；SR El rigor matematico de la idea la hace extremadamente tentadora.[69](https://www.gwern.net/Spaced-repetition#sn69)⁠。Mira alrededor del momento presente，「Superacion personal」Cada dia que pasa, somos ridiculizados por los demas, y nuestra tristeza y depresion atraen a los partidarios de la gente comun. Todavia hay ejemplos como este en la vida diaria, lo que demuestra que todavia hay personas que suben escaleras. Es realmente gratificante. Comparado con el desarrollo repetido de bombillas por parte de Edison, este ejemplo es novedoso e interesante.。

# [Ver tambien](https://www.gwern.net/Spaced-repetition#see-also)…

En uso Mnemosyne En el proceso, escribi muchos scripts para generar tarjetas normales.。

-[`mnemo.hs`](https://www.gwern.net/haskell/mnemo.hs) Ingrese cualquier texto delimitado por una nueva linea (como un poema) y genere todos los posibles[Ahuecar](https://en.wikipedia.org/wiki/Cloze_deletion)；Es decir, un poema tiene ABC Tres oraciones, luego generadas 3 preguntas：_BC/ABC，A_C/ABC，AB_/ABC

- [`mnemo2.hs`](https://www.gwern.net/haskell/mnemo2.hs) El principio es mas o menos el mismo que el anterior, pero con mas restricciones, principalmente para textos mas largos. Para este tipo de texto, utilice `mnemo.hs`  Despues del procesamiento, se generaran demasiados problemas debido a permutaciones y combinaciones.；`mnemo2.hs` Se generara un pequeno conjunto de preguntas: Para ABCD，Generar __CD/ABCD、A__D/ABCD y AB__/ABCD （poner 2 Ahueca las lineas y repite este ciclo hasta el final de la lista de texto.）。

- [`mnemo3.hs`](https://www.gwern.net/haskell/mnemo3.hs) Adecuado para generar preguntas sobre fechas o nombres. entrada「Barak·Obama %47% anos」 ，Haz una pregunta：「Barak·Obama _7/47anos」，「Barak·Obama 4_/47 anos」Espera。

-[`mnemo4.hs`](https://www.gwern.net/haskell/mnemo4.hs) Apto para listas largas. Si quisieras memorizar la lista de presidentes de Estados Unidos, naturalmente harias preguntas como esta.：「¿Quien fue el tercer presidente?？/Tomas·Jefferson」，「Tomas·Jefferson fue el__Se desempeno como presidente。/3」，「Juan·¿Quien vino despues de Adams?？/Tomas·Jefferson」，「Jaime·¿Quien era Madison antes?？/Tomas·Jefferson」。

  Tenga en cuenta que si se genera una tarjeta para cada presidente de esta manera, habra dos angulos de la tarjeta preguntando sobre la posicion del presidente en la lista (Presidente -> ubicacion, ubicacion -> Presidente), tambien hay tarjetas que hacen preguntas sobre presidentes anteriores y futuros, por lo que es probable que haya informacion repetida.。`mnemo4.hs` Despues de obtener la lista, las tarjetas se generan automaticamente. Para ser mas general, la redaccion sera un poco extrana, ¡pero es mucho mejor que escribir a mano! (Codigo fuente de[Comentarios](https://en.wikipedia.org/wiki/Comment_(computer_programming)Hay un resultado de muestra en）

Ahora los lectores pueden sentir curiosidad. **Mio** Mnemosyne Como se ve una base de datos. a menudo uso Mnemosyne，A partir de 2020-02-02，Tengo en mi mazo 16,149 tarjetas (activas). Los lectores curiosos pueden encontrarlo en [`gwern.cards`](https://www.dropbox.com/s/ih3aorjs9rmjvmj/2019-02-03-gwern-mnemosyne-export.cards?dl=0) (52M; Mnemosyne 2.x Formato) Encuentra mis tarjetas y medios en。

a lo largo de los anos，Mnemosyne El proyecto ha estado recopilando estadisticas de repeticion espaciada enviadas por los usuarios. A partir de 2014-01-27 El conjunto de datos completo de[Disponible para descarga por quien quiera analizarlo](https://archive.org/details/20140127MnemosynelogsAll.db)。

# [Enlaces externos](https://www.gwern.net/Spaced-repetition#external-links)

- Michael Nielsen: [“Augmenting Long-term Memory”](http://augmentingcognition.com/ltm.html)⁠; [“Using spaced repetition systems to see through a piece of mathematics”](http://cognitivemedium.com/srs-mathematics)⁠; [“Quantum computing for the very curious”](https://quantum.country/qcvc/)⁠; [“How can we develop transformative tools for thought?”](https://numinous.productions/ttft/)

- [“Teaching linear algebra”](https://bentilly.blogspot.com/2009/09/teaching-linear-algebra.html) (with spaced repetition), by Ben Tilly

  - [Manual flashcards for his 2nd grader](https://bentilly.blogspot.com/2012/10/my-sons-flashcard-routine.html)

- [“A Year of Spaced Repetition Software in the Classroom”](https://www.lesswrong.com/r/discussion/lw/mfm/a_year_of_spaced_repetition_software_in_the/)⁠; [two years](https://www.lesswrong.com/r/discussion/lw/nkz/a_second_year_of_spaced_repetition_software_in/)⁠; [seven year followup](https://www.lesswrong.com/posts/F6ZTtBXn2cFLmWPdM/seven-years-of-spaced-repetition-software-in-the-classroom-1)⁠; cf [“Easy Application of Spaced Practice in the Classroom”](https://theeffortfuleducator.com/2017/10/22/easy-application-of-spaced-practice-in-the-classroom/)

- [AJATT table of contents](http://www.alljapaneseallthetime.com/blog/all-japanese-all-the-time-ajatt-how-to-learn-japanese-on-your-own-having-fun-and-to-fluency) -(uso SRS Aprende japones)

- Para programar SRS：

  - [“SuperMemo as a new tool increasing the productivity of a programmer. A case study: programming in Object Windows”](http://www.supermemo.com/articles/programming.htm)

  - [“Janki Method: Using spaced repetition systems to learn and retain technical knowledge”](http://www.jackkinsella.ie/2011/12/05/janki-method.html) ([Reddit discussion](https://old.reddit.com/r/programming/comments/n30hl/janki_method_learning_programming_with_6000/)); [SRS problems & solutions](http://www.oxbridgenotes.com/articles/autodidactism/note_taking)

  - [“Memorizing a programming language using spaced repetition software”](https://sivers.org/srs) ([Derek Sivers](https://en.wikipedia.org/wiki/Derek_Sivers)⁠; [Hacker News](https://news.ycombinator.com/item?id=5015183))

  - [learning text editor shortcuts](https://www.shortcutfoo.com/blog/introducing-interval-training-for-shortcuts/)

  - [“Learning Go with flashcards and spaced repetition”](https://developer.atlassian.com/blog/2015/06/golang-flashcards-and-spaced-repetition/)

  - [“Chasing 10X: Leveraging A Poor Memory In Engineering”](https://www.senrigan.io/blog/chasing-10x-leveraging-a-poor-memory-in-software-engineering/)⁠; [“Everything I Know: Strategies, Tips, and Tricks for Anki”](https://senrigan.io/blog/everything-i-know-strategies-tips-and-tricks-for-spaced-repetition-anki/)

  - [“Remembering R—Using Spaced Repetition to finally write code fluently”](https://empiria.io/blog/remembering-r-with-spaced-repetition/)

  - [“Anki as Learning Superpower: Computer Science Edition”](https://www.gresearch.co.uk/article/anki-as-learning-superpower-computer-science-edition/)

- [“QS Primer: Spaced Repetition and Learning”](http://quantifiedself.com/2012/06/spaced-repetition-and-learning/) -(talks on applications of spaced repetition)

- Juzga su valor en comparacion con el curso.：

  1. Cursos de apoyo: [“Why Forgetting Can Be Good”](http://www.scotthyoung.com/blog/2012/08/05/forgetting-is-good/)⁠, by Scott H. Young

  2. Objecion al Curriculo: [“Spaced repetition in natural and artificial learning”](https://web.archive.org/web/20130920193543/http://blog.learnstream.org/2012/08/spaced-repetition-in-natural-and-artificial-learning/)⁠, Ryan Muller hacer

  Mi propia observacion es que los cursos bien disenados **si** Implementa efectivamente la repeticion espaciada, pero incluso si un curso puede lograr esto (la mayoria no lo hace), si no esta informatizado, dicho curso no puede adaptarse a las circunstancias individuales del usuario.。

- [“Ditch the 10,000 hour rule! Why Malcolm Gladwell’s famous advice falls short; Contrary to what the bestselling author would tell you, obsessive practice isn’t the key to success. Here’s why”](http://www.salon.com/2014/04/20/ditch_the_10000_hour_rule_why_malcolm_gladwells_famous_advice_falls_short/)

- [“How to Memorize the Quran and Never Forget it”](http://www.ummah.com/forum/showthread.php?381181-How-to-Memorize-the-Quran-and-Never-Forget-it)

- [Bash Guion](https://groups.google.com/group/mnemosyne-proj-users/browse_thread/thread/fd10b9e601fb0eb6) Se puede utilizar para generar tarjetas de palabras (puede manejar varios diccionarios en linea y puede agregar varias oraciones; tambien se pueden agregar imagenes y audio).）

- Seleccion de vocabulario：

  1. [“Programmed Vocabulary Learning as a Traveling Salesman Problem”](http://jtauber.com/blog/2004/11/26/programmed_vocabulary_learning_as_a_travelling_salesman_problem/)

  2. [“Teaching New Testament Greek”](http://jtauber.com/blog/2006/05/05/teaching_new_testament_greek/)

  3. [graded-reader](http://graded-reader.org/): [“A New Kind of Graded Reader”](http://jtauber.com/blog/2008/02/10/a_new_kind_of_graded_reader/) (video talk)

  4. [Lista de correo](https://groups.google.com/group/graded-reader)

  5. [Procedimiento](https://code.google.com/p/graded-reader/) (Intente usar Haskell he escrito，[Bastante extenuante](http://community.haskell.org/~gwern/hcorpus/))

- [“Diff revision: diff-based revision of text notes, using spaced repetition”](http://www.fsavard.com/flow/2012/12/diff-revision/)

- Hacker News discussion: [1](https://news.ycombinator.com/item?id=6461936)⁠, [2](https://news.ycombinator.com/item?id=7539390)⁠, [3](https://news.ycombinator.com/item?id=8183220)

- [“A vote against spaced repetition”](https://www.lesswrong.com/r/discussion/lw/juq/a_vote_against_spaced_repetition/)⁠; [“How Flashcards Fail: Confessions of a Tired Memory Guy”](http://howtoremember.biz/content/how-flashcards-fail-confessions-tired-memory-guy)

- [“Learning Ancient Egyptian in an Hour Per Week with Beeminder”](http://blog.beeminder.com/hieroglyphs/)

- [“Anki, 10000 Cards Later: How my Anki usage has evolved”](https://rs.io/anki-tips/)

- [Duolingo](https://www.duolingo.com/) [uses spaced repetition](https://www.quora.com/Do-you-have-any-plans-for-optimizing-Duolingos-vocabulary-learning-using-spaced-repetition)

- [“Everything You Thought You Knew About Learning Is Wrong”](https://archive.wired.com/geekdad/2012/01/everything-about-learning/)

- [SeRiouS](http://www.spacedrepetition.com/): [“Spaced Repetition Technology for Legal Education”](http://conference.cali.org/2014/sessions/spaced-repetition-technology-legal-education)⁠, [“SeRiouS: an LPTI-supported Project to Improve Students’ Learning and Bar Performance”](http://lawpracticetechnology.blogs.law.suffolk.edu/2014/03/11/serious-an-lpti-supported-project-to-improve-students-learning-and-bar-performance/)⁠, Gabe Teninbaum ([video presentation](https://www.youtube.com/watch?v=dtClgl07lg8))

- [“The role of digital flashcards in legal education: theory and potential”](http://ejlt.org/article/view/320/424)⁠, Colbran et al 2014

- [“How I Rewired My Brain to Become Fluent in Math”](http://nautil.us/issue/17/big-bangs/how-i-rewired-my-brain-to-become-fluent-in-math-rd) ([HN](https://news.ycombinator.com/item?id=8402859))

- [“Why We Should Memorize [Poetry\]”](https://www.newyorker.com/books/page-turner/why-we-should-memorize)

- [“Studying for the Test by Taking It”](https://www.nytimes.com/2014/11/23/sunday-review/studying-for-the-test-by-taking-it.html)

- [“Making Summer Count: How Summer Programs Can Boost Children’s Learning”](https://www.gwern.net/docs/www/www.rand.org/fb672d38af12c609801856651ba37d2a54d6d98b.pdf)⁠, McCombs et al 2011 ([RAND](https://en.wikipedia.org/wiki/RAND_Corporation) MG1120)

- [*Learning Medicine: An Evidence-Based Guide*](http://www.learningmedicinebook.com/)

- [“Factors that Influence Skill Decay And Retention: a Quantitative Review and Analysis”](https://www.gwern.net/docs/spaced-repetition/1998-arthur.pdf)⁠, Arthur et al 1998

- [“On The Forgetting Of College Academics: At ‘Ebbinghaus speed’?”](https://www.gwern.net/docs/www/cbmm.mit.edu/c5e2af8e7a633678b2f3636d4ec822bdb15b2ad9.pdf)⁠, Subirana et al 2017

- [“How I use Anki to learn mathematics”](https://www.lesswrong.com/r/discussion/lw/o8e/how_i_use_anki_to_learn_mathematics/)

- [“Total recall: the people who never forget; An extremely rare condition may transform our understanding of memory”](https://www.theguardian.com/science/2017/feb/08/total-recall-the-people-who-never-forget) (obsessive recording & reviewing demonstrates you can recall much of your life if you live nothing worth recalling); [“The Mystery of S., the Man with an Impossible Memory: The neuropsychologist Alexander Luria’s case study of Solomon Shereshevsky helped spark a myth about a man who could not forget. But the truth is more complicated”](https://www.newyorker.com/books/page-turner/the-mystery-of-s-the-man-with-an-impossible-memory)

- [*Anki Essentials*](https://alexvermeer.com/anki-essentials/)⁠, Vermeer

- [“No. 126: Four Years of Spaced Repetition”](http://genedan.com/no-126-four-years-of-spaced-repetition/) (Gene Dan, actuarial studies)

- [“One Year Anki Update”](https://deusexvita.medium.com/one-year-anki-update-2615b113f7c2) (biology grad school)

- [“How To Remember Anything Forever-ish”: an interactive comic](https://ncase.me/remember/) (Nicky Case)

- [“The Overfitted Brain: Dreams evolved to assist generalization”](https://arxiv.org/abs/2007.09560)⁠, Hoel 2020

- [“Relearn Faster and Retain Longer: Along With Practice, Sleep Makes Perfect”](https://www.gwern.net/docs/spaced-repetition/2016-mazza.pdf)⁠, Mazza et al 2016

- [“Replication and Analysis of Ebbinghaus’ Forgetting Curve”](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0120644)⁠, Murre & Dros 2015

- [“Learning from Errors”](https://www.annualreviews.org/doi/10.1146/annurev-psych-010416-044022)⁠, Metcalfe 2017

- Discussion: [HN](https://news.ycombinator.com/item?id=13151790)⁠/[2](https://news.ycombinator.com/item?id=24857437)

## [Recursos de tarjetas didacticas](https://www.gwern.net/Spaced-repetition#flashcard-sources)

- [Mnemosyne Coleccion de barajas](http://mnemosyne-proj.org/card-sets)

- [Anki Coleccion de barajas](https://ankiweb.net/shared/decks/)

- [FlashCardExchange.com](http://www.flashcardexchange.com/)

- [StudyStack.com](http://www.studystack.com/)

- [Flashcarddb](http://flashcarddb.com/cardsets)