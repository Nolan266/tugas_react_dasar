import { Text, View } from "react-native";

// Soal 1
// for (let i = 1; i <= 8; i++) {
//   console.log(`Tiket antrean nomor: ${i}`);
// }

// Soal 2
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Roket Meluncur");

// Soal 3
// let jumlah = 0;
// for (let deret = 5; deret > 0; deret--) {
//   jumlah += deret;
//   console.log(`Total poin saat ini: ${jumlah}`);
// }

// Soal 4
// for (let deret = 2; deret < 10; deret += 2) {
//   console.log(`Meja VIP nomor: ${deret}`);
// }

// Soal 5
// for (let i = 0; i <= 6; i++) {
//   if (i === 3) {
//     console.log("Peringatan: Suhu Mesin Stabil!");
//   } else {
//     console.log(i);
//   }
// }

// Soal 6
// var flag = 1;
// while (flag < 10) {
//   console.log(`Memanggil nasabah antrean ke-${flag}`);
//   flag++;
// }

// Soal 7
// var deret = 4;
// var jumlahTabungan = 0;
// while (deret > 0) {
//   jumlahTabungan += deret;
//   deret--;
//   console.log(`Tabungan saat ini: ${jumlahTabungan}`);
// }

// Soal 8
// var i = 0;
// while (i < 5) {
//   if (i === 3) {
//     console.log("Awas Halangan Dekat!");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// Soal 9
// var flag = 1;
// while (flag < 10) {
//   console.log('Iterasi ke-' + flag);
//   flag++; 
// }


// Soal 10
for (let nomorKupon = 1; nomorKupon <= 10; nomorKupon++) {
  if (nomorKupon % 2 === 0) {
    console.log(`Kupon nomor ${nomorKupon}: Kupon Genap`);
  } else {
    console.log(`Kupon nomor ${nomorKupon}: Kupon Ganjil`);
  }
}

export default function Loop() {
  return (
    <View>
    </View>
  );
}