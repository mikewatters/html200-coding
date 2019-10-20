let total = 0;

function makeDeposit(x) {
  total += Number(x);
}

function makeWithdrawal(x) {
  total -= Number(x);
}

function bankActions() {
  let y = 0;
  while (y >= 0) {
    let teller = prompt('Enter Q to quit, W to withdraw, D to deposit, and B to view balance.');
    if (teller === 'Q') {
      alert('Thanks for banking with us.');
      break;
    }
    switch(teller) {
      case 'D': {
      let input = prompt('Enter the amount you want to deposit.');
      makeDeposit(input);
      break;
      }
      case 'W': {
      let input = prompt('Enter the amount you want to withdraw.');
      makeWithdrawal(input);
      break;
      }
      case 'B': {
      alert('Your balance is ' + Number(total));
      break;
      }
      default: {
      prompt('Try again!\nEnter Q to quit, W to withdraw, D to deposit, and B to view balance.');
      }
    }
    y++;
  }
}
