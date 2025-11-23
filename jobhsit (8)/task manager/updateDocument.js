// Mengimpor MongoClient dan ObjectId untuk koneksi dan manipulasi data di MongoDB.
const { MongoClient, ObjectId } = require('mongodb');

// URL server MongoDB lokal.
const url = 'mongodb://127.0.0.1:27017';

// Membuat instance untuk koneksi database.
const client = new MongoClient(url);

// Nama database yang akan dipakai.
const namaDatabase = 'testsaja';

// CHALLENGE: Fungsi untuk membuat nama & usia jadi unik
async function uniquePengguna(db) {
  const pengguna = db.collection('pengguna');

  // Ambil semua data pengguna
  const allUsers = await pengguna.find({}).toArray();

  // Loop dan update satu per satu agar semuanya unik
  for (let i = 0; i < allUsers.length; i++) {
    await pengguna.updateOne(
      { _id: allUsers[i]._id },
      {
        $set: {
          nama: allUsers[i].nama + ' ' + (i + 1), // nama unik
          usia: allUsers[i].usia + i              // usia unik
        }
      }
    );
  }

  console.log("Challenge selesai: semua pengguna sudah unik!");
}

// Fungsi utama yang berjalan secara async.
async function main() {
  try {
    await client.connect();
    console.log('Berhasil terhubung ke MongoDB database server');

    const db = client.db(namaDatabase);

    // ================================
    // AUTO RANDOM GENERATOR PENGGUNA
    // ================================
    const randomNames = [
      "Kurumi", "Miyuki", "Akane", "Yumeko", "Asuna", "Sinon",
      "Makima", "Zero Two", "Rukia", "Raiden", "Keqing", "Kiana",
      "Elysia", "Acheron", "Kafka", "Stelle", "Fu Hua", "Himeko",
      "Sakura", "Tsukasa", "Yuki", "Ayanami", "Rei", "Hinata"
    ];

    const randomUsers = [];
    for (let i = 0; i < 12; i++) {
      const name = randomNames[Math.floor(Math.random() * randomNames.length)];
      const age = Math.floor(Math.random() * 30) + 18; 
      randomUsers.push({ nama: name, usia: age });
    }

    await db.collection('pengguna').insertMany(randomUsers);
    console.log("Generator random: 12 pengguna baru berhasil ditambahkan!");

    // ==================================
    // UPDATE MANY TUGAS
    // ==================================
    try {
      const updateManyResult = await db.collection('tugas').updateMany(
        { StatusPenyelesaian: false },
        { $set: { StatusPenyelesaian: true } }
      );
      console.log('Jumlah data yang diupdate:', updateManyResult.modifiedCount);
    } catch (err) {
      console.error('Terjadi error updateMany:', err);
    }

    // ==================================
    // CHALLENGE - buat data pengguna unik
    // ==================================
    await uniquePengguna(db);

  } catch (error) {
    console.error('Terjadi error di main():', error);
  } finally {
    await client.close();
  }
}

// Menjalankan fungsi utama.
main();
