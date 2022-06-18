const pass_field = document.querySelector('.pass-key')
const showBtn = document.querySelector('.show')
showBtn.addEventListener('click', () => {
    if (pass_field.type === 'password') {
        pass_field.type = 'text'
        showBtn.textContent = 'HIDE'
        showBtn.style.color = '#3498b'
    } else {
        pass_field.type = 'passsword'
        showBtn.textContent = 'SHOW'
        showBtn.style.color = '#222'
    }
})