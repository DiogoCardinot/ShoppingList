document.addEventListener("DOMContentLoaded", function () {
  const list = [];

  const form = document.querySelector(".shopping-form");
  const itemInput = document.querySelector(".shopping-form-item-input");
  const quantityInput = document.querySelector(".shopping-form-quantity-input");
  const incrementButton = document.querySelector(".shopping-form-increment-button");
  const decrementButton = document.querySelector(".shopping-form-decrement-button");
  const items = document.querySelector(".shopping-items");

  incrementButton.addEventListener("click", incremetQuantity);
  decrementButton.addEventListener("click", decrementQuantity);
  form.addEventListener("submit", addItemToList);

  function incremetQuantity() {
    const currentValue = Number(quantityInput.value);
    const newValue = currentValue + 1;

    quantityInput.value = newValue;
  }

  function decrementQuantity() {
    const currentValue = Number(quantityInput.value);
    const newValue = currentValue - 1;

    if (newValue > 0) {
      quantityInput.value = newValue;
    }
  }

  function addItemToList(event) {
    event.preventDefault();

    const itemName = event.target["item-name"].value;
    const itemQuantity = event.target["item-quantity"].value;

    if (itemName !== "") {
      const item = {
        name: itemName,
        quantity: itemQuantity,
      };

      list.push(item);

      renderListItems();
      resetInputs();
    }
  }

  function renderListItems() {
    let itemsStructure = "";

    list.forEach(function (item) {
      itemsStructure += `
            <li class="shopping-item">
                <span>${item.name}</span>
                <span>${item.quantity}</span>
            </li>
        `;
    });

    items.innerHTML = itemsStructure;
  }

  function resetInputs() {
    itemInput.value = "";
    quantityInput.value = 1;
  }
});
