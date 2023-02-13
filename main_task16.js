const ghost = document.getElementById('input');

ghost.addEventListener('focusin', () => {
    document.body.append(newDiv = document.createElement('div'));
});

ghost.addEventListener('focusout', () => {
    myDivRemove = document.querySelector('div').remove();
 });