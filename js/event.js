function handleOnClick(){
    const handleText = document.getElementById('handle-text');
    handleText.innerText = 'Change With Onclick';
}

document.getElementById('event-listener').addEventListener('click', function(){
    const handleText = document.getElementById('handle-text');
    handleText.innerText = 'Change With Add Even Listener';
})

document.getElementById('update-btn').addEventListener('click', function(){

    const inputFile = document.getElementById('input-field');
    inputText = inputFile.value;

    const h4 = document.getElementById('update-text');
    h4.innerText = inputText;
    
    inputFile.value = '';
})