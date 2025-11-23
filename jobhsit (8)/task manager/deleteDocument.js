// Mengimpor MongoClient dan ObjectId
const { MongoClient, ObjectId } = require('mongodb');

// URL MongoDB lokal
const url = 'mongodb://127.0.0.1:27017';

// Client MongoDB
const client = new MongoClient(url);

// Nama database
const namaDatabase = 'testsaja';

async function main() {
  try {
    // Koneksi ke server
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB!\n");

    const db = client.db(namaDatabase);
    const pengguna = db.collection('pengguna');

    // ==================================================
    // CEK DATA SEBELUM DELETE
    // ==================================================
    const before = await pengguna.find({}).sort({ nama: 1 }).toArray();
    console.log("=== DATA SEBELUM DELETE ===");
    console.table(before);

    // ==================================================
    // DELETE ONE
    // Menghapus satu data berdasarkan _id
    // ==================================================
    const deleteOneResult = await pengguna.deleteOne({
      _id: new ObjectId('6922affa34109364236f5af7')
    });

    console.log("\nHasil deleteOne:", deleteOneResult.deletedCount);

    // ==================================================
    // DELETE MANY
    // ==================================================
    const deleteManyResult = await pengguna.deleteMany({
      usia: { $gt: 28 }
    });

    console.log("Jumlah deleteMany:", deleteManyResult.deletedCount, "\n");

    // ==================================================
    // CEK DATA SETELAH DELETE
    // ==================================================
    const after = await pengguna.find({}).sort({ nama: 1 }).toArray();
    console.log("=== DATA SESUDAH DELETE ===");
    console.table(after);

  } catch (error) {
    console.error("Error di main():", error);
  } finally {
    await client.close();
  }
}

// Menjalankan fungsi utama
main();
