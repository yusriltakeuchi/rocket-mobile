---
sidebar_position: 12
---

# White Label

Memahami tentang White Label pada aplikasi iOS

## Tentang White Label

Konsep White Label ini sering dipakai untuk aplikasi yang sama tetapi berbeda brand. Misalnya kita membuat aplikasi untuk 3 brand yang berbeda tetapi dengan fitur yang sama, paling yang membedakan hanya warna dan icon. Kita bisa menggunakan White Label ini agar tidak membuat aplikasi baru dari awal lagi. Biasanya bisnis model ini dipakai saat kita menawarkan solusi aplikasi ke beberapa brand tetapi ingin seolah brand tersebut membuat aplikasi sendiri.

## Masalah

Jika kita mengirim aplikasi White Label ke App Store, ada kemungkinkan akan ditolak jika tidak mengikuti aturan atau cara main yang benar. Karena Apple akan menganggap ini aplikasi Spam. 

<blockquote>
Don’t create multiple Bundle IDs of the same app. If your app has different versions for specific locations, sports teams, universities, etc., consider submitting a single app and provide the variations using in-app purchase.
</blockquote>

Kalian bisa melihat lebih detail mengenai larangannya pada [App Review Guideline 4.3 SPAM](https://developer.apple.com/app-store/review/guidelines/#spam).

## Solusi

1. Buatlah satu aplikasi dengan satu Bundle ID, tetapi di dalamnya terdapat beberapa brand yang bisa dipilih oleh pengguna. Misalnya dengan menambahkan **dropdown list** atau **autocomplete textfield** yang berisi daftar nama perusahaan yang bisa login ke aplikasi kita.

2. Aplikasi White Label harus mempunyai akun Apple Developer yang berbeda. Jadi meskipun aplikasinya serupa, Anda harus membedakan dari segi warna, icon, nama aplikasi, dan Akun Apple Developer yang berbeda. Misalnya jika kita membuat aplikasi untuk 3 brand yang berbeda, kita bisa membuat 3 akun Apple Developer yang berbeda juga.