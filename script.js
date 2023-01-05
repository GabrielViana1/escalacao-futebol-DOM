function addPlayer(){
    const name = document.getElementById('name').value
    const position = document.getElementById('position').value
    const number = document.getElementById('number').value

    confirmar = confirm("CONFIRME AS INFORMAÇÕES:" + 
    "\nNome: " + name + 
    "\nPosição: " + position + 
    "\nNúmero: " + number) 

    if(confirmar){
        const playerList = document.getElementById('playerList')

        const h3 = document.createElement('h3')
        h3.innerText = 'JOGADOR'
        h3.id = 'jogador-' + number

        const ul = document.createElement('ul')
        ul.id = 'player-' + number
        const nameLi = document.createElement('li')
        nameLi.innerText = "Nome: " + name
        const positionLi = document.createElement('li')
        positionLi.innerText = "Posição: " + position
        const numberLi = document.createElement('li')
        numberLi.innerText = "Número: " + number

        document.getElementById('name').value = ''
        document.getElementById('position').value = ''
        document.getElementById('number').value = ''

        ul.append(h3, nameLi, positionLi, numberLi)
        playerList.append(ul)
    }else{
        alert("Tente novamente...")
    }
}


function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)
    const titleToRemove = document.getElementById('jogador-' + number)

    confirmation = confirm("CONFIRME AS INFORMÇÕES PARA REMOVER: \n" + playerToRemove.innerText)

    if(confirmation){
        playerToRemove.remove()
        titleToRemove.remove()
        document.getElementById('numberToRemove').value = '' 
    }else{
        alert("Tente novamente")
    }

}