document.addEventListener('DOMContentLoaded', function() {
  const noteInput = document.getElementById('note-input');
  const saveNoteBtn = document.getElementById('save-note-btn');
  const notesList = document.getElementById('notes-list');

  // Load existing notes for the current website
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;
    const notes = JSON.parse(localStorage.getItem(currentUrl)) || [];
    renderNotes(notes);
  });

  saveNoteBtn.addEventListener('click', function() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
      // Save note to local storage
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
      notesList.innerHTML = '<p>No notes for this website.</p>';
    } else {
      notes.forEach(function(note) {
        const noteItem = document.createElement('div');
        noteItem.textContent = note;
        notesList.appendChild(noteItem);
      });
    }
  }
});
