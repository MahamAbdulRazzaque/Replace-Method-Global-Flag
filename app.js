//Replace Method
// let str = "JavaScript";
// document.write(str.replace("J" , "G"));

// let text = "Lorem ###JavaScript ipsum dolor*** sit amet consectetur ###JavaScript adipisicing elit. Voluptatem ###JavaScript numquam odit atque? Possimus illum dolor similique rem amet quaerat ###JavaScript pariatur eum repudiandae libero, sed voluptatem ###JavaScript perspiciatis veritatis. Id, ducimus asperiores ###JavaScript!"
// // document.write(text.replaceAll("JavaScript" , "  "));
// console.log(text.replaceAll("JavaScript" , ""));


// let text = "In ###JavaScript 'Math.round ()' is a method that rounds a number to the nearest integer javascript. If thefractional part ###of the number is 0.5 ***orgreater javascript it rounds up to the next integer ifits less than 0.5, it*** rounds down.javascript";
// console.log(text);
// text = text.replaceAll("javascript" , "");
// let text1 = text.replaceAll("***" , "");
// console.log(text1);
// let text2 = text1.replaceAll("###" , "");
// console.log(text2);

// //Global Flag... global replace
// let text = "The cat sat on the mat. The cat is happy."; 
// let newText = text.replace(/cat/g , "dog"); 
// document.write(newText);

//Math.round
//document.write(Math.round(4.4));

//5 se ziyada like 6 tO round up. , 5 se kam like 4 tO round down.
// let billamount = 25.4;
// let roundedBill = Math.round(billamount);
// document.write("Rounded Bill Amount:   " , roundedBill , "  $  ");

//document.write(Math.round(-4.1));

// let originalPrice = 50.99; 
// let discountPercentage = 15; 
// let discountAmount = (originalPrice  *  discountPercentage) / 100; 
// let roundedDiscount = Math.round(discountAmount); 
// document.write("Rounded Discount:   ", roundedDiscount);


//Math.ceil.. 
// document.write(Math.ceil(4.0));


let UserName = prompt("Enter ypur Name..!");
let genEmail = UserName + UserName.length + "@gmail.com";
document.write("Here's Your Email:      " , genEmail);
