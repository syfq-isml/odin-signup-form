function checkMatchingPasswords() {
    // checkIfEmpty();


if (lastPasswordBox.value === '' && lastPasswordBox.classList.contains('password-matched')) {
    lastPasswordBox.classList.remove('password-matched');
    return;
}

if (lastPasswordBox.value === '' && firstPasswordBox.value === '') return;

    if (lastPasswordBox.value === firstPasswordBox.value) {
        p.innerHTML = '';
        if (lastPasswordBox.classList.contains('password-matched')) return ;
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

function releaseSecondBox() {

    if (firstPasswordBox.value === '' && firstPasswordBox.classList.contains('password-matched')) {
        firstPasswordBox.classList.remove('password-matched');
        return;
    }

    if (firstPasswordBox.checkValidity() === true) {
        lastPasswordBox.removeAttribute('disabled'); 
        firstPasswordBox.classList.add('password-matched');
        lastPasswordBox.style.backgroundColor = '#FFFFFF';
    } else {
        lastPasswordBox.setAttribute('disabled','true');
        firstPasswordBox.classList.remove('password-matched');
        lastPasswordBox.classList.remove('password-matched');
        lastPasswordBox.style.backgroundColor = '#dcdee2';
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


firstPasswordBox.addEventListener("blur", releaseSecondBox);

lastPasswordBox.addEventListener("blur", checkMatchingPasswords);




