console.log('Hello World');
const container = document.querySelector('.quote-container');

const quotes = document.createElement('p');
const characterName = document.createElement('h4');
const animeName = document.createElement('p');
async function fetchText() {
    let response = await fetch('https://animechan.vercel.app/api/random');
            let data = await response.json();
            console.log(data);
                // show(data);
             const {anime} = data;
             console.log(anime);
             const name = data.anime ;
             console.log(name);  

            quotes.innerText = data.quote;
            characterName.innerText = data.character;
            animeName.innerText = data.anime;            
            container.appendChild(quotes);
            container.appendChild(characterName);
            container.appendChild(animeName)
            quotes.className ='quote';
        }



fetchText();        