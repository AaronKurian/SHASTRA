# SHASTRA 2025 - Official Website

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black.svg)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg)](https://vercel.com/)

The official website for SHASTRA 2025, the premier techno-managerial festival of Government Model Engineering College, Kochi. This marks the 25th edition of India's most innovative student-led technical festival.

🌐 **Live Website**: [https://shastra-brown.vercel.app/](https://shastra-brown.vercel.app/)

## 🚀 About SHASTRA

SHASTRA has been a beacon of innovation and creativity since 2001, providing a dynamic platform for students to explore, innovate, and excel. The festival features:

- **Competitions**: Technical and non-technical challenges across CS Tech, Gen Tech, and diverse categories
- **Workshops**: Hands-on learning experiences in cutting-edge technologies
- **Talks**: Inspiring sessions with industry leaders and innovators  
- **Events**: Engaging activities from escape rooms to VR gaming
- **Conferences**: Knowledge-sharing sessions on trending topics

## ✨ Features

### 🎨 Modern Design
- Responsive design with mobile-first approach
- Interactive 3D globe visualization using `react-globe.gl`
- Smooth animations with AOS (Animate On Scroll)
- Particle background effects for immersive experience
- Gradient text effects and glassmorphism UI elements

### 📱 User Experience
- Intuitive navigation with mobile hamburger menu
- Filter and sort functionality for events and competitions
- Modal popups for detailed event information
- Interactive gallery with marquee scrolling
- Contact cards with hover effects and social links

### 🛠 Technical Implementation
- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: AOS library for scroll-triggered animations
- **Icons**: React Icons for consistent iconography
- **Images**: Next.js Image optimization
- **Particles**: TSParticles for background effects
- **3D Graphics**: React Globe.gl for interactive earth visualization

## 🏗 Project Structure

```
app/
├── Components/          # Reusable React components
│   ├── About.jsx       # About section
│   ├── Footer.jsx      # Site footer
│   ├── Gallery.jsx     # Image gallery
│   ├── Home.jsx        # Home page layout
│   ├── Landing.jsx     # Hero section with 3D globe
│   ├── Legacy.jsx      # Legacy showcase
│   ├── Navbar.jsx      # Navigation component
│   ├── Particles.jsx   # Particle background
│   └── Partners.jsx    # Sponsors and partners
├── competitions/       # Competition listings page
├── contact/           # Contact information page
├── events/            # General events page
├── schedule/          # Event schedule page
├── globals.css        # Global styles and custom CSS
├── layout.js          # Root layout with navbar/footer
└── page.js            # Home page entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AaronKurian/SHASTRA.git
cd SHASTRA
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Adding New Events
Events data is centralized in `/helpers/eventsData.js`. Add new events to the `masterEventData` array:

```javascript
{
  id: 'unique-event-id',
  title: 'Event Name',
  category: 'Competition|General|Talk|Workshop|Conference',
  subCategory: 'CS Tech|Gen Tech|Non Tech',
  description: 'Event description',
  venue: 'Event venue',
  schedule: {
    'Day 1': 'Time slot or null',
    'Day 2': 'Time slot or null', 
    'Day 3': 'Time slot or null'
  },
  prize: '₹Amount',
  type: 'competition|event'
}
```

### Styling
- Custom CSS classes are defined in `globals.css`
- Tailwind utilities handle responsive design
- Gradient effects and animations use custom CSS classes

### Fonts
- **Mechanismo**: Custom font for headings and branding
- **Huninn**: Google Font for body text

## 🌟 Key Pages

- **Home** (`/`): Landing page with hero section, about, legacy, gallery, and partners
- **Competitions** (`/competitions`): Filterable competition listings with categories
- **Events** (`/events`): General events with detailed modal views
- **Schedule** (`/schedule`): Day-wise event schedule with filtering
- **Contact** (`/contact`): Team member directory with contact information

## 🔧 Technologies Used

- **Next.js 13+**: React framework with App Router
- **React 18**: Component library
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety (partial implementation)
- **AOS**: Animate On Scroll library
- **React Icons**: Icon library (Font Awesome, Heroicons, etc.)
- **React Globe.gl**: 3D globe visualization
- **TSParticles**: Particle system
- **React Fast Marquee**: Gallery scrolling effects

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏫 About Government Model Engineering College

Located in Kochi, Kerala, Government Model Engineering College is one of India's premier engineering institutions, known for fostering innovation and technical excellence.

---

**SHASTRA 2025** - *INSPIRE | INNOVATE | ENGINEER*

Built with ❤️ by Aaron Kurian Abraham
