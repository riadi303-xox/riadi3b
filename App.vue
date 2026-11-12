<script setup>
import { ref } from 'vue'

const produk = ref([
  { id: 1, nama: 'Kaos Premium', harga: 85000, emoji: '👕' },
  { id: 2, nama: 'Sepatu Casual', harga: 175000, emoji: '👟' },
  { id: 3, nama: 'Tas Fashion', harga: 125000, emoji: '👜' },
  { id: 4, nama: 'Jam Tangan', harga: 200000, emoji: '⌚' }
])

const keranjang = ref([])

function tambahKeranjang(item) {
  keranjang.value.push(item)
}

const formatRupiah = (angka) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(angka)
</script>

<template>
  <div class="website">
    <header>
      <h2>🛍️ TokoKita</h2>
      <nav>
        <a href="#">Beranda</a>
        <a href="#produk">Produk</a>
        <a href="#kontak">Kontak</a>
      </nav>
      <div class="cart">🛒 Keranjang ({{ keranjang.length }})</div>
    </header>

    <section class="hero">
      <h1>Selamat Datang di TokoKita</h1>
      <p>Temukan produk favoritmu dengan harga terbaik.</p>
      <a href="#produk" class="btn">Belanja Sekarang</a>
    </section>

    <main id="produk">
      <h2>Produk Terbaru</h2>
      <div class="products">
        <div v-for="item in produk" :key="item.id" class="card">
          <div class="gambar">{{ item.emoji }}</div>
          <h3>{{ item.nama }}</h3>
          <p>{{ formatRupiah(item.harga) }}</p>
          <button @click="tambahKeranjang(item)">
            + Keranjang
          </button>
        </div>
      </div>
    </main>

    <footer id="kontak">
      <p>© 2026 TokoKita. Semua Hak Dilindungi.</p>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f6fa;
  color: #222;
}

header {
  background: white;
  padding: 20px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

header h2 {
  color: #2563eb;
}

nav {
  display: flex;
  gap: 25px;
}

nav a {
  text-decoration: none;
  color: #333;
}

.cart {
  font-weight: bold;
  color: #2563eb;
}

.hero {
  text-align: center;
  padding: 85px 20px;
  background: #2563eb;
  color: white;
}

.hero h1 {
  font-size: 38px;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background: white;
  color: #2563eb;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}

main {
  padding: 45px 7%;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 3px 12px #00000010;
}

.gambar {
  background: #eff4ff;
  padding: 30px;
  font-size: 65px;
  border-radius: 10px;
}

.card p {
  color: #2563eb;
  font-weight: bold;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 7px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

footer {
  background: #172554;
  color: white;
  text-align: center;
  padding: 25px;
}
</style>
