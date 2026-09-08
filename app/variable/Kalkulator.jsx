export default function KalkulatorDiskonBelanjaHarian() {
  let price = 350_000;
  price -= 50_000; // Diskon pertama dengan potongan 50000
  price -= (price * 10) / 100; // Diskon potongan 10%

  return (
    <div>
      <p>Jadi Total Harganya : {price}</p>
    </div>
  );
}