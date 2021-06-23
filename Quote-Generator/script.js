const quotes = [
    {
        quote: `Java is to JavaScript what car is to Carpet.`,
        author: `Chris Heilmann`
    },
    {
        quote: `Simplicity is the soul of efficiency.`,
        author: `Austin Freeman`

    },{
        quote: `It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known.`,
        author: `Charles Dickens`
    },
    {
        quote: `It matters not what someone is born, but what they grow to be.`,
        author: `J.K. Rowling`
    },
    {
        quote: `Whenever you feel like criticizing anyone … just remember that all the people in this world haven’t had the advantages that you’ve had.`,
        author: `F. Scott Fitzgerald`
    },
    {
        quote: `Be loud about the things that are important to you`,
        author: `Karen Wlarond`
    },
    {
        quote: `Get it down. Take chances. It may be bad, but it's the only way you can do anything really good`,
        author: `William Faulkner`
    },
    {
        quote: `You can always edit a bad page. You can’t edit a blank page`,
        author: `Jodi Pocult`
    },
    {
        quote: `If there's a book that you want to read, but it hasn't been written yet, then you must write it`,
        author: `Toni Morrison`
    },
    {
        quote: `The journey of a thousand miles begins with one step.`,
        author: `Lao Tzu`
    },
    {
        quote: `Life is what happens when you’re busy making other plans.`,
        author: `John Lennon`
    },
    {
        quote: `When the going gets tough, the tough get going.`,
        author: `Joe Kennedy`
    },
    {
        quote: `You only live once, but if you do it right, once is enough.`,
        author: `Mae West`
    },
    {
        quote: `Get busy living or get busy dying.`,
        author: `Stephen King`
    },
    {
        quote: `Time is money.`,
        author: `Benjamin Franklin`
    },
    {
        quote: `Strive not to be a success, but rather to be of value.`,
        author: `Albert Einstein`
    },
    {
        quote: `Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.`,
        author: `Mark Twain`
    },
    {
        quote: `Great minds discuss ideas; average minds discuss events; small minds discuss people.`,
        author: `Eleanor Roosevelt`
    },
    {
        quote: `Those who dare to fail miserably can achieve greatly.`,
        author: `John F. Kennedy`
    },
    {
        quote: `The opposite of love is not hate; it’s indifference.`,
        author: `Elie Wiesel`
    },
    {
        quote: `When life gives you lemons, make lemonade.`,
        author: `Elbert Hubbard`
    },
    {
        quote: `Life is like a box of chocolates. You never know what you’re going to get.`,
        author: `Forrest Gump`
    },
    {
        quote: `Life is ten percent what happens to you and ninety percent how you respond to it.`,
        author: `harles Swindoll`
    },
    {
        quote: `Dream big and dare to fail.`,
        author: `Norman Vaughan`
    },
    {
        quote: `That’s one small step for a man, one giant leap for mankind.`,
        author: `Neil Armstrong`
    },
    {
        quote: `In three words I can sum up everything I’ve learned about life: It goes on.`,
        author: `Robert Frost`
    },
    {
        quote: `If you judge people, you have no time to love them.`,
        author: `Mother Teresa`
    },
    {
        quote: `Don’t be afraid to give up the good to go for the great.`,
        author: `John D. Rockefeller`
    },
    {
        quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
        author: `Nelson Mandela`
    },
    {
        quote: `When you reach the end of your rope, tie a knot in it and hang on.`,
        author: `Franklin D. Roosevelt`
    },
]
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})