const level = require('level')

async function main () {
  const db = level('browserify-starter')
  const output = document.getElementById('output')

  await db.put('beep', 'boop')
  output.textContent = await db.get('beep')
}

main()
