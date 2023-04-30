pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        dir ('muda/WorkingDemo/express-react') {
            stage ('Building Docker') {
                sh 'docker pull mysql'
                dir ('express') {
                    sh 'docker build -t app-server .'
                }
                dir ('react') {
                    sh 'docker build -t react-app .'  
                }
                agent { dockerfile true }  
            }
            stage('Verify Backend') {
                dir ('express') {
                    stages {
                        stage ('Build Backend') {
                            steps {
                                // these steps are oriented towards the non-github version
                                //sh 'rm muda -r'
                                //sh 'git clone https://github.com/marcoalexander/muda.git'
                                //sh 'npm i eslint'
                                //sh 'npm i eslint-plugin-react'
                                //sh 'npm i -g npm-audit-html@beta'              
                            }
                        }
                        /*stage ('Test') {
                            steps {
                                catchError (buildResult: 'FAILURE', stageResult: 'FAILURE') {
                                    sh './node_modules/.bin/jest --coverage'
                                }
                                sh 'coverage report && coverage html'
                                publishHTML (
                                    target: [
                                        allowMissing: false,
                                        alwaysLinkToLastBuild: true,
                                        keepAll: true,
                                        reportDir: 'htmlcov',
                                        reportFiles: 'index.html',
                                        reportName: "Backend Coverage Report"
                                    ]
                                )
                            }
                        }*/
                        stage ('Lint Backend') {
                            steps {
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
                        stage ('Security Backend') {
                            steps {
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
                dir ('react') {
                    stages {
                        stage ('Build Frontend') {
                            steps {
                                sh 'npm i package.json'
                                sh 'npm i eslint'
                                sh 'npm i eslint-plugin-react'
                                sh 'npm i -g npm-audit-html@beta'              
                            }
                        }
                        stage ('Lint Frontend') {
                            steps {
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
                        stage ('Security Frontend') {
                            steps {
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
}