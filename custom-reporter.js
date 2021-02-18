const path = require('path')
const fs = require('fs')

class CustomReporter {
    constructor(globalConfig, options) {
        this.globalConfig = globalConfig
        this.options = {
            ...options,
            logPath: options.logPath || 'jest-logs'
        }
        this.failed = []
    }

    onTestResult(_, results) {
        let failed = []
        results.testResults.forEach(testResult => {
            if (testResult.status === 'failed') {
                failed.push(testResult)
            }
        })

        this.failed = [
            ...this.failed,
            {
                testFilePath: path.relative('.', results.testFilePath),
                failed,
            }
        ]
    }

    onRunComplete() {
        console.log('#########################################################')
        console.log('failed', this.failed)
        console.log('#########################################################')

        /* const logFilePath = `${this.options.logPath}/${path.relative('.', results.testFilePath)}.log`
        const logPath = path.dirname(logFilePath)

        fs.mkdirSync(logPath)

        failed.forEach(failedTest => {
            const logEntry = `${failedTest.fullName}: ${failedTest.failureMessages}`
            if (fs.existsSync(logFilePath)) {
                fs.appendFileSync(logFilePath, logEntry)
            } else {
                fs.writeFileSync(logFilePath, logEntry)
            }
        }) */
    }
}

module.exports = CustomReporter
