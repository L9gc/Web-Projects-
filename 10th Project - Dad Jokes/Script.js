const jokEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
//Using Async/Await method
async function generateJoke() {
        const config = {
            headers: {
                Accept: 'application/json'
            },
        }
    
        const res = await fetch('https://icanhazdadjoke.com/', 
         config)
         
         const data = await res.json()

         jokEL.innerHTML = data.joke
    }
