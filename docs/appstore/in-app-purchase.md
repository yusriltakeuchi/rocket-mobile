---
sidebar_position: 11
---

# In App Purchase (IAP)

Memahami tentang In App Purchase (IAP) untuk iOS

## Informasi Penting

1. **Testing IAP dengan Apple Id Sandbox**  
   Untuk menguji IAP, Anda harus membuat akun **Apple ID Sandbox** dan melakukan testing di perangkat fisik menggunakan environment **Sandbox**. Setelah fitur berjalan di Sandbox, Anda perlu submit aplikasi agar Apple dapat melakukan review dan menyetujui aplikasi beserta IAP-nya.

   > Sering terjadi kasus di mana produk muncul di Sandbox, tetapi tidak muncul atau pembayaran gagal saat diuji oleh tim reviewer Apple. Ini normal karena server Apple membutuhkan waktu sinkronisasi.

   **Tips untuk mengatasi hal ini:**  
   - Gunakan **TestFlight Testing** dan lakukan pembayaran di environment TestFlight.  
   - Jika produk muncul di TestFlight, berarti proses sudah berjalan dan Anda bisa tetap melakukan submit ulang aplikasi meskipun pernah ditolak.  
   - Hal ini terjadi karena environment yang digunakan reviewer hampir sama dengan environment produksi.

2. **Fitur Restore Purchase untuk Subscriptions**  
   Jika aplikasi Anda menggunakan IAP tipe subscription, wajib menyediakan fitur **Restore Purchase**. Fungsi ini memungkinkan pengguna memulihkan pembelian jika mengganti perangkat, selama menggunakan Apple ID yang sama.

3. **Penentuan Harga Berdasarkan Tier**  
   Harga untuk IAP tidak bisa diatur bebas. Anda harus memilih berdasarkan **Tier** yang sudah ditentukan Apple (Tier 1, Tier 2, dst). Setiap tier memiliki harga dalam satuan dolar, dan akan otomatis dikonversi ke mata uang lokal sesuai region device pengguna.

4. **Aktifkan Capabilities In App Purchase di Xcode**  
   Jangan lupa menambahkan capability **In App Purchase** di pengaturan project Xcode Anda agar fitur ini dapat berjalan.

5. **Produk IAP Tidak Muncul di Environment Sandbox?**  
   Jika produk IAP tidak muncul setelah lebih dari 24 jam:  
   - Pastikan status pada bagian **Agreement, Tax & Banking** di App Store Connect sudah **Active** (ditandai warna hijau).  
   - Pastikan semua data rekening bank sudah terisi lengkap di bagian **Paid Apps**.  
   Tanpa status ini aktif, produk IAP tidak akan muncul di environment Sandbox.
