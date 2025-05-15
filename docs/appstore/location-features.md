---
sidebar_position: 10
---

# Location Features

Memahami tentang masalah lokasi pada aplikasi iOS

## Tentang Location Features

Fitur ini biasanya dipakai jika aplikasi memerlukan lokasi pengguna melalui GPS untuk kebutuhan tertentu. Misalnya aplikasi ingin mencari data lokasi terdekat, atau mendata lokasi pengguna saat melakukan aksi sehingga terekam di database dimana orang tersebut melakukannya. Tetapi ada sedikit masalah jika kita tidak memperhatikan fitur ini saat dikirim ke Apple.

## Permasalahan

Biasanya Tim Reviewer Apple **jarang** memberikan akses lokasi kepada aplikasi kita. Karena mereka menjaga privasi lokasi kantor tempat mereka bekerja atau mungkin juga memang SOP perusahaan untuk tidak memberikan akses lokasi.
Jadi aplikasi kita akan ditolak jika saat pengguna menolak memberikan akses lokasi dan aplikasi kita tidak berjalan.

## Solusi

Buatlah sebuah **fallback** jika lokasi tidak diberikan. Misalnya dengan menampilkan popup yang menjelaskan bahwa aplikasi ini memerlukan akses lokasi untuk bisa berjalan dengan baik, tapi ada opsi pilihan untuk tidak memberikan akses lokasi. Jika memang masih tidak mau memberikan akses lokasi, kita bisa memberikan data acak atau general terkait fitur yang mau ditampilkan.

Misalnya jika aplikasi kita mencari cabang terdekat, kita bisa menampilkan cabang secara umum tanpa lokasi pengguna dan tidak perlu mengurutkan berdasarkan jarak terdekat.


Jika aplikasi tersebut merupakan aplikasi Presensi yang sangat memerlukan lokasi, kita buat fallback agar lokasi ini menjadi opsional valuenya, jadi jika GPS tidak diizinkan, latitude dan longitudenya akan menjadi value 0. Tetapi backend harus tetap menerima data tersebut. Anda bisa menambahkan Platform pada payload jika memang hal ini cuman berlaku di iOS saja.
