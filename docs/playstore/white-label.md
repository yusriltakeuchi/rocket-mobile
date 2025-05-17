---
sidebar_position: 2
---

# White Label

Memahami konsep White Label pada aplikasi Android

## Tentang White Label

White Label adalah konsep membuat satu aplikasi dengan fitur yang sama untuk beberapa brand berbeda. Misalnya, kita membuat aplikasi untuk 3 brand berbeda, tapi fitur utamanya sama; yang membedakan hanya warna, ikon, dan branding. Dengan White Label, kita tidak perlu membuat aplikasi baru dari awal untuk setiap brand. Model bisnis ini umum dipakai ketika menawarkan solusi aplikasi ke beberapa brand, sehingga tiap brand terlihat seperti memiliki aplikasi sendiri.

## Masalah

Google Play Store tidak melarang penggunaan White Label secara tegas, namun ada beberapa hal yang harus diperhatikan agar aplikasi tidak ditolak oleh Tim Reviewer Google. Google bisa menganggap aplikasi White Label sebagai spam jika:

1. Aplikasi tidak memiliki fitur yang membedakan dari aplikasi lain di Play Store.
2. Aplikasi memiliki nama, warna, logo, ikon, deskripsi, dan screenshot yang sama persis dengan aplikasi lain di Play Store.

## Solusi

Beberapa langkah yang bisa dilakukan agar aplikasi White Label diterima oleh Tim Reviewer Google, meskipun tidak selalu 100% berhasil, antara lain:

1. Gunakan akun Play Store Developer yang berbeda untuk setiap aplikasi. Meskipun aplikasinya mirip, upload aplikasi di akun milik masing-masing client.
2. Pastikan nama, warna, logo, ikon, deskripsi, dan screenshot berbeda untuk setiap aplikasi.

Untuk panduan terbaik terkait White Label, Anda bisa melihat langsung di [Best Practices for White Label Developers](https://support.google.com/googleplay/android-developer/answer/15884185?hl=en).

## Pengalaman Penulis

Saya pernah membuat aplikasi White Label untuk banyak sekolah, totalnya bisa mencapai ratusan aplikasi dalam satu akun Play Store Developer yang sama. Semua aplikasi berhasil lolos review. Perbedaan yang saya buat antara lain:

- Nama aplikasi yang berbeda  
- Warna, logo, dan deskripsi yang berbeda  
- Screenshot menampilkan halaman umum tanpa logo client tertentu  
- Perbedaan fitur karena ada dua paket: Basic dan Ultimate. Tidak semua sekolah memilih paket yang sama, sehingga fitur juga menjadi pembeda.

Namun, mengelola banyak aplikasi dalam satu akun sangat merepotkan terutama saat update. Setiap perubahan harus di-push ke ratusan aplikasi tersebut, dan jika dilakukan manual sangat melelahkan. Oleh karena itu, saya membuat sebuah tools menggunakan Python untuk mengotomasi proses build dan upload aplikasi secara bersamaan ke Play Store.

## Penerapan Kode White Label

Untuk sistem White Label, sebaiknya tidak membuat banyak repository project terpisah untuk tiap client, karena hal ini akan menyulitkan saat pengembangan fitur baru. Bayangkan jika ada 30 client, setiap perubahan harus di-copy paste ke 30 project berbeda.

Best practice White Label ada dua cara utama:

1. **Menggunakan satu project dengan banyak flavor**  
2. **Menggunakan satu project dengan konfigurasi dinamis**

### Menggunakan satu project dengan banyak flavor

Dengan menggunakan flavor, kita bisa membuat banyak varian dari satu project. Misalnya, punya 3 client, kita buat 3 flavor dengan nama **client1**, **client2**, dan **client3**. Dengan cara ini, kita bisa mengubah warna, logo, dan ikon sesuai client. Untuk penjelasan lebih lengkap bisa lihat di [Build Variants](https://developer.android.com/studio/build/build-variants).

### Menggunakan satu project dengan konfigurasi dinamis

Dengan konfigurasi dinamis, kita membuat satu project dengan satu flavor, tapi bisa mengubah warna, logo, dan ikon berdasarkan file konfigurasi untuk tiap client. Misalnya, punya 3 client, kita buat 3 file konfigurasi: **client1.json**, **client2.json**, dan **client3.json**. Biasanya, tahap ini memerlukan pembuatan script khusus karena kebutuhan tiap project berbeda-beda.