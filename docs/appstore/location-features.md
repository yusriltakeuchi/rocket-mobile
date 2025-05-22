---
sidebar_position: 12
---

# Location Features

Memahami tentang fitur lokasi pada aplikasi iOS dan tantangan yang mungkin dihadapi.

## Tentang Location Features

Fitur lokasi biasanya digunakan saat aplikasi memerlukan data lokasi pengguna melalui GPS, misalnya untuk:

- Mencari data lokasi terdekat  
- Mencatat lokasi pengguna saat melakukan suatu aksi dan menyimpannya di database  

Namun, ada beberapa kendala yang perlu diperhatikan terutama saat aplikasi dikirim ke Apple.

## Masalah

Tim Reviewer Apple **jarang** memberikan akses lokasi kepada aplikasi saat pengujian, karena alasan privasi lokasi kantor mereka atau kebijakan internal perusahaan (SOP) yang ketat terhadap akses lokasi.

Akibatnya, aplikasi Anda berpotensi ditolak jika:

- Akses lokasi ditolak oleh pengguna  
- Aplikasi tidak bisa berjalan atau crash tanpa akses lokasi  

## Solusi

1. **Buat fallback jika akses lokasi tidak diberikan**  
   Misalnya, tampilkan popup yang menjelaskan bahwa aplikasi membutuhkan akses lokasi agar dapat berjalan dengan baik, tetapi tetap berikan opsi untuk tidak memberikan akses.

2. **Sediakan alternatif data jika lokasi tidak tersedia**  
   Jika pengguna tetap menolak, berikan data yang bersifat umum atau acak agar fitur tetap bisa digunakan secara terbatas. Contoh:  
   - Jika aplikasi mencari cabang terdekat, tampilkan daftar cabang secara umum tanpa mengurutkan berdasarkan jarak.

3. **Untuk aplikasi yang sangat bergantung pada lokasi seperti aplikasi Presensi:**  
   - Buat fallback agar lokasi menjadi opsional.  
   - Jika GPS tidak diizinkan, kirimkan nilai latitude dan longitude sebagai `0`.  
   - Backend harus tetap menerima data tersebut tanpa error.  
   - Tambahkan parameter khusus pada payload (misal `platform: iOS`) untuk menandai kasus khusus ini.

### Dianjurkan ✅

✅ Kirim permintaan akses lokasi **hanya ketika dibutuhkan**, bukan saat aplikasi pertama kali dibuka.  
✅ Tampilkan penjelasan (rationale) sebelum meminta izin lokasi agar pengguna memahami manfaatnya.  
✅ Sediakan **fallback** dan **pengalaman pengguna yang tidak bergantung total pada lokasi**.  
✅ Tangani penolakan izin dengan baik agar aplikasi tidak crash.  
✅ Uji aplikasi dengan skenario **tanpa izin lokasi** untuk memastikan stabilitas.  
✅ Gunakan flag seperti `isLocationEnabled: false` atau `lat: 0, long: 0` untuk mendukung pengujian internal dan pengiriman ke App Store.

### Tidak Dianjurkan ❌

❌ Meminta akses lokasi saat aplikasi pertama kali dibuka tanpa konteks.  
❌ Membuat aplikasi **tidak bisa digunakan sama sekali** jika izin lokasi ditolak.  
❌ Mengirim error atau gagal login hanya karena data lokasi tidak tersedia.  
❌ Menampilkan pesan error teknis tanpa memberikan solusi kepada pengguna.  
❌ Mengandalkan data lokasi sebagai satu-satunya logika utama tanpa fallback.  
