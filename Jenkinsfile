pipeline {
    agent any
    environment {
        JEKYLL_ENV = 'production'
        GIT_SSH_COMMAND = 'ssh -o StrictHostKeyChecking=no'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'git@github.com:merimerimeri/merimerimeri.com.git',
                        credentialsId: 'github-ssh-key'
                    ]]
                ])
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'ruby:3.3.4'
                    args '-u root'
                    reuseNode true
                }
            }
            steps {
                sh 'curl -fsSL https://deb.nodesource.com/setup_20.x | bash -'
                sh 'apt-get install -y nodejs'
                sh 'bundle install'
                sh 'npm ci'
                sh 'bundle exec jekyll build'
                sh 'chown -R 1000:1000 .'
            }
        }
        stage('Deploy') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root'
                    reuseNode true
                }
            }
            environment {
                CLOUDFLARE_API_TOKEN = credentials('cloudflare-api-token')
                CLOUDFLARE_ACCOUNT_ID = credentials('cloudflare-account-id')
            }
            steps {
                sh 'npx wrangler pages deploy _site --project-name=merimerimeri'
            }
        }
    }
}
