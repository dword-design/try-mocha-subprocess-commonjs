import { endent } from '@dword-design/functions'
import execa from 'execa'
import { outputFile } from 'fs-extra'

export default async func => {
  await outputFile(
    'file.js',
    endent`
    #!/usr/bin/env node

    const func = ${func.toString()}

    func()
  `
  )
  await execa('./file.js', { stdio: 'inherit' })
}
