$(document).ready(function() {
  $('#dynamic-menu').html(formatItems('classics'));

  $('input[name="category"]').click(function() {
    let category = $('input[name="category"]:checked').val();
    $('#dynamic-menu').html(formatItems(category));
  });
});

function formatItems(categoryName) {
  let items = menuDict[categoryName];
  let newHtml = '';
  for (i of items) {
    newHtml += `<li><b>${i.name}</b><br>Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore \
    magna aliqua.<br>$${i.price}</li>`;
  }
  return newHtml;
}

function menuItem(name, price) {
  this.name = name;
  this.price = price;
}

let classics = [
  new menuItem('Cheese', '12.99'),
  new menuItem('Margharita', '13.99'),
  new menuItem('Pepperoni', '13.99'),
  new menuItem('Sausage', '14.99')
];

let deluxe = [
  new menuItem('Meat Lovers', '18.99'),
  new menuItem('Garden Veggie', '14.99'),
  new menuItem('Thai Chicken', '15.99'),
  new menuItem('Mediterranean', '14.99'),
  new menuItem('Loaded Italian', '15.99'),
  new menuItem('The Grizzly', '17.99')
];

let sides = [
  new menuItem('Garlic Bread', '5.99'),
  new menuItem('Spinach Artichoke Dip', '7.99'),
  new menuItem('Caesar Salad', '7.99'),
  new menuItem('Garden Salad', '6.99')
];

let drinks = [
  new menuItem('Soda', '1.99'),
  new menuItem('Iced Tea', '1.99'),
  new menuItem('Coffee', '1.99')
];

let desserts = [
  new menuItem('Tiramisu', '6.99'),
  new menuItem('Gelato', '4.99'),
  new menuItem('Lava Cake', '5.99'),
];

let menuDict = {'classics': classics, 'deluxe': deluxe, 'sides': sides, 'drinks': drinks, 'desserts': desserts};
