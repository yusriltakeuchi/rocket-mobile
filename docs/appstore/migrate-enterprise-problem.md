---
sidebar_position: 5
---

# Migrate Enterprise Problem

Memahami masalah migrasi aplikasi enterprise ke App Store dan solusinya.

## Tentang Enterprise Plan

Enterprise Plan ditujukan bagi perusahaan yang ingin mendistribusikan aplikasi khusus untuk karyawan internal mereka tanpa melalui App Store. Dengan Enterprise Plan, perusahaan dapat membuat dan mendistribusikan aplikasi secara mandiri, misalnya dengan mengunggah file IPA ke server internal, sehingga karyawan cukup mengakses website perusahaan dan menginstal aplikasi lewat tombol install. Metode ini biasa dikenal sebagai **In House Distribution**.

## Masalah Migrasi

Jika aplikasi dibuat untuk satu perusahaan spesifik dengan login wajib di awal, Apple berpotensi menolak aplikasi tersebut dan meminta migrasi ke Enterprise Plan. Hal ini karena aplikasi dianggap hanya untuk penggunaan internal perusahaan, bukan untuk publik.

Namun, migrasi ke Enterprise Plan memiliki beberapa kendala:

1. Biaya tahunan yang tinggi  
2. Aplikasi tidak bisa dipublikasikan di App Store selamanya, harus didistribusikan via server sendiri  
3. Harus mengelola sendiri sertifikat dan provisioning profile  

## Solusi

Untuk menghindari masalah ini dan tetap bisa publish di App Store, lakukan hal berikut:

1. **Buat narasi aplikasi lebih general dan multi-perusahaan**  
   Sesuaikan deskripsi dan penamaan aplikasi agar terkesan bisa digunakan oleh banyak perusahaan. Contoh perubahan:  
   - Dari **Aplikasi Karyawan Perusahaan ABC** menjadi **Aplikasi Karyawan** atau **Aplikasi Manajemen Karyawan**  
   - Dari **Login Karyawan PT XYZ** menjadi **Login Pengguna Terdaftar**  
   - Dari **Akses Internal** menjadi **Akses Akun Pribadi**  
   - Dari **Khusus Cabang ABC** menjadi **Lokasi / Unit Operasional**  

2. **Sediakan pilihan perusahaan saat login**  
   Tambahkan fitur seperti **dropdown list** atau **autocomplete textfield** untuk memilih perusahaan yang bisa mengakses aplikasi.  
   Jika memang hanya ada satu perusahaan, buat daftar cabang / unit yang bisa dipilih, misalnya:  
   - Gandul  
   - Kertonegoro  
   - Kalimana  

3. **Gunakan kode perusahaan atau cabang sebagai bagian login**  
   Misalnya, tambahkan kode seperti `001`, atau `ABC002` sebagai identifikasi pengguna.

4. **Sediakan opsi pendaftaran / kontak admin**  
   Jelaskan kepada Apple bahwa pengguna dapat mendaftar dengan menghubungi admin aplikasi. Tambahkan tombol **Daftar** atau **Register** yang mengarahkan ke website atau kontak person untuk pendaftaran, meskipun pendaftaran sebenarnya dikendalikan manual oleh admin.

5. **Tegaskan bahwa aplikasi memiliki fitur Account Based**  
   Jelaskan bahwa login wajib karena aplikasi menyediakan konten yang dipersonalisasi berdasarkan akun, seperti pengelolaan data pribadi, notifikasi, dan preferensi unik per pengguna.