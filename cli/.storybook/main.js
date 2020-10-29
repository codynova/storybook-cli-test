const projectPath = require('../projectFilepath')

module.exports = {
    stories: [
        // Stories bundled with this CLI
        '../stories/**/*.stories.@(tsx|jsx)',
        // Stories in the target project path
        projectPath + '/**/*.stories.@(tsx|jsx)',
    ],
    webpackFinal: async (config) => {
        config.resolve.modules.push(projectPath)
        config.module.rules[0].include.push(projectPath)
        return config
    }
}