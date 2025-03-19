// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listAmigos = []

function agregarAmigo()
{
    nombre = document.getElementById( "amigo" ).value
    if (nombre =="")
        {
         alert("Ingrese un nombre")
        }
     else
        {
            listAmigos.push( nombre )
            document.getElementById( "amigo" ).value = ""
            mostrarlista()
        }

}

function mostrarlista()
{
    let list = document.getElementById("listAmigos");
    list.innerHTML = " ";
    
    for (let i = 0; i < listAmigos.length; i++) 
    {
        let item = document.createElement("li");
        item.textContent = listAmigos[i];
        list.appendChild(item);
    }
}

function sortearAmigo() {
    if (listAmigos.length === 0) {
        document.getElementById("resultado").textContent = "La lista de amigos está vacía.";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listAmigos.length);
    const amigoSorteado = listAmigos[indiceAleatorio];

    document.getElementById("resultado").textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}


