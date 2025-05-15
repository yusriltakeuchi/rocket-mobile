---
sidebar_position: 3
---

# In App Purchase

Memahami tentang In App Purchase (IAP) secara general

## Informasi Penting

1. Saat membuat aplikasi yang mempunyai **sistem langganan**, **upgrade member**, **full pembelian barang digital**, maka Anda harus memasang In App Purchase. Karena Apple atau Google mewajibkan untuk menggunakan In App Purchase selama transaksi yang kalian lakukan berupa barang non-fisik atau digital.
2. Saat membuat aplikasi pembelian barang digital, kita tidak mungkin membuat IAP item ke semua produk digital karena harganya dinamis, tidak fix dan sangat banyak. Lantas gimana mengatasinya? 
    1. Buat sistem topup wallet. 
    2. Untuk topup harus menggunakan In App Purchase yang harganya sudah fix kita tentukan, nanti saat beli barang digital harus pakai wallet tersebut. 
    3. Misalnya **100 Coin** dibeli dengan IAP harganya **Rp50.000**, kemudian kita bisa menjual barang digital seharga dengan coin, misalnya **20 Coin**.
3. Jika ingin membuat sistem langganan, maka harus pakai IAP dengan tipe Subscriptions. Jika ingin membuat pembelian yang berulang, gunakan IAP Product Consumable, tapi jika hanya sekali beli maka pakai Non Consumable.
4. Fee untuk In App Purchase adalah:
    1. AppStore mengambil **30%** dari penjualan
    2. Playstore **15%**, jika pendapatan dibawah **$1jt per tahun**
    3. Playstore **30%**, jika pendapatan di atas **$1jt per tahun**
5. Kita harus menambah text link Kebijakan Privasi **(Privacy Policy)** & Syarat Ketentuan **(Term of Use)** di halaman saat melakukan proses IAP
6. Saat membuat product identifier IAP Item disarankan menggunakan format seperti ini:
    - packagename_iapname (Example: com.bookstore.ebook.upgrade_member)
    - Hal ini dikarenakan setiap product harus mempunyai product identifier yang unique.