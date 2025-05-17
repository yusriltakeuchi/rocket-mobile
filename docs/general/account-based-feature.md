---
sidebar_position: 2
---

# Account Based Feature

Memahami fitur berbasis akun pada aplikasi mobile.

## Aturan Account Based Feature (ABF)

Jika sebuah fitur **bukan** berbasis akun (non-account based), maka proses login tidak wajib alias **opsional**.  

Fitur berbasis akun (account based) adalah fitur yang **memerlukan login** untuk mengaksesnya, contohnya:  
- Booking treatment  
- Membuat komentar  
- Membuat postingan  
- Melapor  
- Fitur lain yang memerlukan pengiriman `user_id`  

Sebaliknya, fitur yang **bukan account based** harus bisa diakses tanpa login.

### Contoh Penerapan

1. **Aplikasi e-commerce**  
   Pengguna bisa langsung melihat daftar produk dan kategori tanpa login saat pertama membuka aplikasi. Namun, ketika ingin:  
   - Menambahkan produk ke favorit  
   - Memasukkan produk ke keranjang  
   - Melihat profil  
   - Mengatur alamat  
   
   maka pengguna akan diminta login terlebih dahulu. Jadi, fitur seperti daftar produk dan kategori bukan fitur berbasis akun.

2. **Aplikasi pembelian ebook**  
   Pengguna dapat melihat seluruh koleksi buku dan detailnya tanpa login. Namun, saat ingin membeli buku, pengguna harus melakukan login terlebih dahulu.

---

Dengan demikian, fitur yang membutuhkan data atau interaksi personal harus dilindungi dengan proses login, sementara fitur umum dapat diakses secara bebas.
