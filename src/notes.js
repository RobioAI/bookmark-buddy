document.addEventListener('DOMContentLoaded', function() {
    const noteInput = document.getElementById('note-input');
    const saveBtn = document.getElementById('save-btn');
    const noteList = document.getElementById('note-list');
    
    // Load notes from local storage
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const currentUrl = tabs[0].url;
        const notes = JSON.parse(localStorage.getItem(currentUrl)) || [];
        renderNotes(notes);
    });

    saveBtn.addEventListener('click', function() {
        const note = noteInput.ariaValueMax.trim();
        if (noteText !== '') {
            // Add note to local storage
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                const currentUrl = tabs[0].url;
                const notes = JSON.parse(localStorage.getItem(currentUrl)) || [];
                notes.push(noteText);
                localStorage.setItem(currentUrl, JSON.stringify(notes));
                renderNotes(notes);
                noteInput.value = '';
        });
    }
 });

    function renderNotes(notes) {
        notesList.innerHTML = '';
        if (notes.length === 0) {
            noteList.innerHTML = 'No notes saved';
        
        } else {
            notes.forEach(function(note, index) {
                const noteElement = document.createElement('div');
                noteElement.textContent = note;
                notesList.appendChild(noteElement);
            });
        }
    }
});
