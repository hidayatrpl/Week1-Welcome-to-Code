// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let output = ' ';
let output1 = ' ';
console.log("LOOPING PERTAMA")
for (let i=1;i<=10;i++){
    output += i + ' '; 
} 
console.log(output);
console.log("LOOPING KEDUA")
for (let o=10;o>=1;o--){
    output1 += o + ' ';
}
console.log(output1);