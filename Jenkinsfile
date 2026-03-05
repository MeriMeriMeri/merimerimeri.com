pipeline {
    agent none
    environment {
        JEKYLL_ENV = 'production'
        GIT_SSH_COMMAND = 'ssh -o StrictHostKeyChecking=no'
    }
    options {
        skipDefaultCheckout()
    }
    stages {
        stage('Checkout') {
            agent any
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'git@github.com:merimerimeri/merimerimeri.com.git',
                        credentialsId: 'github-ssh-key'
                    ]]
                ])
                stash name: 'source'
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'ruby:3.3.4'
                    args '-u root'
                }
            }
            steps {
                sh 'rm -rf ..?* .[!.]* *'
                unstash 'source'
                sh 'curl -fsSL https://deb.nodesource.com/setup_20.x | bash -'
                sh 'apt-get install -y nodejs'
                sh 'bundle install'
                sh 'npm ci'
                sh 'bundle exec jekyll build'
                stash includes: '_site/**', name: 'site'
            }
        }
        stage('Deploy') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root'
                }
            }
            environment {
                CLOUDFLARE_API_TOKEN = credentials('cloudflare-api-token')
                CLOUDFLARE_ACCOUNT_ID = credentials('cloudflare-account-id')
            }
            steps {
                unstash 'site'
                sh 'npx wrangler pages deploy _site --project-name=merimerimeri'
            }
        }
    }
}
