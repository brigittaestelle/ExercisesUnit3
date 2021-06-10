let actualTemp = 68;
let desiredTemp = 50;
if (actualTemp > desiredTemp) {
  console.log("Run A/c");
} else if (actualTemp < desiredTemp) {
  console.log("Run heat");
} else {
  console.log("Stand By");
}

let name1 = "Maria";
let name2 = "Jason";
let name3 = "Dania";
if (name1.length > name2.length && name1.length > name3.length) {
  console.log(name1 + "has the longest name");
} else if (name2.length > name1.length && name2.length > name3.length) {
  console.log(name2 + "has the longest name");
} else if (name3.length > name1.length && name3.length > name2.length) {
  console.log(name3 + "has the longest name");
} else if (name1.length === name2.length && name1.length > name3.length) {
  console.log(name1 + "and" + name2 + "are tied for the longest name");
} else if (name2.length === name3.length && name2.length > name1.length) {
  console.log(name2 + "and" + name3 + "are tied for the longest name");
} else if (name3.length === name1.length && name3.length > name2.length) {
  console.log(name3 + "and" + name1 + "are tied for the longest name");
} else if (name3.length === name1.length && name3.length === name2.length) {
  console.log("All three names" + name1, name2, name3, "are the same length");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

var text = "";
var i = 0;
while (i < 10) {
  text += i;
  i++;
}

do {
  text += "The number is " + i;
  i++;
} while ((i, 10));
