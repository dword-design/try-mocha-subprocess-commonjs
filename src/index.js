import test from './test'

const run = async () => {
  await test(() => {
    const functions = require('@dword-design/functions')
    console.log([1, 2] |> functions.map(x => x * 2))

    return require('./foo')
  })
  await test(() => require('./foo'))
}
run()
