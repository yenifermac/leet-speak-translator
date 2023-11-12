
  let textResult = document.getElementById('textResult');

let nivel = 'basico'; 

function convertidorTextoHacker(texto, nivel) 
{
    const textBasico = {
        a: "4",
        e: "3",
        i: "1",
        o: "0",
        s: "5"
    };
    
    const textMedio = {
        a: "4",
        e: "3",
        g: "6",
        l: "1",
        i: "1",
        o: "0",
        h: "#",
        s: "5",
        t: "7",
        z: "2",
        m: "/\\/\\",
        n: "^/",
        r: "|2",
        u: "|_|"

    };
    
    const textAvanzado = {
        a: "4",
        b: "8",
        e: "3",
        g: "6",
        i: "1",
        o: "()",
        j: ",_]",
        s: "5",
        t: "7",
        z: "2",
        h: ":-:",
        m: " /\/\ ", 
        n: "|\\|",
        r: "12",
        u: "L|",
        v: "\\/",
        w: "\\/\\/",
        y: "`/"
    };
    
    let nivelTranslate;
    switch(nivel) {
        case 'medio':
            nivelTranslate = textMedio;
            break;
            case 'avanzado':
                nivelTranslate = textAvanzado;
                break;
                default:
                    nivelTranslate = textBasico;
                }
                
                let textoLeet = texto.toLowerCase();
                
                for(let caracter in nivelTranslate ) {
                    const regex = new RegExp(caracter, 'g');
                    textoLeet = textoLeet.replace(regex, nivelTranslate[caracter]);
                }
                
                return textoLeet;
}
        
            
            document.getElementById('buttonBasic').addEventListener('click', function() {
                nivel = 'basico';
                let texto = document.getElementById("texTranslate").value;
                let resultado = convertidorTextoHacker(texto, nivel);
                textResult.value = resultado;
                
                

            });
            
            document.getElementById('buttonMedio').addEventListener('click', function() {
                nivel = 'medio';

                let texto = document.getElementById("texTranslate").value;
                let resultado = convertidorTextoHacker(texto, nivel);
                textResult.value = resultado;
            });
            
            document.getElementById('buttonAvanced').addEventListener('click', function() {
                nivel = 'avanzado';

                let texto = document.getElementById("texTranslate").value;
                let resultado = convertidorTextoHacker(texto, nivel);
                textResult.value = resultado;
            });

     
            let elementPortada = document.querySelector('.portada');
            let elementHistory = document.querySelector('.history');
            let elementLeetTranslate = document.querySelector('.section-leetTranslate');



    for (let i = 0; i < 50; i++)
    {
        let starPortada = document.createElement('div');
        starPortada.className = 'starPortada';
        starPortada.style.top = Math.random() * window.innerHeight + 'px';
        starPortada.style.left = Math.random() * window.innerWidth + 'px';
        elementPortada.appendChild(starPortada);
    }

    for (let i = 0; i < 50; i++) 
    {
        let starHistory = document.createElement('div');
        starHistory.className = 'starHistory';
        starHistory.style.left = Math.random() * elementHistory.offsetWidth + 'px';
        elementHistory.appendChild(starHistory);
    }


   

  
