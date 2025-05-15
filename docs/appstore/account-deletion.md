---
sidebar_position: 8
---

# Account Deletion

Memahami tentang fitur Account Deletion pada iOS

## Informasi Penting

Jika aplikasi kita mempunyai fitur **Registrasi Akun**, maka kita harus membuat fitur **Delete Akun** juga. Biasanya menunya diletakan di halaman profile. Kita harus memberikan popup konfirmasi yang bisa dipilih oleh pengguna sebelum menghapus akun, guna mencegah kecelakaan salah klik dan akun terhapus.

Biasanya secara sistem Mobile akan melakukan Fetch API ke backend untuk menghapus akun, tetapi di backend tidak benar-benar dihapus, hanya diberi flagging saja. Sehingga akun tersebut tidak bisa login kembali.