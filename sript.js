let sings = ["+","-","*","/"]
let question_field = document.querySelector(".question")
let ans_btn = document.querySelectorAll(".ans")

function randint(min,max){
    return Math.round(Math.random()*(max - min)+ min)
}

function getRandomSing(){
    return sings[randint(0,3)]
}

function shuffle(array){
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--
        [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]]

    }
    return array
}

class Question{
    constructor(){
        let a = randint(1,50)
        let b = randint(1,50)
        let sing = getRandomSing()
        this.question =`${a} ${sing} ${b}`
        if(sing == "+"){
            this.correct =  a + b
        }
        if(sing == "-"){
            this.correct =  a - b
        }
        if(sing == "*"){
            this.correct =  a * b
        }
        if(sing == "/"){
            this.correct =  a / b
            this.correct = Math.round(this.correct)
        }

        this.answers = [
            randint(this.correct - 25, this.correct - 1),
            randint(this.correct - 25, this.correct - 1),
            this.correct,
            randint(this.correct + 1, this.correct + 15),
            randint(this.correct + 1, this.correct + 15),
        ]
        shuffle(this.answers)
    }
    display(){
        question_field.innerHTML = this.question
        for (let i =0; i < this.answers.length; i +=1){
            ans_btn[i].innerHTML = this.answers[i]
        }
    }
}

let curent_question = new Question()
curent_question.display()