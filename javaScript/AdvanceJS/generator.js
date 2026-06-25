function* numberGenretor(){
    yield 1
    yield 2
    yield 3 

}

let gen = numberGenretor();

console.log(gen().next().value);



