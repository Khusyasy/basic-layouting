# DeliciKhus

## Deskripsi
Untuk menyelesaikan tugas GDSC ITB WebDev, Basic JavaScript, saya melanjutkan website DeliciKhus dengan menyambungkan API TheMealDB dan menambahkan animasi transisi.

URL: https://delicikhus-recipe.vercel.app/

Website ini memiliki 3 halaman utama, yaitu: Home, Search, dan Details.

Halaman Home, terdapat daftar beberapa makanan yang diambil dari API TheMealDB yang ditampilkan sebagai featured menu. Diatas menu juga terdapat form search yang akan mengarahkan ke halaman Search. Ketika salah satu menu di klik, maka akan diarahkan ke halaman Details.

Halaman Search, terdapat daftar makanan yang diambil dari API TheMealDB berdasarkan query yang diinputkan pada form search. Ketika salah satu menu di klik, maka akan diarahkan ke halaman Details.

Halaman Details, terdapat detail resep makanan yang diambil dari API TheMealDB berdasarkan id makanan yang terdapat pada url.

## Bonus
1. Membuat Loading Spinner ketika sedang mengambil data dari API TheMealDB. Spinner juga diberikan transisi fade ketika muncul / hilang.
2. Membuat transisi fade pada card menu ketika baru ditampilkan.

Transisi tersebut dibuat dengan menggunakan CSS Transition dan JS setTimeout. Sebagai contoh dalam `card.js`, ketika card baru ditampilkan, maka akan diberikan class `.animate`. Kemudian setTimeout akan menjalankan fungsi untuk menghapus class `.animate` dari card setelah 500ms. Spinner juga menggunakan konsep yang sama.

## Identitas
- Nama        : Muhammad Luthfi Khusyasy
- Universitas : Telkom University
- NIM         : 1301213294
- GDSC ID     : 220020005
