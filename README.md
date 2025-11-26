Texas Trailers CR | Digital Ecosystem

<!--  Replace later with the link above with a real collage: Web on Laptop (Left), App on Mobile (Right) -->

<div align="center">

A comprehensive B2C and B2B solution for trailer import and sales in Costa Rica.

Live Demo • Report Bug

</div>

 Project Vision

Texas Trailers CR modernizes the operations of a leading import company, transforming a manual, decentralized sales process into a unified digital experience.

The system resolves data fragmentation through a distributed hybrid architecture:

Public Web App (This Repo): High-performance catalog for end customers.

Mobile App (Private/External Repo): Field operations management tool for staff.

Business Impact

Inventory Centralization: Eliminated stock inconsistencies between the sales yard and digital channels.

Sales Optimization: 24/7 catalog availability with advanced filtering, reducing customer inquiry time.

Real-Time Management: Admins can update prices and upload photos from mobile devices the moment a container arrives.

 Roadmap & Evolution

This project bridges academic requirements with real-world business needs. Currently, the architecture is decoupled to meet specific native mobile development educational goals.

Phase

Status

Description

Phase 1 (Current)

🟢 Completed

Hybrid Architecture: Read-Only Web (Customers) and Write-Heavy Native Android App (Admin).

Phase 2

🟡 In Progress

Service Integration: Push notifications for offers and web reservation system.

Phase 3 (Future)

🔴 Pending

Web Unification: Migration of the mobile admin panel to a React Web Dashboard for centralized cross-platform management.

Software Architecture

The system implements a BaaS (Backend-as-a-Service) pattern using the Google Firebase ecosystem as the central core, enabling two distinct applications (Web and Mobile) to operate on the same data in real-time.

graph TD
    %% Actors
    Admin(" Admin / Staff")
    Cliente(" End Customer")

    %% Subsystems
    subgraph RepoWeb ["Repo: Web App (Public)"]
        direction TB
        WebApp(" Web App (Catalog)<br/>React + TypeScript")
    end

    subgraph RepoMovil ["Repo: Mobile App (Private)"]
        direction TB
        MobileApp(" Mobile App (Admin Panel)<br/>Native Android (Kotlin)")
    end

    subgraph FirebaseServices [" Firebase Cloud Ecosystem"]
        direction TB
        Auth(" Authentication<br/>(RBAC)")
        DB(" Firestore<br/>(NoSQL Document Store)")
        Buckets(" Cloud Storage<br/>(Media Assets)")
    end

    %% Admin Flow
    Admin -->|Secure Login| Auth
    Auth -.->|Valid Token| MobileApp
    MobileApp -->|1. Upload Photos (Cam/Gallery)| Buckets
    MobileApp -->|2. Inventory CRUD| DB

    %% Customer Flow
    Cliente -->|Browse Catalog| WebApp
    WebApp -.->|Optimized Read| DB
    WebApp -.->|CDN Assets| Buckets
    
    %% Sync
    DB ==>|Real-time Sync (WebSockets)| WebApp
    DB ==>|Real-time Sync| MobileApp

    %% Styles
    style FirebaseServices fill:#fff0f5,stroke:#d63384,stroke-width:2px
    style MobileApp fill:#e8f0fe,stroke:#1a73e8
    style WebApp fill:#e6fffa,stroke:#2c7a7b


 Tech Stack

 Web Client (Frontend)

Designed for speed and SEO.

Framework: React 18 (Vite)

Language: TypeScript (Strict Mode)

Styling: Tailwind CSS + Lucide Icons

Routing: React Router DOM v6

State Management: Custom React Hooks

 Admin Panel (Mobile)

Note: Code hosted in a separate repository.

Platform: Native Android

Language: Kotlin

UI: XML Layouts / Material Design

Networking: Firebase SDK for Android

 Backend & Cloud

Database: Cloud Firestore (NoSQL)

Authentication: Firebase Auth

Storage: Cloud Storage

Hosting: Firebase Hosting (CI/CD integration ready)

 Gallery (Screenshots)

Web: Home Hero

Web: Catalog





High-impact visual design

Product grid & filtering

Mobile: Admin Login

Mobile: Product Management





Secure Authentication

Field inventory editing

<!-- TODO: Replace later witj the placeholder links with real screenshots -->

 Local Installation

This repository contains the source code for the Web Application only.

Prerequisites

Node.js v18+

Access to the Firebase project (Request credentials)

Web Configuration

# 1. Clone this repository
git clone [https://github.com/SebastianRodMes/Texas-Trailers-Cr.git](https://github.com/SebastianRodMes/Texas-Trailers-Cr.git)

# 2. Enter the directory
cd texas-trailers-cr

# 3. Install dependencies
npm install

# 4. Configure environment variables
# Create .env file based on .env.example
cp .env.example .env

# 5. Run development server
npm run dev


Note for Mobile Developers: The Android application code is located in a separate repository to maintain modularity and meet current academic requirements. Contact the Tech Lead for access.

Development Team

This project was developed using agile methodologies, utilizing GitHub Projects for task management.

Sebastián Rodríguez

Luis

Samiel

Developer

Developer

Developer

Architecture, Firebase Integration, React Core

Native Android, Auth, Offline Logic

Web UI/UX, Catalog, Filters & Styles







<div align="center">
<small>Developed for Universidad Técnica Nacional - ITI 2025</small>
</div>
