import { expect, test } from 'vitest'

test('broken test demo: calculator calculation bug', () => {
  // Навмисний баг: очікуємо некоректну суму
  const expenses = [
    { amount: 10 },
    { amount: 15 }
  ]
  const total = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0)


  expect(total).toBe(40)
})
