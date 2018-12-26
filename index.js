/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

var dog = {kind:"animal", who:"dog", legs:"4", hands:"0", name:"Rex" ,gender:"male" , say:"woof-woof!", friend:"Mary, Jon"};
var cat = {kind:"animal", who:"cat", legs:"4", hands:"0", name:"Lisa" ,gender:"female" , say:"meow!"};
var woman = {kind:"human", who:"woman",legs:"2", hands:"2", name:"Mary" ,gender:"female" , say:"Hello Jon!", friend:"Mary, Rex"};
var man = {kind:"human", who:"man",legs:"2", hands:"2", name:"Jon" ,gender:"male" , say:"Hello Mary!", friend:"Jon, Rex"};
var  inhabitantes = [dog, cat, woman, man];
inhabitantes.forEach(function(element){
    var person = "";
    person += element.kind + ";" + element.who + ";" + element.legs + ";"
    + element.hands + ";" + element.name + ";" + element.gender + ";" + element.say;
    if(element.friend !== undefined){
        person += "; " + element.friend;
    }
    console.log(person);
});



// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


