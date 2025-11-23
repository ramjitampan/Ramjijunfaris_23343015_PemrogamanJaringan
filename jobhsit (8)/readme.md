# 📘 JobShit 8 – MongoDB & NoSQL Databases  
Praktikum Pemrograman Jaringan – Ramzy Junfaris (23343015)

Pada jobshit ini dipelajari konsep dasar mengenai MongoDB dan bagaimana database NoSQL bekerja dalam pengelolaan data modern. Secara umum, NoSQL (Not Only SQL) merupakan pendekatan database yang tidak bergantung pada struktur tabel seperti database relasional. Sistem ini dirancang untuk memberikan fleksibilitas dalam penyimpanan data, terutama ketika data memiliki bentuk yang tidak terstruktur atau berubah-ubah. Dengan konsep penyimpanan tanpa skema yang kaku, NoSQL menjadi pilihan utama pada aplikasi yang membutuhkan skalabilitas tinggi, performa cepat, dan kemudahan integrasi.

MongoDB sendiri merupakan salah satu implementasi NoSQL yang paling populer. MongoDB menggunakan format dokumen yang disimpan dalam bentuk JSON atau BSON, sehingga setiap data disusun seperti objek JavaScript dengan pasangan key-value. Hal ini membuat proses penyimpanan, pembacaan, maupun pembaruan data menjadi lebih intuitif untuk developer, terutama mereka yang bekerja dengan Node.js. Dalam MongoDB, setiap dokumen memiliki sebuah `_id` berupa `ObjectId` yang dihasilkan secara otomatis dan menjadi identitas unik pada setiap data.

Pada jobshit ini, dilakukan implementasi penuh operasi CRUD (Create, Read, Update, Delete) menggunakan Node.js sebagai penghubung ke server MongoDB. Pada tahap *Create*, digunakan perintah `insertOne()` dan `insertMany()` untuk menambahkan data ke dalam collection seperti `pengguna` dan `tugas`. Proses ini memperkenalkan bagaimana struktur dokumen disimpan dalam basis data serta bagaimana MongoDB menangani penyimpanan ID otomatis.

Tahap *Read* dilakukan menggunakan `findOne()`, `find()`, dan `toArray()`. Melalui proses ini, mahasiswa mempelajari bagaimana MongoDB mengambil data berdasarkan filter tertentu, seperti berdasarkan nama atau `_id`, serta bagaimana cara mengubah cursor menjadi array agar bisa ditampilkan dengan rapi pada terminal.

Selanjutnya, tahap *Update* melibatkan penggunaan `updateOne()` dan `updateMany()` untuk memodifikasi isi dokumen dalam collection. Operator seperti `$set` digunakan untuk mengganti nilai, `$inc` untuk menambahkan nilai numerik, serta beberapa operator lain yang memungkinkan perubahan data secara fleksibel tanpa perlu menimpa seluruh isi dokumen. Pada bagian ini juga terdapat challenge untuk membuat setiap data pengguna menjadi unik, dengan cara memodifikasi nama dan usia menggunakan fungsi tambahan.

Tahap terakhir adalah *Delete*, yang menggunakan `deleteOne()` dan `deleteMany()` untuk menghapus data berdasarkan kriteria tertentu. Jobshit juga memberikan tantangan untuk menghapus salah satu data duplikat pada collection `tugas`, sekaligus melatih mahasiswa agar berhati-hati dalam menentukan filter penghapusan agar tidak menghapus keseluruhan data yang tidak diinginkan.

Melalui seluruh rangkaian proses CRUD ini, mahasiswa menjadi lebih memahami konsep kerja MongoDB dan mampu menerapkannya dalam aplikasi sederhana menggunakan Node.js. Jobshit ini memberikan pengalaman langsung dalam bekerja dengan database NoSQL sekaligus memperkuat pemahaman mengenai bagaimana data dapat dimanipulasi secara dinamis dan efisien dalam sistem modern.

👨‍💻 Dibuat oleh:
Ramzy Junfaris (23343015)
Informatika – Universitas Negeri Padang
Dosen: Bapak Randi Proska Sandra, S.Pd, M.Sc

⭐ Penutup
JobShit ini memberikan pondasi kuat terkait penggunaan MongoDB dalam aplikasi Node.js.
Dengan pemahaman CRUD, mahasiswa dapat mengembangkan aplikasi backend modern dengan lebih mudah, cepat, dan fleksibel.
