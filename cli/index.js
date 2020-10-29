#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

let storybookProcess = null

process.on('close', () => {
    if (storybookProcess) {
        storybookProcess.kill()
    }
})

try {
    fs.writeFileSync(
        path.resolve(__dirname, 'projectFilepath.js'),
        `module.exports = '${process.cwd()}'`,
    )

    storybookProcess = spawn(
        path.resolve(__dirname, 'node_modules/.bin/start-storybook'),
        [ '-p', '64680', '--no-dll' ],
        { shell: true, cwd: __dirname },
    )
    
    storybookProcess.stdout.on('data', (data) => console.log(data.toString()))
    storybookProcess.stderr.on('data', (data) => console.log(data.toString()))
    storybookProcess.on('close', (code) => console.warn('Storybook process closed with code ' + code))
}
catch (error) {
    console.error(error)
    process.exit(1)
}