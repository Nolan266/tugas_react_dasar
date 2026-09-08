//   ## Soal 4: Pembuatan Kode Kupon Diskon Otomatis (String Concatenation & Uppercase)

export default function KodeKuponDiskonOtomatis() {
  const kode_pertama = "D1SK0N";
  const kode_kedua = "mrcl22";

  let kode_match = kode_pertama.concat(kode_kedua);
  let kupon = kode_match.toUpperCase();

  return (
    <div>
      <h2>{kupon}</h2>
    </div>
  );
}