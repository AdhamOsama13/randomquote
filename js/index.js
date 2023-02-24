var quotes = [

{
    'quote': `Be yourself everyone else is already taken.`,
    'writer': `― Oscar Wilde`
},
{
    'quote':`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    'writer':`― Albert Einstein`
},
{
    'quote':`“So many books, so little time.”`,
    'writer':`― Frank Zappa`
},
{
    'quote':`“A room without books is like a body without a soul.”`,
    'writer':`― Marcus Tullius Cicero`
},
{
    'quote':`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    'writer':`― Dr. Seuss`
},
{
    'quote':`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    'writer':`― J.K. Rowling, Harry Potter and the Goblet of Fire`
},
{
    'quote':`“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    'writer':`― Mahatma Gandhi`
},
{
    'quote':`“Never tell the truth to people who are not worthy of it.”`,
    'writer':`― Mark Twain`
},
{
    'quote':`“It's the possibility of having a dream come true that makes life interesting.”`,
    'writer':`― Paulo Coelho, The Alchemist`
},
{
    'quote':`“Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.”`,
    'writer':`― William Shakespeare, Twelfth Night`
},
];

function quoteGenerator() {
var randomNumber = Math.floor(Math.random()*quotes.length);
cartona = `<p >${quotes[randomNumber].quote}</p>
<h4 >${quotes[randomNumber].writer}</h4>`

document.getElementById("mainCon").innerHTML=cartona
}


