console.log('Client-side JavaScript file is loaded.');

// Ambil elemen dari HTML
const weatherForm = document.querySelector('#form-cuaca'); // ← PENTING ganti ini
const search = document.querySelector('#lokasi');  
const pesan1 = document.querySelector('#pesan-1');
const pesan2 = document.querySelector('#pesan-2');

// Pastikan form ditemukan
if (weatherForm) {
    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Supaya gak reload halaman

        const lokasi = search.value;

        pesan1.textContent = 'Loading...';
        pesan2.textContent = '';

        // Ambil data dari server (endpoint /infoCuaca)
        fetch(`/infoCuaca?address=${lokasi}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    pesan1.textContent = data.error;
                } else {
                    pesan1.textContent = data.lokasi;
                    pesan2.textContent = `Info Cuaca: ${data.prediksiCuaca.deskripsi}. Suhu: ${data.prediksiCuaca.suhu}°C. Terasa: ${data.prediksiCuaca.terasa}°C. Angin: ${data.prediksiCuaca.angin} km/h. Kelembapan: ${data.prediksiCuaca.kelembapan}%`;
                }
            })
            .catch((error) => {
                pesan1.textContent = 'Terjadi kesalahan saat mengambil data cuaca.';
                console.error(error);
            });
    });
} else {
    console.error('Form tidak ditemukan di halaman.');
}
