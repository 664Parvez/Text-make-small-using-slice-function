let pera = document.getElementById('pera')

let cre = document.createElement ('span').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime reiciendis quo at, velit reprehenderit excepturi quia cumque unde nam facilis esse vel aspernatur et aut officiis voluptas consequatur odio, ducimus, dolorum beatae vero iure tempore nostrum. Beatae, corrupti saepe! Dolorem architecto culpa aperiam earum laborum saepe iusto, laboriosam atque.'

let chi = cre.slice(0, 100).concat (' ...')

if ( document.getElementById('click').addEventListener ( 'click', (e) => {
    pera.innerHTML = cre
    e.preventDefault()
} ) ) {

}
else {
    pera.innerHTML = chi
}




