---
sidebar_position: 1
---

# Enrollment

Memahami tentang enrollment akun developer di App Store.

## Jenis Dan Biaya Akun

1. **Company / Organization / Personal**, biayanya **$99/tahun**. Keunggulannya bisa dipakai untuk Publish ke Appstore. Tidak bisa In House Publishing, yang mana bisa deploy IPA aplikasi Anda ke server sendiri.
2. **Enterprise**, biayanya **$299/tahun**. Keunggulannya bisa deploy IPA ke server sendiri, tapi tidak bisa publish ke AppStore. Karena plan ini tujuannya khusus untuk internal saja.

### Kebutuhan Sebelum Enrollment

1. Punya akun [https://account.apple.com](https://account.apple.com/sign-in), dan isi semua informasi personal yang lengkap.
2. Masukin CC pada bagian Payment Method. Pastikan saldo di CC lebih di atas $99
3. Lakukan enroll akun developer di [https://developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll/)
4. Jika ingin membuat akun non-personal, Anda harus mempunyai DUNS. Lebih baik Anda mengurus DUNS terlebih dahulu karena ketika enroll akan diminta untuk memasukan nomor DUNSnya.
5. Jika untuk akun non-personal pastikan Anda mempunyai **Website** dan **Work Email** dengan domain yang sama.

## Upload Dokumen Perusahaan

Saat Anda mengurus akun Apple Developer di awal untuk non-personal, setelah enroll kemungkinan Anda akan diminta untuk mengirim bukti keaslian perusahaan dengan mengupload beberapa dokumen perusahaan seperti **NIB**, **SK Pengesahan**, **NPWP** dan **KTP**. Pastikan untuk berkas perusahaan yang diupload sudah ditranslate ke **bahasa inggris**. Anda bisa menggunakan translator untuk mengubahnya. Karena mereka tidak menerima dokumen berbahasa indonesia. Tetapi untuk KTP dan NPWP biasanya aman tanpa diterjemahkan.

Pastikan saat enrollment, Anda pilih opsi bahwa Anda adalah Owner atau Founder perusahaan tersebut. Karena jika Anda memilih opsi bawahnya (Owner memberikan saya akses untuk mengurus Apple Developer) maka suatu saat Anda akan diminta mengirim dokumen bukti kalau Anda karyawan di perusahaan tersebut. Bisa seperti mengirim surat kontrak atau foto Name Tag Employee.

Untuk freelancer hal ini akan mempersulit jika harus mengirim bukti karyawan.

## Data Personal & Email

Pada saat mengisi personal information pada enrollment pastikan mengisi nama dan data lengkap Owner / Founder / Karywan dari perusahaan tersebut. 

Pastikan pada form **Website** dan **Work Email** harus menggunakan domain yang sama, jadi Anda harus memasukan email kantor bukan Gmail. Nanti akan diminta OTP untuk memvalidasi email tersebut.

Berdasarkan pengalaman saya terkait Email ini sangat rentan karena jika Website dan email yang dimasukkan berbeda, proses akan panjang dimana Anda akan diminta membuktikan keabsahan Anda di perusahaan tersebut dengan mengirim beberapa dokumen.

## Trusted Phone Number

Pastikan Anda memasukan nomor telepon yang bisa dihubungi, karena Apple akan menghubungi Anda untuk melakukan verifikasi. Dan pastikan juga nomor yang ditambahkan adalah nomor yang belum pernah terdaftar di Apple Developer. Jika Anda menggunakan nomor yang sudah terdaftar, maka proses enrollment akan gagal.

## Verifikasi Provisioning Profile

Ketika Anda mempunyai akun Apple Developer baru, sebelum bisa melakukan publish Anda harus melakukan **Provisioning Profile** terlebih dahulu. Proses ini memerlukan iPhone, mac kalian harus dikoneksikan dengan iPhone menggunakan kabel, kemudian iPhone Anda akan terdaftar. Baru setelah itu Anda bisa melakukan publish. Tapi ini hanya pertama kali, kedepannya hal ini sudah diperlukan lagi.