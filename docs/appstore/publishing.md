---
sidebar_position: 2
---

# Publishing

Memahami berbagai metode publishing aplikasi iOS di App Store dan distribusi internal.

## Jenis-Jenis Metode Publishing di iOS

1. **App Store**  
   Publish aplikasi iOS ke App Store agar dapat diakses publik tanpa batasan perangkat. Aplikasi ini sudah melewati proses review Apple dan tersedia untuk semua pengguna iPhone/iPad.

2. **Ad Hoc Distribution**  
   Publish file IPA untuk distribusi internal terbatas dengan maksimal 100 perangkat terdaftar. Setiap perangkat yang ingin menginstall harus didaftarkan terlebih dahulu melalui UDID. Cocok untuk pengujian terbatas.

3. **In-House Distribution (Enterprise)**  
   Distribusi internal tanpa batasan jumlah perangkat dan tanpa perlu registrasi perangkat. File IPA dapat dideploy ke server perusahaan sendiri, dan pengguna cukup mengakses tautan website untuk mengunduh dan menginstall aplikasi langsung melalui tombol Install. Metode ini khusus untuk perusahaan dengan akun Apple Developer Enterprise.

4. **TestFlight**  
   Platform resmi Apple untuk distribusi aplikasi beta kepada tester internal maupun eksternal. Developer harus menambahkan tester, yang akan menerima undangan via email. Build aplikasi di TestFlight aktif maksimal 90 hari. Mendukung hingga 100 tester internal. Cocok untuk uji coba sebelum rilis resmi.

5. **Install On Air**  
   Layanan pihak ketiga untuk distribusi file IPA tanpa melalui App Store atau server pribadi. Cukup upload file IPA, lalu dapatkan tautan untuk dibagikan ke tester. Tester bisa mengunduh dan menginstall langsung dari tautan tersebut. Beberapa layanan populer antara lain:  
   - [Diawi](https://www.diawi.com/)  
   - [SauceLabs](https://saucelabs.com/)  
   - [InstallOnAir](https://installonair.com/)  
   - [AppsOnAir](https://appsonair.com/)
