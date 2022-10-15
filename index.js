const shuffle = (items) => {
    let cards = items.slice(0),i = cards.length, randomNumber;
    while(--i)
    {
        randomNumber = Math.floor(i * Math.random());
        //Swap the 2 cards
        [cards[randomNumber],cards[i]] = [cards[i],cards[randomNumber]]
    }
    return cards;
}

const shuffleCards = () => {
    const list = document.getElementById("shuffle");
    let nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
}