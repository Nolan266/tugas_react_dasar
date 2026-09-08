//   ## Soal 5: Konversi Tipe Data Harga Produk dari API (Number & ParseInt).

export default function KonversiTipeDataHarga() {
  let api_price = "170000.50";
  let api_stocks = "20";

  const price = parseFloat(api_price);
  const stocks = Number(api_stocks);

  return (
    <div>
      <h3>Sebelum Di Parsing</h3>
      <p>
        values = {api_price}; tipe data = {typeof api_price}
      </p>
      <p>
        values = {api_stocks}; tipe data = {typeof api_stocks}
      </p>
      <h3>Setelah Melakukan Parsing</h3>
      <p>
        Harga Belanja : {price}; tipe data = {typeof price}
      </p>
      <p>
        Total Barang : {stocks}; tipe data = {typeof stocks}
      </p>
    </div>
  );
}