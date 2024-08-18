# Change Log

Semua perubahan penting pada "Multimediaa" akan didokumentasikan dalam file ini.

## Definisi untuk "Multimediaa"

| Istilah    | Deskripsi                                                            |
| ---------- | -------------------------------------------------------------------- |
| perubahan  | Pembaruan berkas, aset, dan fungsi ke semua bagian website           |
| tips       | Catatan yang perlu diingat kepada tim (pengelola proyek)             |
| berpikir   | Penambahan atau pengurangan yang akan dilakukan                      |
| peralihan  | Aktivas tertunda karena mengambil cuti atau mengerjakan hal lain     |

## --/--/----

## --/--/----

## 28/06/2024 -berpikir
Bagaimana jika halaman blog menggunakan markdown sebagai isi konten? Tiap postingan di halaman blog awal mengambil data dari json untuk generator otomatis. Sama halnya pada isi postingan mengambil data dari .md untuk dikonversi ke html. Berarti terdapat js tambahan untuk menyesuaikan ini. Dengan begini untuk pagination (penomoran) halaman tak perlu dilakukan secara manual. 

## --/--/2024 -berpikir
Jika kamu melihat adanya kesenjangan jarak antara catatan sebelumnya dan setelahnya disebabkan karena tidak semua aktivitas dalam mengerjakan proyek multimedia dicatat. Saya mencatat apa yang saya lakukan pada malam hari, maka dari itu terkadang tidak banyak hal yang diingat, alasan lainnya saya lupa mencatat perubahan atau perkembangan dalam proyek ini. Mungkin kedepannya juga akan seperti ini. Meski adanya jarak antara tanggal sebelum dan setelahnya bukan berarti saya jarang mengelola website multimedia tetapi hanya tidak mencatat aktivitas dari apa yang saya kerjakan. Mohon pengertiannya.

## 15/05/2024 -perubahan
- Menggunakan layanan formspree pada Newsletter untuk menerima alamat email yang dikirimkan pengunjung dan memudahkan dalam mengelola data.
- Menggunakan layanan formsubmit untuk formulir kontak. 

Kelebihan formsubmit adalah gratis, tanpa watermark, dan bertahan seumur hidup. Sedangkan pada formspree, proyek hanya bertahan satu tahun untuk pengguna gratis tetapi memudahkan dalam mengelola data yang diterima tidak berserakan atau menyebar seperti formsubmit.

Newsletter membutuhkan data yang dikumpulkan menjadi satu dan terorganisir untuk memudahkan dalam memantau email yang masih aktif dan tidak. Tidak seperti formulir kontak yang bersifat individu jadi hanya memuat satu email untuk satu pengguna.

## 18/04/2024 -perubahan
- Menutup dan mengarsipkan halaman `blog` hingga komponen-komponen di dalamnya sudah disempurnakan.
- Fokus mengatasi berbagai kekurangan di semua halaman website.

## --/04/2024 -peralihan
Dijeda sementara waktu untuk menyiapkan bahan materi yang akan digunakan pada pertemuan mendatang yang membahas mengenai website mulai dari teori dasar, demonstrasi kode atau proses bagaimana website bekerja, hingga pembuatan website melalui Google Sites (Paling mudah dipelajari bagi mereka yang awam).

## 04/04/2024 -perubahan
- Membuat ikon program kerja multimedia di Canva

## 03/04/2024 -perubahan
- Membuat desain email di Mailchimp

