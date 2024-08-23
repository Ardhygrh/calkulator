const inputPertama = document.getElementById('pertama');
const inputkedua = document.getElementById('kedua');
const hasil = document.getElementById('hasil');
const tambah = document.getElementById('tambah');
const kurang = document.getElementById('kurang');
const bagi = document.getElementById('bagi');

tambah.addEventListener('click', function() {
    console.log('nilai input ke 1' + inputPertama.value);
    const angkaPertama = parseInt(inputPertama.value)
    const angkakedua = parseInt(inputkedua.value)
    const hasilPerhitungan = angkaPertama + angkakedua;
    hasil.innerHTML = hasilPerhitungan;
    });

    
kurang.addEventListener('click', function() {
    console.log('nilai input ke 1' + inputPertama.value);
    const angkaPertama = parseInt(inputPertama.value)
    const angkakedua = parseInt(inputkedua.value)
    const hasilPerhitungan = angkaPertama - angkakedua;
    hasil.innerHTML = hasilPerhitungan;
    });

kali.addEventListener('click', function() {
    console.log('nilai input ke 1' + inputPertama.value);
    const angkaPertama = parseInt(inputPertama.value)
    const angkakedua = parseInt(inputkedua.value)
    const hasilPerhitungan = angkaPertama * angkakedua;
    hasil.innerHTML = hasilPerhitungan;
    });

    
bagi.addEventListener('click', function() {
    console.log('nilai input ke 1' + inputPertama.value);
    const angkaPertama = parseInt(inputPertama.value)
    const angkakedua = parseInt(inputkedua.value)
    const hasilPerhitungan = angkaPertama / angkakedua;
    hasil.innerHTML = hasilPerhitungan;
    });

    Reset.addEventListener('click', function() {
        inputPertama.value=""
        inputkedua.value=""
        hasil.innerHTML ="=";
        });
    

    
