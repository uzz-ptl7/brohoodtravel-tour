# Brotherhood Company - Travel & Tours Website

A modern, fully-featured travel and tourism website for Brotherhood Company, showcasing Rwanda's destinations and travel services.

## 🚀 Features Implemented

### ✅ Services Section

- **6 Main Services**: Tours & Travel, VIP Transportation, Airport Pickup/Dropping, Hotel Reservations, Car Rental, Expert Drivers
- Professional service cards with detailed features
- Responsive grid layout

### ✅ SEO Optimization

- Complete meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data for search engines
- Geographic targeting for Rwanda
- Business schema markup
- Dynamic SEO for all pages

### ✅ WhatsApp Integration

- **Floating WhatsApp Button**: Quick contact with animated pulse effect
- **WhatsApp Chat Widget**: Interactive chat interface with quick replies
- Direct messaging to +250 786 425 200

### ✅ Social Sharing

- Share destinations on Facebook, Twitter, LinkedIn, WhatsApp
- Copy link functionality
- Integrated on destination detail pages

### ✅ Destinations

- **18 Rwanda Destinations**: Complete list including Kigali, Lake Kivu, Nyungwe, Volcanoes, Akagera, and more
- **Search Functionality**: Search by name, location, or activities
- **Category Filters**: Wildlife Safari, Nature & Wildlife, Beach & Lake, City Tour, Cultural, Historical, Adventure
- Loading skeletons and smooth animations
- Expandable view (show 8, expand to all)

### ✅ Travel Tips

- General Rwanda travel tips
- Destination-specific tips for each location
- Importance indicators (High, Medium, Low)
- Practical advice on visas, currency, safety, packing

### ✅ FAQ Section

- 18+ comprehensive FAQs
- Search functionality
- Category filtering
- Accordion interface
- Direct WhatsApp contact for additional questions

### ✅ Forms Integration (Formspree)

- Contact form with Formspree integration
- Booking form with Formspree integration
- Loading states and error handling
- Success/error toast notifications

### ✅ Loading States & Animations

- Skeleton loaders for destinations
- Smooth fade-in animations
- Hover effects and transitions
- Animated WhatsApp button pulse
- Responsive animations

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Formspree

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your Form ID
3. Update the Form ID in these files:

   - `src/components/Contact.tsx` - Line with `YOUR_FORMSPREE_ID`
   - `src/pages/Booking.tsx` - Line with `YOUR_FORMSPREE_ID`

   Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID.

### 3. Update Contact Information (Optional)

If you need to change the phone number or email:

- WhatsApp Button: `src/components/WhatsAppButton.tsx` (line 6)
- WhatsApp Chat: `src/components/WhatsAppChat.tsx` (line 10)
- Contact Section: `src/components/Contact.tsx`

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## 📱 WhatsApp Integration

### WhatsApp Button (Bottom Right)

- Floating button with pulse animation
- Tooltip on hover
- Direct link to WhatsApp chat
- Default message pre-filled

### WhatsApp Chat Widget (Bottom Left)

- Interactive chat interface
- Quick reply buttons:
  - "I want to book a tour"
  - "Tell me about your services"
  - "I need airport transfer"
  - "Car rental information"
- Custom message input
- Real-time clock display

## 🗺️ Destinations Included

1. **Kigali City Tour** - City Tour
2. **Lake Kivu Escape** - Beach & Lake
3. **Nyungwe Forest Adventure** - Nature & Wildlife
4. **Volcanoes Gorilla Trek** - Wildlife Safari
5. **Akagera National Park Safari** - Wildlife Safari
6. **Karongi Lake Kivu** - Beach & Lake
7. **Huye Cultural Experience** - Cultural
8. **Gishwati-Mukura Forest** - Nature & Wildlife
9. **Rubavu Beach & Town** - Beach & Lake
10. **Musanze Town & Caves** - Adventure
11. **Rusizi District Tour** - Cultural
12. **Kigali Genocide Memorial Sites** - Historical
13. **Congo Nile Trail Trek** - Adventure
14. **Bisoke Volcano Hike** - Adventure
15. **Lake Muhazi Recreation** - Beach & Lake
16. **Nyanza Royal Palace** - Historical
17. **Eastern Rwanda Safari Circuit** - Wildlife Safari
18. **Coffee Tour Experience** - Cultural

## 🎨 Features Breakdown

### Search & Filter

- **Search Bar**: Search destinations by name, location, description, or activities
- **Category Filters**: 8 categories with visual active state
- **Results Counter**: Shows number of filtered results
- **Clear Filters**: Easy reset functionality

### Travel Tips

- **General Tips**: Visa, currency, language, safety, plastic bags, dress code
- **Destination-Specific Tips**: Custom tips for Kigali, Lake Kivu, Nyungwe, Volcanoes
- **Importance Badges**: Color-coded (Important, Recommended, Good to Know)

### FAQ Section

- **Search FAQs**: Real-time search across questions and answers
- **Categories**: Services, Booking, Transportation, Destinations, Pricing, Payment, Safety, Travel Tips
- **Ask Questions**: Direct WhatsApp link for unlisted questions

## 📞 Contact Information

- **Phone**: +250 786 425 200, +250 788 485 847
- **Email**: brotherhoodcompany200@gmail.com
- **Location**: Kigali, Rwanda
- **TIN**: 121686474
- **Hours**: 24/7 with emergency services

## 🔧 Technical Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Forms**: React Hook Form
- **SEO**: react-helmet-async
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📝 To-Do After Deployment

1. ✅ Replace Formspree form IDs with your actual IDs
2. ✅ Add actual destination images to `/public/data/`
3. ✅ Update meta image for social sharing
4. ✅ Test all forms thoroughly
5. ✅ Verify WhatsApp links work correctly
6. ✅ Check all destination details are accurate
7. ✅ Monitor Formspree submissions

## 🌐 Deployment

The site is configured for Netlify deployment:

- Redirects configured in `/public/_redirects`
- SEO-friendly URLs
- Fast build times
- Automatic HTTPS

## 📄 License

© 2025 Brotherhood Company. All rights reserved.
TIN: 121686474
