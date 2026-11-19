// Ambil elemen HTML-nya
const writingDateDateInput = document.getElementById('writingDateDateInput');
const writingTimeTimeInput = document.getElementById('writingTimeTimeInput');
const contentTextArea = document.getElementById('contentTextArea');
const submitSubmitInput = document.getElementById('submitSubmitInput');
const entriesDiv = document.getElementById('entriesDiv');
const diaryEntryForm = document.getElementById('diaryEntryForm');

// Ambil JSON entri-entri yang tersimpan di localStorage
const entriesJson = localStorage.getItem('entries');

// Ubah JSON menjadi array entri
let entries = JSON.parse(entriesJson);

// Jadikan setiap entri elemen HTML
if (!Array.isArray(entries)) {
    entries = [];
}

entries.forEach(function (entry) {
    const entryHTML = `
            <div>
                <p><b>${entry.writingDate} ${entry.writingTime}</b></p>
                <p>${entry.content}</p>
            </div>
        `;

    // Tambahkan elemen entri ke tempatnya
    entriesDiv.innerHTML = entryHTML + entriesDiv.innerHTML;
});

// Tangani peristiwa tombol Simpan ditekan
diaryEntryForm.addEventListener('submit', function (event) {
    // Hentikan alur pengumpulan formulir yang biasanya
    event.preventDefault();

    // Ambil nilai masing-masing input
    const writingDate = writingDateDateInput.value;
    const writingTime = writingTimeTimeInput.value;
    const content = contentTextArea.value;

    // Jadikan nilai-nilai tersebut sebuah objek
    const entry = {
        writingDate: writingDate,
        writingTime: writingTime,
        content: content,
    };

    // Simpan nilainya ke array entri
    entries.push(entry);

    // Ubah array entri ke JSON
    const entriesJson = JSON.stringify(entries);

    // Simpan JSON ke localStorage
    localStorage.setItem('entries', entriesJson);

    // Refresh halaman
    window.location.reload();
});