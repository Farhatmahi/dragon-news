function ticketPrice(ticketQuantity) {
  const firstHundred = 100;
  const hundredToTwoHundred = 90;
  const moreThanTwoHundred = 70;

  if (ticketQuantity < 100) {
    const price = ticketQuantity * firstHundred;
    return price;
  } else if (ticketQuantity >= 100 && ticketQuantity <= 200) {
    const price = ticketQuantity * hundredToTwoHundred;
    return price;
  } else if (ticketQuantity > 200) {
    const price = ticketQuantity * moreThanTwoHundred;
    return price;
  }
}

const ticket = ticketPrice(210);
console.log(ticket);
