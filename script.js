
function tampilkanNama() {
    
    let namaDepan = document.getElementById('namaDepan').value;
    let namaBelakang = document.getElementById('namaBelakang').value;
    const namaLengkap = `${namaDepan} ${namaBelakang}`;

let nilaiAngkaStr = document.getElementById('Nilai').value;
const nilai = parseFloat(nilaiAngkaStr);

let nilaiHuruf;

   if (nilai > 100 || nilai < 0) {
        nilaiHuruf = "Nilai di luar rentang (0-100)";
    } else if (nilai >= 85) {
        nilaiHuruf = 'A';
    } else if (nilai >= 80) { // Rentang 80 - 84.9
        nilaiHuruf = 'A-';
    } else if (nilai >= 75) { // Rentang 75 - 79.9
        nilaiHuruf = 'B+';
    } else if (nilai >= 70) { // Rentang 70 - 74.9
        nilaiHuruf = 'B';
    } else if (nilai >= 65) { // Rentang 65 - 69.9
        nilaiHuruf = 'B-';
    } else if (nilai >= 60) { // Rentang 60 - 64.9
        nilaiHuruf = 'C+';
    } else if (nilai >= 55) { // Rentang 55 - 59.9
        nilaiHuruf = 'C';
    } else if (nilai >= 40) { // Rentang 40 - 54.9
        nilaiHuruf = 'D';
    } else { // Rentang 0 - 39.9
        nilaiHuruf = 'E';
    }

    
    console.log("--- Hasil Proses ---");
    console.log(`Nama Lengkap : ${namaLengkap}`);
    console.log(`Nilai Angka  : ${nilai}`);
    console.log(`Nilai Huruf  : ${nilaiHuruf}`);
}