const transaksi = [
  { id: 1, barang: "Beras 5kg",      harga: 65000,  qty: 2, kategori: "Makanan" },
  { id: 2, barang: "Minyak Goreng",  harga: 32000,  qty: 3, kategori: "Makanan" },
  { id: 3, barang: "Sabun Mandi",    harga: 4500,   qty: 6, kategori: "Kebersihan" },
  { id: 4, barang: "Detergen",       harga: 28000,  qty: 2, kategori: "Kebersihan" },
  { id: 5, barang: "Buku Tulis",     harga: 5000,   qty: 10, kategori: "Alat Tulis" },
  { id: 6, barang: "Pulpen",         harga: 3000,   qty: 12, kategori: "Alat Tulis" },
  { id: 7, barang: "Susu UHT 1L",    harga: 18000,  qty: 4, kategori: "Makanan" },
]

const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);

const filterByKategori = (data, kategoriDicari) =>
  data.filter(({ kategori }) => kategori === kategoriDicari);

const hitungSubtotal = (data) =>
  data.map(({ harga, qty, ...sisa }) => ({
    ...sisa,
    harga,
    qty,
    subtotal: harga * qty,
  }));

const hitungTotal = (data) =>
  data.reduce((total, { subtotal }) => total + subtotal, 0);

const tampilkanLaporan = (judul, data) => {
  const dataDenganSubtotal = hitungSubtotal(data);
  const total = hitungTotal(dataDenganSubtotal);

  console.log(`\n=== ${judul} ===`);
  console.table(
    dataDenganSubtotal.map(({ id, barang, harga, qty, subtotal }) => ({
      ID: id,
      Barang: barang,
      Harga: formatRupiah(harga),
      Qty: qty,
      Subtotal: formatRupiah(subtotal),
    }))
  );
  console.log(`Total: ${formatRupiah(total)}`);
};

const kategoriTerpilih = "Makanan";

tampilkanLaporan("Semua Transaksi", transaksi);
tampilkanLaporan(
  `Kategori: ${kategoriTerpilih}`,
  filterByKategori(transaksi, kategoriTerpilih)
);
