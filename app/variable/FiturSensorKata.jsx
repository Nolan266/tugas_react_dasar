// Soal 3: Fitur Sensor Komentar Kasar (Substring & IndexOf)

export default function SensorKataKasar() {
  // Filter pesan pertama
  let message_1 = "Website bodoh ini";
  let message_1_check_position_first = message_1.indexOf("bodoh");
  let message_1_filtered = message_1.substring(
    message_1_check_position_first,
    22,
  );

  // Filter pesan kedua
  let message_2 = "Website jelek gini kok banyak yang suka";
  let message_2_check_position_first = message_2.indexOf("jelek");
  let message_2_filtered = message_2.substring(
    message_2_check_position_first,
    23,
  );

  // Filter pesan ketiga
  let message_3 = "dasar website goblok";
  let message_3_check_position_first = message_3.indexOf("goblok");
  let message_3_filtered = message_3.substring(
    message_3_check_position_first,
    11,
  );

  return (
    <div>
      <h2>Sensor Kata Kasar</h2>
      <p>Ini adalah pesan raw pertama nya : {message_1}</p>
      <p>Index keberadaan kata kotor : {message_1_check_position_first}</p>
      <p>Ini adalah pesan hasil filternya : {message_1_filtered}</p>
      <br />
      <p>Ini adalah pesan raw pertama nya : {message_2}</p>
      <p>Index keberadaan kata kotor : {message_2_check_position_first}</p>
      <p>Ini adalah pesan hasil filternya : {message_2_filtered}</p>
      <br />
      <p>Ini adalah pesan raw pertama nya : {message_3}</p>
      <p>Index keberadaan kata kotor : {message_3_check_position_first}</p>
      <p>Ini adalah pesan hasil filternya : {message_3_filtered}</p>
    </div>
  );
}