## 31/03/2024 -perubahan
- Menambahkan Google reCAPTCHA pada [EmailJS](https://dashboard.emailjs.com/admin/templates/new/settings) untuk formulir kontak.
- Menyempurnakan JavaScript untuk Newsletter (Surat Kabar) yang nantinya digunakan untuk mengirimkan informasi melalui email, seperti email marketing pada umumnya.

## 30/03/2024 -berpikir
- Sedang memikirkan alternatif untuk memposting konten di halaman `Blog`. Mungkin bisa memakai jekyll atau Hugo.
- Selain itu dibutuhkan sistem komentar untuk halaman `Blog`. Akan merepotkan jika menggunakan database dan self-hosted seperti **Waline** jadi saya akan mempertimbangkan dalam memilih **Disqus** atau **Utterances**. Keduanya memiliki perbedaan dari segi tampilan, markdown support, emoji, gambar, video, dan lainnya.
- Terakhir diperlukan JavaScript pada formulir kontak. Saya biasanya memakai widget pihak ketiga misalnya ElfSight.
Tetapi bergantung pada layanan pihak lain bisa mengurangi moralitas contohnya watermark. Watermark menjadi alasan utama pengguna gratisan itu seakan-akan kurang disebut sebagai profesional padahal website ini ditujukan untuk ekstrakurikuler.

## --/03/2024 -berpikir
Saya berusaha agar proyek multimedia dapat selesai sampai tanggal 20 Maret sebelum akhir bulan. Kata `selesai` menandakan website multimedia dapat dipublikasikan agar pengunjung dapat melihat dan mengetahui informasi yang tertera. Saya rasa akan mengambil liburan setelah lebaran dan akan kembali mengelola proyek ini. Saya memang sangat berharap akan ada tambahan orang yang dapat membantu mengelola proyek ini.

## 16/03/2024 -berpikir
Saya menyadari apa yang terjadi semalam karena terdapat perintah yang kurang sewaktu saya mendorong perubahan yang telah di kommit. Saya memang tidak memiliki banyak pengetahuan mengenai git, tapi saya akan menjadikan kesalahan ini menjadi pengingat agar tidak mengulangi kesalahan yang sama di masa mendatang.

## 15/03/2024 -perubahan
- blog.html:
  - Menambahkan cover gelap saat hover pada postingan blog Unggulan
  - Mengubah nama file dari `blog-hero.JPG` ke `hero.JPG`
  - Mengubah nama file blog-details dalam folder blog menjadi `Blog/post/blog-details.html`
- proker.html:
  - Melengkapi kekurangan dan menyelesaikan halaman `Proker`.

Mendapat masalah ketika mendorong (git push) semua perubahan ke Repositori. Biasanya perintah `git push origin master` dapat dijalankan, tetapi tidak dengan hari ini. Konsol terminal menyarankan untuk `git pull` saya mencobanya dan tidak disangka jika perubahan pada file lama dan perubahan pada file baru menjadi tumpang tindih yang mengakibatkan eror. Mengembalikan perubahan sebelumnya menjadi tidak bisa, kalau sudah begini mau nggak mau harus mengulang semuanya dari awal sebelum perubahan pada tanggal 15 Maret yaitu tanggal 12 Maret. Saya merasa apa yang saya lakukan hari ini menjadi sia-sia. Ini melelahkan makanya saya memutuskan untuk memperbaiki di keesokan hari T_T.

## --/03/2024 -peralihan
Libur selama 2 hari sejak tanggal 12 Maret

## 12/03/2024 -perubahan
- Menyelesaikan halaman “Kontak”
- 85% untuk halaman “Blog”
- Merapikan halaman utama “Index/Home”
- Menambahkan beberapa kode tambahan (terutama CSS)

## --/--/2024 -tips
Saat menyematkan link YouTube ke bagian yang mendukung **Magnific Popup** yaitu *Work Section* dan *gallery.html* jangan menggunakan link share atau embed tetapi link saat menonton (watch) pada tab browser. Selain `watch` kedua bagian tersebut tidak akan berfungsi.

Link share : YouTube tidak dapat tersambung 
Link embed : blank (layar hitam)
Link watch : berfungsi

## --/--/2024 -berpikir
Berkat projek sebelumnya (pojokIKLAN), projek kali ini (multimedia) menjadi lebih teliti dan maksimal dalam mengelola website.

## 11/03/2024 -perubahan
- index.html:
  - Berhasil Memindahkan `quote’s` dari halaman `About` ke `homepage`.
  - Postingan blog yang tadinya berada di `homepage` dan halaman `Blog` kini dinonaktifkan. Artinya tersimpan dalam folder `hide/`.
  - Mengatur posisi teks ke tengah pada **Callto Section**
  - Mengganti nama atribut `testimonial` ke `quote's`.

## 10/03/2024 -perubahan
- index.html:
  - Memindahkan `quote’s` dari halaman `About` ke `homepage` sebagai gantinya, postingan blog pada homepage dipindahkan ke halaman `Blog`.
  - Lebar dan tinggi dari `quote's` dan `postingan blog` sama besarnya, mengharuskan memilih salah satu. Bagaimana pun homepage sudah penuh. 

## --/--/2024 -peralihan
Setelah tanggal 22 Februari, tidak begitu ingat. Terdapat proyek lain yang harus dikerjakan, yaitu `pojokIKLAN`. Yang tadinya menargetkan 10 hari, kini menghabsikan waktu sekitar 18 hari karena satu dan dua hal. Itulah kenapa proyek multimedia dijeda sementara waktu.

## 22/02/2024 -perubahan
- Hero Section:
  - Cukup 1 Gambar pada featured post
  - Mengatur posisi teks dari kiri ke tengah pada **Hero Section**
  - Jeda transisi diperlambat (4/5 detik per post)
- Kompress dan upload ulang semua aset gambar di Repositori multimediaa.github.io
