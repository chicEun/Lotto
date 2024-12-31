class Lotto {
    constructor() {
        this.numbers = [];
    }
    generateRandomNumber(array, target) {

        for(let i =0; i < array.length; i++) {
            if(array[i] === target) {
                return;
            }
     }
         this.numbers.push(target); 
    }
    createNumbers() {
        while (true) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            if(this.numbers.length === 6) {
                this.numbers.sort((a,b) => a - b);
                break; 
            }
           this.generateRandomNumber(this.numbers, randomNum);
        }   
    }
    displayNumbers() {
        console.log(lotto.numbers);
    }
}

const lotto = new Lotto();
lotto.createNumbers();
lotto.displayNumbers();


