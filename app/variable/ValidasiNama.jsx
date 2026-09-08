// Soal 2: Validasi Nama Pengguna (Username Trim & Length)

export default function ValidasiNamaPenggunaBaru() {
  const rawUsername = " marcella_admin";
  const countUsernameBeforeFiltered = rawUsername.length;
  const usernameFiltered = rawUsername.trim();
  const countUsernameAfrerFiltered = usernameFiltered.length;

  return (
    <div>
      <h2>Raw Username / Username Mentah</h2>
      <p>
        \[{rawUsername}\] dengan jumlah huruf {countUsernameBeforeFiltered}
      </p>
      <h2>Username Filtered / Username Setelah Terfilter</h2>
      <p>
        \[{usernameFiltered}\] dengan jumlah huruf {countUsernameAfrerFiltered}
      </p>
    </div>
  );
}