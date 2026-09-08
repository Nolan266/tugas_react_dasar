//   ## Soal 9: Pengecekan Syarat Beasiswa Sekolah (Operator Kondisional OR ||)

export default function PengecekkanSyaratBeasiswaSekolah() {
  const nilai_siswa = 90 >= 85;
  const nilai_akademik_siswa = true;
  let message;

  if (nilai_siswa === true || nilai_akademik_siswa === true) {
    message = "Anda dinyatakan mendapatkan beasiswa";
  }

  return (
    <div>
      <p>Pesan Beasiswa Kemendikbud : {message}</p>
    </div>
  );
}