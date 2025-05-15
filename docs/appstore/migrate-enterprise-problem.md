---
sidebar_position: 9
---

# Migrate Enterprise Problem

Memahami tentang masalah migrasi aplikasi enterprise ke App Store

## Tentang Enterprise Plan

Enterprise Plan ini ditujukan untuk perusahaan yang ingin mendistribusikan aplikasi ke karyawan mereka sendiri. Dengan Enterprise Plan, perusahaan dapat membuat dan mendistribusikan aplikasi tanpa harus melalui App Store. Misalnya file IPA yang diupload ke server sendiri, sehingga karyawan cukup mengakses website perusahaan dan mengklik tombol install untuk menginstal aplikasi tersebut. Metode ini sudah pernah dibahas bernama **In House Distribution**.

## Masalah Migrasi

Jika aplikasi kita dibuat seolah untuk satu perusahaan, dan pengguna diwajibkan untuk login di awal aplikasi, maka Apple akan menolak aplikasi kita dan diharuskan untuk migrasi ke Enterprise. Karena dianggap aplikasinya spesifik untuk satu perusahaan saja, bukan untuk publik. Tapi kita tidak ingin melakukan hal ini karena:
1. Biaya tahunan yang mahal
2. Selamanya tidak bisa publish ke App Store, harus menggunakan server sendiri
3. Harus mengurus sertifikat dan provisioning profile sendiri

## Solusi

1. Buat narasi pada deskripsi aplikasi seolah-olah aplikasi ini untuk multiple company. Termasuk dari penamaan aplikasinya bisa dibuat lebih general. Misalnya jika aplikasi kita bernama **Aplikasi Karyawan Perusahaan ABC**, maka bisa diganti menjadi **Aplikasi Karyawan**, atau lainnya seperti:
    1. Aplikasi Karyawan PT ABC => Aplikasi Manajemen Karyawan
    2. Login Karyawan PT XYZ => Login Pengguna Terdaftar
    3. Akses Internal => Akses Akun Pribadi
    4. Khusus Cabang ABC => Lokasi/Unit Operasional
2. Buat agar pengguna bisa memilih perusahaan yang ingin login. Misalnya dengan menambahkan **dropdown list** atau **autocomplete textfield** yang berisi daftar nama perusahaan yang bisa login ke aplikasi kita.
Tapi bagaimana jika memang tidak ada perusahaan lain? Kita bisa menambahkan daftar cabang agar pengguna bisa memilih cabang yang ingin login, tetapi dengan nama tertentu. Misalnya **Gandul**, **Kertonegoro**, **Kalimana**, dan lain-lain.
3. Menggunakan kode perusahaan sebagai tambahan untuk login. Misalnya 001, atau ABC002
4. Beritahu Apple bahwa pengguna bisa mendaftar dengan menghubungi admin aplikasi, di sana kita berikan link atau contact person yang bisa dihubungi untuk mendaftar. Contohnya menambah tombol **Daftar** atau **Register** saat diklik diarahkan ke website yang menjelaskan cara mendaftar. Meskipun ketika menghubungi admin, mereka tidak mendapatkan apapun.
5. Jelaskan bahwa fitur di dalamnya bersifat **Account Based Features**. Login diperlukan karena aplikasi menyediakan konten yang dipersonalisasi berdasarkan akun pengguna, termasuk pengelolaan data pribadi, notifikasi, dan preferensi yang berbeda-beda untuk tiap akun