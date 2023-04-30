pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        stage ('Build') {
            steps {
                dir ('express-react') {
                    dir ('express') {
                        sh 'npm install package.json'
                    }
                    dir ('react') {
                        sh 'npm install package.json'  
                    } 
                }
            }
        }
        stage('Verify Backend') {
            stages {
                stage ('Lint Backend') {
                    steps {
                        dir ('express-react/express') {
                            sh 'npx eslint . --format html --output-file reports/eslint.html'
                            publishHTML (
                                target: [
                                    allowMissing: false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll: true,
                                    reportDir: 'reports/',
                                    reportFiles: 'eslint.html',
                                    reportName: "Backend Lint Report"
                                ]
                            )
                        }
                    }
                }
                stage ('Security Backend') {
                    steps {
                        dir ('express-react/express') {
                            sh 'npm audit --json | npm-audit-html --output reports/audit.html'
                            publishHTML (
                                target: [
                                    allowMissing: false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll: true,
                                    reportDir: 'reports/',
                                    reportFiles: 'audit.html',
                                    reportName: "Backend Security Report"
                                ]
                            )
                        }
                    }
                }
            }
        }
        stage('Verify Frontend') {
            stages {
                stage ('Lint Frontend') {
                    steps {
                        dir ('express-react/react') {
                            sh 'npx eslint . --format html --output-file reports/eslint.html'
                            publishHTML (
                                target: [
                                    allowMissing: false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll: true,
                                    reportDir: 'reports/',
                                    reportFiles: 'eslint.html',
                                    reportName: "Frontend Lint Report"
                                ]
                            )
                        }
                    }
                }
                stage ('Security Frontend') {
                    steps {
                        dir ('express-react/react') {
                            sh 'npm audit --json | npm-audit-html --output reports/audit.html'
                            publishHTML (
                                target: [
                                    allowMissing: false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll: true,
                                    reportDir: 'reports/',
                                    reportFiles: 'audit.html',
                                    reportName: "Frontend Security Report"
                                ]
                            )
                        }
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}