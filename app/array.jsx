import { Text, View } from "react-native";

// Soal 1
// let gudang = [101, 102, 103, 104, 105];
// console.log(`Barang terakhir (indeks ke-4): ${gudang[4]}`);

// Soal 2
// let nilaiUjian = [78, 90, 65, 88, 92, 70];
// nilaiUjian.sort((a, b) => a - b); 
// console.log(`Nilai terurut: ${nilaiUjian}`);

// Soal 3:
// let antreanVaksin = [];
// antreanVaksin.push("Andi");
// antreanVaksin.push("Budi");
// antreanVaksin.push("Siti");
// antreanVaksin.pop(); 
// console.log(`Antrean akhir: ${antreanVaksin}`);

// Soal 4
// let darurat = ["Kebakaran", "Kecelakaan"];
// darurat.unshift("Medis Darurat");
// darurat.shift(); 
// console.log(`Antrean darurat akhir: ${darurat}`);

// Soal 5
// let transaksi = [1000, 2500, 3200, 4100, 5000];
// let sampelData = transaksi.slice(1, 4);
// console.log(`Sampel data transaksi: ${sampelData}`);

// Soal 6
// let menu = ["Burger", "Pizza", "Hotdog", "Pasta"];
// menu.splice(2, 1, "Spaghetti", "Salad");
// console.log(`Menu setelah diperbarui: ${menu}`);

// Soal 7
// let judul = "belajar pemrograman perangkat bergerak smk";
// let kataArray = judul.split(" ");
// let slug = kataArray.join("-");
// console.log(`Slug URL: ${slug}`);

// Soal 8
// let skorSiswa = [98, 85, 90, 75, 80];
// let [juaraSatu, juaraDua, juaraTiga] = skorSiswa;
// console.log(`Juara 1: ${juaraSatu}, Juara 2: ${juaraDua}, Juara 3: ${juaraTiga}`);

//  Soal 9
// let semuaNilai = [95, 88, 90, 85, 78, 82];
// let [nilaiUtama, ...sisaNilai] = semuaNilai;
// console.log(`Nilai utama: ${nilaiUtama}`);
// console.log(`Sisa nilai: ${sisaNilai}`);

// Soal 10
let keranjangA = ["Sepatu", "Baju"];
let keranjangB = ["Tas", "Topi"];
let keranjangUtama = [...keranjangA, ...keranjangB, "Jaket"];

console.log(`Isi keranjang utama: ${keranjangUtama}`);

export default function Array() {
  return (
    <View>
    </View>
  );
}