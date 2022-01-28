import execa from 'execa'

export default func => execa('node', ['-e', `(${func.toString()})()`], { cwd: require.main.path, stdio: 'inherit' })
