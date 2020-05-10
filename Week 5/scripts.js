/*TERNARY OPERATOR THAT CHECKS IF TODAY IS TUESDAY 
--------------------------------------------------*/
function tus(){
let today = new Date().getDay();
output = (today === 2) ? "Tuesday" : "No, today is not tuesday";
show(output);
}
tus();


/*FUNCTION THAT CHECKS EQUALITY OF 3 VALUES 
--------------------------------------------------*/
function equality(a, b, c){
  if (a === b === c ){
    txt = "They all are equal"
  }
  if (a === b || b === c || a === c){
    txt = "Two of them are equal"
  }
  else {
    txt = "They all are not equal"
  }
  show(txt);
}
equality(5, 5, 4);

/*FUNCTION THAT CHECKS IF AN ARRAY IS 
STRICTLY INCREASING OR DECREASING
--------------------------------------------------*/

function arr(array) {
	for( i=1; i < array.length; i++){
		 if(array[i] < array[i-1] && array[i-1] < array[i-2]){
			msg= "decreasing";
		 }else if(array[i] > array[i-1] && array[i-1] > array[i-2]){
			msg=  "increasing";
		} 
		 else {
			msg= "neither";
    }
  }
  show(msg)

}
arr([1, 8, 0]);


/*CREATE AN ARRAY CONTAINING 6 PERSONS GIRLS AND BOYS.
--------------------------------------------------*/
 let persons = [
   {
   name : "kidi",
   gender : "female"
  },
   {
   name : "juli",
   gender : "female"
  },
   {
   name : "abuta",
   gender : "male"
  },
   {
    name : "jani",
    gender : "male"
  },
   {
   name : "elshu",
   gender : "male"
  },
   {
   name : "kirubel",
   gender : "male"
  }
 ];

/*FUNCTION THAT CHECKS THE NUMBER OF BOYS AND GIRLS 
--------------------------------------------------*/

let female = 0;
let male = 0;
persons.forEach(function(element){
  if( element.gender === "male"){
    male++;

    }
  else {
    female++;
  }
});

show("There are " + female + " female and " + male + " male" );



/* HTML DOM
---------------------------------------- */
const h1 = document.querySelector('h1');
console.log(h1.innerHTML);


h1.innerHTML = "patient is every thing!";
console.log(h1.innerHTML);


h1.setAttribute('id', 'main-title');
h1.setAttribute('class', 'title');




