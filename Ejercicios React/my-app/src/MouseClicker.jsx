export function MouseClicker(){

    function handleButtonClick(event){
        
        /*How can you prevent the name attribute of the button from being printed to the console when the image is clicked?
        Yo he utilizado un condicional que mire si el tag es una img y dependiendo de ello que imprima el src de la imagen o el nombre del boton
        */

        /*
        Solucion propuesta por el ejercicio, pero no nos enseña el name del boton
        console.log(event.target.src);
        event.stopPropagation();
        */
        
        if(event.target.tagName === 'IMG'){
            const imageSource = event.currentTarget.querySelector('img').src;
            console.log("Image Source: ", imageSource )
        } else{
            console.log(event.currentTarget.name)
        }

        /*Obtener el boton que tienne el manejador de eventos
        const buttonElement = event.currentTarget;
        //console.log(event.currentTarget.name)
        
        //Obtener la imagen dentro del boton
        const imageElement = buttonElement.querySelector('img'); 

        //verificar si el clic  provino directamente de la imagen
        if(event.target.tagName === 'IMG'){
            const imageSource = event.target.src;
            console.log("Image Source: ", imageSource)
        }else {
            //Verificar que la imagen existe antes de acceder a su atributo src
            const imageSource = imageElement ? imageElement.src : null ;
            console.log("Image Source: ", imageSource)
        }*/
    }

    return (
        <div>
            
            <button name="one" onClick={handleButtonClick}>
                <img src="path-to-your-image.jpg" width={24} height={24} />
                Click me!
            </button>
        </div>
    )
}