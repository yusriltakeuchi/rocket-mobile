---
sidebar_position: 2
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
1. Gunakan satu aplikasi dengan satu akun. Jadi meskipun aplikasinya serupa, Anda harus menguploadnya di akun Play Store Developer milik client itu sendiri.
2. Pastikan Nama, Warna, Logo, Icon, Deskripsi dan Screenshot berbeda dengan aplikasi yang sudah ada.

Untuk best practice White Label yang dianjurkan oleh Google bisa dilihat di [Best Practices for White Label Developers](https://support.google.com/googleplay/android-developer/answer/15884185?hl=en).

## Pengalaman Penulis

Saya pernah membuat aplikasi White Label untuk banyak sekolah, kalau ditotal bisa ratusan aplikasi dalam satu akun Play Store Developer yang sama. Tetapi semuanya lolos-lolos saja. Saya membuat perbedaan mulai dari Nama Aplikasi, Warna, Logo, Deskripsi. Pastikan Screenshot memunculkan halaman general yang tidak ada logo client tertentu. Dan juga ada beberapa pembeda fitur di dalamnya karena terdiri dari dua paket, Basic dan Ultimate. Tidak semua sekolah memilih paket yang sama, jadi ini bisa menjadi pembeda antara satu aplikasi dengan aplikasi lainnya.

Hanya saja publishing semacam ini akan mereportkan developer itu sendiri terutama dalam segi update. Jika kita ada perubahan maka kita harus melakukan push update ke ratusan aplikasi tersebut. Kalau dilakukan manual akan sangat melelahkan. Terakhir saya membuat sebuah tools dengan Python untuk meng-automasi upload ke Play Store. Tools ini bisa melakukan build dan upload ke ratusan aplikasi dalam waktu yang bersamaan.

## Penerapan Code

Untuk menerapkan sistem white label kamu tidak perlu membuat banyak repository project untuk tiap client, karena nanti akan menyusahkan dikemudian hari. Bayangkan kamu punya 30 client, dan saat kamu menambah fitur baru code tersebut harus kamu copy paste ke 30 project yang berbeda. Best Practicenya white label ada 2 cara:
1. Menggunakan satu project dengan banyak flavor
2. Menggunakan satu project dengan config dinamis

### Menggunakan satu project dengan banyak flavor

Dengan menggunakan flavor kita bisa membuat banyak varian dari satu project. Misalnya kita punya 3 client, kita bisa membuat 3 flavor dengan nama **client1**, **client2**, dan **client3**. Dengan ini kita bisa mengubah warna, logo, dan icon sesuai dengan client yang kita inginkan. Untuk lebih jelasnya bisa dilihat di [Build Variants](https://developer.android.com/studio/build/build-variants).

### Menggunakan satu project dengan config dinamis

Dengan menggunakan config dinamis kita bisa membuat satu project dengan satu flavor tetapi kita bisa mengubah warna, logo, dan icon sesuai dengan client yang kita inginkan berdasarkan config. Misalnya kita punya 3 client, kita bisa membuat 3 file config dengan nama **client1.json**, **client2.json**, dan **client3.json**. Pada tahap ini biasanya kita perlu membuat script sendiri karena pasti akan berbeda-beda kebutuhannya