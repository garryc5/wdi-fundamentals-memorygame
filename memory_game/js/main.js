var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"

    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"

    }
];
var cardsInPlay = [];
checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("match");
        var x = cardsInPlay.pop();
        x = cardsInPlay.pop();
    }
    else {
        alert("try again");
        location.reload();
    }
};
flipCard = function (cardId)
{
    cardsInPlay.push(cards[cardId].rank);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    } else {
        console.log("pick a 2nd card");
    }
};
createBoard = function () {
    for (var i = 0; i < cards.length; i++)
    {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', function () {
            this.setAttribute('src', cards[this.getAttribute('data-id')].cardImage);
            flipCard(this.getAttribute('data-id'));
          //^worked alittle ahead so thats why my codes alittle differnt
        })
        document.getElementById('game-board').appendChild(cardElement);
    }
};
createBoard();
//v just a thought
shuffle = function () {
    var shuffler = [5, 5, 5, 5];
    var i;
    for (i = 0; i < shuffler.length; i++) {
        shuffler[i] = Math.floor(Math.random() * 4);
        var trace;
        for (var x = 0; x < shuffler.length; x++) {
            trace = 0;
            if (shuffler[i] == shuffler[x]) {
                ++trace;
            }
            if (trace >= 2) {
                --i
            }
        }
    }
    return shuffler;
};