/* ============================================================
   PERPUSTAKAAN ELEKTRONIK — script.js
   Vanilla JavaScript, semua data disimpan di localStorage
   ============================================================ */

'use strict';

/* ============================================================
   1. SEED DATA — Data awal saat pertama kali aplikasi dibuka
   ============================================================ */
const SEED = {
  groups: [
    { id: 'g1', name: 'X RPL 1', level: 'X', major: 'RPL', homeroom: 'Bpk. Andi Wijaya', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'g2', name: 'X RPL 2', level: 'X', major: 'RPL', homeroom: 'Ibu Siti Aminah', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'g3', name: 'XI RPL 1', level: 'XI', major: 'RPL', homeroom: 'Bpk. Budi Santoso', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'g4', name: 'XI TKJ 1', level: 'XI', major: 'TKJ', homeroom: 'Bpk. Hendra Gunawan', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'g5', name: 'XII RPL 1', level: 'XII', major: 'RPL', homeroom: 'Ibu Dewi Lestari', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'g6', name: 'XII TKJ 1', level: 'XII', major: 'TKJ', homeroom: 'Bpk. Rudi Hartono', createdAt: '2024-07-01T00:00:00.000Z' },
  ],
  raks: [
    { id: 'r1', code: 'A1', location: 'Lantai 1 - Sayap Kiri', capacity: 100, note: 'Buku TI kelas X', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'r2', code: 'A2', location: 'Lantai 1 - Sayap Kiri', capacity: 100, note: 'Buku TI kelas XI', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'r3', code: 'B1', location: 'Lantai 1 - Sayap Kanan', capacity: 80, note: 'Buku Umum', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'r4', code: 'B2', location: 'Lantai 1 - Sayap Kanan', capacity: 80, note: 'Buku Pelajaran', createdAt: '2024-07-01T00:00:00.000Z' },
    { id: 'r5', code: 'C1', location: 'Lantai 2 - Sayap Kiri', capacity: 120, note: 'Buku Referensi', createdAt: '2024-07-01T00:00:00.000Z' },
  ],
  members: [
    { id: 'm1', name: 'Ahmad Fauzi', nis: '2024001', gender: 'L', type: 'SISWA', groupId: 'g1', phone: '081234567001', email: 'ahmad@mail.com', address: 'Jl. Melati No. 1', status: 'ACTIVE', joinedAt: '2024-07-15T00:00:00.000Z' },
    { id: 'm2', name: 'Siti Nurhaliza', nis: '2024002', gender: 'P', type: 'SISWA', groupId: 'g1', phone: '081234567002', email: 'siti@mail.com', address: 'Jl. Mawar No. 5', status: 'ACTIVE', joinedAt: '2024-07-15T00:00:00.000Z' },
    { id: 'm3', name: 'Budi Pratama', nis: '2024003', gender: 'L', type: 'SISWA', groupId: 'g2', phone: '081234567003', email: 'budi@mail.com', address: 'Jl. Anggrek No. 12', status: 'ACTIVE', joinedAt: '2024-07-16T00:00:00.000Z' },
    { id: 'm4', name: 'Citra Kirana', nis: '2024004', gender: 'P', type: 'SISWA', groupId: 'g3', phone: '081234567004', email: 'citra@mail.com', address: 'Jl. Kenanga No. 7', status: 'ACTIVE', joinedAt: '2024-07-18T00:00:00.000Z' },
    { id: 'm5', name: 'Dimas Anggara', nis: '2024005', gender: 'L', type: 'SISWA', groupId: 'g3', phone: '081234567005', email: 'dimas@mail.com', address: 'Jl. Dahlia No. 3', status: 'ACTIVE', joinedAt: '2024-07-20T00:00:00.000Z' },
    { id: 'm6', name: 'Eka Putri', nis: '2024006', gender: 'P', type: 'SISWA', groupId: 'g4', phone: '081234567006', email: 'eka@mail.com', address: 'Jl. Flamboyan No. 9', status: 'ACTIVE', joinedAt: '2024-08-01T00:00:00.000Z' },
    { id: 'm7', name: 'Fajar Hidayat', nis: '2024007', gender: 'L', type: 'SISWA', groupId: 'g5', phone: '081234567007', email: 'fajar@mail.com', address: 'Jl. Cempaka No. 4', status: 'ACTIVE', joinedAt: '2024-08-02T00:00:00.000Z' },
    { id: 'm8', name: 'Gita Saraswati', nis: '2024008', gender: 'P', type: 'SISWA', groupId: 'g5', phone: '081234567008', email: 'gita@mail.com', address: 'Jl. Teratai No. 8', status: 'ACTIVE', joinedAt: '2024-08-05T00:00:00.000Z' },
    { id: 'm9', name: 'Hendra Wijaya', nis: '2024009', gender: 'L', type: 'SISWA', groupId: 'g6', phone: '081234567009', email: 'hendra@mail.com', address: 'Jl. Seroja No. 2', status: 'ACTIVE', joinedAt: '2024-08-10T00:00:00.000Z' },
    { id: 'm10', name: 'Indah Permatasari', nis: '2024010', gender: 'P', type: 'SISWA', groupId: 'g6', phone: '081234567010', email: 'indah@mail.com', address: 'Jl. Bougenville No. 11', status: 'ACTIVE', joinedAt: '2024-08-12T00:00:00.000Z' },
    { id: 'm11', name: 'Joko Susilo', nis: '2024011', gender: 'L', type: 'SISWA', groupId: 'g1', phone: '081234567011', email: 'joko@mail.com', address: 'Jl. Kamboja No. 6', status: 'PENDING', joinedAt: '2024-09-01T00:00:00.000Z' },
    { id: 'm12', name: 'Kartika Dewi', nis: '2024012', gender: 'P', type: 'SISWA', groupId: 'g2', phone: '081234567012', email: 'kartika@mail.com', address: 'Jl. Nusa Indah No. 15', status: 'PENDING', joinedAt: '2024-09-05T00:00:00.000Z' },
    { id: 'm13', name: 'Lukman Hakim', nis: '19800501', gender: 'L', type: 'GURU', phone: '081234567013', email: 'lukman@school.id', address: 'Jl. Guru No. 1', status: 'ACTIVE', joinedAt: '2023-01-10T00:00:00.000Z' },
    { id: 'm14', name: 'Maya Sari', nis: '19850602', gender: 'P', type: 'GURU', phone: '081234567014', email: 'maya@school.id', address: 'Jl. Guru No. 2', status: 'ACTIVE', joinedAt: '2023-01-15T00:00:00.000Z' },
    { id: 'm15', name: 'Nanda Pradana', nis: '2024013', gender: 'L', type: 'SISWA', groupId: 'g4', phone: '081234567015', email: 'nanda@mail.com', address: 'Jl. Soka No. 13', status: 'PENDING', joinedAt: '2024-09-10T00:00:00.000Z' },
  ],
  books: [
    { id: 'b1', title: 'Pemrograman Web Dasar', author: 'Andi Wijaya', publisher: 'Informatika Bandung', year: 2023, isbn: '978-602-001-001-1', category: 'Teknologi Informasi', language: 'Indonesia', type: 'CETAK', stockInit: 10, stockNow: 8, damaged: 1, rakId: 'r1', pages: 320, description: 'Buku dasar pemrograman web untuk pemula', activated: true, createdAt: '2024-01-15T00:00:00.000Z' },
    { id: 'b2', title: 'Basis Data Relasional', author: 'Siti Aminah', publisher: 'Erlangga', year: 2022, isbn: '978-602-001-002-8', category: 'Teknologi Informasi', language: 'Indonesia', type: 'CETAK', stockInit: 5, stockNow: 4, damaged: 0, rakId: 'r1', pages: 250, description: 'Konsep MySQL dan normalisasi', activated: true, createdAt: '2024-01-20T00:00:00.000Z' },
    { id: 'b3', title: 'Algoritma & Pemrograman', author: 'Budi Santoso', publisher: 'Andi Publisher', year: 2023, isbn: '978-602-001-003-5', category: 'Teknologi Informasi', language: 'Indonesia', type: 'CETAK', stockInit: 8, stockNow: 5, damaged: 1, rakId: 'r2', pages: 410, description: 'Logika algoritma dari dasar', activated: true, createdAt: '2024-02-01T00:00:00.000Z' },
    { id: 'b4', title: 'Jaringan Komputer', author: 'Hendra Gunawan', publisher: 'Informatika Bandung', year: 2021, isbn: '978-602-001-004-2', category: 'Teknologi Informasi', language: 'Indonesia', type: 'CETAK', stockInit: 6, stockNow: 6, damaged: 0, rakId: 'r2', pages: 380, description: 'OSI layer, TCP/IP, routing', activated: true, createdAt: '2024-02-15T00:00:00.000Z' },
    { id: 'b5', title: 'Sistem Operasi', author: 'Dewi Lestari', publisher: 'Graha Ilmu', year: 2022, isbn: '978-602-001-005-9', category: 'Teknologi Informasi', language: 'Indonesia', type: 'CETAK', stockInit: 4, stockNow: 3, damaged: 0, rakId: 'r3', pages: 290, description: 'Linux, Windows, manajemen proses', activated: true, createdAt: '2024-03-01T00:00:00.000Z' },
    { id: 'b6', title: 'Matematika Diskrit', author: 'Rudi Hartono', publisher: 'Erlangga', year: 2020, isbn: '978-602-001-006-6', category: 'Matematika', language: 'Indonesia', type: 'CETAK', stockInit: 7, stockNow: 6, damaged: 0, rakId: 'r3', pages: 220, description: 'Logika, himpunan, graf', activated: true, createdAt: '2024-03-10T00:00:00.000Z' },
    { id: 'b7', title: 'Bahasa Indonesia Kurikulum Merdeka', author: 'Tim Penulis', publisher: 'Pusat Kurikulum', year: 2023, isbn: '978-602-001-007-3', category: 'Bahasa', language: 'Indonesia', type: 'CETAK', stockInit: 15, stockNow: 13, damaged: 0, rakId: 'r4', pages: 180, description: 'Buku teks resmi', activated: true, createdAt: '2024-03-15T00:00:00.000Z' },
    { id: 'b8', title: 'Sejarah Indonesia Modern', author: 'Anhar Gonggong', publisher: 'Balai Pustaka', year: 2019, isbn: '978-602-001-008-0', category: 'Sejarah', language: 'Indonesia', type: 'CETAK', stockInit: 5, stockNow: 5, damaged: 0, rakId: 'r4', pages: 350, description: 'Sejarah Indonesia pasca kemerdekaan', activated: true, createdAt: '2024-04-01T00:00:00.000Z' },
    { id: 'b9', title: 'Pemrograman Modern dengan JavaScript', author: 'Nicholas C. Zakas', publisher: "O'Reilly Media", year: 2023, isbn: '978-602-002-001-1', category: 'Teknologi Informasi', language: 'Indonesia', type: 'DIGITAL', stockInit: 1, stockNow: 1, digitalUrl: '/digital/js-modern.pdf', pages: 450, description: 'Panduan ES6+ lengkap', activated: true, createdAt: '2024-04-15T00:00:00.000Z' },
    { id: 'b10', title: 'Clean Code di Python', author: 'Luciano Ramalho', publisher: "O'Reilly Media", year: 2022, isbn: '978-602-002-002-8', category: 'Teknologi Informasi', language: 'Indonesia', type: 'DIGITAL', stockInit: 1, stockNow: 1, digitalUrl: '/digital/python-clean.pdf', pages: 700, description: 'Best practice Python', activated: true, createdAt: '2024-04-20T00:00:00.000Z' },
    { id: 'b11', title: 'Atomic Habits', author: 'James Clear', publisher: 'Gramedia', year: 2020, isbn: '978-602-002-003-5', category: 'Pengembangan Diri', language: 'Indonesia', type: 'DIGITAL', stockInit: 1, stockNow: 1, digitalUrl: '/digital/atomic-habits.pdf', pages: 320, description: 'Membangun kebiasaan baik', activated: true, createdAt: '2024-05-01T00:00:00.000Z' },
    { id: 'b12', title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', publisher: 'Gramedia', year: 2017, isbn: '978-602-002-004-2', category: 'Bisnis & Keuangan', language: 'Indonesia', type: 'DIGITAL', stockInit: 1, stockNow: 1, digitalUrl: '/digital/rich-dad.pdf', pages: 280, description: 'Literasi keuangan dasar', activated: true, createdAt: '2024-05-10T00:00:00.000Z' },
    { id: 'b13', title: 'Sapiens: Riwayat Singkat Umat Manusia', author: 'Yuval Noah Harari', publisher: 'KPG', year: 2018, isbn: '978-602-002-005-9', category: 'Sejarah', language: 'Indonesia', type: 'DIGITAL', stockInit: 1, stockNow: 1, digitalUrl: '/digital/sapiens.pdf', pages: 600, description: 'Sejarah umat manusia', activated: true, createdAt: '2024-05-20T00:00:00.000Z' },
    { id: 'b14', title: 'Filosofi Teras', author: 'Henry Manampiring', publisher: 'Kompas', year: 2019, isbn: '978-602-002-006-6', category: 'Pengembangan Diri', language: 'Indonesia', type: 'DIGITAL', stockInit: 1, stockNow: 1, digitalUrl: '/digital/filosofi-teras.pdf', pages: 240, description: 'Stoicism untuk hidup modern', activated: false, createdAt: '2024-06-01T00:00:00.000Z' },
    { id: 'b15', title: 'Belajar Laravel untuk Pemula', author: 'Agus Saputra', publisher: 'Lokomedia', year: 2023, isbn: '978-602-002-007-3', category: 'Teknologi Informasi', language: 'Indonesia', type: 'DIGITAL', stockInit: 1, stockNow: 1, digitalUrl: '/digital/laravel-pemula.pdf', pages: 350, description: 'Tutorial Laravel 10', activated: true, createdAt: '2024-06-15T00:00:00.000Z' },
  ],
  stockTxns: [
    { id: 'st1', bookId: 'b1', type: 'MASUK', qty: 10, note: 'Pembelian awal', createdAt: '2024-01-15T00:00:00.000Z' },
    { id: 'st2', bookId: 'b1', type: 'KELUAR', qty: 2, note: 'Dipinjam anggota', createdAt: '2024-08-01T00:00:00.000Z' },
    { id: 'st3', bookId: 'b1', type: 'RUSAK', qty: 1, note: 'Halaman robek', createdAt: '2024-09-01T00:00:00.000Z' },
    { id: 'st4', bookId: 'b2', type: 'MASUK', qty: 5, note: 'Pembelian awal', createdAt: '2024-01-20T00:00:00.000Z' },
    { id: 'st5', bookId: 'b2', type: 'KELUAR', qty: 1, note: 'Dipinjam', createdAt: '2024-08-15T00:00:00.000Z' },
    { id: 'st6', bookId: 'b3', type: 'MASUK', qty: 8, note: 'Pembelian awal', createdAt: '2024-02-01T00:00:00.000Z' },
    { id: 'st7', bookId: 'b3', type: 'KELUAR', qty: 3, note: 'Dipinjam', createdAt: '2024-09-10T00:00:00.000Z' },
    { id: 'st8', bookId: 'b3', type: 'RUSAK', qty: 1, note: 'Cover rusak', createdAt: '2024-09-15T00:00:00.000Z' },
    { id: 'st9', bookId: 'b4', type: 'MASUK', qty: 6, note: 'Donasi', createdAt: '2024-02-15T00:00:00.000Z' },
    { id: 'st10', bookId: 'b5', type: 'MASUK', qty: 4, note: 'Pembelian', createdAt: '2024-03-01T00:00:00.000Z' },
    { id: 'st11', bookId: 'b5', type: 'KELUAR', qty: 1, note: 'Dipinjam', createdAt: '2024-09-18T00:00:00.000Z' },
    { id: 'st12', bookId: 'b6', type: 'MASUK', qty: 7, note: 'Pembelian', createdAt: '2024-03-10T00:00:00.000Z' },
    { id: 'st13', bookId: 'b6', type: 'KELUAR', qty: 1, note: 'Dipinjam', createdAt: '2024-09-20T00:00:00.000Z' },
    { id: 'st14', bookId: 'b7', type: 'MASUK', qty: 15, note: 'Pembelian', createdAt: '2024-03-15T00:00:00.000Z' },
    { id: 'st15', bookId: 'b7', type: 'KELUAR', qty: 2, note: 'Dipinjam', createdAt: '2024-09-22T00:00:00.000Z' },
    { id: 'st16', bookId: 'b8', type: 'MASUK', qty: 5, note: 'Pembelian', createdAt: '2024-04-01T00:00:00.000Z' },
  ],
  visits: [
    { id: 'v1', memberId: 'm1', name: 'Ahmad Fauzi', kelas: 'X RPL 1', purpose: 'Membaca buku', timeIn: new Date(Date.now() - 3600000).toISOString(), timeOut: null, note: '' },
    { id: 'v2', memberId: 'm2', name: 'Siti Nurhaliza', kelas: 'X RPL 1', purpose: 'Meminjam buku', timeIn: new Date(Date.now() - 7200000).toISOString(), timeOut: new Date(Date.now() - 6600000).toISOString(), note: '' },
    { id: 'v3', memberId: 'm3', name: 'Budi Pratama', kelas: 'X RPL 2', purpose: 'Belajar', timeIn: new Date(Date.now() - 10800000).toISOString(), timeOut: null, note: '' },
    { id: 'v4', memberId: 'm4', name: 'Citra Kirana', kelas: 'XI RPL 1', purpose: 'Mengembalikan buku', timeIn: new Date(Date.now() - 86400000).toISOString(), timeOut: new Date(Date.now() - 85800000).toISOString(), note: '' },
    { id: 'v5', memberId: 'm5', name: 'Dimas Anggara', kelas: 'XI RPL 1', purpose: 'Membaca buku', timeIn: new Date(Date.now() - 90000000).toISOString(), timeOut: new Date(Date.now() - 89400000).toISOString(), note: '' },
    { id: 'v6', memberId: null, name: 'Tamu Eksternal', kelas: 'Pengunjung', purpose: 'Membaca buku referensi', timeIn: new Date(Date.now() - 172800000).toISOString(), timeOut: new Date(Date.now() - 172200000).toISOString(), note: '' },
  ],
  loanCetak: [
    { id: 'pc1', bookId: 'b1', memberId: 'm1', borrowerName: 'Ahmad Fauzi', qty: 1, borrowDate: '2024-09-15T00:00:00.000Z', dueDate: '2024-09-22T00:00:00.000Z', returnDate: '2024-09-21T00:00:00.000Z', status: 'RETURNED', note: '' },
    { id: 'pc2', bookId: 'b3', memberId: 'm3', borrowerName: 'Budi Pratama', qty: 1, borrowDate: '2024-09-18T00:00:00.000Z', dueDate: '2024-09-25T00:00:00.000Z', returnDate: null, status: 'ACTIVE', note: '' },
    { id: 'pc3', bookId: 'b5', memberId: 'm4', borrowerName: 'Citra Kirana', qty: 1, borrowDate: '2024-09-18T00:00:00.000Z', dueDate: '2024-09-25T00:00:00.000Z', returnDate: null, status: 'ACTIVE', note: '' },
    { id: 'pc4', bookId: 'b6', memberId: 'm5', borrowerName: 'Dimas Anggara', qty: 1, borrowDate: '2024-09-10T00:00:00.000Z', dueDate: '2024-09-17T00:00:00.000Z', returnDate: null, status: 'OVERDUE', note: 'Sudah lewat jatuh tempo' },
    { id: 'pc5', bookId: 'b7', memberId: 'm6', borrowerName: 'Eka Putri', qty: 1, borrowDate: '2024-09-19T00:00:00.000Z', dueDate: '2024-09-26T00:00:00.000Z', returnDate: null, status: 'PENDING', note: '' },
    { id: 'pc6', bookId: 'b2', memberId: 'm7', borrowerName: 'Fajar Hidayat', qty: 1, borrowDate: '2024-09-20T00:00:00.000Z', dueDate: '2024-09-27T00:00:00.000Z', returnDate: null, status: 'PENDING', note: '' },
    { id: 'pc7', bookId: 'b4', memberId: 'm8', borrowerName: 'Gita Saraswati', qty: 1, borrowDate: '2024-09-12T00:00:00.000Z', dueDate: '2024-09-19T00:00:00.000Z', returnDate: '2024-09-18T00:00:00.000Z', status: 'RETURNED', note: '' },
    { id: 'pc8', bookId: 'b8', memberId: 'm9', borrowerName: 'Hendra Wijaya', qty: 1, borrowDate: '2024-09-14T00:00:00.000Z', dueDate: '2024-09-21T00:00:00.000Z', returnDate: null, status: 'ACTIVE', note: '' },
  ],
  loanDigital: [
    { id: 'pd1', bookId: 'b9', memberId: 'm1', borrowerName: 'Ahmad Fauzi', borrowDate: '2024-09-18T00:00:00.000Z', dueDate: '2024-09-25T00:00:00.000Z', returnDate: null, status: 'ACTIVE', note: '' },
    { id: 'pd2', bookId: 'b10', memberId: 'm2', borrowerName: 'Siti Nurhaliza', borrowDate: '2024-09-19T00:00:00.000Z', dueDate: '2024-09-26T00:00:00.000Z', returnDate: null, status: 'ACTIVE', note: '' },
    { id: 'pd3', bookId: 'b11', memberId: 'm3', borrowerName: 'Budi Pratama', borrowDate: '2024-09-15T00:00:00.000Z', dueDate: '2024-09-22T00:00:00.000Z', returnDate: '2024-09-20T00:00:00.000Z', status: 'RETURNED', note: '' },
    { id: 'pd4', bookId: 'b12', memberId: 'm4', borrowerName: 'Citra Kirana', borrowDate: '2024-09-20T00:00:00.000Z', dueDate: '2024-09-27T00:00:00.000Z', returnDate: null, status: 'PENDING', note: '' },
    { id: 'pd5', bookId: 'b13', memberId: 'm5', borrowerName: 'Dimas Anggara', borrowDate: '2024-09-13T00:00:00.000Z', dueDate: '2024-09-20T00:00:00.000Z', returnDate: null, status: 'OVERDUE', note: 'Sudah lewat jatuh tempo' },
    { id: 'pd6', bookId: 'b15', groupId: 'g1', borrowerName: 'Kelas X RPL 1', borrowDate: '2024-09-21T00:00:00.000Z', dueDate: '2024-09-28T00:00:00.000Z', returnDate: null, status: 'ACTIVE', note: 'Peminjaman kelas kolektif' },
  ],
  reviews: [
    { id: 'rv1', bookId: 'b9', memberId: 'm1', reviewerName: 'Ahmad Fauzi', rating: 5, comment: 'Sangat lengkap dan mudah dipahami untuk pemula.', createdAt: '2024-09-20T00:00:00.000Z' },
    { id: 'rv2', bookId: 'b9', memberId: 'm3', reviewerName: 'Budi Pratama', rating: 4, comment: 'Bagus, meski ada beberapa bab yang terlalu padat.', createdAt: '2024-09-19T00:00:00.000Z' },
    { id: 'rv3', bookId: 'b10', memberId: 'm2', reviewerName: 'Siti Nurhaliza', rating: 5, comment: 'Penjelasan clean code paling lengkap!', createdAt: '2024-09-21T00:00:00.000Z' },
    { id: 'rv4', bookId: 'b11', memberId: 'm4', reviewerName: 'Citra Kirana', rating: 5, comment: 'Mengubah cara saya membangun kebiasaan.', createdAt: '2024-09-18T00:00:00.000Z' },
    { id: 'rv5', bookId: 'b12', memberId: 'm5', reviewerName: 'Dimas Anggara', rating: 4, comment: 'Inspiratif, walaupun beberapa konsep kurang relevan untuk konteks lokal.', createdAt: '2024-09-17T00:00:00.000Z' },
    { id: 'rv6', bookId: 'b13', memberId: 'm6', reviewerName: 'Eka Putri', rating: 5, comment: 'Mindblowing! Membuka wawasan tentang sejarah manusia.', createdAt: '2024-09-16T00:00:00.000Z' },
    { id: 'rv7', bookId: 'b15', memberId: 'm7', reviewerName: 'Fajar Hidayat', rating: 4, comment: 'Tutorial yang cocok untuk pemula Laravel.', createdAt: '2024-09-15T00:00:00.000Z' },
  ],
};

/* ============================================================
   2. STORAGE LAYER — Baca/tulis localStorage
   ============================================================ */
const DB = {
  KEYS: { groups: 'perpus_groups', raks: 'perpus_raks', members: 'perpus_members', books: 'perpus_books', stockTxns: 'perpus_stocktxn', visits: 'perpus_visits', loanCetak: 'perpus_loancetak', loanDigital: 'perpus_loandigital', reviews: 'perpus_reviews', init: 'perpus_initialized_v1' },

  read(key, fallback = []) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { console.error('Read error:', e); return fallback; }
  },

  write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Write error:', e); toast('Gagal menyimpan data: ' + e.message, 'error'); }
  },

  ensureInit() {
    if (localStorage.getItem(this.KEYS.init) === '1') return;
    Object.keys(SEED).forEach(k => this.write(this.KEYS[k], SEED[k]));
    localStorage.setItem(this.KEYS.init, '1');
  },

  reset() {
    Object.values(this.KEYS).forEach(k => localStorage.removeItem(k));
    this.ensureInit();
    toast('Data berhasil di-reset ke kondisi awal', 'success');
  },

  // Generic getters
  getGroups() { return this.read(this.KEYS.groups); },
  getRaks() { return this.read(this.KEYS.raks); },
  getMembers() { return this.read(this.KEYS.members); },
  getBooks() { return this.read(this.KEYS.books); },
  getStockTxns() { return this.read(this.KEYS.stockTxns); },
  getVisits() { return this.read(this.KEYS.visits); },
  getLoanCetak() { return this.read(this.KEYS.loanCetak); },
  getLoanDigital() { return this.read(this.KEYS.loanDigital); },
  getReviews() { return this.read(this.KEYS.reviews); },

  // Save helpers
  saveGroups(v) { this.write(this.KEYS.groups, v); },
  saveRaks(v) { this.write(this.KEYS.raks, v); },
  saveMembers(v) { this.write(this.KEYS.members, v); },
  saveBooks(v) { this.write(this.KEYS.books, v); },
  saveStockTxns(v) { this.write(this.KEYS.stockTxns, v); },
  saveVisits(v) { this.write(this.KEYS.visits, v); },
  saveLoanCetak(v) { this.write(this.KEYS.loanCetak, v); },
  saveLoanDigital(v) { this.write(this.KEYS.loanDigital, v); },
  saveReviews(v) { this.write(this.KEYS.reviews, v); },
};

