/**
 * The program shows how long it takes to heat up items.
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-09-14
 */

import promptSync from 'prompt-sync'

  const prompt = promptSync()
  const itemType = prompt('Enter your item (Pizza,Sub,soup): ')
  const itemAmountString = prompt('Enter your item amount (1,2,3): ')
  const itemAmount = parseInt(itemAmountString)
  let time = 1
  let percent = 0.5


  if (itemType === 'Pizza') {
  time = 60
} else if (itemType === 'Sub') {
  time = 45
} else if (itemType === 'Soup') {
  time = 90
} else {
  console.log('Invalid Input')
}

if (itemAmount === 1) {
  percent = 1
} else if (itemAmount === 2) {
  percent = 1.5
} else if (itemAmount === 3) {
  percent = 2
} else {
  console.log('Invalid Input')
}
const answer = time * percent
console.log('It will take ${answer} seconds to cook')

console.log('\nDone.')
