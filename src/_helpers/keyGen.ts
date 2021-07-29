function keyClosure() {
  let key = 1;
  return () => key++
}

const keyGen = keyClosure()

export default keyGen