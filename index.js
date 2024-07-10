document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('addItemButton');
    const itemPurchasedButton = document.getElementById('itemPurchasedButton');
    const clearItemButton = document.getElementById('clearItemButton');
    const itemNameInput = document.getElementById('itemName');
    const listContainer = document.getElementById('listContainer');

    let shoppingList = [];

    function addItem() {
        const itemName = itemNameInput.value

        if (itemName !== '') {
            shoppingList.push({
                name: itemName,
                purchased: false
        
            });
            renderList();
            itemNameInput.value = '';
        }


    }

    function renderList() {
        listContainer.innerHTML = '';

        shoppingList.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;

            if (item.purchased) {
                listItem.classList.add('purchased');
            }

            const markButton = document.createElement('button');
            markButton.textContent = 'Mark Purchased';
            markButton.addEventListener('click', function() {
                togglePurchased(index);
            });

            listItem.appendChild(markButton);

            listContainer.appendChild(listItem);
        });
    }

    function togglePurchased(index) {
        shoppingList[index].purchased = !shoppingList[index].purchased;
        renderList();
    }

    function clearList() {
        shoppingList = [];
        renderList();
    }

    addItemButton.addEventListener('click', addItem);
    itemPurchasedButton.addEventListener('click', function() {
        shoppingList.forEach(item => {
            item.purchased = true;
        });
        renderList();
    });
    clearItemButton.addEventListener('click', clearList);
});