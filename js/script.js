let ingredienti = [
    'Pasta',
    'Uova',
    'Guanciale',
    'Pepe',
    'Pecorino',
    'Latte',
    'Burro',
    'Aglio',
    'Cipolla'
]

let ul=document.getElementById('lista')

let i=0;
while (i<ingredienti.length){
    ul.innerHTML += `<li>${ingredienti[i]}</li>`
    i++;
}