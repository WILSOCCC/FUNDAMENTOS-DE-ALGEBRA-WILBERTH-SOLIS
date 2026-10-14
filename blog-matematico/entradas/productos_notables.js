contenidoEntrada = `
<section>
    <h2>Productos notables</h2>
    <p>Son una variedad específica de binomios, de los cuales ya tenemos una forma
    fácil de resolverlos, las que vimos en clase. Recordemos que los binomios contienen
    dos términos algebraicos y los separa un signo de suma o resta. Los tipos de productos
    notables son:</p>

    <div class="links">
        <a href="#bincua">Binomio al cuadrado</a>
        <a href="#bincubo">Binomio al cubo</a>
        <a href="#conjugado">Conjugados</a>
        <a href="#comun">Término común</a>
    </div>

    <h3 id="bincua">Binomio al cuadrado</h3>
    <p>Es un binomio que está elevado a la potencia 2. Todo su interior, sus dos
    términos algebraicos, se pone entre paréntesis y el paréntesis se eleva al cuadrado.
    Ejemplo: (2x - 4)². Nótese como el paréntesis se eleva al cuadrado.</p>

    <h4>Resolución del binomio al cuadrado:</h4>
    <p>Supongamos que tenemos: <strong>(a + b)²</strong></p>
    <p>Se eleva el primer término al cuadrado: <strong>a²</strong></p>
    <p>Se saca el DOBLE de la MULTIPLICACIÓN de los dos términos: <strong>2(a)(b)</strong></p>
    <p class="adv">OJO! Dependiendo del signo que separe los dos términos en el binomio será el signo
    del resultado final de la segunda operación, en este caso es positivo: <strong>2ab</strong></p>
    <p>Finalmente, se eleva el segundo término al cuadrado: <strong>b²</strong></p>
    <p>Se unen los resultados: <strong>a² + 2ab + b²</strong></p>

    <h4>Resolución con el ejemplo de arriba:</h4>
    <p>Tenemos: <strong>(2x - 4)²</strong></p>
    <p>Se eleva el primer término al cuadrado: (2x)² = <strong>4x²</strong></p>
    <p>Se saca el DOBLE de la MULTIPLICACIÓN de los dos términos: 2(2x)(-4) = <strong>-16x</strong></p>
    <p>Finalmente, se eleva el segundo término al cuadrado: (-4)² = <strong>16</strong></p>
    <p>Se unen los resultados: <strong>4x² - 16x + 16</strong> taraan!</p>

    <h4>Comprobación con el método de la tabla</h4>
    <div class="imagenes"><img src="/blog-matematico/multimedia/binocua.png"></div>

    <h3 id="bincubo">Binomio al cubo</h3>
    <p>Es un binomio que está elevado a la potencia 3, todo su interior se eleva al
    cubo a diferencia del binomio al cuadrado que es a la potencia 2. Ejemplo:
    (6x + 4y²)³. Aquí el paréntesis se eleva al cubo.</p>

    <h4>Resolución del binomio al cubo:</h4>
    <p>Supongamos que tenemos: <strong>(a + b)³</strong></p>
    <p>Se eleva el primer término al cubo: <strong>a³</strong></p>
    <p>Se saca el TRIPLE de la MULTIPLICACIÓN del CUADRADO del primer término
    por el segundo término: <strong>3(a)²(b)</strong></p>
    <p class="adv">OJO! Dependiendo del signo que separe los dos términos en el binomio será el signo
    del resultado final de la segunda operación Y la última operación, en este caso es positivo: <strong>3a²b</strong></p>
    <p>Similar al anterior, se saca el TRIPLE de la MULTIPLICACIÓN del primer término por
    el CUADRADO del segundo término: <strong>3(a)(b)²</strong></p>
    <p>Finalmente, se eleva al cubo el segundo término, su signo depende del signo
    que separa los término del binomio: <strong>y³</strong></p>
    <p>Se unen los resultados: <strong>a³ + 3a²b + 3ab² + b³</strong></p>

    <h4>Resolución con el ejemplo de arriba:</h4>
    <p>Tenemos: <strong>(6x + 4y²)³</strong></p>
    <p>Se eleva el primer término al cubo: (6x)³ = (6x)(6x)(6x) = <strong>216x³</strong></p>
    <p>Se saca el TRIPLE de la MULTIPLICACIÓN del CUADRADO del primer término
    por el segundo término: 3(6x)²(4y²) = 3(36x²)(4y²) = 3(144x²y²) = <strong>432x²y²</strong></p>
    <p>Se saca el TRIPLE de la MULTIPLICACIÓN del primer término por el 
    CUADRADO del segundo término: 3(6x)(4y²)² = 3(6x)(16y⁴) = 3(96xy⁴) = <strong>288xy⁴</strong></p>
    <p>Finalmente, se eleva el segundo término al cubo: (4y²)³ = <strong>64y⁶</strong></p>
    <p>Se unen los resultados: <strong>216x³ + 432x²y² + 288xy⁴ + 64y⁶</strong> taraan!</p>

    <h4>Comprobación con el método de multiplicación cruzado</h4>
    <div class="imagenes"><img src="/blog-matematico/multimedia/binocubo.png"></div>

    <h3 id="conjugado">Conjugados</h3>
    <p>Es el producto de un binomio por el mismo binomio con el signo inverso.
    Ejemplo: (5x + 2)(5x - 2)</p>

    <h4>Resolución del conjugado:</h4>
    <p>Supongamos que tenemos: <strong>(a + b)(a - b)</strong></p>
    <p>Se eleva el primer término al cuadrado: <strong>a²</strong></p>
    <p>Y se le resta el segundo término al cuadrado: <strong>- b²</strong></p>
    <p>Se unen los resultados: <strong>a² - b²</strong></p>

    <h4>Resolución con el ejemplo de arriba:</h4>
    <p>Tenemos: <strong>(5x + 2)(5x - 2)</strong></p>
    <p>Se eleva el primer término al cuadrado: (5x)² = <strong>25x²</strong></p>
    <p>Y se le resta el segundo término al cuadrado: - (2)² = <strong>-4</strong></p>
    <p>Se unen los resultados: <strong25x² - 4</strong></p>

    <h4>Comprobación con el método de la tabla</h4>
    <div class="imagenes"><img src="/blog-matematico/multimedia/conju.png"></div>

    <h3 id="comun">Término común</h3>
    <p>Es el producto de dos binomios los cuales uno de sus términos son iguales,
    ese término que se repite es el término común. Ejemplo: (2x + 6)(2x + 2),
    el término común es 2x.</p>

    <h4>Resolución del término común:</h4>
    <p>Supongamos que tenemos: <strong>(x + a)(x + b)</strong></p>
    <p>Se eleva el término común al cuadrado: <strong>x²</strong></p>
    <p>Se MULTIPLICA el término común a la SUMA de los términos diferentes de
    los binomios: <strong>(a + b)x</strong></p>
    <p>Finalmente, se multiplican los términos diferentes: <strong>ab</strong></p>
    <p>Se unen los resultados: <strong>x² + (a + b)x + ab</strong></p>

    <h4>Resolución con el ejemplo de arriba:</h4>
    <p>Tenemos: <strong>(2x + 6)(2x + 2)</strong></p>
    <p>Se eleva el término común al cuadrado: (2x)² = <strong>4x²</strong></p>
    <p>Se MULTIPLICA el término común a la SUMA de los términos diferentes de
    los binomios: (6 + 2)2x = (8)2x = <strong>16x</strong></p>
    <p>Finalmente, se multiplican los términos diferentes: (6)(2) = <strong>12</strong></p>
    <p>Se unen los resultados: <strong>4x² + 16x + 12</strong></p>
    <h4>Comprobación con el método de la tabla</h4>
    <div class="imagenes"><img src="/blog-matematico/multimedia/comun.png"></div>

    <h3>Tabla de las fórmulas</h3>
    <table>
        <tr>
            <th>Producto notable</th>
            <th>Fórmula</th>
        </tr>
        <tr>
            <td>Binomio al cuadrado</th>
            <td>a² + 2ab + b²</th>
        </tr>
        <tr>
            <td>Binomio al cubo</th>
            <td>a³ + 3a²b + 3ab² + b³</th>
        </tr>
        <tr>
            <td>Conjugado</th>
            <td>a² - b²</th>
        </tr>
        <tr>
            <td>Término común</th>
            <td>x² + (a + b)x + ab</th>
        </tr>
    </table>
</section>`;
