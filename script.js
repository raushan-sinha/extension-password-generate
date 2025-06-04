//todo: Create some operations to generate the password after button clicked!
document.querySelector('.animated-button').addEventListener('click', () => {
    let input = prompt('Enter anything(name/word):');
    if (input) {
        //? Start Password Generation Logic
        let generatedPassword = input;
        generatedPassword = generatedPassword.replace(/[aeiouAEIOU]/g, () => Math.floor(Math.random() * 9980));
        //? Add some symbols
        generatedPassword += '!' + input.length + '@';
        const newElement = document.createElement('div');
        newElement.textContent = `Password : ${generatedPassword}`;
        //? Add some styling to the new element
        newElement.style.margin = '10px';
        newElement.style.padding = '10px';
        newElement.style.backgroundColor = '#f0f0f0';
        newElement.style.borderRadius = '4px';
        document.querySelector('.container').appendChild(newElement)
    } else {
        alert('No Input found!')
    }
})

