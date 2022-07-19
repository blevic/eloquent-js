let size = 8;
let row = "";

for (let i = 0; i < size; i++) {
    row = "";
    for (let j = 0; j < size; j++) {
        row += (i+j)%2 ? "#" : " ";
    }
    console.log(row)
}
