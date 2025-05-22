---
sidebar_position: 6
---

# White Label

Memahami konsep White Label pada aplikasi iOS.

## Tentang White Label

White Label adalah konsep pembuatan aplikasi yang sama dengan fitur identik, namun diberi brand berbeda. Contohnya, Anda membuat satu aplikasi yang digunakan untuk 3 brand berbeda, dengan perbedaan hanya pada warna, ikon, dan branding lain. Dengan White Label, Anda tidak perlu membuat aplikasi baru dari awal setiap kali ada client baru. Model bisnis ini umum digunakan saat menawarkan solusi aplikasi ke berbagai brand yang ingin terlihat seperti memiliki aplikasi sendiri.

## Masalah

Apple memiliki kebijakan ketat terkait aplikasi White Label. Jika tidak mengikuti aturan, aplikasi Anda berpotensi ditolak karena dianggap sebagai spam oleh tim review Apple.

> **Don’t create multiple Bundle IDs of the same app. If your app has different versions for specific locations, sports teams, universities, etc., consider submitting a single app and provide the variations using in-app purchase.**

Anda dapat mempelajari lebih lanjut aturan ini pada [App Review Guideline 4.3 SPAM](https://developer.apple.com/app-store/review/guidelines/#spam).

## Solusi

1. **Satu aplikasi, satu Bundle ID**  
   Buatlah satu aplikasi dengan satu Bundle ID yang di dalamnya menyediakan opsi bagi pengguna untuk memilih brand. Contohnya, gunakan dropdown list atau autocomplete textfield yang berisi daftar brand/perusahaan yang dapat login ke aplikasi.

2. **Gunakan akun Apple Developer berbeda untuk setiap brand**  
   Jika Anda tetap ingin membuat aplikasi terpisah untuk tiap brand, pastikan setiap aplikasi memiliki warna, ikon, nama aplikasi, dan akun Apple Developer yang berbeda. Misalnya, jika Anda membuat aplikasi untuk 3 brand, maka sebaiknya menggunakan 3 akun Apple Developer yang berbeda.

## Penerapan Kode

Membangun sistem White Label yang efektif tidak perlu dilakukan dengan membuat banyak repository project terpisah untuk setiap client, karena ini akan menyulitkan saat ada update fitur baru. Bayangkan jika Anda memiliki 30 client, maka setiap update harus dilakukan 30 kali. Berikut adalah dua praktik terbaik dalam mengelola White Label:

1. **Satu project dengan banyak flavor**  
   Dengan flavor, Anda bisa membuat banyak varian dari satu project. Misalnya, jika ada 3 client, buat 3 flavor bernama **client1**, **client2**, dan **client3**. Setiap flavor dapat disesuaikan warna, logo, dan ikon sesuai kebutuhan client.  
   Untuk referensi lebih lengkap, lihat dokumentasi [Build Variants](https://developer.android.com/studio/build/build-variants).

2. **Satu project dengan konfigurasi dinamis**  
   Menggunakan konfigurasi dinamis memungkinkan satu project dan satu flavor, tapi dapat mengubah warna, logo, dan ikon berdasarkan file konfigurasi yang berbeda. Misalnya, buat file konfigurasi **client1.json**, **client2.json**, dan **client3.json**.  
   Biasanya, Anda perlu membuat script khusus untuk mengelola konfigurasi ini sesuai kebutuhan spesifik setiap client.