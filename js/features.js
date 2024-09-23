document.getElementById('donation-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-btn').classList.add('bg-btn-color');
        document.getElementById('history-btn').classList.remove('bg-btn-color');
        showSectionById('donation-section');
    });

document.getElementById('history-btn')
    .addEventListener('click', function () {
        document.getElementById('history-btn').classList.add('bg-btn-color');
        document.getElementById('donation-btn').classList.remove('bg-btn-color');
        showSectionById('history-section');
    });