/**
 * Fungsi untuk mengarahkan pengguna ke WhatsApp dengan pesan otomatis
 * @param {string} namaProduk - Nama/deskripsi produk yang dipilih
 */
function beliKeWA(namaProduk) {
    // Nomor WhatsApp Tujuan
    const nomorWA = "6281259707177";
    
    // Pesan Template Otomatis
    const pesan = `Halo Makmur Jaya Florist, saya ingin memesan produk:\n\n*${namaProduk}*\n\nMohon info detail harga dan prosedur pemesanannya. Terima kasih!`;
    
    // Encoding URL agar format pesan tersampaikan sempurna
    const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    
    // Membuka WhatsApp di tab baru
    window.open(urlWA, '_blank');
}