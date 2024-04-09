function expensiveOperation(n) {
    return n * 2;
}

function memoization(func) {
    const cache = {}

    return function(...args) {
        const key = args.join(',');

      if (cache[key]) {
        console.log('Достаем из кэша:', key)
        return cache[key]
      } else {

        console.log('Вычисление результата для ключа:', key)
        const result = func.apply(this, args)
        cache[key] = result
        return result
      }
    }
  }

  
  const memoizedExpensiveOperation = memoization(expensiveOperation);
  console.log(memoizedExpensiveOperation(5)); 
  console.log(memoizedExpensiveOperation(5)); 
  console.log(memoizedExpensiveOperation(5));
  console.log(memoizedExpensiveOperation(6))