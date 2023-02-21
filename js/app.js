const { createApp } = Vue

createApp({
    data() {
        return {
            slideImages: [
            {
                image: './img/img-1.jpeg',
                title: "Guard ò mar quant'è bell",
                text: 'Mare del folfo di Napoli in tempresta',
            },    
            {
                image: './img/img-2.jpeg',
                title: "Pinocchio, atto primo.",
                text: 'Tavole del patio da spazzare',
            },
            {
                image: './img/img-3.jpeg',
                title: "AUGH!.",
                text: 'Scaccia sogni di età pre coloniale',
            },
            {
                image: './img/img-4.jpeg',
                title: "Mbare! L'etna si sta svegliando!",
                text: 'Altopiano vulcanico siculo in prospettiva',
            },
            {
                image: './img/img-5.jpg',
                title: "Chi me l'ha fatto fare",
                text: 'Cercando di studiare js',
            },
            {
                image: './img/img-6.jpg',
                title: "3,2,1, Buon anno!",
                text: 'Festeggiamenti di capodanno in Wyoming',
            },
            ],

            currentIndex: 0,
      
        }
    },

  methods:{

    rightAutoPlay (){

        if(this.currentIndex < this.slideImages.length -1 ){

            this.currentIndex += 1

        }else{
            this.currentIndex = 0
        }
    },

    leftAutoPlay (){

        if(this.currentIndex > 0 ){

            this.currentIndex -= 1

        }else{
            this.currentIndex = this.slideImages.length -1
        }
    },

  }
}).mount('#app')