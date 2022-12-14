/*let links = document.querySelectorAll('a');

//Works!
let linkCount = links.length;
let firstLink = links[0];

//Doesn't work!
links.forEach(function(link){
	//do something with link
});

let links = document.querySelectorAll('a');
let arrayOfLinks = Array.from(links);*/

//Laziness is your friend...
let q = document.querySelector.bind(document)
let qa = document.querySelectorAll.bind(document);


q('header');
qa('section');
q('section.current');
q('section.current').nextElementSibling;
q('section.current').previousElementSibling.children[0];
q('h2.highlight').parentElement.parentElement;

let foo = Array.from(qa('section h2'))
    .map(function(headline){
        return headline.parentElement;
    });

    console.log(selectedItem)
