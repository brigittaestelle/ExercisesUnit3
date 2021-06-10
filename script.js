let actualTemp = 68;
let desiredTemp = 50;
if (actualTemp > desiredTemp) {
  console.log("Run A/c");
} else if (actualTemp < desiredTemp) {
  console.log("Run heat");
} else {
  console.log("Stand By");
}

let name1 = "Timothy";
let name2 = "Caravana";
let name3 = "Dane";
if (name1.length > name2.length && name1.length > name3.length) {
  console.log(name1);
} else if (name2.length > name1.length && name2.length > name3.length) {
  console.log(name2);
} else if (name3.length > name1.length && name3.length > name2.length) {
  console.log(name3);
}
