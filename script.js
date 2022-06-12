const ninth = document.getElementById('ninth');
const tenth = document.querySelector('#tenth');
const picture = document.getElementById('picture');
const increaseButton = document.getElementById('increase-button');
const reduceButton = document.getElementById('reduce-button');
const addButton = document.getElementById('add-button');
const deleteButton = document.getElementById('delete-button');
const fileInput = document.getElementById('file-input');

function changeColors() {
    const tenthClassName = tenth.className;
    tenth.className = ninth.className;
    ninth.className = tenthClassName;
}

ninth.onclick = () => {
    ninth.className = 'blue-background';
    ninth.onclick = changeColors;
};
tenth.onclick = () => {
    tenth.className = 'yellow-background';
    tenth.onclick = changeColors;
};

let size = 0;

increaseButton.onclick = () =>{ if (size < 50) picture.style = `--size: ${size += 10}%`; };
reduceButton.onclick = () => { if (size > -50) picture.style = `--size: ${size -= 10}%`; };

const handleFile = ([file]) => {
    if (!file.type.startsWith('image/')) { return; }
    const reader = new FileReader();

    picture.file = file;
    reader.onload = ({ target: { result } }) => {
        picture.src = result;
        picture.className = 'display';
    }
    reader.readAsDataURL(file);
};

addButton.onclick = () => fileInput.click();
deleteButton.onclick = () => {
  picture.className = 'not-displayed';
  fileInput.value = '';
};