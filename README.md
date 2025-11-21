# Textas Trailers Cr Catalog - Web Application/mobile

A modern web application for browsing and managing trailer products, built with React, TypeScript, and Firebase.

## Project Overview

This project is a **learning-focused** web application that serves as a public catalog for trailer sales. It consists of two main parts:

- **Web Application (React + TypeScript)**: Public-facing product catalog
- **Mobile Application**: Admin panel for product management

## Features

### Web Application (Public)
- ✅ Product catalog with categories
- ✅ Advanced filtering and search
- ✅ Detailed product specifications
- ✅ Accessories section
- ✅ Discount and promotion system
- ✅ Responsive design
- ✅ Black Friday special events

### Mobile Application (Admin)
- ✅ Product CRUD operations
- ✅ Category management
- ✅ Image upload and management
- ✅ Promotion scheduling
- ✅ Analytics dashboard

##  Tech Stack

### Frontend
- **React 18** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Modules / Tailwind** - Styling (TBD)

### Backend & Services
- **Firebase Firestore** - NoSQL database
- **Firebase Storage** - Image storage
- **Firebase Authentication** - Admin auth (mobile)

## Project Structure

```
remolques-web/
├── src/
│   ├── components/       # React components
│   │   ├── common/      # Reusable components
│   │   ├── products/    # Product-related components
│   │   └── layout/      # Layout components
│   ├── config/          # Configuration files
│   │   └── firebase.ts  # Firebase initialization
│   ├── hooks/           # Custom React hooks
│   │   └── useProducts.ts
│   ├── services/        # API/Firebase services
│   │   └── productService.ts
│   ├── types/           # TypeScript type definitions
│   │   └── product.types.ts
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── .env.example         # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

##  Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SebastianRodMes/Texas-Trailers-Cr.git
   cd remolques-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env` and fill in your Firebase credentials:
   ```bash
   cp .env.example .env
   ```

   Edit `.env`:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Follow the setup wizard

### 2. Enable Firestore

1. Navigate to **Firestore Database**
2. Click "Create database"
3. Start in **test mode** (change security rules later)
4. Choose a location

### 3. Enable Storage

1. Navigate to **Storage**
2. Click "Get started"
3. Use default security rules for now

### 4. Firestore Data Structure

```typescript
// collections structure
{
  "categories": {
    "id": {
      "name": "Enclosed Trailers",
      "order": 1,
      "active": true,
      "imageUrl": "https://...",
      "createdAt": Timestamp
    }
  },
  
  "products": {
    "id": {
      "name": "Cargo Trailer 6x12",
      "categoryId": "category_ref",
      "description": "High-quality enclosed trailer...",
      "specs": {
        "dimensions": "6x12x6",
        "capacity": "2000 lbs",
        "axles": "single"
      },
      "images": ["url1", "url2"],
      "price": 5000,
      "discount": {
        "active": true,
        "percentage": 15,
        "startDate": Timestamp,
        "endDate": Timestamp
      },
      "active": true,
      "createdAt": Timestamp,
      "views": 0
    }
  },
  
  "accessories": {
    "id": {
      "name": "LED Light Kit",
      "price": 150,
      "compatibleWith": ["trailer_id1", "trailer_id2"],
      "images": ["url"],
      "active": true
    }
  }
}
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |

## Development Roadmap

### Phase 1 - Setup (Week 1) ✅
- [x] Project initialization
- [x] Firebase configuration
- [x] Basic project structure
- [x] TypeScript types definition

### Phase 2 - Backend/Data (Week 2)
- [ ] Firestore security rules
- [ ] Custom React hooks
- [ ] Firebase services
- [ ] Initial data seeding

### Phase 3 - Mobile Admin 
- [ ] Authentication
- [ ] Dashboard
- [ ] Categories CRUD
- [ ] Products CRUD
- [ ] Image management

### Phase 4 - Public Web 
- [ ] Responsive design
- [ ] Homepage with categories
- [ ] Product catalog with filters
- [ ] Product detail page
- [ ] Accessories section

### Phase 5 - Advanced Features 
- [ ] Discount system
- [ ] Black Friday countdown
- [ ] Basic analytics
- [ ] Image optimization
- [ ] SEO optimization

## Contributing

This is a learning project. Contributions, issues, and feature requests are welcome!

### Team Members
- [@SebastianRodMe](https://github.com/SebastianRodMe) - Developer
- [@Sacariel76](https://github.com/Sacariel76) - Developer
- [@LoesssLR](https://github.com/LoesssLR) - Developer

## Learning Goals

This project aims to help the team learn:
- ✅ TypeScript in a real-world application
- ✅ Firebase services (Firestore, Storage, Auth)
- ✅ React best practices and hooks
- ✅ Responsive web design
- ✅ State management
- ✅ Performance optimization
- ✅ SEO fundamentals

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by real trailer sales businesses
- Built as a learning project for educational purposes
- Special thanks to the React and Firebase communities



**Note**: This is a work in progress. Features and documentation will be updated as the project evolves.
