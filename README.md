# 📚 Perpustakaan Elektronik + Panduan Belajar HTML/CSS/JS

Selamat datang! Dokumen ini berisi 2 bagian:
1. **Panduan menggunakan aplikasi Perpustakaan Elektronik**
2. **Panduan belajar HTML, CSS, dan JavaScript dari nol** — khusus untuk pemula yang ingin memahami kode aplikasi ini.

---

## 📖 BAGIAN 1: Cara Pakai Aplikasi

### Cara Membuka Aplikasi
1. Extract file ZIP ke folder mana pun
2. Buka file `index.html` dengan browser (Chrome/Edge/Firefox) — **klik dobel** saja
3. Aplikasi langsung jalan! Data tersimpan otomatis di browser (localStorage)

### Fitur yang Tersedia (26 Halaman)

| Menu | Fitur |
|------|-------|
| **Dashboard** | Statistik real-time, grafik 7 hari, buku terbaru, aktivitas kunjungan |
| **Group/Kelas** | Tambah/Edit/Hapus kelas (X RPL 1, XI TKJ, dll) |
| **Buku Kunjungan** | Catat kunjungan anggota & tamu, tombol "Keluar" untuk tutup kunjungan |
| **Approval Anggota** | Setujui / tolak pendaftar baru |
| **List Anggota** | CRUD anggota lengkap (Siswa/Guru), filter, detail |
| **Aktivasi Buku Digital** | Toggle aktif/nonaktif buku digital |
| **Peminjaman Buku Digital** | Ajukan, approval, history, kelas, pengembalian |
| **Laporan Buku Digital** | Laporan harian + review dengan rating bintang |
| **Tutorial Inventori** | Panduan 7 langkah kelola inventori |
| **Koleksi Buku** | CRUD buku cetak & digital |
| **Kelola Stok** | Transaksi masuk/keluar/rusak, stok akhir, kartu stok |
| **Kelola Rak** | CRUD rak buku |
| **Peminjaman Buku Cetak** | Ajukan, konfirmasi (auto-update stok), histori |
| **Laporan Buku Cetak** | Kartu peminjaman buku/siswa, statistik |

### Cara Menyimpan Data
- **Otomatis!** Setiap kali Anda klik "Simpan"/"Tambah"/"Hapus", data langsung tersimpan di browser
- Tidak perlu tombol save terpisah, tidak perlu internet
- Refresh browser pun data tetap ada
- Hapus data: klik tombol **"Reset Data ke Awal"** di sidebar paling bawah

---

## 🎓 BAGIAN 2: Panduan Belajar HTML, CSS, JavaScript

### 🌐 2.1 BELAJAR HTML DARI NOL

#### Apa itu HTML?
HTML = **HyperText Markup Language**. Bahasa untuk membuat struktur halaman web. HTML bukan programming language, tapi **markup language** — gunanya untuk "menandai" bagian-bagian halaman (judul, paragraf, gambar, tombol, dll).

#### Struktur Dasar HTML
Setiap file HTML selalu punya struktur seperti ini (lihat `index.html` baris 1-9):

```html
<!DOCTYPE html>          ← wajib di baris pertama, memberitahu browser ini HTML5
<html lang="id">         ← tag pembuka <html>, bahasa Indonesia
  <head>                  ← bagian HEAD: info halaman (tidak tampil di layar)
    <meta charset="UTF-8">           ← encoding karakter (support emoji, huruf Indonesia)
    <meta name="viewport" ...>        ← agar responsive di HP
    <title>Perpustakaan</title>       ← judul tab browser
    <link rel="stylesheet" href="style.css">  ← hubungkan ke CSS
  </head>
  <body>                  ← bagian BODY: isi yang tampil di layar
    ... konten ...
  </body>
</html>
```

#### Apa Itu `<head>` dan `<body>`?
- **`<head>`** = "kepala" halaman. Berisi info yang TIDAK tampil di layar: judul, link ke CSS, metadata untuk Google. Kayak "identitas" halaman.
- **`<body>`** = "tubuh" halaman. Berisi semua yang TAMPIL di layar: teks, gambar, tombol, tabel.

Analogi: `<head>` = KTP Anda (tidak tampak saat lihat orang), `<body>` = penampilan fisik Anda (yang orang lihat).

#### Tag HTML yang Paling Sering Dipakai

