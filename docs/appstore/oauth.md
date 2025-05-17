---
sidebar_position: 6
---

# Social OAuth Login

Memahami fitur OAuth pada iOS dan aturan terkait penggunaan social login.

## Aturan Penggunaan Social OAuth Sign-In

Jika aplikasi Anda menyediakan fitur login menggunakan akun sosial seperti **Google**, **Facebook**, atau platform OAuth lainnya, maka Anda diwajibkan untuk juga menyediakan opsi **Sign in with Apple**. 

Hal ini wajib agar aplikasi Anda lolos proses review di App Store. Jika tidak menyediakan fitur Sign in with Apple, aplikasi Anda berpotensi ditolak oleh Apple.

### Standarisasi Tombol Apple Sign In

Tombol **Sign in with Apple** harus mengikuti panduan desain resmi dari Apple. Disarankan menggunakan template tombol yang sudah disediakan oleh library Apple atau pihak ketiga yang terpercaya agar sesuai standar.

Contoh aturan warna tombol berdasarkan background aplikasi:

- **Background gelap**: tombol harus berwarna putih dengan teks hitam.  
- **Background terang**: tombol harus berwarna hitam dengan teks putih.

Mematuhi aturan ini penting untuk menjaga konsistensi tampilan dan kenyamanan pengguna saat menggunakan fitur login Apple.