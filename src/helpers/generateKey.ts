// Функция генерации ключей для списков
function keyClosure() {
  let key = 1;
  return () => key++
}

const generateKey = keyClosure()

export default generateKey