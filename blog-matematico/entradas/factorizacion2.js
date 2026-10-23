contenidoEntrada = `
<section>
    <h2>Factorización 2</h2>
    <p>Bienvenidos a la segunda parte del tema de factorización, como ya habíamos visto,
    la factorización es el proceso de descomponer expresiones en en un producto
    de factores más simples. En esta segunda parte, veremos la factorización de suma
    y diferencia de cubos (que no es lo mismo que un binomio al cubo), y trinomios de la
    forma <strong>x² + bx + c</strong> y también <strong>ax² + bx + c</strong>.</p>

    <div class="links">
        <a href="#cubos">Suma/Diferencia de cubos</a>
        <a href="#trinomio1">Trinomio x² + bx + c</a>
        <a href="#trinomio2">Trinomio ax² + bx + c</a>
    </div>

    <h3 id="cubos">Suma/Diferencia de cubos</h3>
    <p>Para identificar una suma o diferencia de cubos, es bastante sencillo, simplemente es
    una suma o resta de dos términos algebraicos los cuales los dos tienen raiz cúbica exacta,
    mucho cuidado ya que se puede confundir con un binomio al cubo, el cual tiene como resultado
    4 términos y con la suma o diferencia de cubos obtenemos un resultado diferente. Abajo
    algunos ejemplos de sumas o diferencias de cubos y binomios al cubo para que identifiquen
    mejor las diferencias pero, en general, la principal diferencia son los paréntesis.
    La fórmula es esta: <strong>a³ + b³ = (a + b)(a² - ab + b²)</strong> o también:<strong>
    a³ - b³ = (a - b)(a² + ab + b²)</strong></p>

    <table>
        <tr>
            <th>
                Suma/Diferencia de cubos
            </th>
            <th>
                Binomio al cubo
            </th>
        </tr>
        <tr>
            <td>
                125 + 64
            </td>
            <td>
                (2x + 1)³
            </td>
        </tr>
        <tr>
            <td>
                729x³ - y³
            </td>
            <td>
                (12x + 9x²)³
            </td>
        </tr>
        <tr>
            <td>
                64x³ + 1000
            </td>
            <td>
                (28x + 102y)³
            </td>
        </tr>
        <tr>
            <td>
                m² - 27a²
            </td>
            <td>
                (6a³x + 1x²)³
            </td>
        </tr>
        
    </table>

    <h4>Resolución de suma/diferencia de cubos:</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos esta expresión: <strong>125x³ + 64</strong></p>
    <p>Comprobamos que el primer término tenga raiz cúbica: <strong>√125x³ = 5x</strong></p>
    <p>Hacemos lo mismo con el segundo término: <strong>√64 = 4</strong></p>
    <p>Hemos identificado correctamente una suma de cubos.</p>
    <p><strong>Paso 1.</strong> Hacemos un binomio con las raices cúbicas que ya sacamos:</p>
    <p style="text-align: center;"><strong>(5x + 4)</strong></p>
    <p><strong>Paso 2.</strong> Sacamos los cuadrados de estas raices:</p>
    <div class="factorc">
        <p><strong>(5x)² = 25x²</strong></p>
        <p><strong>(4)² = 16</strong></p>
    </div>
    <p><strong>Paso 3.</strong> Ahora hacemos un trinomio cuyo primer término es el cuadrado
    de la raiz cúbica del primer término que sacamos y el segundo el cuadrado de la otra raiz cúbica del segundo término que sacamos
    (ambos positivos):</p>
    <p style="text-align: center;"><strong>(25x² ---------- + 16)</strong></p>
    <p><strong>Paso 4.</strong> Para el término de en medio, multiplicamos la primera raiz
    cúbica que sacamos por la segunda raiz cúbica. El signo de este último término será
    el signo opuesto a la expresión original, en este caso será negativo el signo:</p>
    <p style="text-align: center;"><strong>(25x² - (5x)(4) + 16)</strong></p>
    <p style="text-align: center;"><strong>(25x² - 20x + 16)</strong></p>
    <p><strong>Paso 5.</strong> Juntamos los polinomios que hemos hecho y ya quedó factorizado:</p>
    <p style="text-align: center;"><strong>(5x + 4)(25x² - 20x + 16)</strong></p>

    <table>
        <tr>
            <th>
                Expresión
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                125x³ + 64
            </td>
            <td>
                (5x + 4)(25x² - 20x + 16)
            </td>
        </tr>
    </table>

    <h4>La diferencia</h4>
    <p>Como podemos ver, el resultado es diferente al resultado que daría un binomio al cubo:</p>
    <table>
        <tr>
            <th>
                Expresión
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                (5x + 4)³
            </td>
            <td>
                125x³ + 300x² + 240x + 64
            </td>
        </tr>
    </table>

    <h5>Ejemplo 2</h5>
    <p>Tenemos esta expresión: <strong>343x³ - 27y³</strong></p>
    <p>Comprobamos que el primer término tenga raiz cúbica: <strong>√343x³ = 7x</strong></p>
    <p>Hacemos lo mismo con el segundo término: <strong>√27y³ = 3y</strong></p>
    <p>Hemos identificado correctamente una suma de cubos.</p>
    <p><strong>Paso 1.</strong> Hacemos un binomio con las raices cúbicas que ya sacamos:</p>
    <p style="text-align: center;"><strong>(7x - 3y)</strong></p>
    <p><strong>Paso 2.</strong> Sacamos los cuadrados de estas raices:</p>
    <div class="factorc">
        <p><strong>(7x)² = 49x²</strong></p>
        <p><strong>(3y)² = 9y²</strong></p>
    </div>
    <p><strong>Paso 3.</strong> Ahora hacemos un trinomio cuyo primer término es el cuadrado
    de la raiz cúbica del primer término que sacamos y el segundo el cuadrado de la otra raiz cúbica del segundo término que sacamos
    (ambos positivos):</p>
    <p style="text-align: center;"><strong>(49x² ---------- + 9y²)</strong></p>
    <p><strong>Paso 4.</strong> Para el término de en medio, multiplicamos la primera raiz
    cúbica que sacamos por la segunda raiz cúbica. El signo de este último término será
    el signo opuesto a la expresión original, en este caso será positivo el signo:</p>
    <p style="text-align: center;"><strong>(49x² + (7x)(3y) + 9y²)</strong></p>
    <p style="text-align: center;"><strong>(49x² + 21xy + 9y²)</strong></p>
    <p><strong>Paso 5.</strong> Juntamos los polinomios que hemos hecho y ya quedó factorizado:</p>
    <p style="text-align: center;"><strong>(7x - 3y)(49x² + 21xy + 9y²)</strong></p>

    <table>
        <tr>
            <th>
                Expresión
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                343x³ - 27y³
            </td>
            <td>
                (7x - 3y)(49x² + 21xy + 9y²)
            </td>
        </tr>
    </table>

    <h4>La diferencia</h4>
    <p>Como podemos ver, el resultado es diferente al resultado que daría un binomio al cubo:</p>
    <table>
        <tr>
            <th>
                Expresión
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                (7x - 3y)³
            </td>
            <td>
                343x³ - 441x²y + 189xy² - 27y³
            </td>
        </tr>
    </table>


    <h3 id="trinomio1">Trinomio de la forma x² + bx + c</h3>
    <p>Para identificar un trinomio de forma x² + bx + c tenemos que considerar que un término
    tenga literal con una potencia alta pero sin coeficiente, un término que tenga un
    coeficiente y una literal con una potencia menor al término anterior, por último,
    un término que tenga coeficiente pero no literal ni potencia. Por ejemplo: x⁴ + 2x² - 48
    El término definido como el primero es x⁴, sin coeficiente. El segundo es 2x, con literal
    y coeficiente. El último es -48, sin literal. Este es un trinomio de esta forma y se
    resuelve de una manera sencilla usando el método de los dos números auxiliares.</p>

    <h4>Resolución de un trinomio de la forma x² + bx + c</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos esta expresión: <strong>x⁴ + 2x² - 48</strong></p>
    <p>El método de los números auxiliares nos dice que busquemos dos números que
    multiplicados nos den la multiplicación de el coeficiente del último y primer término
    y, que sumados, nos den el coeficiente b:</p>
    <div class="factorc">
        <p><strong>ac = (1)(-48) = -48</strong></p>
        <p><strong>b = 2</strong></p>
    </div>
    
    <ul style="margin-left: 40%;">
        <li>48 / 2 = 24</li>
        <li>48 / 3 = 16</li>
        <li>48 / 4 = 12</li>
        <li>48 / 6 = 8</li>
    </ul>
    <p>Si nos fijamos, los últimos números nos sirven, como c es negativo llevan signos diferentes,
    el número mayor tendrá el signo de b y el otro negativo:</p>
    <div class="factorc">
        <p><strong>(-6)(8) = -48</strong></p>
        <p><strong>-6 + 8 = 2</strong></p>
    </div>
    <p>La regla se cumple por lo que ya identificamos nuestros números auxiliares. Como
    el trinomio es de forma x² + bx + c sacamos la raiz cuadrada del primer término (x⁴)
    y hacemos dos binomios con esta raiz junto con los números auxiliares de esta forma:</p>
    <p style="text-align: center;"><strong>(x² - 6)(x² + 8)</strong></p>
    <p>Y ya lo tenemos factorizado.</p>

    <table>
        <tr>
            <th>
                Trinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                x⁴ + 2x² - 48
            </td>
            <td>
                (x² - 6)(x² + 8)
            </td>
        </tr>
    </table>

    <h5>Ejemplo 2</h5>
    <p>Tenemos esta expresión: <strong>x² - 6x - 40</strong></p>
    <p>El método de los números auxiliares nos dice que busquemos dos números que
    multiplicados nos den la multiplicación de el coeficiente del último y primer término
    y, que sumados, nos den el coeficiente b:</p>
    <div class="factorc">
        <p><strong>ac = (1)(-40) = -40</strong></p>
        <p><strong>b = -6</strong></p>
    </div>
    
    <ul style="margin-left: 40%;">
        <li>48 / 2 = 20</li>
        <li>48 / 4 = 10</li>
        <li>48 / 5 = 8</li>
        <li>48 / 8 = 5</li>
    </ul>
    <p>Si nos fijamos, los números 4 y 10 nos sirven, como c es negativo llevan signos diferentes,
    el número mayor tendrá el signo de b (negativo) y el otro positivo:</p>
    <div class="factorc">
        <p><strong>(4)(-10) = -40</strong></p>
        <p><strong>4 + (-10) = -6</strong></p>
    </div>
    <p>La regla se cumple por lo que ya identificamos nuestros números auxiliares. Como
    el trinomio es de forma x² + bx + c sacamos la raiz cuadrada del primer término (x²)
    y hacemos dos binomios con esta raiz junto con los números auxiliares de esta forma:</p>
    <p style="text-align: center;"><strong>(x + 4)(x - 10)</strong></p>
    <p>Y ya lo tenemos factorizado.</p>

    <table>
        <tr>
            <th>
                Trinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                x² - 6x - 40
            </td>
            <td>
                (x + 4)(x - 10)
            </td>
        </tr>
    </table>

    <h3 id="trinomio2">Trinomio de la forma ax² + bx + c</h3>
    <p>Para identificar un trinomio de forma ax² + bx + c tenemos que considerar que un término
    tenga tanto una literal como una potencia alta y con coeficiente, un término que tenga un
    coeficiente y una literal pero con una potencia menor al término anterior, por último,
    un término que tenga coeficiente pero no literal ni potencia. Por ejemplo: 3x² + 11x + 6
    El término definido como ax² es 3x². El segundo que es bx sería 11x, con literal
    y coeficiente. El último es 6, sin literal. Este es un trinomio de esta forma y se
    resuelve también con el método de los números auxiliares pero un poco más extenso.</p>

    <h4>Resolución de un trinomio de la forma ax² + bx + c</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos esta expresión: <strong>3x² + 11x + 6</strong></p>
    <p>El método de los números auxiliares nos dice que busquemos dos números que
    multiplicados nos den la multiplicación de el coeficiente del último y primer término
    y, que sumados, nos den el coeficiente b:</p>
    <div class="factorc">
        <p><strong>ac = (3)(6) = 18</strong></p>
        <p><strong>b = 11</strong></p>
    </div>
    
    <ul style="margin-left: 40%;">
        <li>18 / 2 = 9</li>
        <li>18 / 3 = 6</li>
        <li>18 / 6 = 3</li>
    </ul>
    <p>Si nos fijamos, los primeros números 2 y 9 nos sirven, como c es positivo llevan signos iguales,
    como b es positivo también, el signo de los números también será positivo:</p>
    <div class="factorc">
        <p><strong>(2)(9) = 18</strong></p>
        <p><strong>2 + 9 = 11</strong></p>
    </div>
    <p>La regla se cumple por lo que ya identificamos nuestros números auxiliares. Como
    el trinomio es de forma ax² + bx + c tenemos que identificar en dónde nos conviene poner
    los números auxiliares en cada binomio, 9 es divisible entre 3 y 6 es divisible entre 2,
    por lo que agrupamos los términos como una suma de binomios:</p>
    <p style="text-align: center;"><strong>(3x² + 9x) + (2x + 6)</strong></p>
    <p>Ahora sacamos el factor común de cada binomio:</p>
    <div class="factorc">
        <p><strong>(3x² + 9x) = 3x(x + 3)</strong></p>
        <p><strong>(2x + 6) = 2(x + 3)</strong></p>
    </div>
    <p>Ahora ponemos en un binomio los factores comunes y en otro binomio se dejan los términos
    que se repiten:</p>
    <p style="text-align: center;"><strong>(3x + 2)(x + 3)</strong></p>
    <p>Y así es como queda factorizado este trinomio.</p>

    <table>
        <tr>
            <th>
                Trinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                3x² + 11x + 6
            </td>
            <td>
                (3x + 2)(x + 3)
            </td>
        </tr>
    </table>

    <h5>Ejemplo 2</h5>
    <p>Tenemos esta expresión: <strong>10x² - 27x + 5</strong></p>
    <p>El método de los números auxiliares nos dice que busquemos dos números que
    multiplicados nos den la multiplicación de el coeficiente del último y primer término
    y, que sumados, nos den el coeficiente b:</p>
    <div class="factorc">
        <p><strong>ac = (10)(5) = 50</strong></p>
        <p><strong>b = -27</strong></p>
    </div>
    
    <ul style="margin-left: 40%;">
        <li>50 / 2 = 25</li>
        <li>50 / 5 = 10</li>
        <li>50 / 10 = 5</li>
    </ul>
    <p>Si nos fijamos, los primeros números 2 y 25 nos sirven, como c es positivo llevan signos iguales,
    como b es negativo, el signo de los números también será negativo:</p>
    <div class="factorc">
        <p><strong>(-2)(-25) = 50</strong></p>
        <p><strong>(-2) + (-25) = -27</strong></p>
    </div>
    <p>La regla se cumple por lo que ya identificamos nuestros números auxiliares. Como
    el trinomio es de forma ax² + bx + c tenemos que identificar en dónde nos conviene poner
    los números auxiliares en cada binomio, 10 es divisible entre 2 y 25 es divisible entre 5,
    por lo que agrupamos los términos como una suma de binomios:</p>
    <p style="text-align: center;"><strong>(10x² - 2x) + (-25x + 5)</strong></p>
    <p>Ahora sacamos el factor común de cada binomio:</p>
    <div class="factorc">
        <p><strong>(10x² - 2x) = 2x(5x - 1)</strong></p>
        <p><strong>(-25x + 5) = -5(5x - 1)</strong></p>
    </div>
    <p>Ahora ponemos en un binomio los factores comunes y en otro binomio se dejan los términos
    que se repiten:</p>
    <p style="text-align: center;"><strong>(2x + -5)(5x - 1)</strong></p>
    <p>Y así es como queda factorizado este trinomio.</p>

    <table>
        <tr>
            <th>
                Trinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                10x² - 27x + 5
            </td>
            <td>
                (2x + -5)(5x - 1)
            </td>
        </tr>
    </table>


    <h3>Estrategia de factorización</h3>
    <p>Hemos visto varios casos de factorización: término común, trinomio cuadrado perfecto,
    diferencia de cuadrados, suma o diferencia de cubos y trinomios de forma x² + bx + c y también
    ax² + bx + c. ¿Pero cuándo debemos aplicar cada caso y en qué orden?</p>
    <h4>Estrategia</h4>
    <ul>
        <li>Primero identificamos el número de términos de la expresión</li>
        <li>Si tiene dos términos:</li>
        <li>Identificamos si los términos tienen algún factor común</li>
        <li>Comprobamos si quedó alguna diferencia de cuadrados para seguir factorizando</li>
        <li>Aplicamos el discriminante para confirmar si la expresión se puede seguir factorizando
        con enteros.</li>

        <li>Si tiene tres términos:</li>
        <li>Identificamos si los términos tienen algún factor común</li>
        <li>Comprobamos si es un trinomio cuadrado perfecto</li>
        <li>Si no es, identificamos la forma del trinomio: x² + bx + c, ax² + bx + c</li>
        <li>Comprobamos si quedó alguna diferencia de cuadrados</li>
        <li>Aplicamos el discriminante para confirmar si la expresión se puede seguir factorizando
        con enteros.</li>
    </ul>
</section>`;