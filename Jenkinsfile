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
                stage ('Static Scan Backend') {
                    steps {
                        dir ('express-react/express') {
                            sh 'ls'
                            sh ' plato -r -d reports -e eslintrc.json ./*.js'
                            publishHTML (
                                target: [
                                    allowMissing: false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll: true,
                                    reportDir: 'reports/',
                                    reportFiles: 'index.html',
                                    reportName: "Backend ESLint Report"
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
                stage ('Static Scan Frontend') {
                    steps {
                        dir ('express-react/react') {
                            sh 'plato -r -d reports -e eslintrc.json ./*.js,src/*.jsx'
                            publishHTML (
                                target: [
                                    allowMissing: false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll: true,
                                    reportDir: 'reports/',
                                    reportFiles: 'index.html',
                                    reportName: "Frontend ESLint Report"
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
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}