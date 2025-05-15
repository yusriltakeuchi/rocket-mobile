---
sidebar_position: 2
---

# In Review Testing

Memahami tentang hal yang harus diperhatikan saat proses in review testing aplikasi mobile.

## Akun Sample

Developer aplikasi harus memberikan informasi mengenai akun testing pada saat submit aplikasi ke store, mau itu Playstore dan Appstore keduanya sama. Karena mereka akan melakukan testing secara manual dan mengetes semua fitur yang ada di dalamnya. Jika dirasa terdapat fitur yang bug dan tidak berjalan semestinya maka akan ditolak. Informasi yang diperlukan:

1. AppStore: Username & Password
2. PlayStore: Username & Password

Tapi jika aplikasi Anda diakses menggunakan email, tetap isikan saja email samplenya pada field username.

### Screenshot

Screenshot aplikasi pada kedua store sangat penting karena memang informasi tersebut diwajibkan untuk dikirim. Tetapi ada beberapa aturan:

1. Buat screenshot sesuai platformnya. Jika untuk Playstore maka screenshot harus diambil di Android, jika untuk Appstore maka screenshot harus diambil di iPhone. Karena pernah terjadi saat memakai screenshot Android untuk Appstore terkena reject karena terdeteksi status barnya bukanlah dari iOS.
2. Buat screenshot sesuai fitur yang didapatan di dalam aplikasinya. Jika Anda mengirim screenshot fitur A, tetapi pada saat tim reviewer Google atau Apple melakukan testing tetapi tidak bisa mengakses atau tidak menemukan fitur tersebut, maka aplikasi Anda akan ditolak.