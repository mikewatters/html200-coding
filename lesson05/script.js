let total = 0;

function makeDeposit(x) {
  if (x > 50000) {
    alert('You cannot deposit more than $50,000.')
  }
  else {
  total += Number(x);
  }
  if (total < 300) {
    alert('Warning: Your balance is less than $300.');
  }
}

function makeWithdrawal(x) {
  if (x > total) {
    alert('You cannot withdraw money you do not have!')
  }
  else {
    if (total - x < 300) {
      let input = prompt('This will take your balance below $300. Are you sure? Enter Y or N.');
      switch(input) {
          case 'Y': {
          total -= Number(x);
          }
          case 'N': {
          break;
          }
          default: {
          prompt('Please try again. Enter Y or N.')
          }
        }
      }
      else {
        if (total - x < 300) {
                  total -= Number(x);
      }
    }
  }
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
      alert('Your balance is $' + Number(total));
      break;
      }
      default: {
      prompt('Try again!\nEnter Q to quit, W to withdraw, D to deposit, and B to view balance.');
      }
    }
    y++;
  }
}
