let sample  = {
        "quiz": {
            "sport": {
                "q1": {
                    "question": "Which one is correct team name in NBA?",
                    "options": [
                        "New York Bulls",
                        "Los Angeles Kings",
                        "Golden State Warriros",
                        "Huston Rocket"
                    ],
                    "answer": "Huston Rocket"
                }
            },
            "maths": {
                "q1": {
                    "question": "5 + 7 = ?",
                    "options": [
                        "10",
                        "11",
                        "12",
                        "13"
                    ],
                    "answer": "12"
                },
                "q2": {
                    "question": "12 - 8 = ?",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "answer": "4"
                }
            }
        }
    }

console.log(sample);

console.log(sample.quiz.maths.q1.options[1]);
console.log(sample.quiz.sport.q1['options']);
sample.quiz.sport.q1['options'].forEach( e=> console.log(e));

let array = sample.quiz.sport.q1['options'];


for (let i=0; i<array.length; i++) {
    console.log(array[i]);
}

let tempArray = ["Jacek", "Adam"];
for (let i=0; i<array.length; i++) {
  tempArray.push(array[i]);
}
console.log(tempArray);

let string = "ckflajflaskfjakf";
console.log(string[1]);
// string.forEach(e => console.log(e));


for (i=0; i<string.length; i++) {
    console.log(string[i]);
}