| Tag | Fungsi | Contoh |
|-----|--------|--------|
| `<div>` | Wadah blok (box) | `<div class="panel">...</div>` |
| `<span>` | Teks kecil dalam baris | `<span class="badge">AKTIF</span>` |
| `<h1>` - `<h6>` | Heading (judul) | `<h1>Judul Utama</h1>` |
| `<p>` | Paragraf | `<p>Halo dunia</p>` |
| `<a href="">` | Link | `<a href="https://google.com">Google</a>` |
| `<img src="" alt="">` | Gambar | `<img src="logo.png" alt="logo">` |
| `<button>` | Tombol | `<button onclick="simpan()">Simpan</button>` |
| `<input>` | Input form | `<input type="text" placeholder="Nama">` |
| `<select>` + `<option>` | Dropdown | `<select><option>Pilihan 1</option></select>` |
| `<table>` + `<tr>` + `<td>` | Tabel | Lihat contoh di bawah |
| `<ul>` + `<li>` | Daftar bullet | `<ul><li>Item 1</li></ul>` |
| `<form>` | Form | `<form onsubmit="return simpan()">...</form>` |
| `<textarea>` | Input teks panjang | `<textarea rows="3"></textarea>` |
| `<!-- komentar -->` | Komentar (tidak tampil) | `<!-- ini komentar -->` |

#### Contoh Tag di Aplikasi Ini (lihat `index.html`)

**Tabel buku di Dashboard:**
```html
<table class="table">
  <thead>
    <tr>
      <th>Nama Pengunjung</th>
      <th>Kelas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ahmad Fauzi</td>
      <td>X RPL 1</td>
    </tr>
  </tbody>
</table>
```

**Tombol dengan ikon SVG:**
```html
<button class="btn btn-primary" onclick="openGroupModal()">
  + Tambah Kelas
</button>
```

**Form input:**
```html
<input type="text" class="input" name="name" placeholder="Nama lengkap" required>
```

#### Atribut HTML yang Penting

| Atribut | Fungsi | Contoh |
|--------|--------|--------|
| `class` | Nama class untuk CSS/JS | `class="btn btn-primary"` |
| `id` | ID unik (hanya 1 per halaman) | `id="statKoleksi"` |
| `name` | Nama field form | `name="email"` |
| `placeholder` | Teks bantuan di input | `placeholder="Nama..."` |
| `required` | Wajib diisi | `<input required>` |
| `onclick` | Aksi saat diklik | `onclick="simpan()"` |
| `value` | Nilai default | `value="1"` |
| `type` | Tipe input | `type="text"` / `type="number"` / `type="date"` |
| `disabled` | Nonaktif | `<button disabled>` |
| `src` | Sumber gambar | `src="logo.png"` |
| `alt` | Teks alternatif gambar | `alt="logo sekolah"` |

#### Belajar HTML dari Mana?

