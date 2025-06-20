# TSGroup Portal - Deployment Guide

## 🚀 Production Deployment

### Prerequisites

- Docker Desktop installed and running
- Docker Compose installed
- At least 4GB of available RAM

### Quick Start (Windows)

1. **Open PowerShell as Administrator** in the project directory
2. **Run the deployment script:**
   ```powershell
   .\deploy.ps1
   ```

### Manual Deployment

1. **Build and start the application:**
   ```bash
   docker-compose up -d --build
   ```

2. **Access the application:**
   - Main application: http://localhost
   - Health check: http://localhost/health

## 📦 NPM Production Deployment

### Prerequisites

- Node.js 18+ installed
- NPM installed

### Quick Start with NPM

**Windows (PowerShell):**
```powershell
.\start-production.ps1
```

**Linux/Mac:**
```bash
chmod +x start-production.sh
./start-production.sh
```

### Manual NPM Deployment

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the application:**
   ```bash
   npm run build
   ```

3. **Start production server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - Main application: http://localhost:3000

### NPM Scripts Available

```bash
npm run dev          # Development server
npm run build        # Build for production
npm run start        # Serve production build
npm run serve        # Build + Start in one command
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### NPM Script Options

**Skip build (if already built):**
```powershell
.\start-production.ps1 -SkipBuild
```

**Skip install (if dependencies already installed):**
```powershell
.\start-production.ps1 -SkipInstall
```

**Custom port:**
```powershell
.\start-production.ps1 -Port 8080
```

### Deployment Features

✅ **Multi-stage Docker build** for optimized production images  
✅ **Nginx server** for high-performance static file serving  
✅ **Gzip compression** for faster loading  
✅ **Security headers** for enhanced protection  
✅ **Health checks** for monitoring  
✅ **Automatic restart** on failure  
✅ **Caching** for static assets  
✅ **NPM production server** for simple deployment  
✅ **Vite preview server** for optimized static serving  

## 🛠️ Development Environment

### Start Development Server

```bash
# Using Docker
docker-compose -f docker-compose.dev.yml up

# Or locally
npm install
npm run dev
```

### Development Features

- Hot reload enabled
- Source maps for debugging
- Development server on port 5173

## 📁 File Structure

```
tsg-portal/
├── Dockerfile              # Production Docker configuration
├── docker-compose.yml      # Production Docker Compose
├── nginx.conf             # Nginx configuration
├── deploy.ps1             # Windows deployment script
├── deploy.sh              # Linux/Mac deployment script
├── .dockerignore          # Docker build exclusions
└── README-DEPLOYMENT.md   # This file
```

## 🔧 Configuration

### Environment Variables

The application uses the following environment variables:

- `NODE_ENV`: Set to `production` for production builds
- `VITE_API_URL`: Backend API URL (if needed)

### Nginx Configuration

The `nginx.conf` file includes:

- **Security headers** (XSS protection, content type options, etc.)
- **Gzip compression** for better performance
- **Static asset caching** (1 year for immutable assets)
- **SPA routing** support for React Router
- **Health check endpoint** at `/health`

## 📊 Monitoring

### Health Check

```bash
curl http://localhost/health
```

### View Logs

```bash
# Application logs
docker-compose logs -f app

# Nginx logs
docker-compose exec app tail -f /var/log/nginx/access.log
docker-compose exec app tail -f /var/log/nginx/error.log
```

### Container Status

```bash
docker-compose ps
```

## 🚨 Troubleshooting

### Common Issues

1. **Port 80 already in use:**
   ```bash
   # Change port in docker-compose.yml
   ports:
     - "8080:80"  # Use port 8080 instead
   ```

2. **Build fails:**
   ```bash
   # Clean Docker cache
   docker system prune -a
   docker-compose build --no-cache
   ```

3. **Application not loading:**
   ```bash
   # Check container logs
   docker-compose logs app
   
   # Check if container is running
   docker-compose ps
   ```

### Performance Optimization

- **Image size**: ~50MB (optimized with multi-stage build)
- **Startup time**: ~10-15 seconds
- **Memory usage**: ~100-200MB
- **CPU usage**: Minimal (static file serving)

## 🔄 Updates

### Update Application

1. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

2. **Rebuild and restart:**
   ```bash
   docker-compose down
   docker-compose up -d --build
   ```

### Rollback

```bash
# Stop current version
docker-compose down

# Start previous version (if tagged)
docker-compose up -d --build
```

## 📈 Production Checklist

- [ ] Docker and Docker Compose installed
- [ ] Application builds successfully
- [ ] Health check endpoint responds
- [ ] Static assets are cached
- [ ] Security headers are present
- [ ] Gzip compression is working
- [ ] Application is accessible on intended port
- [ ] Logs are being generated
- [ ] Container restart policy is set

## 🆘 Support

For deployment issues:

1. Check the logs: `docker-compose logs app`
2. Verify Docker is running: `docker info`
3. Check container status: `docker-compose ps`
4. Test health endpoint: `curl http://localhost/health`

---

**TSGroup Portal** - Production Ready Deployment 🚀 