function checkMatchingPasswords() {
    // checkIfEmpty();
if (lastPasswordBox.value === '' || firstPasswordBox.value === '') return;

    if (lastPasswordBox.value === firstPasswordBox.value) {
        p.innerHTML = '';
        if (lastPasswordBox.classList.contains('password-matched') || firstPasswordBox.classList.contains('password-matched')) return;
        lastPasswordBox.classList.add('password-matched');
        lastPasswordBox.style.backgroundColor = '#FFFFFF';
        firstPasswordBox.classList.add('password-matched');
        firstPasswordBox.style.backgroundColor = '#FFFFFF';
    } else { 
        p.innerHTML = 'Passwords do not match';
        lastPasswordBox.classList.remove('password-matched');
        firstPasswordBox.classList.remove('password-matched');
        lastPasswordBox.style.backgroundColor = 'rgba(255, 214, 221, 0.63)';
        firstPasswordBox.style.backgroundColor = 'rgba(255, 214, 221, 0.63)';
    }
}


// function checkIfEmpty {
//     if (lastPasswordBox.value == null || firstPasswordBox.value == null) {
//         p.innerHTML = '';
//         lastPasswordBox.style.backgroundColor = '#FFFFFF';
//         firstPasswordBox.style.backgroundColor = '#FFFFFF';
//     }
// }


const lastDiv = document.querySelector('#confirm');
const lastPasswordBox = document.querySelector('.pw2');
const firstPasswordBox = document.querySelector('.pw1');
const p = document.querySelector('.error');

lastPasswordBox.addEventListener("blur", checkMatchingPasswords);
// firstPasswordBox.addEventListener("blur", checkIfEmpty)