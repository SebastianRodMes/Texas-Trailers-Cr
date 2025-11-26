# Texas Trailers CR | Digital Ecosystem

<div align="center">

![Texas Trailers CR Banner](https://via.placeholder.com/1200x300/1a1a1a/ffffff?text=Texas+Trailers+CR)

**A comprehensive B2C and B2B solution for trailer import and sales in Costa Rica**

[Live Demo](https://your-demo-url.com) • [Report Bug](https://github.com/SebastianRodMes/Texas-Trailers-Cr/issues) • [Request Feature](https://github.com/SebastianRodMes/Texas-Trailers-Cr/issues)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Cloud-FFCA28?style=flat&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

</div>

---

## Project Vision

Texas Trailers CR modernizes the operations of a leading import company, transforming a manual, decentralized sales process into a unified digital experience.

The system resolves data fragmentation through a **distributed hybrid architecture**:

- **Public Web App (This Repo)**: High-performance catalog for end customers
- **Mobile App (Private/External Repo)**: Field operations management tool for staff

### Business Impact

<table>
  <tr>
    <td><b>Inventory Centralization</b></td>
    <td>Eliminated stock inconsistencies between the sales yard and digital channels</td>
  </tr>
  <tr>
    <td><b>Sales Optimization</b></td>
    <td>24/7 catalog availability with advanced filtering, reducing customer inquiry time</td>
  </tr>
  <tr>
    <td><b>Real-Time Management</b></td>
    <td>Admins can update prices and upload photos from mobile devices the moment a container arrives</td>
  </tr>
</table>

---

## Roadmap & Evolution

This project bridges academic requirements with real-world business needs. Currently, the architecture is decoupled to meet specific native mobile development educational goals.

<table>
  <thead>
    <tr>
      <th>Phase</th>
      <th>Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Phase 1</b></td>
      <td><code>Completed</code></td>
      <td>Hybrid Architecture: Read-Only Web (Customers) and Write-Heavy Native Android App (Admin)</td>
    </tr>
    <tr>
      <td><b>Phase 2</b></td>
      <td><code>In Progress</code></td>
      <td>Service Integration: Push notifications for offers and web reservation system</td>
    </tr>
    <tr>
      <td><b>Phase 3</b></td>
      <td><code>Planned</code></td>
      <td>Web Unification: Migration of the mobile admin panel to a React Web Dashboard for centralized cross-platform management</td>
    </tr>
  </tbody>
</table>

---

## Software Architecture

The system implements a **BaaS (Backend-as-a-Service)** pattern using the Google Firebase ecosystem as the central core, enabling two distinct applications (Web and Mobile) to operate on the same data in real-time.


### Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                     End Users                           │
│                                                         │
│  ┌──────────────┐              ┌──────────────┐        │
│  │   Customers  │              │ Admin/Staff  │        │
│  └──────┬───────┘              └──────┬───────┘        │
└─────────┼──────────────────────────────┼───────────────┘
          │                              │
          │                              │
     ┌────▼────────┐              ┌──────▼──────┐
     │  Web App    │              │  Mobile App │
     │  (React)    │              │  (Android)  │
     └────┬────────┘              └──────┬──────┘
          │                              │
          └──────────┬───────────────────┘
                     │
            ┌────────▼────────────┐
            │  Firebase Cloud     │
            │ ┌─────────────────┐ │
            │ │   Firestore     │ │
            │ │   Auth          │ │
            │ │   Storage       │ │
            │ └─────────────────┘ │
            └─────────────────────┘
```

---

## Tech Stack

### Web Client (Frontend)

Designed for speed and SEO optimization.

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework (Vite bundler) |
| **TypeScript** | Type-safe development (Strict Mode) |
| **Tailwind CSS** | Utility-first styling |
| **Lucide Icons** | Icon library |
| **React Router DOM v6** | Client-side routing |
| **Custom React Hooks** | State management |

### Admin Panel (Mobile)

> **Note**: Code hosted in a separate repository

| Technology | Purpose |
|------------|---------|
| **Native Android** | Mobile platform |
| **Kotlin** | Programming language |
| **XML Layouts** | UI design |
| **Material Design** | Design system |
| **Firebase SDK** | Backend integration |

### Backend & Cloud

| Service | Purpose |
|---------|---------|
| **Cloud Firestore** | NoSQL database |
| **Firebase Auth** | User authentication |
| **Cloud Storage** | Media asset storage |
| **Firebase Hosting** | Web deployment (CI/CD ready) |

---

## Gallery

<table>
  <tr>
    <td width="50%">
      <h3 align="center">Web: Home Hero</h3>
      <p align="center">
        <img src="https://via.placeholder.com/600x350/2563eb/ffffff?text=Home+Hero+Section" alt="Home Hero"/>
      </p>
      <p align="center"><em>High-impact visual design</em></p>
    </td>
    <td width="50%">
      <h3 align="center">Web: Catalog</h3>
      <p align="center">
        <img src="https://via.placeholder.com/600x350/2563eb/ffffff?text=Product+Catalog" alt="Catalog"/>
      </p>
      <p align="center"><em>Product grid & filtering</em></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">Mobile: Admin Login</h3>
      <p align="center">
        <img src="https://via.placeholder.com/300x550/10b981/ffffff?text=Admin+Login" alt="Admin Login"/>
      </p>
      <p align="center"><em>Secure Authentication</em></p>
    </td>
    <td width="50%">
      <h3 align="center">Mobile: Product Management</h3>
      <p align="center">
        <img src="https://via.placeholder.com/300x550/10b981/ffffff?text=Product+Management" alt="Product Management"/>
      </p>
      <p align="center"><em>Field inventory editing</em></p>
    </td>
  </tr>
</table>

---

## Getting Started

This repository contains the source code for the **Web Application** only.

### Prerequisites

- Node.js v18 or higher
- npm or yarn package manager
- Access to the Firebase project (Request credentials from the Tech Lead)

### Installation

```bash
# 1. Clone this repository
git clone https://github.com/SebastianRodMes/Texas-Trailers-Cr.git

# 2. Navigate to the directory
cd remolques-web

# 3. Install dependencies
npm install

# 4. Configure environment variables
# Create .env file based on .env.example
cp .env.example .env

# 5. Run development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally
npm run lint         # Run ESLint code analysis
npm run type-check   # Run TypeScript type checking
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> **Note for Mobile Developers**: The Android application code is located in a separate repository to maintain modularity and meet current academic requirements. Contact the Tech Lead for access.

---

## Development Team

This project was developed using **agile methodologies**, utilizing GitHub Projects for task management and sprint planning.

<table align="center">
  <tr>
    <td align="center" width="33%">
      <a href="https://github.com/SebastianRodMes">
        <img src="https://github.com/SebastianRodMes.png" width="120px;" alt="Sebastián Rodríguez"/>
        <br/>
        <sub><b>Sebastián Rodríguez</b></sub>
      </a>
      <br/>
      <sub><i>Tech Lead & Fullstack</i></sub>
      <br/>
      <sub>Architecture, Firebase Integration, React Core</sub>
    </td>
    <td align="center" width="33%">
      <a href="https://github.com/teammember2">
        <img src="https://via.placeholder.com/120/4f46e5/ffffff?text=M2" width="120px;" alt="Team Member 2"/>
        <br/>
        <sub><b>[Team Member 2]</b></sub>
      </a>
      <br/>
      <sub><i>Mobile Developer</i></sub>
      <br/>
      <sub>Native Android, Auth, Offline Logic</sub>
    </td>
    <td align="center" width="33%">
      <a href="https://github.com/teammember3">
        <img src="https://via.placeholder.com/120/0891b2/ffffff?text=M3" width="120px;" alt="Team Member 3"/>
        <br/>
        <sub><b>[Team Member 3]</b></sub>
      </a>
      <br/>
      <sub><i>Frontend Developer</i></sub>
      <br/>
      <sub>Web UI/UX, Catalog, Filters & Styles</sub>
    </td>
  </tr>
</table>

---

## Project Structure

```
texas-trailers-cr/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/           # Route pages
│   ├── hooks/           # Custom React hooks
│   ├── services/        # Firebase service layer
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Helper functions
│   └── App.tsx          # Main application component
├── public/              # Static assets
├── .env.example         # Environment variables template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Universidad Técnica Nacional for academic support
- Firebase team for excellent documentation
- Open source community for the amazing tools

---

<div align="center">

**Developed for Universidad Técnica Nacional - ITI 2025**

Made with dedication in Costa Rica

---

<sub>⭐ Star this repository if you find it helpful!</sub>

[⬆ Back to Top](#texas-trailers-cr--digital-ecosystem)

</div>
