pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        stage ('Build') {
            steps {
                dir ('express-react') {
                    dir ('express') {
                        sh 'npm i package.json'
                        sh 'npm i -g npm-audit-html@beta'
                    }
                    dir ('react') {
                        sh 'npm i package.json'
                        sh 'npm i -g npm-audit-html@beta'
                    } 
                }
            }
        }
        stage('Verify Backend') {
            stages {
                stage ('Static Scan') {
                    steps {
                        dir ('express-react/express') {
                            sh 'npm run static-scan'
                            publishHTML (
                                target: [
                                    allowMissing: false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll: true,
                                    reportDir: 'reports/',
                                    reportFiles: 'index.html',
                                    reportName: "Backend Static Scan Report"
                                ]
                            )
                        }
                    }
                }
                stage ('Lint') {
                    steps {
                        dir ('express-react/express') {
                            sh 'npm run lint'
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
                stage ('Security') {
                    steps {
                        dir ('express-react/express') {
                            sh 'npm run security'
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
                stage ('Static Scan') {
                    steps {
                        dir ('express-react/react') {
                            sh 'npm run static-scan'
                            publishHTML (
                                target: [
                                    allowMissing: false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll: true,
                                    reportDir: 'reports/',
                                    reportFiles: 'index.html',
                                    reportName: "Frontend Static Scan Report"
                                ]
                            )
                        }
                    }
                }
                stage ('Lint') {
                    steps {
                        dir ('express-react/react') {
                            sh 'npm run lint'
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
                stage ('Security') {
                    steps {
                        dir ('express-react/react') {
                            sh 'npm run security'
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
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}