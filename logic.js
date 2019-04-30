// All specifics for cards creation
window.SetGame = {};
SetGame.colors = ["purple", "green", "red"];
SetGame.shapes = ["circle", "heart", "diamond"];
SetGame.fillings = ["", "striped", "outlined"];
SetGame.numbers = [1, 2, 3];
SetGame.cardsCollection = [];
SetGame.selectedCards = [];                 

class Card {
    constructor(name, color, shape, filling, number) {
        this.name = name;
        this.color = color;
        this.shape = shape;
        this.filling = filling;
        this.number = number;
    }
};

/* Will generate the 81 cards */
SetGame.generateAllCards = function () {
    var counter = 0;
    var name = "";
    for (var i = 0; i < SetGame.colors.length; i++) {
        for (var j = 0; j < SetGame.shapes.length; j++) {
            for (var k = 0; k < SetGame.fillings.length; k++) {
                for (var l = 0; l < SetGame.numbers.length; l++) {
                    name = `card${counter}`;
                    counter++;
                    SetGame.cardsCollection[name] = new Card(name, SetGame.colors[i], SetGame.shapes[j], SetGame.fillings[k], SetGame.numbers[l]);
                }
            }
        }
    }
}
SetGame.generateAllCards();

/* Will select 12 random cards from the generated cards to initiate the game */
SetGame.selectTwelveCards = function () {
    for (var i = 0; i < 12; i++) {
        do {
            var randomNb = Math.floor(Math.random() * 81)
        } while (SetGame.selectedCards.indexOf(SetGame.cardsCollection[`card${randomNb}`]) !== -1)
        SetGame.selectedCards.push(SetGame.cardsCollection[`card${randomNb}`]);
    }
}

/* Will add 3 more cards to the board if necessary */
SetGame.selectThreeMoreCards = function () {
    for (var i = 0; i < 3; i++) {
        do {
            var randomNb = Math.floor(Math.random() * 81)
        } while (SetGame.selectedCards.indexOf(SetGame.cardsCollection[`card${randomNb}`]) !== -1)
        SetGame.selectedCards.push(SetGame.cardsCollection[`card${randomNb}`]);
    }
}


SetGame.isMatch = function (category1, category2, category3) {
    if (category1 === category2 && category2 === category3 && category1 === category3 ||
        category1 !== category2 && category1 !== category3 && category2 !== category3) {
        return true;
    } else {
        return false;
    }
}
SetGame.isSet = function (card1, card2, card3) {
    var isShape = SetGame.isMatch(card1.shape, card2.shape, card3.shape);
    var isColor = SetGame.isMatch(card1.color, card2.color, card3.color);
    var isNumber = SetGame.isMatch(card1.number, card2.number, card3.number);
    var isFilling = SetGame.isMatch(card1.filling, card2.filling, card3.filling);
    if (isShape && isColor && isNumber && isFilling) {
        return true;
    } else {
        return false;
    }
}