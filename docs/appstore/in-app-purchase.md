---
sidebar_position: 9
---

# In App Purchase

Memahami tentang In App Purchase (IAP) untuk iOS

## Informasi Penting

1. Untuk melakukan testing IAP Anda harus membuat akun **Apple Id Sandbox**, dan mengetesnya pada perangkat fisik dan melakukan pembayaran pada environment **Sandbox**. Saat fitur sudah jalan di Sandbox, Anda harus submit apps agar aplikasi baru dan IAP nya diapprove sama Apple.
    
    Sering terjadi kejadian dimana saat di Sandbox produknya muncul, tapi di tim reviewer Apple tidak atau bahkan pembayaran gagal.
    
    Ini hal wajar karena memang perlu waktu dari sisi server Applenya. Saran yang bisa dilakukan:
    
    1. Lakukan **Testflight Testing**, dan pembayaran menggunakan environment Testflight.
    2. Jika pada Testflight muncul, berarti memang butuh waktu dan tetap lakukan resubmit apps meskipun di reject sama Apple, nanti ada waktunya dimana pada device mereka sudah muncul.
    3. Hal ini terjadi karena environment yang mereka pakai itu hampir sama dengan Productions.
2. Saat memakai IAP bertipe Subscriptions Anda harus membuat fitur **Restore Purchase**. Fitur ini berfungsi jika pengguna ganti hp tapi masih pakai akun apple id yang sama, maka pembayaran di aplikasi bisa dipulihkan.
3. Saat menentukan harga pada IAP Items kita tidak bisa menginput bebas angkanya, melainkan harus milih berdasarkan urutan Tier. Jadi **Tier 1**, **Tier 2**, dan seterusnya sudah terdapat harganya dalam satuan dollar, tapi kita bisa melihat jika pada mata uang negara lain akan menjadi berapa harganya.
Nantinya harga yang muncul di device masing-masing mengikuti dari region negara devicenya.

4. Saat memasang IAP Anda harus menambahkan **Capabilities In App Purchase** lewat XCode
5. Ketika sudah bikin IAP Items kenapa saat ditampilkan pada aplikasi productnya tidak muncul di environment Sandbox? Padahal sudah lewat dari sehari.
Coba pastikan di Agreement, **Tax & Banking** dan bagian **Paid Apps** di Appstore Connect statusnya sudah **Active** Warna Hijau. Disana kita harus mengisi informasi rekening bank.