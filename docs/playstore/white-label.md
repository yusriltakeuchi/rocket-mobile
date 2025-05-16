---
sidebar_position: 3
---

# White Label

Memahami tentang White Label pada aplikasi Android

## Tentang White Label

Konsep White Label ini sering dipakai untuk aplikasi yang sama tetapi berbeda brand. Misalnya kita membuat aplikasi untuk 3 brand yang berbeda tetapi dengan fitur yang sama, paling yang membedakan hanya warna dan icon. Kita bisa menggunakan White Label ini agar tidak membuat aplikasi baru dari awal lagi. Biasanya bisnis model ini dipakai saat kita menawarkan solusi aplikasi ke beberapa brand tetapi ingin seolah brand tersebut membuat aplikasi sendiri.

## Masalah

Play Store sendiri tidak terlalu melarang keras aplikasi White Label, tetapi kita harus memperhatikan beberapa hal agar aplikasi kita tidak ditolak oleh Tim Reviewer Google. Karena Google akan menganggap ini aplikasi Spam.
Tim Reviewer Google akan menolak aplikasi kita jika:
1. Aplikasi kita tidak mempunyai fitur yang berbeda dengan aplikasi lain yang sudah ada di Play Store.
2. Aplikasi mempunyai Nama, Warna, Logo, Icon, Deskripsi, dan Screenshot yang sama dengan aplikasi lain yang sudah ada di Play Store.

## Solusi

Ada beberapa solusi yang bisa kita lakukan agar aplikasi kita tidak ditolak oleh Tim Reviewer Google, tetapi tidak selamanya ini bisa diterima, selebihnya kita harus mencari tau lagi celah untuk bisa diterima oleh Tim Reviewer Google.
1. Gunanakan satu aplikasi dengan satu akun. Jadi meskipun aplikasinya serupa, Anda harus menguploadnya di akun Play Store Developer milik client itu sendiri.
2. Pastikan Nama, Warna, Logo, Icon, Deskripsi dan Screenshot berbeda dengan aplikasi yang sudah ada.

Untuk best practice White Label yang dianjurkan oleh Google bisa dilihat di [Best Practices for White Label Developers](https://support.google.com/googleplay/android-developer/answer/15884185?hl=en).

## Pengalaman Penulis

Saya pernah membuat aplikasi White Label untuk banyak sekolah, kalau ditotal bisa ratusan aplikasi dalam satu akun Play Store Developer yang sama. Tetapi semuanya lolos-lolos saja. Saya membuat perbedaan mulai dari Nama Aplikasi, Logo, Deskripsi. Pastikan Screenshot memunculkan halaman general yang tidak ada logo client tertentu. Dan juga ada beberapa pembeda fitur di dalamnya karena terdiri dari dua paket, Basic dan Ultimate. Tidak semua sekolah memilih paket yang sama, jadi ini bisa menjadi pembeda antara satu aplikasi dengan aplikasi lainnya.

Hanya saja publishing semacam ini akan mereportkan developer itu sendiri terutama dalam segi update. Jika kita ada perubahan maka kita harus melakukan push update ke ratusan aplikasi tersebut. Kalau dilakukan manual akan sangat melelahkan. Terakhir saya membuat sebuah tools dengan Python untuk meng-automasi upload ke Play Store. Tools ini bisa melakukan build dan upload ke ratusan aplikasi dalam waktu yang bersamaan.