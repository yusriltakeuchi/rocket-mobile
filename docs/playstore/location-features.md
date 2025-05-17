---
sidebar_position: 4
---

# Location Features

Panduan implementasi fitur lokasi yang sesuai dengan kebijakan Google Play Store.

## Tentang Fitur Lokasi

Fitur lokasi umum digunakan untuk:

- Menemukan lokasi pengguna (misalnya untuk layanan berbasis lokasi)
- Menyediakan hasil terdekat dari posisi pengguna
- Mencatat lokasi saat pengguna melakukan suatu aksi (seperti presensi atau pengiriman)

Namun, fitur ini harus diterapkan dengan hati-hati agar **tidak melanggar kebijakan Google Play**.

## Aturan Google Play Terkait Lokasi

Google Play memiliki kebijakan ketat terkait akses lokasi, terutama:

- **Lokasi Latar Depan (Foreground Location)**:  
  ✅ Diperbolehkan selama sesuai konteks dan pengguna diberi penjelasan yang jelas.

- **Lokasi Latar Belakang (Background Location)**:  
  ⚠️ Harus disertai penjelasan yang valid, relevan, dan diajukan melalui **permintaan izin khusus**.  
  ❌ Aplikasi yang tidak memberikan justifikasi yang kuat akan ditolak.

### Contoh yang Diperbolehkan:

- Aplikasi navigasi, pengiriman, atau pelacakan yang membutuhkan pembaruan lokasi real-time, bahkan saat aplikasi tidak dibuka.

### Contoh yang Dilarang:

- Aplikasi yang meminta lokasi latar belakang tanpa fitur nyata yang membutuhkannya.
- Aplikasi yang tidak memberi tahu pengguna mengapa lokasi dibutuhkan.

## Solusi dan Rekomendasi Implementasi

### 1. Izin Lokasi Bertingkat (Android 10+)

Gunakan izin bertingkat:

- `ACCESS_FINE_LOCATION`: Lokasi akurat saat aplikasi aktif
- `ACCESS_BACKGROUND_LOCATION`: Lokasi saat aplikasi di latar belakang (harus di-declare khusus)

**Tips**:
- Tampilkan UI edukatif (rationale) sebelum meminta izin latar belakang.
- Jangan minta izin latar belakang bersamaan dengan izin pertama kali.

### 2. Alternatif Jika Izin Ditolak

- Sediakan fallback data berbasis lokasi umum (default city/country)
- Jangan crash jika lokasi ditolak — tampilkan pesan yang informatif
- Gunakan `isLocationEnabled = false` atau lat/long = `0.0` untuk menandai lokasi tidak tersedia

### 3. Presensi / Layanan Kritis

Jika aplikasi sangat bergantung pada lokasi (misalnya kehadiran):

- Pastikan fitur tetap bisa digunakan meskipun lokasi ditolak (dengan peringatan)
- Kirim lokasi `0,0` dan tandai sebagai "tanpa lokasi"
- Backend harus bisa memproses data tersebut tanpa error

## Dianjurkan ✅

✅ Tampilkan penjelasan tujuan penggunaan lokasi sebelum meminta izin.  
✅ Minta izin saat fitur lokasi dibutuhkan (bukan saat aplikasi pertama kali dibuka).  
✅ Tampilkan informasi dan kontrol kepada pengguna untuk menonaktifkan lokasi.  
✅ Sertakan dokumentasi yang jelas saat mengupload ke Play Console jika menggunakan background location.  

## Tidak Dianjurkan ❌

❌ Meminta `ACCESS_BACKGROUND_LOCATION` tanpa justifikasi.  
❌ Menjadikan lokasi sebagai syarat mutlak agar aplikasi berjalan.  
❌ Meminta semua izin lokasi saat pertama kali membuka aplikasi.  
❌ Mengirim error atau crash jika lokasi ditolak.  

## Catatan Tambahan

> Sejak Android 11 (API 30), permintaan izin lokasi latar belakang harus dilakukan melalui 2 tahap:  
> 1. Minta `ACCESS_FINE_LOCATION`  
> 2. Setelah disetujui, baru minta `ACCESS_BACKGROUND_LOCATION` dalam dialog terpisah

> Google Play Console akan menolak APK yang meminta izin latar belakang jika:
> - Tidak ada form justification (penjelasan) di Play Console
> - Penjelasan tidak sesuai dengan fungsi nyata di aplikasi
