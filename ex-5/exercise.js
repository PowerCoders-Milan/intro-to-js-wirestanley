// Example
window.alert("Hello World!");
var phrase = prompt("can you write a sentence or a word please")
alert(phrase+ " is " + phrase.length + " number of character ")

// extra....................................................
alert("can we have 2 different word or phrase one after the other so we can compare")
var phraseone = prompt("give your first phrase")
var phrasetwo = prompt("give your second phrase ")

if(phraseone.length > phrasetwo){
    alert(phraseone + "phrase was the longest with " + phraseone.length + "number of charcters.")
}
else if(phrasetwo.length > phraseone.length){
    alert(phrasetwo + " phrase was the longest with " +phrasetwo.length + " number of characters. ")
}
else{
    alert(" both phrase have equal number of character")
}