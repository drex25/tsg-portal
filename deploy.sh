#!/bin/bash

# TSGroup Portal - Production Deployment Script

set -e

echo "🚀 Starting TSGroup Portal Production Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install it and try again."
    exit 1
fi

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose down --remove-orphans

# Remove old images to ensure fresh build
print_status "Removing old images..."
docker system prune -f

# Build the production image
print_status "Building production image..."
docker-compose build --no-cache

# Start the application
print_status "Starting the application..."
docker-compose up -d

# Wait for the application to be ready
print_status "Waiting for application to be ready..."
sleep 10

# Check if the application is running
if curl -f http://localhost/health > /dev/null 2>&1; then
    print_success "Application is running successfully!"
    print_success "🌐 Access your application at: http://localhost"
    print_success "🏥 Health check: http://localhost/health"
else
    print_warning "Application might still be starting up..."
    print_status "Checking container logs..."
    docker-compose logs app
fi

# Show running containers
print_status "Running containers:"
docker-compose ps

print_success "Deployment completed! 🎉" 