1. **Mulai dari W3Schools**: https://www.w3schools.com/html/ — interaktif, ada editor online
2. **MDN Web Docs** (resmi Mozilla): https://developer.mozilla.org/en-US/docs/Learn/HTML
3. **freeCodeCamp**: https://www.freecodecamp.org/learn/ — kursus gratis dengan sertifikat
4. **YouTube** channel "Programmer Zaman Now" atau "Kelas Terbuka"
5. **Baca file `index.html` aplikasi ini** — buka di VS Code (download gratis di https://code.visualstudio.com/), lihat strukturnya, ubah sesuatu, refresh browser, lihat apa yang berubah.

#### Latihan HTML
- [ ] Ubah judul `<h1>` di hero banner
- [ ] Tambah paragraf baru di Dashboard
- [ ] Tambah kolom baru di tabel (misalnya "No. Telepon")
- [ ] Buat halaman About baru

---

### 🎨 2.2 BELAJAR CSS — Mencari & Memilih Warna

#### Apa itu CSS?
CSS = **Cascading Style Sheets**. Bahasa untuk **mempercantik** halaman web. HTML hanya bikin struktur (kotak, teks), CSS yang membuatnya cantik (warna, ukuran, posisi, animasi).

#### Struktur Dasar CSS (lihat `style.css`)
```css
/* Selector */        .stat-card {
/* Property */          background: #ffffff;     ← putih
/* Property */          border: 1px solid #eef2f7;
/* Property */          padding: 18px;
/* Property */          border-radius: 16px;     ← sudut membulat
/* Property */          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
                      }
```

**Selector** = "pilih elemen mana yang mau di-style". Contoh:
- `.stat-card` → semua elemen dengan `class="stat-card"`
- `#statKoleksi` → elemen dengan `id="statKoleksi"` (hanya 1)
- `button` → semua elemen `<button>`
- `.btn-primary` → semua elemen dengan `class="btn-primary"`

#### Cara Mencari & Memilih Warna

**Format warna di CSS:**

| Format | Contoh | Penjelasan |
|-------|--------|------------|
| **Hexadecimal** | `#3b82f6` | Paling umum. 6 digit: 2 pertama=Red, 2 tengah=Green, 2 terakhir=Blue |
| **Hex pendek** | `#fff` = `#ffffff` | Untuk warna yang duplikat (`#fff`, `#000`, `#f00`) |
| **RGBA** | `rgba(59, 130, 246, 0.5)` | RGB + Alpha (transparansi 0-1) |
| **RGB** | `rgb(59, 130, 246)` | Red, Green, Blue (0-255) |
| **HSL** | `hsl(217, 91%, 60%)` | Hue, Saturation, Lightness — paling intuitif |
| **Nama warna** | `red`, `blue`, `tomato` | Ada 140 nama warna CSS |

**Cara nyari warna:**

1. **Google Color Picker** — googling "color picker", ada tool langsung di Google
2. **CSS Color Picker**: https://www.w3schools.com/colors/colors_picker.asp
3. **Coolors.co** (palette): https://coolors.co/ — generate palet warna yang cocok
4. **Adobe Color**: https://color.adobe.com/ — bikin skema warna profesional
5. **UI Colors**: https://uicolors.app/ — generate shades dari 1 warna
6. **Eyedropper** (Chrome extension): ambil warna dari website manapun
7. **Pipette** Windows: Snipping Tool → pick color

**Palet Warna Aplikasi Ini** (lihat `style.css` baris 11-50):
```
Sidebar:    linear-gradient(#0f2247, #16305e, #0f2247)  ← biru tua gelap
Topbar:     rgba(255,255,255,0.75)                        ← putih transparan
Hero:       radial-gradient(#1d4ed8, #1e3a8a, #0f2247)    ← biru gradient
Primary:    #3b82f6 → #2563eb                              ← biru terang
Success:    #22c55e → #16a34a                              ← hijau
Warning:    #f59e0b → #d97706                              ← oranye
Danger:     #ef4444 → #dc2626                              ← merah
Background: #f1f5f9                                         ← abu-abu terang
Text dark:  #0f172a                                         ← hampir hitam
Text muted: #64748b                                         ← abu-abu
Border:     #eef2f7                                         ← abu sangat terang
```

**Inspirasi palet warna:**
- **Tailwind CSS palette**: https://tailwindcss.com/docs/customize-color — palet profesional
- **Material Design**: https://m2.material.io/design/color/
- **ColorHunt**: https://colorhunt.co/ — palet populer gratis
- **Dribbble**: https://dribbble.com/colors/ — inspirasi desain

#### Property CSS yang Paling Penting

**Layout:**
- `display: flex` → layout fleksibel (sejajar horizontal/vertikal)
- `display: grid` → layout grid (baris & kolom)
- `position: fixed/sticky/relative/absolute` → posisi elemen
- `width`, `height`, `padding`, `margin` → ukuran
- `gap: 16px` → jarak antar elemen (flex/grid)

**Visual:**
- `background: #fff` → warna latar
- `color: #000` → warna teks
- `border: 1px solid #ddd` → garis tepi
- `border-radius: 12px` → sudut membulat
- `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` → bayangan
- `opacity: 0.5` → transparansi

**Typography:**
- `font-family: 'Segoe UI', sans-serif` → jenis font
- `font-size: 14px` → ukuran teks
- `font-weight: 700` → ketebalan (300=tipis, 700=tebal)
- `text-align: center` → rata teks

**Animasi:**
- `transition: all 0.3s ease` → efek halus saat berubah
- `transform: translateY(-4px)` → gerakkan elemen
- `animation: fadeIn 0.5s` → animasi keyframe

#### Animasi di Aplikasi Ini (lihat `style.css` baris ~620-650)

```css
@keyframes fadeInUp {
  from { transform: translateY(16px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.stat-card {
  animation: fadeInUp 0.5s ease both;
}
```

Efek lain yang dipakai:
- `slideInLeft` — sidebar masuk dari kiri
- `fadeInDown` — topbar turun dari atas
- `float` — logo hero melayang
- `pulse` — efek cahaya di hero banner
- `hover: translateY(-4px)` — kartu terangkat saat hover

#### Cara Edit CSS dengan Inspect Element
1. Buka aplikasi di Chrome
2. Klik kanan di elemen mana pun → **"Inspect"**
3. Panel Developer Tools muncul
4. Klik tab **"Styles"** → ubah nilai property, lihat perubahan live
5. Setelah cocok, copy ke file `style.css`

#### Latihan CSS
- [ ] Ubah warna background sidebar jadi hijau
- [ ] Ubah warna tombol primary jadi ungu
- [ ] Tambah animasi `pulse` ke tombol "Tambah Kelas"
- [ ] Ubah font jadi 'Comic Sans MS' (cuma buat iseng)

---

### ⚡ 2.3 BELAJAR JAVASCRIPT — Apa Gunanya & Contoh

#### Apa itu JavaScript?
JavaScript (JS) = **bahasa pemrograman** yang bikin halaman web jadi **interaktif**. HTML bikin struktur, CSS bikin cantik, **JavaScript bikin hidup** (bisa klik, simpan data, animasi, dll).

#### Apa Saja yang Bisa Dilakukan JavaScript?

1. **Manipulasi HTML** — ubah teks, tambah/hapus elemen, ubah class
2. **Event handling** — respon saat klik, hover, ketik, scroll
3. **Simpan data** — localStorage, cookies, kirim ke server
4. **Validasi form** — cek input sebelum submit
5. **Animasi** — gerakkan elemen, transisi
6. **Fetch data** — ambil data dari API
7. **Hitung matematika** — kalkulator, statistik
8. **Timer** — countdown, alarm, auto-refresh

#### Struktur Dasar JavaScript (lihat `script.js`)

```javascript
'use strict';  // mode ketat, hindari bug

// Variable
const nama = 'Ahmad';           // const = tidak bisa diubah
let umur = 17;                  // let = bisa diubah
var lama = true;                // var = gaya lama, hindari

// Function
function sapa(nama) {
  return 'Halo, ' + nama + '!';
}

// Array
const buku = ['Matematika', 'Fisika', 'Biologi'];

// Object
const anggota = {
  nama: 'Ahmad',
  umur: 17,
  kelas: 'X RPL 1'
};

// Conditional
if (umur >= 17) {
  console.log('Dewasa');
} else {
  console.log('Anak-anak');
}

// Loop
for (let i = 0; i < buku.length; i++) {
  console.log(buku[i]);
}

// Arrow function (modern)
const tambah = (a, b) => a + b;

// Template literal (string modern)
const sapa2 = `Halo ${nama}, umur ${umur}`;
```

#### Contoh Nyata di Aplikasi Ini

**1. Simpan data ke localStorage** (lihat `script.js` baris ~260):
```javascript
// Simpan array groups ke localStorage
localStorage.setItem('perpus_groups', JSON.stringify(groups));

// Baca balik
const groups = JSON.parse(localStorage.getItem('perpus_groups')) || [];
```

**2. Generate ID unik** (lihat `script.js` baris ~250):
```javascript
function genId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
// Hasil: "id_1711234567890_abc123"
```

**3. Manipulasi DOM** (lihat `script.js` baris ~440):
```javascript
// Ambil elemen dengan id "statKoleksi"
const el = document.getElementById('statKoleksi');

// Ubah teksnya
el.textContent = '15';

// Ubah style
el.style.color = '#16a34a';

// Tambah class
el.classList.add('highlight');
```

**4. Event listener** (lihat `script.js` baris ~390):
```javascript
document.querySelectorAll('.menu-group > ul > li > a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();  // jangan ikuti href="#"
    // ... logika klik menu
  });
});
```

**5. Render tabel dinamis** (lihat `script.js` baris ~500):
```javascript
function renderGroupPage() {
  const groups = DB.getGroups();
  const tbody = document.getElementById('groupTableBody');

  tbody.innerHTML = groups.map(g => `
    <tr>
      <td><strong>${escapeHtml(g.name)}</strong></td>
      <td>${g.level}</td>
      <td>${g.major || '-'}</td>
      <td>${g.homeroom || '-'}</td>
      <td>
        <button onclick="openGroupModal('${g.id}')">Edit</button>
        <button onclick="deleteGroup('${g.id}')">Hapus</button>
      </td>
    </tr>
  `).join('');
}
```

**6. Form submit handler** (lihat `script.js` baris ~540):
```javascript
function submitGroupForm(e) {
  e.preventDefault();  // jangan refresh halaman

  const form = e.target;
  const name = form.elements['name'].value;
  const level = form.elements['level'].value;

  if (!name) {
    alert('Nama wajib diisi');
    return;
  }

  // Simpan ke database
  const groups = DB.getGroups();
  groups.push({ id: genId('g'), name, level, createdAt: new Date().toISOString() });
  DB.saveGroups(groups);

  // Tutup modal & refresh tabel
  closeGroupModal();
  renderGroupPage();
}
```

#### JavaScript yang Dipakai di Aplikasi Ini

| Konsep | Lokasi | Contoh |
|--------|--------|--------|
| `localStorage` | `DB` object | Simpan/baca semua data |
| `JSON.parse/stringify` | `DB.read/write` | Konversi array↔string |
| `document.getElementById` | semua renderer | Ambil elemen HTML |
| `document.querySelectorAll` | `setupSidebar` | Ambil banyak elemen |
| `.innerHTML = ...` | semua renderer | Ganti isi elemen |
| `.addEventListener` | `setupSidebar`, `setupForms` | Dengar event |
| `.classList.add/remove` | `navigateTo` | Ubah kelas aktif |
| Template literal `` ` `` | rendering tabel | String multiline |
| `.map().join('')` | rendering tabel | Array → string |
| Arrow function `=>` | banyak | Function singkat |
| `Promise`, async/await | tidak dipakai (sync) | — |
| Error handling try/catch | `DB.read` | Tangani error |
| `Date` object | `formatDate` | Tanggal & waktu |
| `confirm()`, `alert()` | hapus data | Dialog browser |

#### Cara Debug JavaScript

1. **Console browser** — tekan F12 → tab "Console". Ketik: `DB.getGroups()` untuk lihat data.
2. **`console.log()`** — tambahkan di kode: `console.log('data:', groups);`
3. **Debugger** — tulis `debugger;` di kode, browser akan berhenti di situ
4. **Breakpoint** — di tab "Sources" DevTools, klik nomor baris
5. **`alert()`** — cara paling cepat (tapi mengganggu)

#### Belajar JavaScript dari Mana?

1. **MDN Getting Started**: https://developer.mozilla.org/en-US/docs/Learn/JavaScript
2. **JavaScript.info**: https://javascript.info/ — kursus online lengkap
3. **W3Schools JS**: https://www.w3schools.com/js/ — interaktif
4. **freeCodeCamp**: https://www.freecodecamp.org/learn/ — kursus gratis + sertifikat
5. **YouTube**:
   - "Programmer Zaman Now" (id)
   - "Kelas Terbuka" (id)
   - "Traversy Media" (en)
   - "Fireship" (en, singkat & cepat)
6. **Baca file `script.js` aplikasi ini** — buka di VS Code, baca komentar, ubah, lihat efeknya.

#### Latihan JavaScript
- [ ] Buka Console (F12), ketik `DB.getBooks()` — lihat data buku
- [ ] Tambah buku baru via Console: `DB.saveBooks([...DB.getBooks(), {id:'b_new', title:'Test'}])`
- [ ] Ubah fungsi `toast()` untuk bunyi 'beep' setiap kali muncul
- [ ] Tambah field baru di form Anggota (misal "Tanggal Lahir")

---

## 🛠️ BAGIAN 3: Cara Edit Aplikasi Ini

### Struktur File
```
perpus/
├── index.html      ← Struktur halaman (26 page sections + modals)
├── script.js       ← Semua logika (CRUD, navigasi, render)
├── style.css       ← Semua styling + animasi
├── smklogo.jpg     ← Logo sekolah (sidebar + topbar)
├── smklogo-sap.png ← Logo sekolah (hero banner)
└── README.md       ← Dokumen ini
```

### Cara Edit

**Ubah teks/tampilan:** Edit `index.html`
- Cari teks yang mau diubah (Ctrl+F di VS Code)
- Ganti, save, refresh browser

**Ubah warna/animasi:** Edit `style.css`
- Cari class yang mau diubah (misal `.btn-primary`)
- Ubah property, save, refresh

**Ubah logika/data:** Edit `script.js`
- Cari function yang mau diubah (misal `submitGroupForm`)
- Edit, save, refresh browser

**Ganti logo:** Ganti file `smklogo.jpg` dan `smklogo-sap.png` dengan logo Anda sendiri (nama harus sama!)

### Tools yang Disarankan
- **VS Code** (gratis): https://code.visualstudio.com/ — editor terbaik
- **Live Server extension** di VS Code — auto-refresh saat save
- **Chrome DevTools** (F12) — inspect, debug, console

### Deploy ke GitHub Pages (gratis)
1. Buat akun GitHub: https://github.com/signup
2. Buat repository baru
3. Upload semua file
4. Settings → Pages → Source: main branch → Save
5. Tunggu 2-3 menit → buka link `https://USERNAME.github.io/REPO-NAME/`

### Deploy ke Vercel/Netlify (gratis, custom domain)
- **Vercel**: https://vercel.com → drag folder → deploy
- **Netlify**: https://netlify.com → drag folder → deploy
- Tidak perlu setup apa-apa, langsung jalan!

---

## 📚 BAGIAN 4: Resource Belajar Tambahan

### Roadmap Belajar Web Development Pemula
1. **HTML dasar** (1-2 minggu) — W3Schools, MDN
2. **CSS dasar** (2-3 minggu) — Flexbox, Grid, Responsive
3. **JavaScript dasar** (3-4 minggu) — Variabel, function, DOM manipulation
4. **Project kecil** (1-2 minggu) — Bikin to-do list, calculator, dll
5. **JavaScript advanced** (4-6 minggu) — ES6+, async, fetch API
6. **Framework** (8-12 minggu) — React, Vue, atau Angular

### Channel YouTube Indonesia
- **Programmer Zaman Now** — ilmunya dalam, bahas konsep
- **Kelas Terbuka** — tutorial project-based
- **Web Programming UNPAS** — HTML/CSS/JS dasar
- **Sandbox Bima** — project-based

### Channel YouTube English
- **Traversy Media** — crash course berbagai topik
- **Fireship** — singkat & informatif
- **The Net Ninja** — tutorial lengkap
- **freeCodeCamp** — kursus panjang gratis

### Buku Gratis Online
- **Eloquent JavaScript** (gratis): https://eloquentjavascript.net/
- **You Don't Know JS** (gratis): https://github.com/getify/You-Dont-Know-JS
- **MDN Web Docs**: https://developer.mozilla.org/

### Komunitas
- **Stack Overflow** (Inggris): https://stackoverflow.com/
- **r/learnprogramming** Reddit: https://www.reddit.com/r/learnprogramming/
- **Discord FreeCodeCamp**: https://www.freecodecamp.org/news/freecodecamp-discord-chat-server/
- **Grup Facebook "Programmer Indonesia"**

---

## ✅ Checklist Final

Setelah baca panduan ini, Anda harus bisa:

- [ ] Membuka aplikasi dan paham cara navigasi 26 halaman
- [ ] Menambah anggota baru
- [ ] Menambah buku baru (cetak & digital)
- [ ] Mencatat kunjungan anggota
- [ ] Meminjam buku cetak & melihat stok berkurang otomatis
- [ ] Memberi review buku digital dengan rating bintang
- [ ] Lihat statistik peminjaman
- [ ] Reset data ke kondisi awal
- [ ] Mengerti struktur dasar HTML (`<head>`, `<body>`, tag umum)
- [ ] Mengubah warna di CSS
- [ ] Membaca kode JavaScript di `script.js` dan paham maksudnya
- [ ] Pakai Console browser untuk inspect data

---

## 🆘 Butuh Bantuan?

1. **Buka Console** (F12) → lihat error merah
2. **Baca pesan error** — biasanya ada nomor baris
3. **Google errornya** — copy paste error ke Google
4. **Cek dokumentasi** MDN/W3Schools
5. **Tanya Stack Overflow** kalau stuck

Selamat belajar & semoga bermanfaat! 🎉
