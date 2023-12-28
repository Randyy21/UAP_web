const barang = {
  "001": { nama: "A", harga: 10000 },
  "002": { nama: "B", harga: 20000 },
  "003": { nama: "C", harga: 30000 },
};

const transaksi = {
  penjualan: {},
  pembelian: {},
};

function tambahTransaksi() {
  const jumlahBarangInput = parseInt(
    document.getElementById("jumlahBarang").value,
    10
  );
  const kodeBarangInput = document.getElementById("kodeBarang").value;

  if (barang[kodeBarangInput]) {
    if (!transaksi["penjualan"][kodeBarangInput]) {
      transaksi["penjualan"][kodeBarangInput] = 0;
    }
    transaksi["penjualan"][kodeBarangInput] += jumlahBarangInput;

    const totalHarga =
      transaksi["penjualan"][kodeBarangInput] * barang[kodeBarangInput].harga;

    window.alert(`Total pembayaran adalah: ${totalHarga}`);

    const uangDibayarkan = parseFloat(
      window.prompt("Masukkan jumlah uang yang akan dibayarkan:")
    );

    if (!isNaN(uangDibayarkan)) {
      if (uangDibayarkan >= totalHarga) {
        const kembalian = uangDibayarkan - totalHarga;
        window.alert(`Total kembalian Anda adalah: ${kembalian}`);
      } else {
        window.alert(
          "Maaf, jumlah uang yang dibayarkan kurang dari total pembayaran."
        );
      }
    } else {
      window.alert("Masukkan jumlah uang yang valid.");
    }

    console.log(
      `Penjualan ${barang[kodeBarangInput].nama} sebanyak ${jumlahBarangInput} buah berhasil ditambahkan.`
    );
  } else {
    console.log(`Barang dengan kode ${kodeBarangInput} tidak ditemukan.`);
  }
}
