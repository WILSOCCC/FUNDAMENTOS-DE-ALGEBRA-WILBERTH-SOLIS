contenidoEntrada = `
<section>
    <h2>Factorización</h2>
    <p>La factorización es el proceso de descomponer expresiones en en un producto
    de factores más simples. Este procedimiento facilita el cálculo y la
    resolución de problemas matemáticos, en esta sección veremos la factorización
    de polinomios. En esta primera parte, veremos la factorización por medio del
    término común, trinomio cuadrado perfecto y diferencia de cuadrados.</p>

    <div class="links">
        <a href="#comun">Término común</a>
        <a href="#trinomio">Trinomio cuadrado perfecto</a>
        <a href="#diferencia">Diferencia de cuadrados</a>
    </div>

    <h3 id="comun">Término común</h3>
    <p>Para identificar una expresión que se pueda factorizar por medio del término
    común, como su nombre dice, tenemos que hallar el término en común que hay
    dentro de la expresión. Esto se hace sacando el Máximo Común Divisor de los
    coeficientes de la expresión; después indetifica la literal con menor exponente,
    esto házlo sólo si la literal se encuentra en todos los términos de la expresión.
    Ejemplo: 12x + 6, en este ejemplo el máximo común divisor de los dos coeficientes
    es 6. Ejemplo 2: 6x³ + 18x² + 60x, en este ejemplo además del MCD, se identifica
    la literal con menor exponente debido a que aparece en todos los términos de la expresión.</p>

    <h4>Resolución con término común:</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos esta expresión: <strong>12x + 6</strong></p>
    <p>El MCD de los dos coeficientes es: <strong>6</strong></p>
    <p>Como la literal <strong>x</strong> no se repite en todos los términos no lo
    tomamos como factor común.</p>
    <p>Los coeficientes se dividen entre el factor común:</p>
    <div class="factorc">
        <p><strong>6x³ / 6x = x²</strong></p>
        <p><strong>18x² / 6x = 3x</strong></p>
    </div>
    <p>Los resultados se agrupan en un paréntesis, junto con sus literales correspondientes,
    y el factor común se coloca multiplicando el paréntesis: <strong>6(2x + 1)</strong>
    , esa es la factorización de la expresión por término común.</p>

    <table>
        <tr>
            <th>
                Polinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                12x + 6
            </td>
            <td>
                6(2x + 1)
            </td>
        </tr>
    </table>

    <p>Comprobamos multiplicando de vuelta:</p>
    <div class="factorc">
        <p><strong>6 * 2x = 12x</strong></p>
        <p><strong>6 * 1 = 6</strong></p>
    </div>
    <p>Obtenemos la misma expresión de antes: <strong>12x + 6</strong></p>

    <h5>Ejemplo 2</h5>
    <p>Tenemos esta expresión: <strong>6x³ + 18x² + 60x</strong></p>
    <p>El MCD de los dos coeficientes es: <strong>6</strong></p>
    <p>En este caso la literal está en todos los términos, el que tiene la literal con
    menor exponente es <strong>60x</strong> así que <strong>x</strong> también entra
    como factor común.</p>
    <p>El factor común de la expresión ahora es: <strong>6x</strong></p>
    <p>Los coeficientes se dividen entre el factor común:</p>
    <div class="factorc">
        <p><strong>6x³ / 6x = x²</strong></p>
        <p><strong>18x² / 6x = 3x</strong></p>
        <p><strong>60x / 6x = 10</strong></p>
    </div>
    <p>Los resultados se agrupan en un paréntesis, junto con sus literales correspondientes,
    y el factor común se coloca multiplicando el paréntesis: <strong>6x(x² + 3x + 10)</strong>
    , esa es la factorización de la expresión por término común.</p>

    <table>
        <tr>
            <th>
                Polinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                6x³ + 18x² + 60x
            </td>
            <td>
                6x(x² + 3x + 10)
            </td>
        </tr>
    </table>

    <p>Comprobamos multiplicando de vuelta:</p>
    <div class="factorc">
        <p><strong>6x * x² = 6x³</strong></p>
        <p><strong>6x * 3x = 18x²</strong></p>
        <p><strong>6x * 10 = 60x</strong></p>
    </div>
    <p>Obtenemos la misma expresión de antes: <strong>6x³ + 18x² + 60x</strong></p>


    <h3 id="trinomio">Trinomio cuadrado perfecto</h3>
    <p>Para identificar un trinomio cuadrado perfecto, se debe identificar si el
    primer y último término tienen raiz cuadrada, si la tienen, comprobamos si el
    término de en medio se obtiene con el DOBLE de la MULTIPLICACIÓN de la RAIZ del
    primer y último término. Recordemos que un trinomio consta de 3 términos:
    <strong>a³ + b² + c</strong>, un trinomio cuadrado perfecto se estructura ya sea así:
    <strong>a² + 2ab + b²</strong>, o también: <strong>a² - 2ab + b²</strong>. Si nos
    damos cuenta, este es el resultado que obtenemos de resolver un binomio al cuadrado,
    por lo que si identificamos correctamente el trinomio cuadrado perfecto, podemos
    realizar la factorización más rápida volviendo al binomio al cuadrado original:
    <strong>a² + 2ab + b² = (a + b)²</strong> o también: <strong>a² - 2ab + b²
    = (a - b)²</strong>.</p>

    <h4>Resolución de un trinomio cuadrado perfecto:</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos esta expresión: <strong>4x² + 20x + 25</strong></p>
    <p>Si nos fijamos, el primer término tiene raiz cuadrada: <strong>√4x² = 2x</strong></p>
    <p>El último término también tiene raiz cuadrada: <strong>√25 = 5</strong></p>
    <p>Ahora nos falta comprobar que el coeficiente de en medio, sea el resultado de el
    DOBLE de la MULTIPLICACIÓN de las RAICES que ya sacamos: <strong>2(2x)(5) = 2(10x)
    = 20x</strong></p>
    <p>Esta condición se cumple por lo que identificamos correctamente un trinomio
    cuadrado perfecto.</p>
    <p>Aplicamos la fórmula del trinomio cuadrado perfecto, la raiz cuadrada del primer
    término, más (si el signo del término de en medio es positivo) o menos (si el signo es
    negativo) la raiz cuadrada del último término, todo esto elevado al cuadrado,
    en este caso es positivo por lo que el signo será positivo: <strong>(2x + 5)²</strong>.</p>

    <table>
        <tr>
            <th>
                Polinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                4x² + 20x + 25
            </td>
            <td>
                (2x + 5)²
            </td>
        </tr>
    </table>

    <p>Comprobamos multiplicando de vuelta:</p>
    <div class="imagenesfac">
        <img src="multimedia/trinomio.png">
    </div>
    <p>Obtenemos la misma expresión de antes: <strong>4x² + 20x + 25</strong></p>

    <h5>Ejemplo 2</h5>
    <p>Tenemos esta expresión: <strong>9x² - 24x + 16</strong></p>
    <p>Si nos fijamos, el primer término tiene raiz cuadrada: <strong>√9x² = 3x</strong></p>
    <p>El último término también tiene raiz cuadrada: <strong>√16 = 4</strong></p>
    <p>Ahora nos falta comprobar que el coeficiente de en medio, sea el resultado de el
    DOBLE de la MULTIPLICACIÓN de las RAICES que ya sacamos: <strong>2(3x)(4) = 2(12x)
    = 24x</strong></p>
    <p>Sin importar el signo, esta condición se cumple por lo que identificamos correctamente un trinomio
    cuadrado perfecto.</p>
    <p>Aplicamos la fórmula del trinomio cuadrado perfecto, la raiz cuadrada del primer
    término, más (si el signo del término de en medio es positivo) o menos (si el signo es
    negativo) la raiz cuadrada del último término, todo esto elevado al cuadrado,
    en este caso es negativo por lo que el signo será negativo: <strong>(3x - 4)²</strong>.</p>

    <table>
        <tr>
            <th>
                Polinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                9x² - 24x + 16
            </td>
            <td>
                (3x - 4)²
            </td>
        </tr>
    </table>

    <p>Comprobamos multiplicando de vuelta:</p>
    <div class="imagenesfac">
        <img src="multimedia/trinn.png">
    </div>
    <p>Obtenemos la misma expresión de antes: <strong>9x² - 24x + 16</strong></p>

    <h3 id="diferencia">Diferencia de cuadrados</h3>
    <p>Para identificar una diferencia de cuadradados debes tener una expresión
    con dos términos separados por un signo de resta, si esto se cumple, fíjate si
    cada término tiene una raiz cuadrada exacta, si las tienen, identificaste una
    diferencia de cuadrados. Recordemos que en los productos notables, al tener dos
    binomios conjugados que se multiplican, el resultado será una diferencia de
    caudrados por lo que la regla aquí sería al revés: <strong>a² - b² = (a + b)(a
    - b)</strong>.</p>

    <h4>Resolución de una diferencia de cuadrados:</h4>
    <h5>Ejemplo 1</h5>
    <p>Tenemos esta expresión: <strong>36x² - 9</strong></p>
    <p>Si nos fijamos, el primer término tiene raiz cuadrada: <strong>√36x² = 6x</strong></p>
    <p>El último término también tiene raiz cuadrada: <strong>√9 = 3</strong></p>
    <p>Los términos los separa una resta, por lo que ya identificamos una diferencia
    de cuadrados.</p>
    <p>Aplicamos la fórmula de la diferencia de cuadrados, la raiz cuadrada del
    primer término menos la raiz cuadrada del segundo, todo esto multiplicado
    por la raiz cuadrada del primer término más las raiz del segundo:<strong>
    (6x - 3)(6x + 3)</strong>.</p>

    <table>
        <tr>
            <th>
                Polinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                36x² - 9
            </td>
            <td>
                (6x - 3)(6x + 3)
            </td>
        </tr>
    </table>

    <p>Comprobamos multiplicando de vuelta:</p>
    <div class="imagenesfac">
        <img src="multimedia/dif1.png">
    </div>
    <p>Obtenemos la misma expresión de antes: <strong>36x² - 9</strong></p>

    <h5>Ejemplo 2</h5>
    <p>Tenemos esta expresión: <strong>64x⁴ - 9x²</strong></p>
    <p>Si nos fijamos, el primer término tiene raiz cuadrada: <strong>√64x⁴ = 8x²</strong></p>
    <p>El último término también tiene raiz cuadrada: <strong>√9x² = 3x</strong></p>
    <p>Los términos los separa una resta, por lo que ya identificamos una diferencia
    de cuadrados.</p>
    <p>Aplicamos la fórmula de la diferencia de cuadrados, la raiz cuadrada del
    primer término menos la raiz cuadrada del segundo, todo esto multiplicado
    por la raiz cuadrada del primer término más las raiz del segundo:<strong>
    (8x² - 3x)(8x² + 3x)</strong>.</p>

    <table>
        <tr>
            <th>
                Polinomio
            </th>
            <th>
                Factorizado
            </th>
        </tr>
        <tr>
            <td>
                64x⁴ - 9x²
            </td>
            <td>
                (8x² - 3x)(8x² + 3x)
            </td>
        </tr>
    </table>

    <p>Comprobamos multiplicando de vuelta:</p>
    <div class="imagenesfac">
        <img src="multimedia/dif2.png">
    </div>
    <p>Obtenemos la misma expresión de antes: <strong>64x⁴ - 9x²</strong></p>

    <br>

    <h3>Ida y regreso</h3>
    <p>Resumiendo los casos de factorización, podemos concluir que:</p>
    <table>
        <tr>
            <th>
                Caso (ida)
            </th>
            <th>
                Fórmula de factorización
            </th>
            <th>
                Resultado (vuelta)
            </th>
        </tr>
        <tr>
            <td>
                Término común
            </td>
            <td>
                ab + ac = a(b+ c)
            </td>
            <td>
                Ley distribuitiva
            </td>
        </tr>
        <tr>
            <td>
                Trinomio cuadrado perfecto
            </td>
            <td>
                a² ± 2ab + b² = (a ± b)²
            </td>
            <td>
                Binomio al cuadrado
            </td>
        </tr>
        <tr>
            <td>
                Diferencia de cuadrados
            </td>
            <td>
                a² - b² = (a + b)(a - b)

            </td>
            <td>
                Binomios conjugados
            </td>
        </tr>
    </table>
</section>`;