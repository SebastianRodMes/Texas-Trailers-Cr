// ============================================
// TEXAS TRAILERS CR - TYPE DEFINITIONS
// Matches Firebase Schema (Web + Mobile)
// ============================================

/**
 * Product Specifications (Value Object)
 * Embedded within Product document
 */
export interface ProductSpecs {
    gvwr: string;           // Gross Vehicle Weight Rating (e.g., "7000 lbs")
    payload?: string;       // Payload capacity
    axles: string;          // Axle configuration (e.g., "2x 3500lb")
    tires?: string;         // Tire specifications
    length: string;         // Length (e.g., "16 ft")
    width?: string;         // Width
    color?: string;         // Color/finish
    hitchType?: string;     // Hitch type (e.g., "Gooseneck", "Bumper Pull")
    stockStatus?: string;   // Stock availability
}

/**
 * Product Entity
 * Collection: products
 */
export interface Product {
    id: string;
    name: string;
    slug: string;                    // SEO-friendly URL slug
    description?: string;
    price: number;                   // Base price in CRC
    salePrice?: number;              // Sale price if onSale is true
    onSale: boolean;
    isFeatured: boolean;             // Show on homepage
    categoryId: string;              // Reference to Category
    images: string[];                // Array of image URLs from Storage
    searchKeywords?: string[];       // For search optimization
    specs: ProductSpecs;
    createdAt?: Date;
    updatedAt?: Date;
}

/**
 * Category Entity
 * Collection: categories
 */
export interface Category {
    id: string;
    name: string;
    slug: string;
    imageUrl?: string;
    iconName?: string;               // Lucide icon name
    order: number;                   // Display order
    isActive: boolean;
}

/**
 * Accessory Entity
 * Collection: accessories
 */
export interface Accessory {
    id: string;
    name: string;
    description?: string;
    categoryType: string;            // Type of accessory (e.g., "hitch", "lighting")
    price: number;
    imageUrl?: string;
    inStock: boolean;
}

/**
 * Quote Request Entity
 * Collection: quotes
 * Flow: Web (customer) → Firebase → Mobile (admin reads)
 */
export interface QuoteRequest {
    id?: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    message: string;
    productId?: string;              // Optional: specific product inquiry
    productName?: string;
    requestDate: Date;
    status: 'pending' | 'contacted' | 'completed';
}

/**
 * Admin User (Mobile App Only)
 * Collection: users
 */
export interface AdminUser {
    uid: string;
    email: string;
    displayName: string;
    role: string;
    lastLogin?: Date;
}
