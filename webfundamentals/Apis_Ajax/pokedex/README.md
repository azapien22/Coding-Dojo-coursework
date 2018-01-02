Assignment: What's that Pokemon? Build Your Own Pokedex.

When the page loads, have all 151 images of Pokemon on the left with an empty Pokedex on the right.

When user clicks on the picture of Bulbasaur, the pokedex on the right should display Bulbasaur's name,
image, types, height and weight.
How do you know which Pokemon was clicked? Maybe we can give each Pokemon a unique id that corresponds with their number in the URL?
<img id="2" src="http://pokeapi.co/media/img/2.png">
So that when the image is clicked, we get its id and add it to the end of this URL: "http://pokeapi.co/api/v1/pokemon/" then we make the ajax request with that URL that we constructed.