/* ============================================================
   3. UTILITIES
   ============================================================ */
function genId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function formatDate(d) {
  if (!d) return '-';
  try { return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }); }
  catch { return '-'; }
}

function formatDateTime(d) {
  if (!d) return '-';
  try { return new Date(d).toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
  catch { return '-'; }
}

function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function statusBadge(status) {
  const map = {
    ACTIVE: 'blue', APPROVED: 'green', RETURNED: 'gray', PENDING: 'amber',
    OVERDUE: 'red', REJECTED: 'red', MASUK: 'green', KELUAR: 'amber', RUSAK: 'red',
    CETAK: 'blue', DIGITAL: 'purple', SISWA: 'blue', GURU: 'purple', STAF: 'gray',
  };
  const color = map[status] || 'gray';
  return `<span class="badge badge-${color}">${escapeHtml(status)}</span>`;
}

function stars(rating) {
  return '<span class="stars">' + '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating) + '</span>';
}

function toast(msg, type = 'info') {
  const container = document.getElementById('toastContainer') || (() => {
    const div = document.createElement('div');
    div.id = 'toastContainer';
    div.className = 'toast-container';
    document.body.appendChild(div);
    return div;
  })();
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${escapeHtml(msg)}</span>`;
  container.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(100%)'; setTimeout(() => t.remove(), 300); }, 3000);
}

function confirmDialog(msg) {
  return confirm(msg);
}

/* ============================================================
   4. SIDEBAR & NAVIGATION
   ============================================================ */
const PAGE_TITLES = {
  'Dashboard': 'Dashboard',
  'KelolaGrupKelas': 'Kelola Group / Kelas',
  'BukuKunjungan': 'Buku Kunjungan',
  'ApprovalAnggota': 'Approval Anggota',
  'ListAnggota': 'List Anggota',
  'Aktivasi': 'Aktivasi Buku Digital',
  'AjukanPeminjamanDigital': 'Ajukan Peminjaman Buku Digital',
  'ApprovalPeminjamanDigital': 'Approval Peminjaman Buku Digital',
  'HistoryPeminjamanDigital': 'History Peminjaman Buku Digital',
  'PeminjamanBukuKelas': 'Peminjaman Buku Digital Kelas',
  'PengembalianBukuKelas': 'Pengembalian Buku Digital Kelas',
  'PeminjamanBukuPerhari': 'Peminjaman Buku Digital Perhari',
  'ReviewBukuDigital': 'Review Buku Digital',
  'TutorialInventori': 'Tutorial Inventori',
  'KoleksiBuku': 'Koleksi Buku',
  'TransaksiKeluarMasuk': 'Transaksi Stok Keluar / Masuk',
  'StokAkhir': 'Stok Akhir Buku Cetak',
  'StokRusak': 'Stok Rusak',
  'KartuStok': 'Kartu Stok Buku',
  'KelolaRak': 'Kelola Rak Buku',
  'AjukanPeminjamanCetak': 'Ajukan Peminjaman Buku Cetak',
  'KonfirmasiPengembalianCetak': 'Konfirmasi & Pengembalian Buku Cetak',
  'HistoriPeminjamanCetak': 'Histori Peminjaman Buku Cetak',
  'KartuPeminjamanBuku': 'Kartu Peminjaman Buku',
  'KartuPeminjamanSiswa': 'Kartu Peminjaman Siswa',
  'StatistikPeminjaman': 'Statistik Peminjaman',
};

function navigateTo(pageId, label) {
  // Hide all page sections
  document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  // Update breadcrumb
  const bc = document.getElementById('breadcrumbCurrent');
  if (bc) bc.textContent = label || PAGE_TITLES[pageId] || pageId;
  // Update active menu
  document.querySelectorAll('.menu-group > ul > li > a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.navbar ul li ul li a').forEach(a => a.classList.remove('active-child'));
  // Find the menu item with matching data-page
  const menuLink = document.querySelector(`.menu-group > ul > li > a[data-page="${pageId}"]`);
  if (menuLink) menuLink.classList.add('active');
  else {
    // find submenu link
    const subLink = Array.from(document.querySelectorAll('.navbar ul li ul li a')).find(a => (a.dataset.page === pageId));
    if (subLink) {
      subLink.classList.add('active-child');
      // open parent
      const parent = subLink.closest('.menu-group > ul > li');
      const parentLink = parent.querySelector(':scope > a');
      if (parentLink) parentLink.classList.add('active');
      const submenu = parent.querySelector(':scope > ul');
      if (submenu) submenu.classList.add('open');
    }
  }
  // Render page content
  renderPage(pageId);
}

function renderPage(pageId) {
  try {
    switch (pageId) {
      case 'Dashboard': renderDashboard(); break;
      case 'KelolaGrupKelas': renderGroupPage(); break;
      case 'BukuKunjungan': renderVisitPage(); break;
      case 'ApprovalAnggota': renderApprovalPage(); break;
      case 'ListAnggota': renderMemberListPage(); break;
      case 'Aktivasi': renderActivationPage(); break;
      case 'AjukanPeminjamanDigital': renderAjukanDigitalPage(); break;
      case 'ApprovalPeminjamanDigital': renderApprovalDigitalPage(); break;
      case 'HistoryPeminjamanDigital': renderHistoryDigitalPage(); break;
      case 'PeminjamanBukuKelas': renderPeminjamanKelasPage(); break;
      case 'PengembalianBukuKelas': renderPengembalianKelasPage(); break;
      case 'PeminjamanBukuPerhari': renderLaporanHarianDigitalPage(); break;
      case 'ReviewBukuDigital': renderReviewDigitalPage(); break;
      case 'TutorialInventori': renderTutorialPage(); break;
      case 'KoleksiBuku': renderKoleksiBukuPage(); break;
      case 'TransaksiKeluarMasuk': renderTransaksiStokPage(); break;
      case 'StokAkhir': renderStokAkhirPage(); break;
      case 'StokRusak': renderStokRusakPage(); break;
      case 'KartuStok': renderKartuStokPage(); break;
      case 'KelolaRak': renderKelolaRakPage(); break;
      case 'AjukanPeminjamanCetak': renderAjukanCetakPage(); break;
      case 'KonfirmasiPengembalianCetak': renderKonfirmasiCetakPage(); break;
      case 'HistoriPeminjamanCetak': renderHistoriCetakPage(); break;
      case 'KartuPeminjamanBuku': renderKartuPeminjamanBukuPage(); break;
      case 'KartuPeminjamanSiswa': renderKartuPeminjamanSiswaPage(); break;
      case 'StatistikPeminjaman': renderStatistikPage(); break;
    }
  } catch (e) {
    console.error('Render error:', e);
    const target = document.getElementById('page-' + pageId);
    if (target) target.innerHTML = `<div class="empty-state">Terjadi error saat memuat halaman: ${escapeHtml(e.message)}</div>`;
  }
}

/* ============================================================
   5. SIDEBAR ACCORDION
   ============================================================ */
function setupSidebar() {
  const menuLinks = document.querySelectorAll('.menu-group > ul > li > a');
  const subMenus = document.querySelectorAll('.navbar ul li ul');

  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const nextSubMenu = this.nextElementSibling;
      const hasSubMenu = nextSubMenu && nextSubMenu.tagName === 'UL';
      const isCurrentlyOpen = hasSubMenu && nextSubMenu.classList.contains('open');
      const pageId = this.dataset.page;

      // Tutup semua submenu lain
      subMenus.forEach(m => { if (m !== nextSubMenu) m.classList.remove('open'); });
      menuLinks.forEach(l => { if (l !== this) l.classList.remove('active'); });

      if (hasSubMenu) {
        if (!isCurrentlyOpen) {
          nextSubMenu.classList.add('open');
          this.classList.add('active');
          // Navigate to first child
          const firstChildLink = nextSubMenu.querySelector('li a');
          if (firstChildLink) {
            const childPage = firstChildLink.dataset.page;
            if (childPage) navigateTo(childPage, firstChildLink.textContent.trim());
          }
        } else {
          // close
          nextSubMenu.classList.remove('open');
        }
      } else if (pageId) {
        this.classList.add('active');
        navigateTo(pageId, PAGE_TITLES[pageId] || this.textContent.trim());
      }
    });
  });

  // Submenu click handlers
  document.querySelectorAll('.navbar ul li ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.navbar ul li ul li a').forEach(l => l.classList.remove('active-child'));
      this.classList.add('active-child');
      const pageId = this.dataset.page;
      if (pageId) navigateTo(pageId, this.textContent.trim());
    });
  });
}

/* ============================================================
   6. PAGE RENDERERS — Dashboard
   ============================================================ */
function renderDashboard() {
  const books = DB.getBooks();
  const members = DB.getMembers();
  const visits = DB.getVisits();
  const loanC = DB.getLoanCetak();
  const loanD = DB.getLoanDigital();
  const raks = DB.getRaks();

  const stats = {
    koleksi: books.length,
    anggota: members.filter(m => m.status === 'ACTIVE').length,
    dipinjam: loanC.filter(l => l.status === 'ACTIVE').length + loanD.filter(l => l.status === 'ACTIVE').length,
    terlambat: loanC.filter(l => l.status === 'OVERDUE').length + loanD.filter(l => l.status === 'OVERDUE').length,
    bukuCetak: books.filter(b => b.type === 'CETAK').length,
    bukuDigital: books.filter(b => b.type === 'DIGITAL').length,
    anggotaPending: members.filter(m => m.status === 'PENDING').length,
    kunjunganHariIni: visits.filter(v => {
      const today = new Date(); today.setHours(0, 0, 0, 0);
      return new Date(v.timeIn) >= today;
    }).length,
  };

  document.getElementById('statKoleksi').textContent = stats.koleksi;
  document.getElementById('statAnggota').textContent = stats.anggota;
  document.getElementById('statDipinjam').textContent = stats.dipinjam;
  document.getElementById('statTerlambat').textContent = stats.terlambat;

  // Additional stats
  const addStats = document.getElementById('additionalStats');
  if (addStats) {
    addStats.innerHTML = `
      <div class="stat-card">
        <div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
        <div><div class="stat-value">${stats.bukuCetak}</div><div class="stat-label">Buku Cetak</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon purple"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <div><div class="stat-value">${stats.bukuDigital}</div><div class="stat-label">Buku Digital</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon amber"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg></div>
        <div><div class="stat-value">${stats.anggotaPending}</div><div class="stat-label">Anggota Menunggu Approval</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon cyan"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
        <div><div class="stat-value">${stats.kunjunganHariIni}</div><div class="stat-label">Kunjungan Hari Ini</div></div>
      </div>`;
  }

  // Chart 7 hari
  const chart = document.getElementById('chartContainer');
  if (chart) {
    const sevenDaysAgo = new Date(); sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const peminjaman7hari = loanC.filter(l => new Date(l.borrowDate) >= sevenDaysAgo);
    const chartData = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const dayStr = d.toISOString().slice(0, 10);
      const count = peminjaman7hari.filter(p => p.borrowDate.slice(0, 10) === dayStr).length;
      chartData.push({ date: dayStr, count });
    }
    const maxCount = Math.max(...chartData.map(d => d.count), 1);
    chart.innerHTML = chartData.map(d => `
      <div class="chart-bar-wrap">
        <div class="chart-bar-value">${d.count}</div>
        <div class="chart-bar" style="height: ${(d.count / maxCount) * 140}px"></div>
        <div class="chart-bar-label">${new Date(d.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })}</div>
      </div>`).join('');
  }

  // Buku terbaru
  const bukuTerbaru = document.getElementById('bukuTerbaruList');
  if (bukuTerbaru) {
    const recent = [...books].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);
    if (recent.length === 0) {
      bukuTerbaru.innerHTML = '<div class="empty-state">Belum ada buku.<br>Tambahkan di halaman Inventori.</div>';
    } else {
      bukuTerbaru.innerHTML = `<div class="book-grid">${recent.map(b => `
        <div class="book-card">
          <div class="book-cover"><span>${escapeHtml(b.title)}</span><span class="book-type-badge badge-${b.type === 'DIGITAL' ? 'purple' : 'blue'}">${b.type}</span></div>
          <div class="book-title">${escapeHtml(b.title)}</div>
          <div class="book-author">${escapeHtml(b.author || '-')}</div>
          <div class="book-meta">${escapeHtml(b.category || 'Umum')} · ${b.year || '-'}</div>
          ${b.type === 'CETAK' ? `<div class="book-meta">Stok: <strong style="color: ${b.stockNow > 0 ? '#16a34a' : '#dc2626'}">${b.stockNow}</strong></div>` : ''}
        </div>`).join('')}</div>`;
    }
  }

  // Aktivitas kunjungan
  const aktivitas = document.getElementById('aktivitasList');
  if (aktivitas) {
    const recent = [...visits].sort((a, b) => new Date(b.timeIn) - new Date(a.timeIn)).slice(0, 8);
    if (recent.length === 0) {
      aktivitas.innerHTML = '<div class="empty-state">Belum ada aktivitas kunjungan tercatat.</div>';
    } else {
      aktivitas.innerHTML = `<div class="table-wrap"><table class="table">
        <thead><tr><th>Nama Pengunjung</th><th>Kelas</th><th>Tujuan</th><th>Waktu Masuk</th><th>Waktu Keluar</th><th>Status</th></tr></thead>
        <tbody>${recent.map(v => `
          <tr>
            <td><strong>${escapeHtml(v.name)}</strong></td>
            <td>${escapeHtml(v.kelas || '-')}</td>
            <td>${escapeHtml(v.purpose || '-')}</td>
            <td>${formatDateTime(v.timeIn)}</td>
            <td>${v.timeOut ? formatDateTime(v.timeOut) : '-'}</td>
            <td>${statusBadge(v.timeOut ? 'RETURNED' : 'ACTIVE')}</td>
          </tr>`).join('')}</tbody></table></div>`;
    }
  }
}

/* ============================================================
   7. PAGE: KELOLA GROUP / KELAS (CRUD)
   ============================================================ */
function renderGroupPage() {
  const groups = DB.getGroups();
  const members = DB.getMembers();
  const container = document.getElementById('groupTableBody');
  if (!container) return;
  if (groups.length === 0) {
    container.innerHTML = '<tr><td colspan="6" class="empty-state">Belum ada kelas. Klik tombol "Tambah Kelas".</td></tr>';
    return;
  }
  container.innerHTML = groups.map(g => {
    const count = members.filter(m => m.groupId === g.id).length;
    return `<tr>
      <td><strong>${escapeHtml(g.name)}</strong></td>
      <td><span class="badge badge-blue">${escapeHtml(g.level)}</span></td>
      <td>${escapeHtml(g.major || '-')}</td>
      <td>${escapeHtml(g.homeroom || '-')}</td>
      <td><strong>${count}</strong> anggota</td>
      <td><div class="row-actions">
        <button class="btn btn-ghost btn-sm" onclick="openGroupModal('${g.id}')">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteGroup('${g.id}')">Hapus</button>
      </div></td>
    </tr>`;
  }).join('');
}

function openGroupModal(id) {
  const modal = document.getElementById('groupModal');
  const form = document.getElementById('groupForm');
  if (id) {
    const g = DB.getGroups().find(x => x.id === id);
    if (!g) return;
    document.getElementById('groupModalTitle').textContent = 'Edit Kelas: ' + g.name;
    form.elements['groupId'].value = g.id;
    form.elements['name'].value = g.name;
    form.elements['level'].value = g.level;
    form.elements['major'].value = g.major || '';
    form.elements['homeroom'].value = g.homeroom || '';
  } else {
    document.getElementById('groupModalTitle').textContent = 'Tambah Kelas Baru';
    form.reset();
    form.elements['groupId'].value = '';
  }
  modal.classList.add('open');
}

function closeGroupModal() {
  document.getElementById('groupModal').classList.remove('open');
}

function submitGroupForm(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.elements['groupId'].value;
  const data = {
    name: form.elements['name'].value.trim(),
    level: form.elements['level'].value,
    major: form.elements['major'].value.trim() || null,
    homeroom: form.elements['homeroom'].value.trim() || null,
  };
  if (!data.name) { toast('Nama kelas wajib diisi', 'error'); return; }
  const groups = DB.getGroups();
  if (id) {
    const idx = groups.findIndex(g => g.id === id);
    if (idx >= 0) {
      groups[idx] = { ...groups[idx], ...data };
      DB.saveGroups(groups);
      toast('Kelas berhasil diupdate', 'success');
    }
  } else {
    groups.push({ id: genId('g'), ...data, createdAt: new Date().toISOString() });
    DB.saveGroups(groups);
    toast('Kelas berhasil ditambahkan', 'success');
  }
  closeGroupModal();
  renderGroupPage();
}

function deleteGroup(id) {
  const g = DB.getGroups().find(x => x.id === id);
  if (!confirmDialog(`Hapus kelas "${g?.name}"?`)) return;
  DB.saveGroups(DB.getGroups().filter(x => x.id !== id));
  toast('Kelas dihapus', 'success');
  renderGroupPage();
}

/* ============================================================
   8. PAGE: BUKU KUNJUNGAN (CRUD)
   ============================================================ */
function renderVisitPage() {
  const visits = DB.getVisits().sort((a, b) => new Date(b.timeIn) - new Date(a.timeIn));
  const members = DB.getMembers({ status: 'ACTIVE' });
  const container = document.getElementById('visitTableBody');
  if (!container) return;
  // stats
  const today = new Date(); today.setHours(0, 0, 0, 0);
  document.getElementById('visitTotal').textContent = visits.length;
  document.getElementById('visitToday').textContent = visits.filter(v => new Date(v.timeIn) >= today).length;
  document.getElementById('visitActive').textContent = visits.filter(v => !v.timeOut).length;
  document.getElementById('visitMembers').textContent = members.length;

  if (visits.length === 0) {
    container.innerHTML = '<tr><td colspan="7" class="empty-state">Belum ada catatan kunjungan.<br>Klik "+ Catat Kunjungan".</td></tr>';
    return;
  }
  container.innerHTML = visits.map(v => `<tr>
    <td><strong>${escapeHtml(v.name)}</strong>${v.memberId ? '<span class="member-tag">[Anggota]</span>' : ''}</td>
    <td>${escapeHtml(v.kelas || '-')}</td>
    <td>${escapeHtml(v.purpose || '-')}</td>
    <td>${formatDateTime(v.timeIn)}</td>
    <td>${v.timeOut ? formatDateTime(v.timeOut) : '-'}</td>
    <td>${statusBadge(v.timeOut ? 'RETURNED' : 'ACTIVE')}</td>
    <td><div class="row-actions">
      ${!v.timeOut ? `<button class="btn btn-success btn-sm" onclick="closeVisit('${v.id}')">Keluar</button>` : ''}
      <button class="btn btn-danger btn-sm" onclick="deleteVisit('${v.id}')">Hapus</button>
    </div></td>
  </tr>`).join('');

  // populate member select
  const select = document.getElementById('visitMemberSelect');
  if (select) {
    select.innerHTML = '<option value="">-- Tamu / Anggota Manual --</option>' +
      members.map(m => `<option value="${m.id}">${escapeHtml(m.name)} (${escapeHtml(m.nis)}) - ${escapeHtml(m.group ? m.group.name || m.type : m.type)}</option>`).join('');
  }
}

function openVisitModal() {
  const form = document.getElementById('visitForm');
  form.reset();
  document.getElementById('visitModal').classList.add('open');
}
function closeVisitModal() { document.getElementById('visitModal').classList.remove('open'); }
function submitVisitForm(e) {
  e.preventDefault();
  const form = e.target;
  const memberId = form.elements['memberId'].value;
  const members = DB.getMembers();
  const m = members.find(mm => mm.id === memberId);
  const groups = DB.getGroups();
  const memberGroup = m ? groups.find(g => g.id === m.groupId) : null;
  const visit = {
    id: genId('v'),
    memberId: memberId || null,
    name: form.elements['name'].value.trim(),
    kelas: form.elements['kelas'].value.trim() || (memberGroup ? memberGroup.name : ''),
    purpose: form.elements['purpose'].value,
    note: form.elements['note'].value.trim(),
    timeIn: new Date().toISOString(),
    timeOut: null,
  };
  if (!visit.name) { toast('Nama wajib diisi', 'error'); return; }
  const visits = DB.getVisits();
  visits.push(visit);
  DB.saveVisits(visits);
  toast('Kunjungan dicatat', 'success');
  closeVisitModal();
  renderVisitPage();
}
function closeVisit(id) {
  const visits = DB.getVisits();
  const idx = visits.findIndex(v => v.id === id);
  if (idx >= 0) {
    visits[idx].timeOut = new Date().toISOString();
    DB.saveVisits(visits);
    toast('Kunjungan ditutup', 'success');
    renderVisitPage();
  }
}
function deleteVisit(id) {
  if (!confirmDialog('Hapus catatan kunjungan ini?')) return;
  DB.saveVisits(DB.getVisits().filter(v => v.id !== id));
  toast('Dihapus', 'success');
  renderVisitPage();
}
function onVisitMemberChange(sel) {
  const m = DB.getMembers().find(mm => mm.id === sel.value);
  if (m) {
    const form = document.getElementById('visitForm');
    form.elements['name'].value = m.name;
    const g = DB.getGroups().find(gg => gg.id === m.groupId);
    form.elements['kelas'].value = g ? g.name : '';
  }
}

/* ============================================================
   9. PAGE: APPROVAL ANGGOTA
   ============================================================ */
function renderApprovalPage() {
  const pending = DB.getMembers().filter(m => m.status === 'PENDING');
  const container = document.getElementById('approvalTableBody');
  if (!container) return;
  document.getElementById('approvalCount').textContent = pending.length + ' pendaftar menunggu';
  if (pending.length === 0) {
    container.innerHTML = '<tr><td colspan="7" class="empty-state">Tidak ada pendaftar yang menunggu approval.<br>Semua sudah diproses.</td></tr>';
    return;
  }
  const groups = DB.getGroups();
  container.innerHTML = pending.map(m => {
    const g = groups.find(gg => gg.id === m.groupId);
    return `<tr>
      <td><strong>${escapeHtml(m.name)}</strong></td>
      <td>${escapeHtml(m.nis)}</td>
      <td>${statusBadge(m.type)}</td>
      <td>${g ? escapeHtml(g.name) : '-'}</td>
      <td>${escapeHtml(m.phone || '-')}</td>
      <td>${formatDate(m.joinedAt)}</td>
      <td><div class="row-actions">
        <button class="btn btn-success btn-sm" onclick="approveMember('${m.id}')">Setujui</button>
        <button class="btn btn-danger btn-sm" onclick="rejectMember('${m.id}')">Tolak</button>
      </div></td>
    </tr>`;
  }).join('');
}
function approveMember(id) {
  const members = DB.getMembers();
  const idx = members.findIndex(m => m.id === id);
  if (idx >= 0) {
    members[idx].status = 'ACTIVE';
    DB.saveMembers(members);
    toast('Anggota disetujui', 'success');
    renderApprovalPage();
  }
}
function rejectMember(id) {
  if (!confirmDialog('Tolak pendaftaran ini?')) return;
  const members = DB.getMembers();
  const idx = members.findIndex(m => m.id === id);
  if (idx >= 0) {
    members[idx].status = 'REJECTED';
    DB.saveMembers(members);
    toast('Pendaftaran ditolak', 'warning');
    renderApprovalPage();
  }
}

/* ============================================================
   10. PAGE: LIST ANGGOTA (CRUD)
   ============================================================ */
let memberSearchTimeout;
function renderMemberListPage() {
  const search = (document.getElementById('memberSearch')?.value || '').toLowerCase();
  const statusFilter = document.getElementById('memberStatusFilter')?.value || '';
  const typeFilter = document.getElementById('memberTypeFilter')?.value || '';
  const groupFilter = document.getElementById('memberGroupFilter')?.value || '';
  let members = DB.getMembers();
  const groups = DB.getGroups();
  // populate group filter
  const gf = document.getElementById('memberGroupFilter');
  if (gf && gf.options.length <= 1) {
    gf.innerHTML = '<option value="">Semua Kelas</option>' + groups.map(g => `<option value="${g.id}">${escapeHtml(g.name)}</option>`).join('');
  }
  // filter
  members = members.filter(m => {
    if (statusFilter && m.status !== statusFilter) return false;
    if (typeFilter && m.type !== typeFilter) return false;
    if (groupFilter && m.groupId !== groupFilter) return false;
    if (search) {
      if (!m.name.toLowerCase().includes(search) && !m.nis.toLowerCase().includes(search) && !(m.phone || '').toLowerCase().includes(search)) return false;
    }
    return true;
  });
  document.getElementById('memberCount').textContent = `${members.length} dari ${DB.getMembers().length} anggota`;
  const container = document.getElementById('memberTableBody');
  if (!container) return;
  if (members.length === 0) {
    container.innerHTML = '<tr><td colspan="8" class="empty-state">Belum ada anggota yang cocok dengan filter.</td></tr>';
    return;
  }
  container.innerHTML = members.map(m => {
    const g = groups.find(gg => gg.id === m.groupId);
    const statusColor = m.status === 'ACTIVE' ? 'green' : m.status === 'PENDING' ? 'amber' : m.status === 'REJECTED' ? 'red' : 'gray';
    return `<tr>
      <td><strong>${escapeHtml(m.name)}</strong></td>
      <td>${escapeHtml(m.nis)}</td>
      <td>${statusBadge(m.type)}</td>
      <td>${g ? escapeHtml(g.name) : '-'}</td>
      <td>${escapeHtml(m.phone || '-')}</td>
      <td><span class="badge badge-${statusColor}">${escapeHtml(m.status)}</span></td>
      <td>${formatDate(m.joinedAt)}</td>
      <td><div class="row-actions">
        <button class="btn btn-ghost btn-sm" onclick="viewMember('${m.id}')">Detail</button>
        <button class="btn btn-ghost btn-sm" onclick="openMemberModal('${m.id}')">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteMember('${m.id}')">Hapus</button>
      </div></td>
    </tr>`;
  }).join('');
}

function openMemberModal(id) {
  const modal = document.getElementById('memberModal');
  const form = document.getElementById('memberForm');
  const groups = DB.getGroups();
  // populate group select
  const sel = form.elements['groupId'];
  sel.innerHTML = '<option value="">-- Tidak ada --</option>' + groups.map(g => `<option value="${g.id}">${escapeHtml(g.name)}</option>`).join('');
  if (id) {
    const m = DB.getMembers().find(x => x.id === id);
    if (!m) return;
    document.getElementById('memberModalTitle').textContent = 'Edit Anggota: ' + m.name;
    form.elements['memberId'].value = m.id;
    form.elements['name'].value = m.name;
    form.elements['nis'].value = m.nis;
    form.elements['gender'].value = m.gender || 'L';
    form.elements['type'].value = m.type;
    form.elements['groupId'].value = m.groupId || '';
    form.elements['phone'].value = m.phone || '';
    form.elements['email'].value = m.email || '';
    form.elements['address'].value = m.address || '';
    form.elements['status'].value = m.status;
  } else {
    document.getElementById('memberModalTitle').textContent = 'Tambah Anggota Baru';
    form.reset();
    form.elements['memberId'].value = '';
    form.elements['gender'].value = 'L';
    form.elements['type'].value = 'SISWA';
    form.elements['status'].value = 'PENDING';
  }
  modal.classList.add('open');
}
function closeMemberModal() { document.getElementById('memberModal').classList.remove('open'); }
function submitMemberForm(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.elements['memberId'].value;
  const data = {
    name: form.elements['name'].value.trim(),
    nis: form.elements['nis'].value.trim(),
    gender: form.elements['gender'].value,
    type: form.elements['type'].value,
    groupId: form.elements['groupId'].value || null,
    phone: form.elements['phone'].value.trim() || null,
    email: form.elements['email'].value.trim() || null,
    address: form.elements['address'].value.trim() || null,
    status: form.elements['status'].value,
  };
  if (!data.name || !data.nis) { toast('Nama & NIS/NIP wajib diisi', 'error'); return; }
  const members = DB.getMembers();
  if (id) {
    const idx = members.findIndex(m => m.id === id);
    if (idx >= 0) {
      // check NIS conflict
      if (members.find(m => m.nis === data.nis && m.id !== id)) {
        toast('NIS/NIP sudah dipakai anggota lain', 'error');
        return;
      }
      members[idx] = { ...members[idx], ...data };
      DB.saveMembers(members);
      toast('Anggota diupdate', 'success');
    }
  } else {
    if (members.find(m => m.nis === data.nis)) { toast('NIS/NIP sudah terdaftar', 'error'); return; }
    members.push({ id: genId('m'), ...data, joinedAt: new Date().toISOString() });
    DB.saveMembers(members);
    toast('Anggota ditambahkan', 'success');
  }
  closeMemberModal();
  renderMemberListPage();
}
function deleteMember(id) {
  const m = DB.getMembers().find(x => x.id === id);
  if (!confirmDialog(`Hapus anggota "${m?.name}"?`)) return;
  DB.saveMembers(DB.getMembers().filter(x => x.id !== id));
  toast('Anggota dihapus', 'success');
  renderMemberListPage();
}
function viewMember(id) {
  const m = DB.getMembers().find(x => x.id === id);
  if (!m) return;
  const g = DB.getGroups().find(gg => gg.id === m.groupId);
  const visits = DB.getVisits().filter(v => v.memberId === id).slice(0, 5);
  const loanC = DB.getLoanCetak().filter(l => l.memberId === id).slice(0, 5);
  const loanD = DB.getLoanDigital().filter(l => l.memberId === id).slice(0, 5);
  const modal = document.getElementById('memberDetailModal');
  const body = document.getElementById('memberDetailBody');
  body.innerHTML = `
    <div class="info-grid">
      <div class="info-item"><div class="label">Nama</div><div class="value">${escapeHtml(m.name)}</div></div>
      <div class="info-item"><div class="label">NIS/NIP</div><div class="value">${escapeHtml(m.nis)}</div></div>
      <div class="info-item"><div class="label">Jenis Kelamin</div><div class="value">${m.gender === 'P' ? 'Perempuan' : 'Laki-laki'}</div></div>
      <div class="info-item"><div class="label">Tipe</div><div class="value">${statusBadge(m.type)}</div></div>
      <div class="info-item"><div class="label">Kelas</div><div class="value">${g ? escapeHtml(g.name) : '-'}</div></div>
      <div class="info-item"><div class="label">Status</div><div class="value">${statusBadge(m.status)}</div></div>
      <div class="info-item"><div class="label">Telepon</div><div class="value">${escapeHtml(m.phone || '-')}</div></div>
      <div class="info-item"><div class="label">Email</div><div class="value">${escapeHtml(m.email || '-')}</div></div>
      <div class="info-item"><div class="label">Alamat</div><div class="value">${escapeHtml(m.address || '-')}</div></div>
      <div class="info-item"><div class="label">Tgl Daftar</div><div class="value">${formatDate(m.joinedAt)}</div></div>
    </div>
    <h3 class="section-h3">Kunjungan Terbaru (${visits.length})</h3>
    ${visits.length === 0 ? '<div class="empty-state">Belum ada kunjungan.</div>' : `<div class="table-wrap"><table class="table"><thead><tr><th>Waktu</th><th>Tujuan</th></tr></thead><tbody>${visits.map(v => `<tr><td>${formatDateTime(v.timeIn)}</td><td>${escapeHtml(v.purpose || '-')}</td></tr>`).join('')}</tbody></table></div>`}
    <h3 class="section-h3">Peminjaman Cetak (${loanC.length})</h3>
    ${loanC.length === 0 ? '<div class="empty-state">Belum ada peminjaman cetak.</div>' : `<div class="table-wrap"><table class="table"><thead><tr><th>Buku</th><th>Tgl Pinjam</th><th>Status</th></tr></thead><tbody>${loanC.map(l => { const b = DB.getBooks().find(bb => bb.id === l.bookId); return `<tr><td>${escapeHtml(b?.title || '-')}</td><td>${formatDate(l.borrowDate)}</td><td>${statusBadge(l.status)}</td></tr>`; }).join('')}</tbody></table></div>`}
    <h3 class="section-h3">Peminjaman Digital (${loanD.length})</h3>
    ${loanD.length === 0 ? '<div class="empty-state">Belum ada peminjaman digital.</div>' : `<div class="table-wrap"><table class="table"><thead><tr><th>Buku</th><th>Tgl Pinjam</th><th>Status</th></tr></thead><tbody>${loanD.map(l => { const b = DB.getBooks().find(bb => bb.id === l.bookId); return `<tr><td>${escapeHtml(b?.title || '-')}</td><td>${formatDate(l.borrowDate)}</td><td>${statusBadge(l.status)}</td></tr>`; }).join('')}</tbody></table></div>`}
  `;
  modal.classList.add('open');
}
function closeMemberDetailModal() { document.getElementById('memberDetailModal').classList.remove('open'); }

/* ============================================================
   11. PAGE: AKTIVASI BUKU DIGITAL
   ============================================================ */
function renderActivationPage() {
  const books = DB.getBooks().filter(b => b.type === 'DIGITAL');
  const search = (document.getElementById('activationSearch')?.value || '').toLowerCase();
  const filtered = books.filter(b => !search || b.title.toLowerCase().includes(search) || (b.author || '').toLowerCase().includes(search));
  const container = document.getElementById('activationTableBody');
  if (!container) return;
  document.getElementById('activationActive').textContent = books.filter(b => b.activated).length;
  document.getElementById('activationInactive').textContent = books.filter(b => !b.activated).length;
  document.getElementById('activationTotal').textContent = books.length;
  if (filtered.length === 0) {
    container.innerHTML = '<tr><td colspan="7" class="empty-state">Belum ada buku digital.</td></tr>';
    return;
  }
  container.innerHTML = filtered.map(b => `<tr>
    <td><strong>${escapeHtml(b.title)}</strong></td>
    <td>${escapeHtml(b.author || '-')}</td>
    <td>${escapeHtml(b.category || '-')}</td>
    <td>${b.year || '-'}</td>
    <td><code>${escapeHtml(b.digitalUrl || '-')}</code></td>
    <td>${statusBadge(b.activated ? 'ACTIVE' : 'PENDING')}</td>
    <td><button class="btn btn-sm ${b.activated ? 'btn-warning' : 'btn-success'}" onclick="toggleActivation('${b.id}')">${b.activated ? 'Nonaktifkan' : 'Aktifkan'}</button></td>
  </tr>`).join('');
}
function toggleActivation(id) {
  const books = DB.getBooks();
  const idx = books.findIndex(b => b.id === id);
  if (idx >= 0) {
    books[idx].activated = !books[idx].activated;
    DB.saveBooks(books);
    toast(books[idx].activated ? 'Buku diaktifkan' : 'Buku dinonaktifkan', 'success');
    renderActivationPage();
  }
}

/* ============================================================
   12. PAGE: AJUKAN PEMINJAMAN DIGITAL
   ============================================================ */
function renderAjukanDigitalPage() {
  const books = DB.getBooks().filter(b => b.type === 'DIGITAL' && b.activated);
  const loans = DB.getLoanDigital().filter(l => l.status === 'PENDING');
  const container = document.getElementById('ajukanDigitalBooks');
  if (!container) return;
  if (books.length === 0) {
    container.innerHTML = '<div class="empty-state">Tidak ada buku digital yang aktif.<br>Aktifkan buku di halaman Aktivasi.</div>';
    return;
  }
  container.innerHTML = `<div class="book-grid">${books.map(b => `
    <div class="book-card">
      <div class="book-cover"><span>${escapeHtml(b.title)}</span><span class="book-type-badge badge-purple">DIGITAL</span></div>
      <div class="book-title">${escapeHtml(b.title)}</div>
      <div class="book-author">${escapeHtml(b.author || '-')}</div>
      <div class="book-meta">${escapeHtml(b.category || '-')} · ${b.pages || 0} hal</div>
      <button class="btn btn-primary btn-sm" onclick="openAjukanDigitalModal('${b.id}')">Pinjam Buku Ini</button>
    </div>`).join('')}</div>`;
  // pending loans
  const pending = document.getElementById('ajukanDigitalPending');
  if (pending) {
    if (loans.length === 0) {
      pending.innerHTML = '<div class="empty-state">Tidak ada pengajuan pending.</div>';
    } else {
      pending.innerHTML = `<div class="table-wrap"><table class="table"><thead><tr><th>Buku</th><th>Peminjam</th><th>Tgl Pinjam</th><th>Jatuh Tempo</th><th>Status</th></tr></thead><tbody>${loans.map(l => { const b = DB.getBooks().find(bb => bb.id === l.bookId); return `<tr><td><strong>${escapeHtml(b?.title || '-')}</strong></td><td>${escapeHtml(l.borrowerName || '-')}</td><td>${formatDate(l.borrowDate)}</td><td>${formatDate(l.dueDate)}</td><td>${statusBadge(l.status)}</td></tr>`; }).join('')}</tbody></table></div>`;
    }
  }
}
function openAjukanDigitalModal(bookId) {
  const form = document.getElementById('ajukanDigitalForm');
  form.reset();
  form.elements['bookId'].value = bookId;
  // populate members
  const members = DB.getMembers().filter(m => m.status === 'ACTIVE');
  form.elements['memberId'].innerHTML = '<option value="">-- Tidak ada --</option>' + members.map(m => `<option value="${m.id}">${escapeHtml(m.name)} (${escapeHtml(m.nis)})</option>`).join('');
  // default due date = +7 days
  const d = new Date(); d.setDate(d.getDate() + 7);
  form.elements['dueDate'].value = d.toISOString().slice(0, 10);
  document.getElementById('ajukanDigitalModal').classList.add('open');
}
function closeAjukanDigitalModal() { document.getElementById('ajukanDigitalModal').classList.remove('open'); }
function submitAjukanDigitalForm(e) {
  e.preventDefault();
  const form = e.target;
  const bookId = form.elements['bookId'].value;
  const memberId = form.elements['memberId'].value || null;
  const borrowerName = form.elements['borrowerName'].value.trim() || null;
  const dueDate = form.elements['dueDate'].value;
  const note = form.elements['note'].value.trim() || null;
  if (!bookId) { toast('Pilih buku', 'error'); return; }
  if (!memberId && !borrowerName) { toast('Pilih anggota atau isi nama peminjam', 'error'); return; }
  const loans = DB.getLoanDigital();
  loans.push({
    id: genId('pd'), bookId, memberId, borrowerName, groupId: null,
    borrowDate: new Date().toISOString(),
    dueDate: dueDate ? new Date(dueDate).toISOString() : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    returnDate: null, status: 'PENDING', note,
    createdAt: new Date().toISOString(),
  });
  DB.saveLoanDigital(loans);
  toast('Pengajuan peminjaman dikirim', 'success');
  closeAjukanDigitalModal();
  renderAjukanDigitalPage();
}

/* ============================================================
   13. PAGE: APPROVAL PEMINJAMAN DIGITAL
   ============================================================ */
function renderApprovalDigitalPage() {
  const loans = DB.getLoanDigital().filter(l => l.status === 'PENDING');
  const container = document.getElementById('approvalDigitalTableBody');
  if (!container) return;
  document.getElementById('approvalDigitalCount').textContent = loans.length + ' pengajuan menunggu';
  if (loans.length === 0) {
    container.innerHTML = '<tr><td colspan="6" class="empty-state">Tidak ada pengajuan yang menunggu approval.</td></tr>';
    return;
  }
  const books = DB.getBooks();
  container.innerHTML = loans.map(l => {
    const b = books.find(bb => bb.id === l.bookId);
    return `<tr>
      <td><strong>${escapeHtml(b?.title || '-')}</strong></td>
      <td>${escapeHtml(l.borrowerName || '-')}</td>
      <td>${formatDate(l.borrowDate)}</td>
      <td>${formatDate(l.dueDate)}</td>
      <td>${escapeHtml(l.note || '-')}</td>
      <td><div class="row-actions">
        <button class="btn btn-success btn-sm" onclick="approveDigitalLoan('${l.id}')">Setujui</button>
        <button class="btn btn-danger btn-sm" onclick="rejectDigitalLoan('${l.id}')">Tolak</button>
      </div></td>
    </tr>`;
  }).join('');
}
function approveDigitalLoan(id) {
  const loans = DB.getLoanDigital();
  const idx = loans.findIndex(l => l.id === id);
  if (idx >= 0) {
    loans[idx].status = 'ACTIVE';
    DB.saveLoanDigital(loans);
    toast('Peminjaman disetujui', 'success');
    renderApprovalDigitalPage();
  }
}
function rejectDigitalLoan(id) {
  if (!confirmDialog('Tolak pengajuan ini?')) return;
  const loans = DB.getLoanDigital();
  const idx = loans.findIndex(l => l.id === id);
  if (idx >= 0) {
    loans[idx].status = 'REJECTED';
    DB.saveLoanDigital(loans);
    toast('Pengajuan ditolak', 'warning');
    renderApprovalDigitalPage();
  }
}

/* ============================================================
   14. PAGE: HISTORY PEMINJAMAN DIGITAL
   ============================================================ */
function renderHistoryDigitalPage() {
  let loans = DB.getLoanDigital();
  const books = DB.getBooks();
  const search = (document.getElementById('historyDigitalSearch')?.value || '').toLowerCase();
  const status = document.getElementById('historyDigitalStatusFilter')?.value || '';
  if (status) loans = loans.filter(l => l.status === status);
  if (search) {
    loans = loans.filter(l => {
      const b = books.find(bb => bb.id === l.bookId);
      return (b?.title || '').toLowerCase().includes(search) ||
             (l.borrowerName || '').toLowerCase().includes(search);
    });
  }
  const container = document.getElementById('historyDigitalTableBody');
  if (!container) return;
  document.getElementById('historyDigitalCount').textContent = loans.length + ' catatan';
  if (loans.length === 0) {
    container.innerHTML = '<tr><td colspan="7" class="empty-state">Belum ada riwayat peminjaman.</td></tr>';
    return;
  }
  container.innerHTML = loans.map(l => {
    const b = books.find(bb => bb.id === l.bookId);
    return `<tr>
      <td><strong>${escapeHtml(b?.title || '-')}</strong></td>
      <td>${escapeHtml(l.borrowerName || '-')}</td>
      <td>${formatDate(l.borrowDate)}</td>
      <td>${formatDate(l.dueDate)}</td>
      <td>${formatDate(l.returnDate)}</td>
      <td>${statusBadge(l.status)}</td>
      <td>${(l.status === 'ACTIVE' || l.status === 'OVERDUE') ? `<button class="btn btn-success btn-sm" onclick="returnDigitalLoan('${l.id}')">Tandai Kembali</button>` : '<span class="text-muted">-</span>'}</td>
    </tr>`;
  }).join('');
}
function returnDigitalLoan(id) {
  if (!confirmDialog('Tandai buku ini sudah dikembalikan?')) return;
  const loans = DB.getLoanDigital();
  const idx = loans.findIndex(l => l.id === id);
  if (idx >= 0) {
    loans[idx].status = 'RETURNED';
    loans[idx].returnDate = new Date().toISOString();
    DB.saveLoanDigital(loans);
    toast('Buku dikembalikan', 'success');
    renderHistoryDigitalPage();
  }
}

/* ============================================================
   15. PAGE: PEMINJAMAN BUKU KELAS (DIGITAL)
   ============================================================ */
function renderPeminjamanKelasPage() {
  const loans = DB.getLoanDigital().filter(l => l.groupId);
  const container = document.getElementById('peminjamanKelasTableBody');
  if (!container) return;
  document.getElementById('peminjamanKelasCount').textContent = loans.length + ' peminjaman kelas';
  if (loans.length === 0) {
    container.innerHTML = '<tr><td colspan="5" class="empty-state">Belum ada peminjaman kelas.</td></tr>';
    return;
  }
  const books = DB.getBooks();
  const groups = DB.getGroups();
  container.innerHTML = loans.map(l => {
    const b = books.find(bb => bb.id === l.bookId);
    const g = groups.find(gg => gg.id === l.groupId);
    return `<tr>
      <td><strong>${escapeHtml(b?.title || '-')}</strong></td>
      <td><span class="badge badge-blue">${escapeHtml(g?.name || '-')}</span></td>
      <td>${formatDate(l.borrowDate)}</td>
      <td>${formatDate(l.dueDate)}</td>
      <td>${statusBadge(l.status)}</td>
    </tr>`;
  }).join('');
}
function openPeminjamanKelasModal() {
  const form = document.getElementById('peminjamanKelasForm');
  form.reset();
  const books = DB.getBooks().filter(b => b.type === 'DIGITAL' && b.activated);
  const groups = DB.getGroups();
  form.elements['bookId'].innerHTML = '<option value="">-- Pilih Buku --</option>' + books.map(b => `<option value="${b.id}">${escapeHtml(b.title)}</option>`).join('');
  form.elements['groupId'].innerHTML = '<option value="">-- Pilih Kelas --</option>' + groups.map(g => `<option value="${g.id}">${escapeHtml(g.name)} (${DB.getMembers().filter(m => m.groupId === g.id).length} anggota)</option>`).join('');
  const d = new Date(); d.setDate(d.getDate() + 7);
  form.elements['dueDate'].value = d.toISOString().slice(0, 10);
  document.getElementById('peminjamanKelasModal').classList.add('open');
}
function closePeminjamanKelasModal() { document.getElementById('peminjamanKelasModal').classList.remove('open'); }
function submitPeminjamanKelasForm(e) {
  e.preventDefault();
  const form = e.target;
  const bookId = form.elements['bookId'].value;
  const groupId = form.elements['groupId'].value;
  const dueDate = form.elements['dueDate'].value;
  const note = form.elements['note'].value.trim();
  if (!bookId || !groupId) { toast('Buku & Kelas wajib dipilih', 'error'); return; }
  const g = DB.getGroups().find(gg => gg.id === groupId);
  const loans = DB.getLoanDigital();
  loans.push({
    id: genId('pd'), bookId, memberId: null, groupId, borrowerName: `Kelas ${g?.name}`,
    borrowDate: new Date().toISOString(),
    dueDate: dueDate ? new Date(dueDate).toISOString() : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    returnDate: null, status: 'ACTIVE', note,
    createdAt: new Date().toISOString(),
  });
  DB.saveLoanDigital(loans);
  toast('Peminjaman kelas dicatat', 'success');
  closePeminjamanKelasModal();
  renderPeminjamanKelasPage();
}

/* ============================================================
   16. PAGE: PENGEMBALIAN BUKU KELAS
   ============================================================ */
function renderPengembalianKelasPage() {
  const loans = DB.getLoanDigital().filter(l => l.status === 'ACTIVE' || l.status === 'OVERDUE');
  const container = document.getElementById('pengembalianKelasTableBody');
  if (!container) return;
  document.getElementById('pengembalianKelasCount').textContent = loans.length + ' buku sedang dipinjam';
  if (loans.length === 0) {
    container.innerHTML = '<tr><td colspan="6" class="empty-state">Tidak ada buku yang perlu dikembalikan saat ini.</td></tr>';
    return;
  }
  const books = DB.getBooks();
  const groups = DB.getGroups();
  container.innerHTML = loans.map(l => {
    const b = books.find(bb => bb.id === l.bookId);
    const g = groups.find(gg => gg.id === l.groupId);
    return `<tr>
      <td><strong>${escapeHtml(b?.title || '-')}</strong></td>
      <td>${g ? `<span class="badge badge-blue">${escapeHtml(g.name)}</span>` : escapeHtml(l.borrowerName || '-')}</td>
      <td>${formatDate(l.borrowDate)}</td>
      <td>${formatDate(l.dueDate)}</td>
      <td>${statusBadge(l.status)}</td>
      <td><button class="btn btn-success btn-sm" onclick="returnKelasLoan('${l.id}')">Tandai Kembali</button></td>
    </tr>`;
  }).join('');
}
function returnKelasLoan(id) {
  if (!confirmDialog('Tandai buku ini sudah dikembalikan?')) return;
  const loans = DB.getLoanDigital();
  const idx = loans.findIndex(l => l.id === id);
  if (idx >= 0) {
    loans[idx].status = 'RETURNED';
    loans[idx].returnDate = new Date().toISOString();
    DB.saveLoanDigital(loans);
    toast('Buku dikembalikan', 'success');
    renderPengembalianKelasPage();
  }
}

/* ============================================================
   17. PAGE: PEMINJAMAN BUKU PERHARI (LAPORAN)
   ============================================================ */
function renderLaporanHarianDigitalPage() {
  const filterDate = document.getElementById('laporanHarianDate')?.value || '';
  let loans = DB.getLoanDigital();
  if (filterDate) {
    loans = loans.filter(l => l.borrowDate.slice(0, 10) === filterDate);
  }
  // group by date
  const byDate = {};
  loans.forEach(l => {
    const d = l.borrowDate.slice(0, 10);
    if (!byDate[d]) byDate[d] = [];
    byDate[d].push(l);
  });
  const dates = Object.keys(byDate).sort((a, b) => b.localeCompare(a));
  const container = document.getElementById('laporanHarianContent');
  if (!container) return;
  if (dates.length === 0) {
    container.innerHTML = '<div class="empty-state">Belum ada data peminjaman digital.</div>';
    return;
  }
  const books = DB.getBooks();
  container.innerHTML = dates.map(d => `
    <div class="panel">
      <div class="panel-header"><div><h2>${formatDate(d)}</h2><p>${byDate[d].length} peminjaman</p></div></div>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Buku</th><th>Peminjam/Kelas</th><th>Waktu</th><th>Jatuh Tempo</th><th>Status</th></tr></thead>
        <tbody>${byDate[d].map(l => {
          const b = books.find(bb => bb.id === l.bookId);
          return `<tr><td><strong>${escapeHtml(b?.title || '-')}</strong></td><td>${escapeHtml(l.borrowerName || '-')}</td><td>${formatDateTime(l.borrowDate)}</td><td>${formatDate(l.dueDate)}</td><td>${statusBadge(l.status)}</td></tr>`;
        }).join('')}</tbody>
      </table></div>
    </div>`).join('');
}

/* ============================================================
   18. PAGE: REVIEW BUKU DIGITAL
   ============================================================ */
function renderReviewDigitalPage() {
  const books = DB.getBooks().filter(b => b.type === 'DIGITAL');
  const reviews = DB.getReviews();
  // summary
  const bookStats = books.map(b => {
    const rs = reviews.filter(r => r.bookId === b.id);
    const avg = rs.length ? rs.reduce((s, r) => s + r.rating, 0) / rs.length : 0;
    return { book: b, count: rs.length, avg };
  }).filter(s => s.count > 0);
  const summaryEl = document.getElementById('reviewSummary');
  if (summaryEl) {
    if (bookStats.length === 0) {
      summaryEl.innerHTML = '<div class="empty-state">Belum ada review.</div>';
    } else {
      summaryEl.innerHTML = `<div class="table-wrap"><table class="table"><thead><tr><th>Judul</th><th>Penulis</th><th>Jumlah Review</th><th>Rating Rata-rata</th></tr></thead><tbody>${bookStats.map(s => `<tr><td><strong>${escapeHtml(s.book.title)}</strong></td><td>${escapeHtml(s.book.author || '-')}</td><td>${s.count} review</td><td>${stars(Math.round(s.avg))} <span class="avg-num">${s.avg.toFixed(1)}</span></td></tr>`).join('')}</tbody></table></div>`;
    }
  }
  // all reviews
  const allEl = document.getElementById('reviewAllList');
  if (allEl) {
    if (reviews.length === 0) {
      allEl.innerHTML = '<div class="empty-state">Belum ada review.</div>';
    } else {
      allEl.innerHTML = reviews.map(r => {
        const b = books.find(bb => bb.id === r.bookId);
        return `<div class="review-card">
          <div class="review-head">
            <div>
              <div class="review-book">${escapeHtml(b?.title || '-')}</div>
              <div class="review-meta">${escapeHtml(r.reviewerName || 'Anonim')} · ${formatDate(r.createdAt)}</div>
              <div class="review-stars">${stars(r.rating)}</div>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteReview('${r.id}')">Hapus</button>
          </div>
          ${r.comment ? `<div class="review-comment">${escapeHtml(r.comment)}</div>` : ''}
        </div>`;
      }).join('');
    }
  }
}
function openReviewModal() {
  const form = document.getElementById('reviewForm');
  form.reset();
  const books = DB.getBooks().filter(b => b.type === 'DIGITAL');
  form.elements['bookId'].innerHTML = '<option value="">-- Pilih Buku --</option>' + books.map(b => `<option value="${b.id}">${escapeHtml(b.title)}</option>`).join('');
  form.elements['rating'].value = '5';
  updateStarInput(5);
  document.getElementById('reviewModal').classList.add('open');
}
function closeReviewModal() { document.getElementById('reviewModal').classList.remove('open'); }
function updateStarInput(rating) {
  document.getElementById('reviewStarInput').innerHTML = [1,2,3,4,5].map(n => `<button type="button" class="star-btn ${n <= rating ? 'active' : ''}" onclick="updateStarInput(${n}); document.getElementById('reviewForm').elements['rating'].value='${n}';">★</button>`).join('');
}
function submitReviewForm(e) {
  e.preventDefault();
  const form = e.target;
  const bookId = form.elements['bookId'].value;
  const reviewerName = form.elements['reviewerName'].value.trim();
  const rating = parseInt(form.elements['rating'].value);
  const comment = form.elements['comment'].value.trim();
  if (!bookId) { toast('Pilih buku', 'error'); return; }
  const reviews = DB.getReviews();
  reviews.push({ id: genId('rv'), bookId, memberId: null, reviewerName: reviewerName || null, rating, comment: comment || null, createdAt: new Date().toISOString() });
  DB.saveReviews(reviews);
  toast('Review ditambahkan', 'success');
  closeReviewModal();
  renderReviewDigitalPage();
}
function deleteReview(id) {
  if (!confirmDialog('Hapus review ini?')) return;
  DB.saveReviews(DB.getReviews().filter(r => r.id !== id));
  toast('Review dihapus', 'success');
  renderReviewDigitalPage();
}

/* ============================================================
   19. PAGE: TUTORIAL INVENTORI
   ============================================================ */
function renderTutorialPage() {
  // static HTML, no logic needed
}

/* ============================================================
   20. PAGE: KOLEKSI BUKU (CRUD)
   ============================================================ */
function renderKoleksiBukuPage() {
  const search = (document.getElementById('bookSearch')?.value || '').toLowerCase();
  const typeFilter = document.getElementById('bookTypeFilter')?.value || '';
  const catFilter = document.getElementById('bookCategoryFilter')?.value || '';
  let books = DB.getBooks();
  if (typeFilter) books = books.filter(b => b.type === typeFilter);
  if (catFilter) books = books.filter(b => b.category === catFilter);
  if (search) {
    books = books.filter(b => b.title.toLowerCase().includes(search) || (b.author || '').toLowerCase().includes(search) || (b.isbn || '').toLowerCase().includes(search));
  }
  const raks = DB.getRaks();
  // populate category filter
  const cf = document.getElementById('bookCategoryFilter');
  if (cf && cf.options.length <= 1) {
    const cats = Array.from(new Set(DB.getBooks().map(b => b.category).filter(Boolean)));
    cf.innerHTML = '<option value="">Semua Kategori</option>' + cats.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  }
  // stats
  document.getElementById('bookTotal').textContent = books.length;
  document.getElementById('bookCetakCount').textContent = DB.getBooks().filter(b => b.type === 'CETAK').length;
  document.getElementById('bookDigitalCount').textContent = DB.getBooks().filter(b => b.type === 'DIGITAL').length;
  document.getElementById('bookDamaged').textContent = DB.getBooks().reduce((s, b) => s + b.damaged, 0);
  const container = document.getElementById('bookTableBody');
  if (!container) return;
  if (books.length === 0) {
    container.innerHTML = '<tr><td colspan="8" class="empty-state">Belum ada buku yang cocok.</td></tr>';
    return;
  }
  container.innerHTML = books.map(b => {
    const r = raks.find(rr => rr.id === b.rakId);
    return `<tr>
      <td><strong>${escapeHtml(b.title)}</strong></td>
      <td>${escapeHtml(b.author || '-')}</td>
      <td>${statusBadge(b.type)}</td>
      <td>${escapeHtml(b.category || '-')}</td>
      <td>${b.year || '-'}</td>
      <td>${b.type === 'CETAK' ? `<strong style="color: ${b.stockNow > 0 ? '#16a34a' : '#dc2626'}">${b.stockNow}</strong>` : statusBadge(b.activated ? 'ACTIVE' : 'PENDING')}</td>
      <td>${r ? escapeHtml(r.code) : '-'}</td>
      <td><div class="row-actions">
        <button class="btn btn-ghost btn-sm" onclick="openBookModal('${b.id}')">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteBook('${b.id}')">Hapus</button>
      </div></td>
    </tr>`;
  }).join('');
}
function openBookModal(id) {
  const form = document.getElementById('bookForm');
  const raks = DB.getRaks();
  form.elements['rakId'].innerHTML = '<option value="">-- Tidak ada --</option>' + raks.map(r => `<option value="${r.id}">${escapeHtml(r.code)} - ${escapeHtml(r.location || '')}</option>`).join('');
  if (id) {
    const b = DB.getBooks().find(x => x.id === id);
    if (!b) return;
    document.getElementById('bookModalTitle').textContent = 'Edit Buku: ' + b.title;
    form.elements['bookId'].value = b.id;
    form.elements['title'].value = b.title;
    form.elements['author'].value = b.author || '';
    form.elements['publisher'].value = b.publisher || '';
    form.elements['year'].value = b.year || '';
    form.elements['isbn'].value = b.isbn || '';
    form.elements['category'].value = b.category || '';
    form.elements['language'].value = b.language || 'Indonesia';
    form.elements['type'].value = b.type;
    form.elements['pages'].value = b.pages || '';
    form.elements['stockInit'].value = b.stockInit;
    form.elements['rakId'].value = b.rakId || '';
    form.elements['digitalUrl'].value = b.digitalUrl || '';
    form.elements['description'].value = b.description || '';
    form.elements['activated'].value = b.activated ? 'true' : 'false';
    toggleBookFormFields();
  } else {
    document.getElementById('bookModalTitle').textContent = 'Tambah Buku Baru';
    form.reset();
    form.elements['bookId'].value = '';
    form.elements['language'].value = 'Indonesia';
    form.elements['type'].value = 'CETAK';
    form.elements['stockInit'].value = '1';
    form.elements['activated'].value = 'true';
    toggleBookFormFields();
  }
  document.getElementById('bookModal').classList.add('open');
}
function closeBookModal() { document.getElementById('bookModal').classList.remove('open'); }
function toggleBookFormFields() {
  const type = document.getElementById('bookForm').elements['type'].value;
  const cetakFields = document.getElementById('cetakFields');
  const cetakFields2 = document.getElementById('cetakFields2');
  const digitalFields = document.getElementById('digitalFields');
  const digitalFields2 = document.getElementById('digitalFields2');
  if (cetakFields) cetakFields.style.display = type === 'CETAK' ? '' : 'none';
  if (cetakFields2) cetakFields2.style.display = type === 'CETAK' ? '' : 'none';
  if (digitalFields) digitalFields.style.display = type === 'DIGITAL' ? '' : 'none';
  if (digitalFields2) digitalFields2.style.display = type === 'DIGITAL' ? '' : 'none';
}
function submitBookForm(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.elements['bookId'].value;
  const data = {
    title: form.elements['title'].value.trim(),
    author: form.elements['author'].value.trim() || null,
    publisher: form.elements['publisher'].value.trim() || null,
    year: form.elements['year'].value ? parseInt(form.elements['year'].value) : null,
    isbn: form.elements['isbn'].value.trim() || null,
    category: form.elements['category'].value.trim() || null,
    language: form.elements['language'].value || 'Indonesia',
    type: form.elements['type'].value,
    pages: form.elements['pages'].value ? parseInt(form.elements['pages'].value) : null,
    rakId: form.elements['rakId'].value || null,
    digitalUrl: form.elements['digitalUrl'].value.trim() || null,
    description: form.elements['description'].value.trim() || null,
    activated: form.elements['activated'].value === 'true',
  };
  if (!data.title) { toast('Judul wajib diisi', 'error'); return; }
  const books = DB.getBooks();
  if (id) {
    const idx = books.findIndex(b => b.id === id);
    if (idx >= 0) {
      books[idx] = { ...books[idx], ...data };
      DB.saveBooks(books);
      toast('Buku diupdate', 'success');
    }
  } else {
    const stock = parseInt(form.elements['stockInit'].value) || 0;
    const newBook = { id: genId('b'), ...data, stockInit: stock, stockNow: stock, damaged: 0, createdAt: new Date().toISOString() };
    books.push(newBook);
    DB.saveBooks(books);
    // auto-create initial stock txn
    if (stock > 0) {
      const txns = DB.getStockTxns();
      txns.push({ id: genId('st'), bookId: newBook.id, type: 'MASUK', qty: stock, note: 'Stok awal saat dibuat', createdAt: new Date().toISOString() });
      DB.saveStockTxns(txns);
    }
    toast('Buku ditambahkan', 'success');
  }
  closeBookModal();
  renderKoleksiBukuPage();
}
function deleteBook(id) {
  const b = DB.getBooks().find(x => x.id === id);
  if (!confirmDialog(`Hapus buku "${b?.title}"?`)) return;
  DB.saveBooks(DB.getBooks().filter(x => x.id !== id));
  DB.saveStockTxns(DB.getStockTxns().filter(s => s.bookId !== id));
  toast('Buku dihapus', 'success');
  renderKoleksiBukuPage();
}

/* ============================================================
   21. PAGE: TRANSAKSI STOK
   ============================================================ */
function renderTransaksiStokPage() {
  const txns = DB.getStockTxns().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const books = DB.getBooks();
  const container = document.getElementById('transaksiTableBody');
  if (!container) return;
  document.getElementById('transaksiCount').textContent = txns.length + ' transaksi tercatat';
  if (txns.length === 0) {
    container.innerHTML = '<tr><td colspan="5" class="empty-state">Belum ada transaksi stok.</td></tr>';
    return;
  }
  container.innerHTML = txns.map(t => {
    const b = books.find(bb => bb.id === t.bookId);
    return `<tr>
      <td>${formatDate(t.createdAt)}</td>
      <td><strong>${escapeHtml(b?.title || '-')}</strong></td>
      <td>${statusBadge(t.type)}</td>
      <td><strong>${t.qty}</strong></td>
      <td>${escapeHtml(t.note || '-')}</td>
    </tr>`;
  }).join('');
}
function openTransaksiModal() {
  const form = document.getElementById('transaksiForm');
  form.reset();
  const books = DB.getBooks().filter(b => b.type === 'CETAK');
  form.elements['bookId'].innerHTML = '<option value="">-- Pilih Buku --</option>' + books.map(b => `<option value="${b.id}">${escapeHtml(b.title)} (Stok: ${b.stockNow})</option>`).join('');
  form.elements['type'].value = 'MASUK';
  form.elements['qty'].value = '1';
  document.getElementById('transaksiModal').classList.add('open');
}
function closeTransaksiModal() { document.getElementById('transaksiModal').classList.remove('open'); }
function submitTransaksiForm(e) {
  e.preventDefault();
  const form = e.target;
  const bookId = form.elements['bookId'].value;
  const type = form.elements['type'].value;
  const qty = parseInt(form.elements['qty'].value);
  const note = form.elements['note'].value.trim();
  if (!bookId || !type || !qty) { toast('Lengkapi data', 'error'); return; }
  if (qty <= 0) { toast('Qty harus > 0', 'error'); return; }
  const books = DB.getBooks();
  const book = books.find(b => b.id === bookId);
  if (!book) { toast('Buku tidak ditemukan', 'error'); return; }
  // update stock
  if (type === 'MASUK') book.stockNow += qty;
  else if (type === 'KELUAR') {
    if (book.stockNow < qty) { toast(`Stok tidak cukup. Tersedia: ${book.stockNow}`, 'error'); return; }
    book.stockNow -= qty;
  } else if (type === 'RUSAK') {
    if (book.stockNow < qty) { toast(`Stok tidak cukup. Tersedia: ${book.stockNow}`, 'error'); return; }
    book.damaged += qty;
    book.stockNow -= qty;
  }
  DB.saveBooks(books);
  const txns = DB.getStockTxns();
  txns.push({ id: genId('st'), bookId, type, qty, note: note || null, createdAt: new Date().toISOString() });
  DB.saveStockTxns(txns);
  toast('Transaksi stok dicatat', 'success');
  closeTransaksiModal();
  renderTransaksiStokPage();
}

/* ============================================================
   22. PAGE: STOK AKHIR
   ============================================================ */
function renderStokAkhirPage() {
  const search = (document.getElementById('stokAkhirSearch')?.value || '').toLowerCase();
  let books = DB.getBooks().filter(b => b.type === 'CETAK');
  if (search) books = books.filter(b => b.title.toLowerCase().includes(search) || (b.author || '').toLowerCase().includes(search));
  const raks = DB.getRaks();
  // stats
  document.getElementById('stokAkhirInit').textContent = books.reduce((s, b) => s + b.stockInit, 0);
  document.getElementById('stokAkhirNow').textContent = books.reduce((s, b) => s + b.stockNow, 0);
  document.getElementById('stokAkhirAvailable').textContent = books.filter(b => b.stockNow > 0).length;
  document.getElementById('stokAkhirEmpty').textContent = books.filter(b => b.stockNow === 0).length;
  const container = document.getElementById('stokAkhirTableBody');
  if (!container) return;
  if (books.length === 0) {
    container.innerHTML = '<tr><td colspan="7" class="empty-state">Belum ada buku cetak.</td></tr>';
    return;
  }
  container.innerHTML = books.map(b => {
    const r = raks.find(rr => rr.id === b.rakId);
    return `<tr>
      <td><strong>${escapeHtml(b.title)}</strong></td>
      <td>${escapeHtml(b.author || '-')}</td>
      <td>${b.stockInit}</td>
      <td><strong style="color: ${b.stockNow > 0 ? '#16a34a' : '#dc2626'}">${b.stockNow}</strong></td>
      <td>${b.damaged}</td>
      <td>${r ? escapeHtml(r.code) : '-'}</td>
      <td>${statusBadge(b.stockNow > 0 ? 'ACTIVE' : 'PENDING')}</td>
    </tr>`;
  }).join('');
}

/* ============================================================
   23. PAGE: STOK RUSAK
   ============================================================ */
function renderStokRusakPage() {
  const txns = DB.getStockTxns().filter(t => t.type === 'RUSAK').sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const books = DB.getBooks();
  const container = document.getElementById('stokRusakTableBody');
  if (!container) return;
  document.getElementById('stokRusakTotal').textContent = books.reduce((s, b) => s + b.damaged, 0);
  document.getElementById('stokRusakCount').textContent = txns.length;
  if (txns.length === 0) {
    container.innerHTML = '<tr><td colspan="4" class="empty-state">Belum ada catatan buku rusak.</td></tr>';
    return;
  }
  container.innerHTML = txns.map(t => {
    const b = books.find(bb => bb.id === t.bookId);
    return `<tr>
      <td>${formatDate(t.createdAt)}</td>
      <td><strong>${escapeHtml(b?.title || '-')}</strong></td>
      <td><strong style="color: #dc2626">${t.qty}</strong></td>
      <td>${escapeHtml(t.note || '-')}</td>
    </tr>`;
  }).join('');
}
function openStokRusakModal() {
  const form = document.getElementById('stokRusakForm');
  form.reset();
  const books = DB.getBooks().filter(b => b.type === 'CETAK');
  form.elements['bookId'].innerHTML = '<option value="">-- Pilih Buku --</option>' + books.map(b => `<option value="${b.id}">${escapeHtml(b.title)} (Stok: ${b.stockNow})</option>`).join('');
  form.elements['qty'].value = '1';
  document.getElementById('stokRusakModal').classList.add('open');
}
function closeStokRusakModal() { document.getElementById('stokRusakModal').classList.remove('open'); }
function submitStokRusakForm(e) {
  e.preventDefault();
  const form = e.target;
  const bookId = form.elements['bookId'].value;
  const qty = parseInt(form.elements['qty'].value);
  const note = form.elements['note'].value.trim();
  if (!bookId) { toast('Pilih buku', 'error'); return; }
  if (qty <= 0) { toast('Qty harus > 0', 'error'); return; }
  const books = DB.getBooks();
  const book = books.find(b => b.id === bookId);
  if (!book) return;
  if (book.stockNow < qty) { toast(`Stok tidak cukup. Tersedia: ${book.stockNow}`, 'error'); return; }
  book.damaged += qty;
  book.stockNow -= qty;
  DB.saveBooks(books);
  const txns = DB.getStockTxns();
  txns.push({ id: genId('st'), bookId, type: 'RUSAK', qty, note: note || null, createdAt: new Date().toISOString() });
  DB.saveStockTxns(txns);
  toast('Buku rusak dicatat', 'warning');
  closeStokRusakModal();
  renderStokRusakPage();
}

/* ============================================================
   24. PAGE: KARTU STOK
   ============================================================ */
function renderKartuStokPage() {
  const select = document.getElementById('kartuStokBookSelect');
  if (!select) return;
  // populate book select once
  if (select.options.length <= 1) {
    const books = DB.getBooks().filter(b => b.type === 'CETAK');
    select.innerHTML = '<option value="">-- Pilih Buku --</option>' + books.map(b => `<option value="${b.id}">${escapeHtml(b.title)}</option>`).join('');
  }
  const bookId = select.value;
  const info = document.getElementById('kartuStokInfo');
  const table = document.getElementById('kartuStokTableBody');
  if (!bookId) {
    info.innerHTML = '<div class="empty-state">Pilih buku untuk melihat kartu stok.</div>';
    table.innerHTML = '<tr><td colspan="6" class="empty-state">-</td></tr>';
    return;
  }
  const book = DB.getBooks().find(b => b.id === bookId);
  if (!book) return;
  const raks = DB.getRaks();
  const r = raks.find(rr => rr.id === book.rakId);
  info.innerHTML = `
    <div class="info-grid">
      <div class="info-item"><div class="label">Judul</div><div class="value">${escapeHtml(book.title)}</div></div>
      <div class="info-item"><div class="label">Penulis</div><div class="value">${escapeHtml(book.author || '-')}</div></div>
      <div class="info-item"><div class="label">Stok Awal</div><div class="value">${book.stockInit}</div></div>
      <div class="info-item"><div class="label">Stok Akhir</div><div class="value" style="color: ${book.stockNow > 0 ? '#16a34a' : '#dc2626'}">${book.stockNow}</div></div>
      <div class="info-item"><div class="label">Rusak</div><div class="value" style="color: #dc2626">${book.damaged}</div></div>
      <div class="info-item"><div class="label">Rak</div><div class="value">${r ? escapeHtml(r.code) : '-'}</div></div>
    </div>`;
  const txns = DB.getStockTxns().filter(t => t.bookId === bookId).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  let saldo = 0;
  const rows = [];
  rows.push(`<tr>
    <td>${formatDate(book.createdAt)}</td>
    <td>${statusBadge('ACTIVE')}</td>
    <td>${book.stockInit}</td>
    <td>0</td>
    <td><strong>${book.stockInit}</strong></td>
    <td>Stok awal saat dibuat</td>
  </tr>`);
  saldo = book.stockInit;
  txns.forEach(t => {
    if (t.type === 'MASUK') saldo += t.qty;
    else if (t.type === 'KELUAR') saldo -= t.qty;
    else if (t.type === 'RUSAK') saldo -= t.qty;
    rows.push(`<tr>
      <td>${formatDate(t.createdAt)}</td>
      <td>${statusBadge(t.type)}</td>
      <td>${t.type === 'MASUK' ? t.qty : ''}</td>
      <td>${t.type !== 'MASUK' ? t.qty : ''}</td>
      <td><strong>${saldo}</strong></td>
      <td>${escapeHtml(t.note || '-')}</td>
    </tr>`);
  });
  table.innerHTML = rows.join('');
}

/* ============================================================
   25. PAGE: KELOLA RAK (CRUD)
   ============================================================ */
function renderKelolaRakPage() {
  const raks = DB.getRaks();
  const books = DB.getBooks();
  const container = document.getElementById('rakTableBody');
  if (!container) return;
  document.getElementById('rakCount').textContent = raks.length + ' rak terdaftar';
  if (raks.length === 0) {
    container.innerHTML = '<tr><td colspan="6" class="empty-state">Belum ada rak.<br>Klik "+ Tambah Rak".</td></tr>';
    return;
  }
  container.innerHTML = raks.map(r => {
    const count = books.filter(b => b.rakId === r.id).length;
    return `<tr>
      <td><strong>${escapeHtml(r.code)}</strong></td>
      <td>${escapeHtml(r.location || '-')}</td>
      <td>${r.capacity}</td>
      <td><strong>${count}</strong> buku</td>
      <td>${escapeHtml(r.note || '-')}</td>
      <td><div class="row-actions">
        <button class="btn btn-ghost btn-sm" onclick="openRakModal('${r.id}')">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteRak('${r.id}')">Hapus</button>
      </div></td>
    </tr>`;
  }).join('');
}
function openRakModal(id) {
  const form = document.getElementById('rakForm');
  if (id) {
    const r = DB.getRaks().find(x => x.id === id);
    if (!r) return;
    document.getElementById('rakModalTitle').textContent = 'Edit Rak: ' + r.code;
    form.elements['rakId'].value = r.id;
    form.elements['code'].value = r.code;
    form.elements['location'].value = r.location || '';
    form.elements['capacity'].value = r.capacity;
    form.elements['note'].value = r.note || '';
  } else {
    document.getElementById('rakModalTitle').textContent = 'Tambah Rak Baru';
    form.reset();
    form.elements['rakId'].value = '';
    form.elements['capacity'].value = '100';
  }
  document.getElementById('rakModal').classList.add('open');
}
function closeRakModal() { document.getElementById('rakModal').classList.remove('open'); }
function submitRakForm(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.elements['rakId'].value;
  const data = {
    code: form.elements['code'].value.trim(),
    location: form.elements['location'].value.trim() || null,
    capacity: parseInt(form.elements['capacity'].value) || 100,
    note: form.elements['note'].value.trim() || null,
  };
  if (!data.code) { toast('Kode rak wajib diisi', 'error'); return; }
  const raks = DB.getRaks();
  if (id) {
    const idx = raks.findIndex(r => r.id === id);
    if (idx >= 0) {
      if (raks.find(r => r.code === data.code && r.id !== id)) { toast('Kode rak sudah dipakai', 'error'); return; }
      raks[idx] = { ...raks[idx], ...data };
      DB.saveRaks(raks);
      toast('Rak diupdate', 'success');
    }
  } else {
    if (raks.find(r => r.code === data.code)) { toast('Kode rak sudah dipakai', 'error'); return; }
    raks.push({ id: genId('r'), ...data, createdAt: new Date().toISOString() });
    DB.saveRaks(raks);
    toast('Rak ditambahkan', 'success');
  }
  closeRakModal();
  renderKelolaRakPage();
}
function deleteRak(id) {
  const r = DB.getRaks().find(x => x.id === id);
  if (!confirmDialog(`Hapus rak "${r?.code}"?`)) return;
  DB.saveRaks(DB.getRaks().filter(x => x.id !== id));
  toast('Rak dihapus', 'success');
  renderKelolaRakPage();
}

/* ============================================================
   26. PAGE: AJUKAN PEMINJAMAN CETAK
   ============================================================ */
function renderAjukanCetakPage() {
  const books = DB.getBooks().filter(b => b.type === 'CETAK');
  const loans = DB.getLoanCetak().filter(l => l.status === 'PENDING');
  const container = document.getElementById('ajukanCetakBooks');
  if (!container) return;
  document.getElementById('ajukanCetakAvailable').textContent = books.filter(b => b.stockNow > 0).length;
  if (books.length === 0) {
    container.innerHTML = '<div class="empty-state">Belum ada buku cetak.</div>';
    return;
  }
  container.innerHTML = `<div class="table-wrap"><table class="table"><thead><tr><th>Judul</th><th>Penulis</th><th>Stok</th><th>Rak</th><th>Aksi</th></tr></thead><tbody>${books.map(b => {
    const r = DB.getRaks().find(rr => rr.id === b.rakId);
    return `<tr>
      <td><strong>${escapeHtml(b.title)}</strong></td>
      <td>${escapeHtml(b.author || '-')}</td>
      <td><strong style="color: ${b.stockNow > 0 ? '#16a34a' : '#dc2626'}">${b.stockNow}</strong></td>
      <td>${r ? escapeHtml(r.code) : '-'}</td>
      <td><button class="btn btn-primary btn-sm" ${b.stockNow === 0 ? 'disabled' : ''} onclick="openAjukanCetakModal('${b.id}')">${b.stockNow > 0 ? 'Pinjam' : 'Habis'}</button></td>
    </tr>`;
  }).join('')}</tbody></table></div>`;
  const pending = document.getElementById('ajukanCetakPending');
  if (pending) {
    if (loans.length === 0) {
      pending.innerHTML = '<div class="empty-state">Tidak ada pengajuan pending.</div>';
    } else {
      pending.innerHTML = `<div class="table-wrap"><table class="table"><thead><tr><th>Buku</th><th>Peminjam</th><th>Qty</th><th>Tgl Pinjam</th><th>Jatuh Tempo</th><th>Status</th></tr></thead><tbody>${loans.map(l => { const b = DB.getBooks().find(bb => bb.id === l.bookId); return `<tr><td><strong>${escapeHtml(b?.title || '-')}</strong></td><td>${escapeHtml(l.borrowerName || '-')}</td><td>${l.qty}</td><td>${formatDate(l.borrowDate)}</td><td>${formatDate(l.dueDate)}</td><td>${statusBadge(l.status)}</td></tr>`; }).join('')}</tbody></table></div>`;
    }
  }
}
function openAjukanCetakModal(bookId) {
  const form = document.getElementById('ajukanCetakForm');
  form.reset();
  form.elements['bookId'].value = bookId;
  const members = DB.getMembers().filter(m => m.status === 'ACTIVE');
  const groups = DB.getGroups();
  form.elements['memberId'].innerHTML = '<option value="">-- Tidak ada --</option>' + members.map(m => `<option value="${m.id}">${escapeHtml(m.name)} (${escapeHtml(m.nis)})</option>`).join('');
  form.elements['groupId'].innerHTML = '<option value="">-- Tidak ada --</option>' + groups.map(g => `<option value="${g.id}">${escapeHtml(g.name)}</option>`).join('');
  form.elements['qty'].value = '1';
  const d = new Date(); d.setDate(d.getDate() + 7);
  form.elements['dueDate'].value = d.toISOString().slice(0, 10);
  document.getElementById('ajukanCetakModal').classList.add('open');
}
function closeAjukanCetakModal() { document.getElementById('ajukanCetakModal').classList.remove('open'); }
function submitAjukanCetakForm(e) {
  e.preventDefault();
  const form = e.target;
  const bookId = form.elements['bookId'].value;
  const memberId = form.elements['memberId'].value || null;
  const groupId = form.elements['groupId'].value || null;
  const borrowerName = form.elements['borrowerName'].value.trim() || null;
  const qty = parseInt(form.elements['qty'].value) || 1;
  const dueDate = form.elements['dueDate'].value;
  const note = form.elements['note'].value.trim();
  if (!bookId) { toast('Pilih buku', 'error'); return; }
  if (!memberId && !groupId && !borrowerName) { toast('Pilih anggota atau isi nama peminjam', 'error'); return; }
  const book = DB.getBooks().find(b => b.id === bookId);
  if (!book) return;
  if (book.stockNow < qty) { toast(`Stok tidak cukup. Tersedia: ${book.stockNow}`, 'error'); return; }
  const loans = DB.getLoanCetak();
  loans.push({
    id: genId('pc'), bookId, memberId, groupId, borrowerName, qty,
    borrowDate: new Date().toISOString(),
    dueDate: dueDate ? new Date(dueDate).toISOString() : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    returnDate: null, status: 'PENDING', note,
    createdAt: new Date().toISOString(),
  });
  DB.saveLoanCetak(loans);
  toast('Pengajuan peminjaman dikirim', 'success');
  closeAjukanCetakModal();
  renderAjukanCetakPage();
}

/* ============================================================
   27. PAGE: KONFIRMASI & PENGEMBALIAN CETAK (TABS)
   ============================================================ */
let cetakConfirmTab = 'PENDING';
function renderKonfirmasiCetakPage() {
  const loans = DB.getLoanCetak().filter(l => l.status === cetakConfirmTab);
  const books = DB.getBooks();
  const container = document.getElementById('konfirmasiCetakTableBody');
  if (!container) return;
  // update tab counts
  const all = DB.getLoanCetak();
  document.getElementById('cetakConfirmTabPending').textContent = `Menunggu Konfirmasi (${all.filter(l => l.status === 'PENDING').length})`;
  document.getElementById('cetakConfirmTabActive').textContent = `Sedang Dipinjam (${all.filter(l => l.status === 'ACTIVE').length})`;
  document.getElementById('cetakConfirmTabOverdue').textContent = `Terlambat (${all.filter(l => l.status === 'OVERDUE').length})`;
  if (loans.length === 0) {
    container.innerHTML = '<tr><td colspan="7" class="empty-state">Tidak ada data pada tab ini.</td></tr>';
    return;
  }
  container.innerHTML = loans.map(l => {
    const b = books.find(bb => bb.id === l.bookId);
    return `<tr>
      <td><strong>${escapeHtml(b?.title || '-')}</strong></td>
      <td>${escapeHtml(l.borrowerName || '-')}</td>
      <td>${l.qty}</td>
      <td>${formatDate(l.borrowDate)}</td>
      <td>${formatDate(l.dueDate)}</td>
      <td>${statusBadge(l.status)}</td>
      <td><div class="row-actions">
        ${l.status === 'PENDING' ? `
          <button class="btn btn-success btn-sm" onclick="approveCetakLoan('${l.id}')">Konfirmasi</button>
          <button class="btn btn-danger btn-sm" onclick="rejectCetakLoan('${l.id}')">Tolak</button>
        ` : ''}
        ${(l.status === 'ACTIVE' || l.status === 'OVERDUE') ? `
          <button class="btn btn-success btn-sm" onclick="returnCetakLoan('${l.id}')">Tandai Dikembalikan</button>
        ` : ''}
      </div></td>
    </tr>`;
  }).join('');
}
function setCetakConfirmTab(tab) {
  cetakConfirmTab = tab;
  document.querySelectorAll('.cetak-confirm-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('cetakConfirmTab' + tab.charAt(0) + tab.slice(1).toLowerCase()).classList.add('active');
  renderKonfirmasiCetakPage();
}
function approveCetakLoan(id) {
  const loans = DB.getLoanCetak();
  const idx = loans.findIndex(l => l.id === id);
  if (idx < 0) return;
  const loan = loans[idx];
  // decrement stock
  const books = DB.getBooks();
  const bookIdx = books.findIndex(b => b.id === loan.bookId);
  if (bookIdx >= 0) {
    if (books[bookIdx].stockNow < loan.qty) { toast('Stok tidak cukup', 'error'); return; }
    books[bookIdx].stockNow -= loan.qty;
    DB.saveBooks(books);
    // record stock txn
    const txns = DB.getStockTxns();
    txns.push({ id: genId('st'), bookId: loan.bookId, type: 'KELUAR', qty: loan.qty, note: `Peminjaman cetak - ${loan.borrowerName || 'Anggota'}`, createdAt: new Date().toISOString() });
    DB.saveStockTxns(txns);
  }
  loans[idx].status = 'ACTIVE';
  DB.saveLoanCetak(loans);
  toast('Peminjaman dikonfirmasi, stok dikurangi', 'success');
  renderKonfirmasiCetakPage();
}
function rejectCetakLoan(id) {
  if (!confirmDialog('Tolak pengajuan ini?')) return;
  const loans = DB.getLoanCetak();
  const idx = loans.findIndex(l => l.id === id);
  if (idx >= 0) {
    loans[idx].status = 'REJECTED';
    DB.saveLoanCetak(loans);
    toast('Pengajuan ditolak', 'warning');
    renderKonfirmasiCetakPage();
  }
}
function returnCetakLoan(id) {
  if (!confirmDialog('Tandai buku sudah dikembalikan? Stok akan dikembalikan.')) return;
  const loans = DB.getLoanCetak();
  const idx = loans.findIndex(l => l.id === id);
  if (idx < 0) return;
  const loan = loans[idx];
  // increment stock
  const books = DB.getBooks();
  const bookIdx = books.findIndex(b => b.id === loan.bookId);
  if (bookIdx >= 0) {
    books[bookIdx].stockNow += loan.qty;
    DB.saveBooks(books);
    const txns = DB.getStockTxns();
    txns.push({ id: genId('st'), bookId: loan.bookId, type: 'MASUK', qty: loan.qty, note: `Pengembalian cetak - ${loan.borrowerName || 'Anggota'}`, createdAt: new Date().toISOString() });
    DB.saveStockTxns(txns);
  }
  loans[idx].status = 'RETURNED';
  loans[idx].returnDate = new Date().toISOString();
  DB.saveLoanCetak(loans);
  toast('Buku dikembalikan, stok bertambah', 'success');
  renderKonfirmasiCetakPage();
}

/* ============================================================
   28. PAGE: HISTORI PEMINJAMAN CETAK
   ============================================================ */
function renderHistoriCetakPage() {
  let loans = DB.getLoanCetak();
  const search = (document.getElementById('historiCetakSearch')?.value || '').toLowerCase();
  const status = document.getElementById('historiCetakStatusFilter')?.value || '';
  if (status) loans = loans.filter(l => l.status === status);
  if (search) {
    loans = loans.filter(l => {
      const b = DB.getBooks().find(bb => bb.id === l.bookId);
      return (b?.title || '').toLowerCase().includes(search) || (l.borrowerName || '').toLowerCase().includes(search);
    });
  }
  const container = document.getElementById('historiCetakTableBody');
  if (!container) return;
  document.getElementById('historiCetakCount').textContent = loans.length + ' catatan';
  if (loans.length === 0) {
    container.innerHTML = '<tr><td colspan="7" class="empty-state">Belum ada riwayat peminjaman.</td></tr>';
    return;
  }
  const books = DB.getBooks();
  container.innerHTML = loans.map(l => {
    const b = books.find(bb => bb.id === l.bookId);
    return `<tr>
      <td><strong>${escapeHtml(b?.title || '-')}</strong></td>
      <td>${escapeHtml(l.borrowerName || '-')}</td>
      <td>${l.qty}</td>
      <td>${formatDate(l.borrowDate)}</td>
      <td>${formatDate(l.dueDate)}</td>
      <td>${formatDate(l.returnDate)}</td>
      <td>${statusBadge(l.status)}</td>
    </tr>`;
  }).join('');
}

/* ============================================================
   29. PAGE: KARTU PEMINJAMAN BUKU
   ============================================================ */
function renderKartuPeminjamanBukuPage() {
  const select = document.getElementById('kartuBookSelect');
  if (!select) return;
  if (select.options.length <= 1) {
    const books = DB.getBooks();
    select.innerHTML = '<option value="">-- Pilih Buku --</option>' + books.map(b => `<option value="${b.id}">${escapeHtml(b.title)}</option>`).join('');
  }
  const bookId = select.value;
  const container = document.getElementById('kartuPeminjamanBukuContent');
  if (!bookId) {
    container.innerHTML = '<div class="empty-state">Pilih buku untuk melihat kartu peminjaman.</div>';
    return;
  }
  const loans = DB.getLoanCetak().filter(l => l.bookId === bookId).sort((a, b) => new Date(a.borrowDate) - new Date(b.borrowDate));
  if (loans.length === 0) {
    container.innerHTML = '<div class="empty-state">Belum ada riwayat peminjaman untuk buku ini.</div>';
    return;
  }
  container.innerHTML = `<div class="table-wrap"><table class="table">
    <thead><tr><th>Tgl Pinjam</th><th>Peminjam</th><th>Qty</th><th>Jatuh Tempo</th><th>Tgl Kembali</th><th>Status</th></tr></thead>
    <tbody>${loans.map(l => `<tr>
      <td>${formatDate(l.borrowDate)}</td>
      <td><strong>${escapeHtml(l.borrowerName || '-')}</strong></td>
      <td>${l.qty}</td>
      <td>${formatDate(l.dueDate)}</td>
      <td>${formatDate(l.returnDate)}</td>
      <td>${statusBadge(l.status)}</td>
    </tr>`).join('')}</tbody>
  </table></div>`;
}

/* ============================================================
   30. PAGE: KARTU PEMINJAMAN SISWA
   ============================================================ */
function renderKartuPeminjamanSiswaPage() {
  const select = document.getElementById('memberCardSelect');
  if (!select) return;
  if (select.options.length <= 1) {
    const members = DB.getMembers().filter(m => m.status === 'ACTIVE');
    select.innerHTML = '<option value="">-- Pilih Anggota --</option>' + members.map(m => `<option value="${m.id}">${escapeHtml(m.name)} (${escapeHtml(m.nis)})</option>`).join('');
  }
  const memberId = select.value;
  const container = document.getElementById('kartuPeminjamanSiswaContent');
  if (!memberId) {
    container.innerHTML = '<div class="empty-state">Pilih anggota untuk melihat kartu peminjaman.</div>';
    return;
  }
  const member = DB.getMembers().find(m => m.id === memberId);
  if (!member) return;
  const group = DB.getGroups().find(g => g.id === member.groupId);
  const cetak = DB.getLoanCetak().filter(l => l.memberId === memberId);
  const digital = DB.getLoanDigital().filter(l => l.memberId === memberId);
  const books = DB.getBooks();
  container.innerHTML = `
    <div class="info-grid">
      <div class="info-item"><div class="label">Nama</div><div class="value">${escapeHtml(member.name)}</div></div>
      <div class="info-item"><div class="label">NIS/NIP</div><div class="value">${escapeHtml(member.nis)}</div></div>
      <div class="info-item"><div class="label">Tipe</div><div class="value">${statusBadge(member.type)}</div></div>
      <div class="info-item"><div class="label">Kelas</div><div class="value">${group ? escapeHtml(group.name) : '-'}</div></div>
      <div class="info-item"><div class="label">Total Peminjaman Cetak</div><div class="value">${cetak.length}</div></div>
      <div class="info-item"><div class="label">Total Peminjaman Digital</div><div class="value">${digital.length}</div></div>
    </div>
    <h3 class="section-h3">Riwayat Peminjaman Buku Cetak</h3>
    ${cetak.length === 0 ? '<div class="empty-state">Belum ada peminjaman cetak.</div>' : `<div class="table-wrap"><table class="table"><thead><tr><th>Buku</th><th>Qty</th><th>Tgl Pinjam</th><th>Status</th></tr></thead><tbody>${cetak.map(l => { const b = books.find(bb => bb.id === l.bookId); return `<tr><td><strong>${escapeHtml(b?.title || '-')}</strong></td><td>${l.qty}</td><td>${formatDate(l.borrowDate)}</td><td>${statusBadge(l.status)}</td></tr>`; }).join('')}</tbody></table></div>`}
    <h3 class="section-h3">Riwayat Peminjaman Buku Digital</h3>
    ${digital.length === 0 ? '<div class="empty-state">Belum ada peminjaman digital.</div>' : `<div class="table-wrap"><table class="table"><thead><tr><th>Buku</th><th>Tgl Pinjam</th><th>Status</th></tr></thead><tbody>${digital.map(l => { const b = books.find(bb => bb.id === l.bookId); return `<tr><td><strong>${escapeHtml(b?.title || '-')}</strong></td><td>${formatDate(l.borrowDate)}</td><td>${statusBadge(l.status)}</td></tr>`; }).join('')}</tbody></table></div>`}
  `;
}

/* ============================================================
   31. PAGE: STATISTIK PEMINJAMAN
   ============================================================ */
function renderStatistikPage() {
  const loans = DB.getLoanCetak();
  const books = DB.getBooks();
  // top books
  const bookCount = {};
  loans.forEach(l => {
    const b = books.find(bb => bb.id === l.bookId);
    if (b) bookCount[b.title] = (bookCount[b.title] || 0) + 1;
  });
  const topBooks = Object.entries(bookCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
  // month dist
  const monthCount = {};
  loans.forEach(l => {
    const m = l.borrowDate.slice(0, 7);
    monthCount[m] = (monthCount[m] || 0) + 1;
  });
  const monthDist = Object.entries(monthCount).sort((a, b) => a[0].localeCompare(b[0]));
  // status dist
  const statusDist = {};
  loans.forEach(l => { statusDist[l.status] = (statusDist[l.status] || 0) + 1; });

  // stats
  document.getElementById('statistikTotal').textContent = loans.length;
  document.getElementById('statistikPending').textContent = statusDist.PENDING || 0;
  document.getElementById('statistikActive').textContent = statusDist.ACTIVE || 0;
  document.getElementById('statistikOverdue').textContent = statusDist.OVERDUE || 0;

  // top books table
  const topEl = document.getElementById('statistikTopBooks');
  if (topEl) {
    topEl.innerHTML = topBooks.length === 0 ? '<div class="empty-state">Belum ada data.</div>' :
      `<div class="table-wrap"><table class="table"><thead><tr><th>Peringkat</th><th>Judul</th><th>Jumlah Peminjaman</th></tr></thead><tbody>${topBooks.map(([title, count], i) => `<tr><td><span class="badge badge-${i === 0 ? 'amber' : 'blue'}">#${i + 1}</span></td><td><strong>${escapeHtml(title)}</strong></td><td><strong style="color: #2563eb; font-size: 16px;">${count}</strong> kali</td></tr>`).join('')}</tbody></table></div>`;
  }

  // month chart
  const chartEl = document.getElementById('statistikChart');
  if (chartEl) {
    if (monthDist.length === 0) {
      chartEl.innerHTML = '<div class="empty-state">Belum ada data.</div>';
    } else {
      const maxC = Math.max(...monthDist.map(m => m[1]), 1);
      chartEl.innerHTML = monthDist.map(([month, count]) => `
        <div class="chart-bar-wrap">
          <div class="chart-bar-value">${count}</div>
          <div class="chart-bar" style="height: ${(count / maxC) * 160}px"></div>
          <div class="chart-bar-label">${month}</div>
        </div>`).join('');
    }
  }

  // status dist
  const distEl = document.getElementById('statistikStatusDist');
  if (distEl) {
    const colors = { ACTIVE: 'blue', RETURNED: 'gray', OVERDUE: 'red', PENDING: 'amber', REJECTED: 'red' };
    distEl.innerHTML = Object.entries(statusDist).map(([status, count]) => `
      <div class="info-item">
        <div class="label">${status}</div>
        <div class="value">${statusBadge(status)} <span style="margin-left: 8px;">${count}</span></div>
      </div>`).join('');
  }
}

/* ============================================================
   32. GLOBAL FORM HANDLERS & SEARCH INPUTS
   ============================================================ */
function setupForms() {
  // Group form
  const gf = document.getElementById('groupForm');
  if (gf) gf.addEventListener('submit', submitGroupForm);
  // Visit form
  const vf = document.getElementById('visitForm');
  if (vf) vf.addEventListener('submit', submitVisitForm);
  // Member form
  const mf = document.getElementById('memberForm');
  if (mf) mf.addEventListener('submit', submitMemberForm);
  // Review form
  const rf = document.getElementById('reviewForm');
  if (rf) rf.addEventListener('submit', submitReviewForm);
  // Book form
  const bf = document.getElementById('bookForm');
  if (bf) bf.addEventListener('submit', submitBookForm);
  // Transaksi form
  const tf = document.getElementById('transaksiForm');
  if (tf) tf.addEventListener('submit', submitTransaksiForm);
  // Stok rusak form
  const sf = document.getElementById('stokRusakForm');
  if (sf) sf.addEventListener('submit', submitStokRusakForm);
  // Rak form
  const rkf = document.getElementById('rakForm');
  if (rkf) rkf.addEventListener('submit', submitRakForm);
  // Peminjaman kelas form
  const pkf = document.getElementById('peminjamanKelasForm');
  if (pkf) pkf.addEventListener('submit', submitPeminjamanKelasForm);
  // Ajukan digital form
  const adf = document.getElementById('ajukanDigitalForm');
  if (adf) adf.addEventListener('submit', submitAjukanDigitalForm);
  // Ajukan cetak form
  const acf = document.getElementById('ajukanCetakForm');
  if (acf) acf.addEventListener('submit', submitAjukanCetakForm);
  // Visit member select change
  const vms = document.getElementById('visitMemberSelect');
  if (vms) vms.addEventListener('change', function () { onVisitMemberChange(this); });

  // Search inputs (debounced)
  const searchMap = {
    'memberSearch': renderMemberListPage,
    'bookSearch': renderKoleksiBukuPage,
    'activationSearch': renderActivationPage,
    'historyDigitalSearch': renderHistoryDigitalPage,
    'historiCetakSearch': renderHistoriCetakPage,
    'stokAkhirSearch': renderStokAkhirPage,
    'visitSearch': renderVisitPage,
  };
  Object.entries(searchMap).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => {
      clearTimeout(memberSearchTimeout);
      memberSearchTimeout = setTimeout(fn, 300);
    });
  });
  // Filter changes
  const filterMap = {
    'memberStatusFilter': renderMemberListPage,
    'memberTypeFilter': renderMemberListPage,
    'memberGroupFilter': renderMemberListPage,
    'bookTypeFilter': renderKoleksiBukuPage,
    'bookCategoryFilter': renderKoleksiBukuPage,
    'historyDigitalStatusFilter': renderHistoryDigitalPage,
    'historiCetakStatusFilter': renderHistoriCetakPage,
  };
  Object.entries(filterMap).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', fn);
  });

  // Kartu stok select
  const kss = document.getElementById('kartuStokBookSelect');
  if (kss) kss.addEventListener('change', renderKartuStokPage);
  // Kartu peminjaman buku select
  const kpbs = document.getElementById('kartuBookSelect');
  if (kpbs) kpbs.addEventListener('change', renderKartuPeminjamanBukuPage);
  // Kartu peminjaman siswa select
  const kpss = document.getElementById('memberCardSelect');
  if (kpss) kpss.addEventListener('change', renderKartuPeminjamanSiswaPage);
  // Laporan harian date filter
  const lhd = document.getElementById('laporanHarianDate');
  if (lhd) lhd.addEventListener('change', renderLaporanHarianDigitalPage);
  // Reset data button
  const rdb = document.getElementById('resetDataBtn');
  if (rdb) rdb.addEventListener('click', () => {
    if (confirm('RESET SEMUA DATA ke kondisi awal? Semua perubahan akan hilang!')) {
      DB.reset();
      setTimeout(() => navigateTo('Dashboard', 'Dashboard'), 500);
    }
  });
}

/* ============================================================
   33. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  // Tutup semua submenu di awal
  document.querySelectorAll('.navbar ul li ul').forEach(m => m.classList.remove('open'));

  // Setup sidebar
  setupSidebar();

  // Setup forms
  setupForms();

  // Init database (seed if empty)
  DB.ensureInit();

  // Render dashboard default
  renderDashboard();

  // Tampilkan pesan welcome
  setTimeout(() => {
    toast('Selamat datang di Perpustakaan Elektronik, By Saputra!', 'success');
  }, 800);
});

// Expose ke global untuk onclick handlers
window.navigateTo = navigateTo;
window.openGroupModal = openGroupModal;
window.closeGroupModal = closeGroupModal;
window.deleteGroup = deleteGroup;
window.openVisitModal = openVisitModal;
window.closeVisitModal = closeVisitModal;
window.closeVisit = closeVisit;
window.deleteVisit = deleteVisit;
window.onVisitMemberChange = onVisitMemberChange;
window.approveMember = approveMember;
window.rejectMember = rejectMember;
window.openMemberModal = openMemberModal;
window.closeMemberModal = closeMemberModal;
window.deleteMember = deleteMember;
window.viewMember = viewMember;
window.closeMemberDetailModal = closeMemberDetailModal;
window.toggleActivation = toggleActivation;
window.openAjukanDigitalModal = openAjukanDigitalModal;
window.closeAjukanDigitalModal = closeAjukanDigitalModal;
window.approveDigitalLoan = approveDigitalLoan;
window.rejectDigitalLoan = rejectDigitalLoan;
window.returnDigitalLoan = returnDigitalLoan;
window.openPeminjamanKelasModal = openPeminjamanKelasModal;
window.closePeminjamanKelasModal = closePeminjamanKelasModal;
window.returnKelasLoan = returnKelasLoan;
window.openReviewModal = openReviewModal;
window.closeReviewModal = closeReviewModal;
window.updateStarInput = updateStarInput;
window.deleteReview = deleteReview;
window.openBookModal = openBookModal;
window.closeBookModal = closeBookModal;
window.toggleBookFormFields = toggleBookFormFields;
window.deleteBook = deleteBook;
window.openTransaksiModal = openTransaksiModal;
window.closeTransaksiModal = closeTransaksiModal;
window.openStokRusakModal = openStokRusakModal;
window.closeStokRusakModal = closeStokRusakModal;
window.openRakModal = openRakModal;
window.closeRakModal = closeRakModal;
window.deleteRak = deleteRak;
window.openAjukanCetakModal = openAjukanCetakModal;
window.closeAjukanCetakModal = closeAjukanCetakModal;
window.setCetakConfirmTab = setCetakConfirmTab;
window.approveCetakLoan = approveCetakLoan;
window.rejectCetakLoan = rejectCetakLoan;
window.returnCetakLoan = returnCetakLoan;

/* ============================================================
   SPARKLE BUTTON + CARD POPUP
   ============================================================ */
function openSparkleCard() {
  const m = document.getElementById('sparkleCardModal');
  if (m) m.classList.add('open');
}
function closeSparkleCard() {
  const m = document.getElementById('sparkleCardModal');
  if (m) m.classList.remove('open');
}
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSparkleCard(); });

// Acak posisi/ukuran partikel di tiap tombol sparkle
document.addEventListener('DOMContentLoaded', function () {
  const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  document.querySelectorAll('.particle').forEach(p => {
    p.setAttribute('style',
      '--x:' + rnd(20, 80) + ';' +
      '--y:' + rnd(20, 80) + ';' +
      '--duration:' + rnd(6, 20) + ';' +
      '--delay:' + rnd(1, 10) + ';' +
      '--alpha:' + (rnd(40, 90) / 100) + ';' +
      '--origin-x:' + (Math.random() > 0.5 ? rnd(300, 800) * -1 : rnd(300, 800)) + '%;' +
      '--origin-y:' + (Math.random() > 0.5 ? rnd(300, 800) * -1 : rnd(300, 800)) + '%;' +
      '--size:' + (rnd(40, 90) / 100) + ';'
    );
  });
});
window.openSparkleCard = openSparkleCard;
window.closeSparkleCard = closeSparkleCard;
