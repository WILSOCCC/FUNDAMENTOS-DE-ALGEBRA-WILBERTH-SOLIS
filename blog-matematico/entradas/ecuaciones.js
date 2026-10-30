contenidoEntrada = `
<section>
    <h2>Ecuaciones de primer grado</h2>
    <p>En esta nueva entrada veremos diferentes tipos de ecuaciones de primer grado
    y sus resoluciones para cada una. Una ecuación es una igualdad matemática que
    contiene un valor que es desconocido, este valor se le denomina incógnita. Al
    resolver la ecuación encontramos ese valor desconocido que hace que la igualdad
    sea verdadera. Veremos algunos tipos de ecuaciones:</p>

    <div class="links">
        <a href="#ente">Ecuaciones enteras</a>
        <a href="#frac">Ecuaciones fraccionarias</a>
        <a href="#agrup">Con signos de agrupación</a>
        <a href="#lit">Con literales</a>
    </div>

    <h3 id="ente">Ecuaciones enteras</h3>
    <p>Este tipo de ecuaciones es bastante fácil de resolver, primero tenemos que hallar la incógnita
    y dejarla de un lado, si hay valores que multiplican a la incógnita también se dejan de ese
    mismo lado.</p>

    <h4>Resolución de ecuaciones enteras</h4>
    <h5>Ejemplo 1, método de la balanza</h5>
    <p>Tenemos la igualdad: <strong>8x - 6 = 18</strong></p>
    <p>Tenemos que dejar a la incógnita sola, primero quitamos el <strong>-6</strong> sumando 6 de
    cada lado:</p>
    <p style="text-align: center;"><strong>8x - 6 + 6 = 18 + 6</strong></p>
    <p style="text-align: center;"><strong>8x = 24</strong></p>
    <p>Ahora al final nos queda una multiplicación para aislar la incógnita, por lo que dividimos en
    ambos lados por el coeficiente que multiplica a <strong>x</strong>:</p>
    <p style="text-align: center;"><strong>8x/8 = 24/8</strong></p>
    <p style="text-align: center;"><strong>x = 3</strong></p>
    <p>Ahora sabemos que el valor de la incógnita es 3. Comprobamos sustituyendo el valor en la
    igualdad original: </p>
    <p style="text-align: center;"><strong>8(3) - 6</strong></p>
    <p style="text-align: center;"><strong>24 - 6</strong></p>
    <p style="text-align: center;"><strong>18</strong></p>
    <p>Comprobamos que la igualdad sí se cumple con este valor por lo que resolvimos correctamente
    esta ecuación entera.</p>

    <h5>Ejemplo 2, con atajos</h5>
    <p>Tenemos la igualdad: <strong>6x - 6 = 20 + 4x</strong></p>
    <p>Ahora debemos de dejar de un sólo lado todos los términos que tengan la incógnita, si ya se
    encuentra del lado que queremos, el término se queda así, en el caso de que se pase desde el
    lado contrario al lado que queremos, su signo cambiará:</p>
    <p style="text-align: center;"><strong>6x - 4x - 6 = 20</strong></p>
    <p>Nótese como el término <strong>4x</strong> se puso del otro lado ahora con el signo negativo.</p>
    <p>Ahora hacemos lo mismo pero con los términos sin la incógnita:</p>
    <p style="text-align: center;"><strong>6x - 4x = 20 + 6</strong></p>
    <p>Realizamos las operaciones en cada lado de la ecuación: </p>
    <p style="text-align: center;"><strong>2x = 26</strong></p>
    <p>Ahora nos queda una multiplicación para aislar la incógnita, así que pasamos el coeficiente
    al otro lado con la operación contraria de multiplicar, que sería dividir:</p>
    <p style="text-align: center;"><strong>x = 26/2</strong></p>
    <p style="text-align: center;"><strong>x = 13</strong></p>
    <p>Ahora sabemos que el valor de la incógnita es 13. Comprobamos sustituyendo el valor en la
    igualdad original: </p>
    <p style="text-align: center;"><strong>6(13) - 6 = 20 + 4(13)</strong></p>
    <p style="text-align: center;"><strong>78 - 6 = 20 + 52</strong></p>
    <p style="text-align: center;"><strong>72 = 72</strong></p>
    <p>Comprobamos que la igualdad sí se cumple con este valor por lo que resolvimos correctamente
    esta ecuación entera por medio de los atajos.</p>

    <h3 id="frac">Ecuaciones fraccionarias</h3>
    <p>En las ecuaciones fraccionarias entran más pasos para resolverlas, al ser fracciones los operandos
    son más difíciles de operar y más dificil para aislar la incógnita. Para resolverlas hay que sacar
    el mínimo común múltiplo de todos los denominadores de la igualdad y multiplicar ese mcm por
    TODOS los términos de la ecuación.</p>

    <h4>Resolución de ecuaciones fraccionarias</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos la igualdad: <strong>x/8 + x/16 = 3</strong></p>
    <p>Tenemos que dejar a la incógnita sola, primero sacamos el mcm de los denominadores <strong>
    8, 16</strong> que es 32.</p>
    <p>Multiplicamos ese mcm por todos los términos de la igualdad y realizamos las operaciones:</p>
    <p style="text-align: center;"><strong>32(x/8) + 32(x/16) = 32(3)</strong></p>
    <p style="text-align: center;"><strong>32x/8 + 32x/16 = 96</strong></p>
    <p style="text-align: center;"><strong>4x + 2x = 96</strong></p>
    <p>Ahora sí tenemos enteros y podemos aplicar cualquiera de los dos método anteriores:</p>
    <p style="text-align: center;"><strong>6x = 96</strong></p>
    <p style="text-align: center;"><strong>x = 96/6</strong></p>
    <p style="text-align: center;"><strong>x = 16</strong></p>
    <p>Ahora sabemos que el valor de la incógnita es 16. Comprobamos sustituyendo el valor en la
    igualdad original: </p>
    <p style="text-align: center;"><strong>16/8 + 16/16</strong></p>
    <p style="text-align: center;"><strong>2 + 1</strong></p>
    <p style="text-align: center;"><strong>3</strong></p>
    <p>Comprobamos que la igualdad sí se cumple con este valor por lo que resolvimos correctamente
    esta ecuación fraccionaria.</p>

    <h5>Ejemplo 2</h5>
    <p>Tenemos la igualdad: <strong>(6 - x)/2 - x/5 = -11</strong></p>
    <p>Tenemos que dejar a la incógnita sola, primero sacamos el mcm de los denominadores <strong>
    2, 5</strong> que es 10.</p>
    <p>Multiplicamos ese mcm por todos los términos de la igualdad y realizamos las operaciones:</p>
    <p style="text-align: center;"><strong>10((6 - x)/2) - 10(x/5) = 10(-11)</strong></p>
    <p style="text-align: center;"><strong>60 - 10x/2 - 10x/5 = -110</strong></p>
    <p style="text-align: center;"><strong>30 - 5x - 2x = -110</strong></p>
    <p>Ahora sí tenemos enteros y podemos aplicar cualquiera de los dos método anteriores:</p>
    <p style="text-align: center;"><strong>-5x - 2x = -110 - 30</strong></p>
    <p style="text-align: center;"><strong>-7x = -140</strong></p>
    <p style="text-align: center;"><strong>x = -140/-7</strong></p>
    <p style="text-align: center;"><strong>x = 20</strong></p>
    <p>Ahora sabemos que el valor de la incógnita es 20. Comprobamos sustituyendo el valor en la
    igualdad original: </p>
    <p style="text-align: center;"><strong>(6 - 20)/2 - 20/5</strong></p>
    <p style="text-align: center;"><strong>-14/2 - 4</strong></p>
    <p style="text-align: center;"><strong>-7 - 4</strong></p>
    <p style="text-align: center;"><strong>-11</strong></p>
    <p>Comprobamos que la igualdad sí se cumple con este valor por lo que resolvimos correctamente
    esta ecuación fraccionaria.</p>

    <h3 id="agrup">Ecuaciones con signos de agrupación</h3>
    <p>Los signos de agrupación determinan qué operaciones se realizarán primero en una igualdad.
    Si hay varios grupos de asginación, es recomendable resolver los paréntesis que estén más adentro
    tomando en cuenta unas cuantas reglas:</p>

    <table>
        <tr>
            <th>
                Delante del paréntesis hay...
            </th>
            <th>
                Qué ocurre
            </th>
            <th>
                Qué Ejemplo
            </th>
        </tr>
        <tr>
            <td>
                Un número
            </td>
            <td>
                Aplica la ley distributiva
            </td>
            <td>
                3(x + 2) = 3x + 6
            </td>
        </tr>
        <tr>
            <td>
                Un signo positivo
            </td>
            <td>
                Los signos se quedan iguales
            </td>
            <td>
                +(2x + 4) = 2x + 4
            </td>
        </tr>
        <tr>
            <td>
                Un signo negativo
            </td>
            <td>
                Todos los signos cambian
            </td>
            <td>
                -(4x - 2) = -4x + 2
            </td>
        </tr>
    </table>

    <h4>Resolución de ecuaciones con signos de agrupación:</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos la igualdad: <strong>2(5x - 3) + 6 = 3(x + 7)</strong></p>
    <p>Aplicamos la ley distibutiva con los paréntesis:</p>
    <p style="text-align: center;"><strong>10x - 6 + 6 = 3x + 21</strong></p>
    <p>Ya que quitamos los paréntesis, realizamos las operaciones normalmente.</p>
    <p style="text-align: center;"><strong>10x - 3x = 21 + 6 - 6</strong></p>
    <p style="text-align: center;"><strong>7x = 21</strong></p>
    <p style="text-align: center;"><strong>x = 21/7</strong></p>
    <p style="text-align: center;"><strong>x = 3</strong></p>
    <p>Ahora sabemos que el valor de la incógnita es 3. Comprobamos sustituyendo el valor en la
    igualdad original: </p>
    <p style="text-align: center;"><strong>2(5(3) - 3) + 6 = 3(3 + 7)</strong></p>
    <p style="text-align: center;"><strong>2(15 - 3) + 6 = 3(10)</strong></p>
    <p style="text-align: center;"><strong>2(12) + 6 = 30</strong></p>
    <p style="text-align: center;"><strong>24 + 6 = 30</strong></p>
    <p style="text-align: center;"><strong>30 = 30</strong></p>
    <p>Comprobamos que la igualdad sí se cumple con este valor por lo que resolvimos correctamente
    esta ecuación con signos de agrupación.</p>

    <h5>Ejemplo 2</h5>
    <p>Tenemos la igualdad: <strong>{[2(2x - 3) + 6] - 2x + 3} = [-3(x + 7) + 3x] + 32</strong></p>
    <p>Aplicamos la ley distibutiva con los paréntesis:</p>
    <p style="text-align: center;"><strong>{[4x - 6 + 6] - 2x + 3} = [-3x - 21 + 3x] + 32</strong></p>
    <p style="text-align: center;"><strong>{[4x] - 2x + 3} = [- 21] + 32</strong></p>
    <p style="text-align: center;"><strong>2x + 3 = 11<</strong></p>
    <p>Ya que quitamos los paréntesis, realizamos las operaciones normalmente.</p>
    <p style="text-align: center;"><strong>2x = 11 - 3</strong></p>
    <p style="text-align: center;"><strong>2x = 8</strong></p>
    <p style="text-align: center;"><strong>x = 8/2</strong></p>
    <p style="text-align: center;"><strong>x = 4</strong></p>
    <p>Ahora sabemos que el valor de la incógnita es 4. Comprobamos sustituyendo el valor en la
    igualdad original: </p>
    <p style="text-align: center;"><strong>{[2(2(4) - 3) + 6] - 2(4) + 3} = [-3(4 + 7) + 3(4)] + 32</strong></p>
    <p style="text-align: center;"><strong>{[2(8 - 3) + 6] - 8 + 3} = [-3(11) + 12] + 32</strong></p>
    <p style="text-align: center;"><strong>{[2(5) + 6] - 5} = [-33 + 12] + 32</strong></p>
    <p style="text-align: center;"><strong>{[10 + 6] - 5} = [-21] + 32</strong></p>
    <p style="text-align: center;"><strong>{16 - 5} = 11</strong></p>
    <p style="text-align: center;"><strong>11 = 11</strong></p>
    <p>Comprobamos que la igualdad sí se cumple con este valor por lo que resolvimos correctamente
    esta ecuación con signos de agrupación.</p>

    <h3 id="lit">Ecuaciones con literales</h3>
    <p>Este tipo de ecuaciones son parecidas a las ecuaciones enteras, la diferencia es que ahora
    manejaremos literales como si fueran números, al despejar la incógnita, las letras quedaran formando
    una operación que su resultado queda determinado por los valores de esas letras.</p>

    <h4>Resolución de ecuaciones con literales</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos la igualdad: <strong>ax + b = c</strong></p>
    <p>Tenemos que dejar a la incógnita sola, primero pasamos la <strong>b</strong> del otro lado.</p>
    <p style="text-align: center;"><strong>ax = c - b</strong></p>
    <p>Nos queda una multiplicación para aislar la incógnita, pasamos la literal que nos falta con la
    operación contraria:</p>
    <p style="text-align: center;"><strong>x = (c - b)/a</strong></p>
    <p>Y así es como queda la ecuación para despejar x.</p>

    <h5>Ejemplo 2</h5>
    <p>Tenemos la igualdad: <strong>2y - a = b</strong></p>
    <p>Tenemos que dejar a la incógnita sola, primero pasamos la <strong>a</strong> del otro lado.</p>
    <p style="text-align: center;"><strong>2y = b + a</strong></p>
    <p>Nos queda una multiplicación para aislar la incógnita, pasamos el coeficiente que nos falta con la
    operación contraria:</p>
    <p style="text-align: center;"><strong>y = (b + a)/2</strong></p>
    <p>Y así es como queda la ecuación para despejar y.</p>

    <h3>Problema de planteamiento</h3>
    <h4>Las ecuaciones nos pueden ayudar a resolver problemas</h4>
    <p><strong>Problema:</strong></p>
    <p>Un equipo de desarrollo de software entregó un proyecto completo en 15 días. La fase de desarrollo
    del código tomó el doble de días que la fase de diseño de la arquitectura. ¿Cuántos días dedicaron
    a cada una de las dos fases?</p>

    <p>Definimos x como el número de días de la fase de diseño. Esa es la incógnita</p>
    <p>Traducimos en lenguaje algebraico en enunciado: </p>
    <ul>
        <li>Días de la fase de diseño: <strong>x</strong></li>
        <li>Días de la fase de código: <strong>2x</strong></li>
        <li>Tiempo total del proyecto: <strong>15</strong></li>
    </ul>
    <p>Una vez identificado estos elementos, hacemos la ecuación de que la suma de los días de ambas fases debe ser igual al total del proyecto:</p>
    <p style="text-align: center;"><strong>x + 2x = 15</strong></p>
    <p>Ahora aplicamos la solución:</p>
    <p style="text-align: center;"><strong>3x = 15</strong></p>
    <p style="text-align: center;"><strong>x = 15/3</strong></p>
    <p style="text-align: center;"><strong>x = 5</strong></p>
    <p>Días del diseño: <strong>5 días</strong></p>
    <p>Días del código: <strong>10 días</strong></p>
    <p>Comprobamos que los valores cumplen los enunciados del problema original:</p>
    <p>El desarrollo toma el doble del tiempo que el diseño:</p>
    <p style="text-align: center;"><strong>Desarrollo(10) = 2 * Diseño(5)</strong></p>
    <p>El tiempo total de ambas fases suma 15 días:</p>
    <p style="text-align: center;"><strong>5 días(diseño) + 10 días(desarrollo) = 15 días</strong></p>
    <p>Ambos enunciados se cumplen por lo que comprobamos que el resultado de la ecuación sí
    satisface los enunciados originales.</p>
</section>`;