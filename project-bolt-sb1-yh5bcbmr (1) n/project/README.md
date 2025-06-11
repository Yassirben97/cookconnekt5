# CookConnect Platform

A professional culinary network platform connecting cooks and restaurants in Morocco.

## Features

- **Cook Profiles**: Professional cooks can create detailed profiles with their experience, specialties, and dish portfolios
- **Job Tenders**: Restaurants can post job opportunities (anonymous or public)
- **Admin Moderation**: Complete content moderation system for profiles and job postings
- **Phone Verification**: WhatsApp verification for Moroccan phone numbers (+212 format)
- **Integrated Approval**: Dish photos are reviewed as part of the cook profile approval process

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cookconnect-platform.git
cd cookconnect-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect this as a Vite project
3. Deploy with default settings

## Admin Access

Demo admin credentials:
- Username: `admin`
- Password: `admin123`

## Phone Number Format

All phone numbers must follow the Moroccan format:
- Format: `+212` followed by exactly 9 digits
- Example: `+212661626364`

## License

MIT License - see LICENSE file for details.