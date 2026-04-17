pipeline {
    agent any

    tools{
        nodejs 'node20'   
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t my-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f my-app || true'
                sh 'docker run -d -p 3000:3000 --name my-app my-app'
            }
        }

        stage('Print Message') {
            steps {
                echo 'Deployment Done!'
            }
        }
    }
}