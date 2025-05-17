---
sidebar_position: 8
---

# Account Deletion

Memahami tentang fitur **Account Deletion** pada iOS.

## Informasi Penting

Jika aplikasi Anda memiliki fitur **Registrasi Akun**, maka wajib menyediakan fitur **Delete Akun**. Biasanya fitur ini ditempatkan di halaman profil pengguna.

Beberapa hal yang perlu diperhatikan:

- Berikan popup konfirmasi sebelum proses penghapusan akun untuk menghindari kesalahan klik yang tidak disengaja.
- Saat pengguna menghapus akun, aplikasi biasanya akan melakukan **Fetch API** ke backend untuk memproses penghapusan.
- Namun, di backend akun biasanya tidak benar-benar dihapus secara permanen, melainkan diberi status **flagging** atau penandaan sebagai akun yang sudah dihapus.
- Akun yang sudah dihapus tidak dapat digunakan untuk login kembali.
