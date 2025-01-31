# FAQ Management System

A robust backend system for managing Frequently Asked Questions (FAQs) with multi-language support, automated translations, and Redis caching.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-blue)
![Redis](https://img.shields.io/badge/Redis-7.0-red)

## Features

- 🌐 **Multi-language Support**: Store translations for Hindi (`hi`) and Bengali (`bn`)
- 🤖 **Auto-Translations**: Integrated with Google Translate API
- ⚡ **Redis Caching**: 1-hour TTL for API responses
- 🐳 **Docker Ready**: Full containerization support
- ✅ **REST API**: CRUD operations with proper status codes
- 🧪 **Unit Tests**: Mocha/Chai test coverage

## Installation

### Prerequisites
- Node.js 18.x
- MongoDB 7.0+
- Redis 7.0+
- Docker (optional)

```bash
# Clone repository
git clone https://github.com/ravijha9546/multilingual-faq-backend
cd faq-system

# Install dependencies
npm install

# Create environment file
cp .env.example .env