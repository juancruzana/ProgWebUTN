console.log("CONSOLE LOG CORRIEDO")
console.log("CONSOLE LOG CORRIEDO")

interface IrespuestaApi{
    result: ICharacter[]
    }

interface ICharacter{
    name: string,
    phrases: string[]
}

const fetchCharacters = async () => {
    const res = await
    fetch("https://thesimpsonsapi.com/api/characters")    
        const data: IrespuestaApi = await res.json()
        console.log(data)
        // showCharacters(data.result)

}
fetchCharacters()        

// function showCharacters(characters){
//     characters.results.forEach((s) => {
//                 console.log(s)
//                 const innerDiv = document.createElement('div')
//                 innerDiv.innerText = "fsdf"
//                 if (innerDiv) {
//                     innerDiv.innerHTML = s;
//                 }
//             })
//     }