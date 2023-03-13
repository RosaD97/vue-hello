'use strict';

// VueJs
const { createApp } = Vue

createApp({
    data(){
        return{
        // Messaggio per l'elemento h1
            message: 'Vue Hello',
            // Immagine 
            image: 'https://picsum.photos/id/237/200/300'
        }
    }

}).mount('.hello');