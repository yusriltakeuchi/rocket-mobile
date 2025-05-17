---
sidebar_position: 3
---

# In App Purchase

Memahami In App Purchase (IAP) secara umum

## Informasi Penting

1. Jika aplikasi Anda memiliki fitur seperti **langganan**, **upgrade member**, atau **pembelian barang digital penuh**, maka wajib menggunakan In App Purchase. Apple dan Google mewajibkan penggunaan IAP untuk semua transaksi barang non-fisik atau digital.

2. Untuk aplikasi yang menjual banyak produk digital dengan harga dinamis (tidak tetap dan sangat banyak), tidak mungkin membuat IAP item untuk setiap produk. Cara mengatasinya:  
   1. Buat sistem **top-up wallet**.  
   2. Top-up wallet dilakukan lewat IAP dengan harga tetap yang sudah ditentukan.  
   3. Pengguna menggunakan saldo wallet tersebut untuk membeli produk digital dengan nilai coin.  
   
   Contoh:  
   - **100 Coin** dibeli lewat IAP dengan harga **Rp50.000**  
   - Produk digital dijual dengan harga menggunakan coin, misalnya **20 Coin** per item.

3. Jenis IAP berdasarkan kebutuhan:  
   - **Subscriptions**: Untuk sistem langganan.  
   - **Consumable**: Untuk pembelian berulang (misal: coin, item dalam game).  
   - **Non-Consumable**: Untuk pembelian satu kali (misal: upgrade fitur permanen).

4. Biaya potongan (fee) IAP:  
   - App Store mengambil **30%** dari penjualan.  
   - Play Store mengambil **15%** jika pendapatan di bawah **$1 juta per tahun**.  
   - Play Store mengambil **30%** jika pendapatan di atas **$1 juta per tahun**.

5. Saat proses IAP, wajib menyertakan tautan ke **Kebijakan Privasi (Privacy Policy)** dan **Syarat & Ketentuan (Terms of Use)** di halaman transaksi.

6. Penamaan product identifier IAP disarankan menggunakan format unik, misalnya:  
   - `packagename_iapname`  
   - Contoh: `com.bookstore.ebook.upgrade_member`  
   
   Hal ini penting agar setiap produk IAP memiliki identifier yang unik.