# 📌 We-Raw | Portfolio Website

## 📖 Deskripsi

**We-Raw Portfolio** adalah website portofolio pribadi yang menampilkan informasi tentang pemilik, termasuk bagian hero, about, education, projects, dan kontak. Website ini dibangun dengan **HTML, CSS, dan JavaScript** sederhana tanpa framework eksternal, sehingga ringan, cepat, dan mudah dikustomisasi.

## ✨ Fitur Utama

* **Responsive Navbar**

  * Navbar tetap (fixed) di bagian atas dengan efek blur.
  * Terdapat **hamburger menu** untuk tampilan mobile.
  * Menu aktif diberi **underline animasi** sesuai section yang sedang dilihat (menggunakan `IntersectionObserver`).

* **Hero Section**

  * Tampilan pembuka dengan gambar dan teks utama.
  * Efek animasi "floating" pada gambar.

* **About Section**

  * Informasi singkat tentang pemilik.
  * Foto profil dengan border melingkar.
  * Tautan sosial media interaktif.

* **Education Section**

  * Latar belakang pendidikan ditampilkan dengan teks rapi.
  * Background menggunakan **radial gradient**.

* **Project Section**

  * Judul besar dengan daftar project dalam bentuk **card**.
  * Card memiliki variasi warna dan gambar ilustrasi.
  * Detail project dapat ditampilkan secara dinamis.

* **Footer**

  * Background gradient dengan teks hak cipta sederhana.

## 🛠️ Teknologi

* **HTML5** – Struktur halaman.
* **CSS3** – Styling, layout responsive, animasi.
* **JavaScript** – Navbar toggle, scroll detection, active menu.

## 📱 Responsive Design

* Untuk layar **desktop**: navbar horizontal di atas.
* Untuk layar **mobile (≤768px)**:

  * Navbar berubah menjadi vertical menu dengan hamburger toggle.
  * Section menyesuaikan agar lebih mudah dibaca di layar kecil.

## 🚀 Cara Menggunakan

1. Clone repository ini:

   ```bash
   git clone https://github.com/username/portfolio.git
   ```
2. Masuk ke folder project:

   ```bash
   cd portfolio
   ```
3. Buka file `index.html` langsung di browser.

## 🎨 Customisasi

* Ganti teks di file `index.html` sesuai kebutuhan.
* Ubah gambar di folder `assets/img/`.
* Edit warna, font, atau layout di `assets/css/style.css`.
