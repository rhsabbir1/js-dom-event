function handleOnClick(){
    const handleText = document.getElementById('handle-text');
    handleText.innerText = 'Change With Onclick';
}

document.getElementById('event-listener').addEventListener('click', function(){
    const handleText = document.getElementById('handle-text');
    handleText.innerText = 'Change With Add Even Listener';
})