let dogstring = "Hello Mat, my name is Dogcat and I have green eyes!";
let dognames = ["Mat", "HAS","GrEEn", "dogcat"];

function findme(dogstring, dognames) {
    let found = false;
}     for (let i = 0; i < dognames.length; i++) {
        if (dogstring.toLowerCase().includes(dognames[i].toLowerCase())) {
            console.log("Matched " + dognames[i]);
            found = true;
        }
    }
      if (!found) {
        console.log("No Matches");
    }



findme(dogstring, dognames)



function replaceEvens(arr) {
    for (let index=0; index<arr.length; index++) {
        if(index%2==0) {
            arr.splice(index,1,"even index");
        }
    }
    console.log(arr);
}
const arr=["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
replaceEvens(arr);
