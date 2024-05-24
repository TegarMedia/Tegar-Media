// Mendapatkan referensi ke elemen tombol dan paragraf
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

// Fungsi untuk memindahkan tombol "Tidak" ke posisi acak
function moveButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();

    const newTop = Math.random() * (containerRect.height - buttonRect.height);
    const newLeft = Math.random() * (containerRect.width - buttonRect.width);

    noBtn.style.position = 'absolute';
    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;
}

// Menambahkan event listener ke tombol "Tidak"
noBtn.addEventListener('mouseover', moveButton);

// Menambahkan event listener ke tombol "Baik"
yesBtn.addEventListener('click', function() {
    message.textContent = 'Terima kasih, lanjutkan ya kerjanya!';
});
