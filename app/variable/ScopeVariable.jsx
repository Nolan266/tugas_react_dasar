//   ## Soal 10: Studi Kasus Blok Scope Variabel di Keranjang Belanja (Let vs Var)

import React from "react";

export default function ScopeVariableLetdanVar() {
  // 1. Jalankan blok scope
  if (true) {
    var bisa_diakses = "Bisa diakses di luar blok (Function Scope)";
    let akses_scope = "Hanya hidup di dalam blok IF (Block Scope)";
  }

  // 2. Ambil nilai var (Pasti aman)
  const nilaiVar = bisa_diakses;

  // 3. Tes ambil nilai let (Gunakan try...catch agar tidak crash)
  let pesanErrorLet = "";
  try {
    // Baris ini sengaja menguji akses_scope di luar blok if
    pesanErrorLet = akses_scope;
  } catch (error) {
    // Error "akses_scope is not defined" akan ditangkap di sini
    pesanErrorLet = `ERROR: ${error.message}`;
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Studi Kasus: Let vs Var (Keranjang Belanja)</h2>

      <p>
        <strong>Hasil Variabel VAR:</strong> <br />
        <span style={{ color: "green" }}>{nilaiVar}</span>
      </p>

      <p>
        <strong>Hasil Variabel LET:</strong> <br />
        <span style={{ color: "red", fontWeight: "bold" }}>
          {pesanErrorLet}
        </span>
      </p>
    </div>
  );
}