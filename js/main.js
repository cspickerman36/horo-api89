document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const zodiacName = document.querySelector('input').value
    try{
        const response = await fetch(`localhost:8000/api/${zodiacName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.horoscope
    }catch(error){
        console.log(error)
    }
}