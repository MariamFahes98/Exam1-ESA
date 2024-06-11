document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.getElementById('search1');
    let checkbox1 = document.getElementById('inlineCheckbox1');
    let checkbox2 = document.getElementById('inlineCheckbox2');
    let specificListButton = document.getElementById('specificListButton');
    let generalListButton = document.getElementById('generalListButton');
    let cont1 = document.getElementById('cont1');
    let cont2 = document.getElementById('cont2');
    let cont3 = document.getElementById('cont3');
    let searchInput2 = document.getElementById('search3');
    let searchButton = document.getElementById('searchItem');
    let deleteButton = document.getElementById('deleteItemButton');
    
    let idCount = 0;
    let items = [];
    function validateInputs() {
        const isCheckboxChecked = checkbox1.checked || checkbox2.checked;
        if (searchInput.value.trim() && isCheckboxChecked) {
            return true;
        } else {
            alert('Please enter a search term and check at least one checkbox.');
            return false;
        }
    }

    function handleSpecificListButton(event) {
        if (validateInputs()) {
            let data;
            if (checkbox1.checked) {
                data = `<div class="alert alert-danger" id="divid${idCount}">Fruits! - <span id="itemid${idCount}">${searchInput.value}</span></div>`;
                cont1.innerHTML += data;
            } else if (checkbox2.checked) {
                data = `<div class="alert alert-success" id="divid${idCount}">Legumes! - <span id="itemid${idCount}">${searchInput.value}</span></div>`;
                cont3.innerHTML += data;
            }
            items.push({ id: idCount, value: searchInput.value });
            idCount++;
        } else {
            event.preventDefault();
        }
    }

    function handleGeneralListButton(event) {
        if (validateInputs()) {
            let data;
            if (checkbox1.checked) {
                data = `<div class="alert alert-warning" id="divid${idCount}">Fruits! - <span id="itemid${idCount}">${searchInput.value}</span></div>`;
            } else if (checkbox2.checked) {
                data = `<div class="alert alert-warning" id="divid${idCount}">Legumes! - <span id="itemid${idCount}">${searchInput.value}</span></div>`;
            }
            cont2.innerHTML += data;
            items.push({ id: idCount, value: searchInput.value });
            idCount++;
        } else {
            event.preventDefault();
        }
    }
    function searchItem() {
        let searchTerm = searchInput2.value.trim().toLowerCase();
        if (searchTerm) {
            items.forEach((item, index) => {
                if (item.value.toLowerCase().startsWith(searchTerm)) {
                    let element = document.getElementById(`divid${item.id}`);
                    if (element) {
                        element.style.backgroundColor = 'red';
                    }
                }
            });
        }
    }

    function deleteItem() {
        let searchTerm = searchInput2.value.trim().toLowerCase();
        if (searchTerm) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value.toLowerCase().startsWith(searchTerm)) {
                    let element = document.getElementById(`divid${items[i].id}`);
                    if (element) {
                        element.remove(); 
                        items.splice(i, 1); 
                        break; 
                    }
                }
            }
        }
    }

    function handleDivClick(event) {
        let clickedDiv = event.target.closest('.alert');
        if (clickedDiv && cont2.contains(clickedDiv)) {
            let textContent = clickedDiv.textContent.trim();
            if (textContent.startsWith('Fruits')) {
                cont1.appendChild(clickedDiv);
            } else if (textContent.startsWith('Legumes')) {
                cont3.appendChild(clickedDiv);
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

    specificListButton.addEventListener('click', handleSpecificListButton);
    generalListButton.addEventListener('click', handleGeneralListButton);
    searchButton.addEventListener('click', searchItem);
    deleteButton.addEventListener('click', deleteItem);
    cont2.addEventListener('click', handleDivClick);
});
