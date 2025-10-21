
function tampilkanNama() {
    
    let namaDepan = document.getElementById('namaDepan').value;
    let namaBelakang = document.getElementById('namaBelakang').value;
    const namaLengkap = `${namaDepan} ${namaBelakang}`;
    console.log(`Nama Lengkap : ${namaLengkap}`);
}