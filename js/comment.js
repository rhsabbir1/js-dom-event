document.getElementById('post-btn').addEventListener('click', function(){
    const commendField = document.getElementById('commend-field');
    const commendtext = commendField.value;

    const commendComtainer = document.getElementById('commend-container');
    const p = document.createElement('p');
    p.innerText = commendtext;

    commendComtainer.appendChild(p)

    commendField.value = '';
})