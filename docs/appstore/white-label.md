---
sidebar_position: 4
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

## Penerapan Code

Untuk menerapkan sistem white label kamu tidak perlu membuat banyak repository project untuk tiap client, karena nanti akan menyusahkan dikemudian hari. Bayangkan kamu punya 30 client, dan saat kamu menambah fitur baru code tersebut harus kamu copy paste ke 30 project yang berbeda. Best Practicenya white label ada 2 cara:
1. Menggunakan satu project dengan banyak flavor
2. Menggunakan satu project dengan config dinamis

### Menggunakan satu project dengan banyak flavor

Dengan menggunakan flavor kita bisa membuat banyak varian dari satu project. Misalnya kita punya 3 client, kita bisa membuat 3 flavor dengan nama **client1**, **client2**, dan **client3**. Dengan ini kita bisa mengubah warna, logo, dan icon sesuai dengan client yang kita inginkan. Untuk lebih jelasnya bisa dilihat di [Build Variants](https://developer.android.com/studio/build/build-variants).

### Menggunakan satu project dengan config dinamis

Dengan menggunakan config dinamis kita bisa membuat satu project dengan satu flavor tetapi kita bisa mengubah warna, logo, dan icon sesuai dengan client yang kita inginkan berdasarkan config. Misalnya kita punya 3 client, kita bisa membuat 3 file config dengan nama **client1.json**, **client2.json**, dan **client3.json**. Pada tahap ini biasanya kita perlu membuat script sendiri karena pasti akan berbeda-beda kebutuhannya