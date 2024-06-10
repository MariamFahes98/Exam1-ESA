document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.getElementById('search1');
    let checkbox1 = document.getElementById('inlineCheckbox1');
    let checkbox2 = document.getElementById('inlineCheckbox2');
    let specificListButton = document.getElementById('specificListButton');
    let generalListButton = document.getElementById('generalListButton');
    let cont1 = document.getElementById('cont1');
    let cont2 = document.getElementById('cont2');
    let cont3 = document.getElementById('cont3');
    let idcount = 0;
    let items = [];
    let searchInput2 = document.getElementById('search3');
    let searchButton = document.getElementById('searchItem');
    let deleteButton = document.getElementById('deleteItemButton');
    
    function validateInputs() {
        const isCheckboxChecked = checkbox1.checked || checkbox2.checked;
        if (searchInput.value.trim() && isCheckboxChecked) {
            return true;
        } else {
            alert('Please enter a search term and check at least one checkbox.');
            return false;
        }
    }

    function specificListButton1(event) {
        if (validateInputs()) {
            if (checkbox1.checked) {
                let data = `<div class="alert alert-danger" id="divid${idcount}">Fruits!-<span id="itemid${idcount}">${searchInput.value}</span></div>`;
                items[idcount] = searchInput.value;
                idcount++;
                cont1.innerHTML += data;
            } else if (checkbox2.checked) {
                let data = `<div class="alert alert-success" id="divid${idcount}">Legumes!-<span id="itemid${idcount}">${searchInput.value}</span></div>`;
                items[idcount] = searchInput.value;
                idcount++;
                cont3.innerHTML += data;
            }
        } else {
            event.preventDefault();
        }
    }

    function generalListButton1(event) {
        if (validateInputs()) {
            if (checkbox1.checked) {
                let data = `<div class="alert alert-warning" id="divid${idcount}">Fruits!-<span id="itemid${idcount}">${searchInput.value}</span></div>`;
                items[idcount] = searchInput.value;
                idcount++;
                cont2.innerHTML += data;
            } else if (checkbox2.checked) {
                let data = `<div class="alert alert-warning" id="divid${idcount}">Legumes!-<span id="itemid${idcount}">${searchInput.value}</span></div>`;
                items[idcount] = searchInput.value;
                idcount++;
                cont2.innerHTML += data;
            }
        } else {
            event.preventDefault();
        }
    }

    function searchItem() {
        let searchTerm = searchInput2.value.trim().toLowerCase();
        if (searchTerm) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].toLowerCase().startsWith(searchTerm)) {
                    let element = document.getElementById(`divid${i}`);
                    if (element) {
                        element.style.backgroundColor = 'red';
                    }
                }
            }
        }
    }

    function deleteItem() {
        let searchTerm = searchInput2.value.trim().toLowerCase();
        if (searchTerm) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].toLowerCase().startsWith(searchTerm)) {
                    let element = document.getElementById(`divid${i}`);
                    if (element) {
                        element.remove(); 
                        items.splice(i, 1); 
                        break;
                    }
                }
            }
        }
    }
    checkbox1.addEventListener('change', function() {
        if (checkbox1.checked) {
            checkbox2.checked = false;
        }
    });

    checkbox2.addEventListener('change', function() {
        if (checkbox2.checked) {
            checkbox1.checked = false;
        }
    });

    specificListButton.addEventListener('click', specificListButton1);
    generalListButton.addEventListener('click', generalListButton1);
    searchButton.addEventListener('click', searchItem);
    deleteButton.addEventListener('click', deleteItem); 
});