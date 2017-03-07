var rolls = process.argv.slice(2);
var results = "";

console.log ("Rolled", Number(rolls), "dice");
for (rolls; rolls >= 1; rolls --){
    results += (Math.floor(Math.random() * 6) + 1 + ", " );
}

console.log(results);


