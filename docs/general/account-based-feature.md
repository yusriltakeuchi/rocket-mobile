---
sidebar_position: 5
---

# Account Based Feature

Memahami tentang fitur berbasis akun pada aplikasi mobile.

## Aturan ABF

Saat aplikasi kita terdapat fitur yang bukan account based maka proses login menjadi tidak wajib (opsional).
Account based ini berarti fitur yang memang memerlukan akun / login untuk mengaksesnya seperti:

- Booking treatment
- Buat komentar
- Buat postingan
- Lapor
- dan sejenisnya yang memang perlu mengirim user_id

Jadi jika fitur kita tidak account based, itu harus bisa diakses tanpa login. Contohnya seperti apa?

1. Sebuah aplikasi e-commerce dimana menyediakan banyak produk yang bisa dilihat oleh pengguna sebelum membeli. Saat aplikasi pertama dibuka, mereka langsung bisa melihat seluruh produk yang ada di dalamnya. Tetapi saat dia ingin Menambah Favorite, Memasukan ke Keranjang, Melihat Profile, Mengatur Alamat, baru disana dia akan dipaksa untuk Login. Jadi fitur List Product, Category dan sejenisnya bukanlah Account Based Features.

2. Sebuah aplikasi membeli ebook. Saat aplikasi dibuka kita langsung bisa melihat seluruh buku yang dijual di dalamnya, maupun melihat detailnya. Tetapi saat kita ingin membeli buku tersebut baru user dipaksa untuk Login.