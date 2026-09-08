// Soal 1: Sistem Registrasi Akun Pengguna Baru (Variabel & String)

export default function SistemRegistrasiAkun() {
  const firstName = "Annisa";
  const lastName = "Nurfianti";
  let isAktif = true;
  let message;

  if (
    firstName === "Annisa" &&
    lastName === "Nurfianti" &&
    isAktif === true
  ) {
    console.log(`Akun atas nama ${firstName} ${lastName} masih aktif`);
    message = "Akun anda masih aktif";
  } else {
    message = "Akun anda tidak aktif";
  }

  return (
    <div>
      <h1>Sistem Registrasi Akun</h1>
      <h2>{message}</h2>
    </div>
  );
}