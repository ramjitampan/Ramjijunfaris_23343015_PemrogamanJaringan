// Mengimpor MongoClient dan ObjectId
const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'testsaja';

async function main() {
  try {
    // Koneksi
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB!");

    const db = client.db(namaDatabase);
    const tugas = db.collection('tugas');

    // ============================
    // DELETE ONE (Hapus 1 tugas)
    // ============================
    const deleteOneResult = await tugas.deleteOne({
      _id: new ObjectId("6922affa34109364236f5afa") // pilih salah satu ID yang mau dihapus
    });

    console.log("Jumlah data yang dihapus:", deleteOneResult.deletedCount);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
