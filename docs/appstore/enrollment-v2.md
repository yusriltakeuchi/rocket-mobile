---
sidebar_position: 2
---

# Enrollment V2

Panduan terbaru untuk melakukan pendaftaran akun Apple Developer melalui aplikasi Apple Developer App.

## Metode Baru

Sebelumnya, proses pendaftaran (enrollment) akun Apple Developer secara umum dilakukan melalui laman resmi [Apple Developer Enroll](https://developer.apple.com/programs/enroll/). Namun, dalam praktik terbaru, khususnya saat penulis mengurus dua akun baru untuk dua perusahaan berbeda, ditemukan bahwa metode konvensional ini mengalami hambatan, terutama pada tahap verifikasi dan pembayaran.

Sebagai solusi, Apple Support menyarankan untuk melakukan proses enrollment menggunakan [Apple Developer App](https://apps.apple.com/id/app/apple-developer/id640199958), yang dapat diunduh melalui perangkat **macOS** maupun **iOS**. Aplikasi ini menyediakan pengalaman pendaftaran yang lebih terintegrasi dan dalam beberapa kasus dapat mempercepat proses verifikasi, terutama untuk akun organisasi. Penjelasan mengenai perbedaan pengalaman antara metode Web dan Aplikasi akan dijelaskan lebih lanjut di bawah.

## Persiapan Enroll

Sebelum memulai proses pendaftaran menggunakan Apple Developer App, pastikan beberapa hal berikut telah dipenuhi:

1. Sudah mengatur **metode pembayaran** yang aktif pada [Apple Account](https://account.apple.com).
2. Untuk pendaftaran tipe **Organization**, Anda wajib memiliki **alamat email kerja (work email)** dan **website perusahaan** yang aktif.
3. Siapkan dokumen-dokumen pendukung seperti **identitas pribadi (KTP)** dan dokumen legalitas perusahaan, termasuk **DUNS Number** untuk entitas bisnis.

## Proses Enroll

Berikut ini adalah langkah-langkah melakukan enrollment melalui Apple Developer App pada macOS. Perlu dicatat bahwa tampilan dan alur di perangkat iOS secara umum serupa.

1. Buka aplikasi **Apple Developer**, lalu masuk ke menu **Account**. Di bagian bawah, akan terdapat tombol **Enroll Now**.  
   > ⚠️ **Catatan:** Jika tombol tidak aktif, berarti akun Apple Anda belum memenuhi syarat untuk melakukan enrollment langsung melalui aplikasi. Dalam kasus ini, Anda perlu menghubungi Apple Support untuk meminta akses.  
   ![Account Enroll](/img/enrollment-1.png)

2. Anda akan ditampilkan informasi seputar **manfaat (benefits)** menjadi anggota Apple Developer Program, termasuk hak akses fitur pengembangan dan distribusi aplikasi, serta biaya tahunan yang berlaku.  
   ![Benefits](/img/enrollment-2.png)

3. Isi formulir **Personal Information & Address** sesuai dengan identitas resmi (seperti KTP). Untuk akun **Organization**, pastikan data yang dimasukkan merupakan perwakilan sah dari perusahaan.

4. Tentukan jenis akun yang akan didaftarkan. Apple menyediakan beberapa tipe akun dengan tujuan dan syarat yang berbeda. Pilih sesuai dengan kebutuhan dan status entitas Anda:

   - **Individual**  
     Jenis akun ini ditujukan untuk perseorangan yang ingin merilis aplikasi atas nama pribadi.  
     > ✅ Cocok untuk: pengembang independen, freelancer, atau pemilik bisnis skala mikro.  
     > - Nama developer yang tampil di App Store adalah nama pribadi Anda.  
     > - Proses pendaftaran lebih sederhana dan cepat.

   - **Organization**  
     Digunakan untuk perusahaan atau organisasi yang berbadan hukum.  
     > ✅ Cocok untuk: perusahaan teknologi, startup, bisnis berbadan hukum.  
     > - Memerlukan **DUNS Number** sebagai identifikasi perusahaan.  
     > - Nama perusahaan akan tampil di App Store sebagai nama publisher.  
     > - Memungkinkan akses ke fitur seperti manajemen tim di App Store Connect.

   - **Nonprofit**  
     Diperuntukkan bagi organisasi nirlaba resmi yang memenuhi persyaratan Apple.  
     > ✅ Cocok untuk: yayasan, organisasi sosial, lembaga amal.  
     > - Di beberapa negara, biaya tahunan Apple Developer Program dapat digratiskan.  
     > - Tetap membutuhkan dokumen legal seperti DUNS Number dan bukti status nonprofit.

   - **Accredited Educational Institution**  
     Ditujukan bagi institusi pendidikan resmi yang terakreditasi.  
     > ✅ Cocok untuk: universitas, sekolah, lembaga pelatihan terdaftar.  
     > - Apple menyediakan program terpisah seperti Apple Developer University Program.  
     > - Bisa mendapat pembebasan biaya tahunan, tergantung wilayah.

   - **Government**  
     Ditujukan bagi institusi pemerintahan yang membutuhkan distribusi aplikasi resmi.  
     > ✅ Cocok untuk: kementerian, lembaga negara, pemerintah daerah.  
     > - Diperlukan dokumen resmi identitas lembaga dan persetujuan dari Apple.

   ![Account Type](/img/enrollment-4.png)

> ✅ Sampai saat ini penulis telah mencoba jenis akun **Individual** dan **Organization**. Jika Anda tergolong dalam kategori lain, pastikan telah memenuhi seluruh dokumen yang dipersyaratkan oleh Apple sebelum melanjutkan.


5. Jika memilih tipe **Organization**, Anda akan diminta memasukkan:
   - **Nama resmi perusahaan (Legal Entity Name)** – ini akan ditampilkan sebagai nama penerbit (publisher) di App Store.
   - **DUNS Number** – nomor identifikasi bisnis yang sudah didaftarkan sebelumnya.  
   ![Organization Details](/img/enrollment-5.png)

6. Tahap berikutnya adalah mengisi **Informasi Tambahan**, yang meliputi:
   - **Website perusahaan** dan **alamat email kerja**. Disarankan keduanya berada dalam domain yang sama dan bukan menggunakan layanan umum seperti Gmail.
   - **Sign In Authority**, yaitu informasi orang yang berwenang di perusahaan. Pastikan informasi ini sesuai dengan data resmi.  
   > 🎯 Keunggulan metode App: tidak perlu melalui proses OTP ke email kerja seperti pada proses via Web.  
   ![Additional Details](/img/enrollment-6.png)  
   ![Additional Details](/img/enrollment-7.png)

7. Setelah seluruh informasi dikonfirmasi dan dikirim, Anda akan menerima **nomor Enrollment**, dan status pendaftaran akan berubah menjadi **In Review**. Anda dapat memantau proses verifikasi ini secara langsung melalui aplikasi, dan akan mendapatkan notifikasi via email terkait perkembangan selanjutnya.  
   ![In Review](/img/enrollment-9.png)

## Catatan Tambahan

Setelah proses ini selesai, yang perlu Anda lakukan hanyalah menunggu email dari Apple mengenai kelanjutan pendaftaran. Berdasarkan pengalaman penulis, terdapat kemungkinan **gagal pembayaran** saat menggunakan metode Web, meskipun kartu yang digunakan sebelumnya berfungsi normal untuk transaksi lain seperti perpanjangan akun developer maupun pembelian aplikasi.

Maka dari itu, untuk menghindari kendala teknis dan mempercepat verifikasi, sangat disarankan untuk menggunakan **Apple Developer App**. Dokumentasi ini akan diperbarui secara berkala sesuai perkembangan status enrollment yang sedang berlangsung.

