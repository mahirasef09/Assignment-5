document.getElementById('noakhali-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();


        const number = getInputValueById('noakhali-input');

        if (isNaN(number)) {
            alert('Failed to donate money');
            return;
        }

        if (number <= 0) {
            alert('Failed to donate money');
            return;
        }
        

        const balance = getTextValueById('balance');
        const noakhaliAmount = getTextValueById('noakhali-amount');



        const newBalance = balance - number;
        document.getElementById('balance').innerText = newBalance;

        const newNoakhaliAmount = noakhaliAmount + number;
        document.getElementById('noakhali-amount').innerText = newNoakhaliAmount;

        const d = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="space-y-3 m-4 border-2 rounded-lg p-6">
            <h3 class="font-extrabold">${number} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
            <p>Date: ${d}</p>
        </div>
            `;
        document.getElementById('history-section').appendChild(div);
        document.getElementById('no-history').classList.add('hidden');

    });




document.getElementById('feni-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();


        const number = getInputValueById('feni-input');

        if (isNaN(number)) {
            alert('Failed to donate money');
            return;
        }

        if (number <= 0) {
            alert('Failed to donate money');
            return;
        }

        const balance = getTextValueById('balance');
        const feniAmount = getTextValueById('feni-amount');



        const newBalance = balance - number;
        document.getElementById('balance').innerText = newBalance;

        const newFeniAmount = feniAmount + number;
        document.getElementById('feni-amount').innerText = newFeniAmount;

        const d = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="space-y-3 m-4 border-2 rounded-lg p-6">
                <h3 class="font-extrabold">${number} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
                <p>Date: ${d}</p>
            </div>
            `;
        document.getElementById('history-section').appendChild(div);
        document.getElementById('no-history').classList.add('hidden');
    });




document.getElementById('quota-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();


        const number = getInputValueById('quota-input');

        if (isNaN(number)) {
            alert('Failed to donate money');
            return;
        }

        if (number <= 0) {
            alert('Failed to donate money');
            return;
        }

        const balance = getTextValueById('balance');
        const quotaAmount = getTextValueById('quota-amount');



        const newBalance = balance - number;
        document.getElementById('balance').innerText = newBalance;

        const newQuotaAmount = quotaAmount + number;
        document.getElementById('quota-amount').innerText = newQuotaAmount;

        const d = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="space-y-3 m-4 border-2 rounded-lg p-6">
            <h3 class="font-extrabold">${number} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
            <p>Date: ${d}</p>
        </div>
            `;
        document.getElementById('history-section').appendChild(div);
        document.getElementById('no-history').classList.add('hidden');

    });