//   ### Soal 8: Verifikasi Keamanan Login Ganda (Operator Kondisional AND &&)

export default function VerifikasiKemananLoginGanda() {
  const password = checkPassword("nisa_kiki");
  const email = checkEmailVerified("nisakiki@gmail.com");
  let message;

  if (password !== true && email !== true) {
    message = "Gagal masuk ke halaman login";
  } else {
    message = "Sukses masuk ke halaman login";
  }

  return (
    <div>
      <h3>Apakah Anda Dapat Masuk Kehalaman Login ?</h3>
      <p>{message}</p>
    </div>
  );
}

function checkPassword(password) {
  if (password !== "nisa_kiki") {
    return false;
  }
  return true;
}

function checkEmailVerified(email) {
  if (email !== "nisakiki@gmail.com") {
    return false;
  }
  return true;
}