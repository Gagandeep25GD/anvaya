# The Untold Discoverers — Mark One & Anvaya

A beautiful, high-performance, well-animated shopping and product ecosystem website for **The Untold Discoverers**.

## Products
1. **Mark One**: Wearable AI Pendant (Hardware) with image gallery, specs, features, and cart ordering.
2. **Anvaya**: Android Health & Fitness AI Assistant (Software) featuring **Clary**, an interactive 360° mascot carousel slider and direct APK download (`/downloads/anvaya.apk`).

---

## Pages & Sections Included
1. **Home**: Hero banner, product highlights, short brand story.
2. **Products**:
   - Software (Anvaya + Clary Mascot carousel with roller effect & APK installer).
   - Hardware (Mark One pendant specs, features & gallery).
3. **Shop**: Product catalog, cart drawer, checkout flow with demo payment modal ("Demo mode, no real charges" label & payment provider placeholders).
4. **Profile**: Demo sign-in/register, user details, order history, and saved address.
5. **About Us**: Brand story, philosophy, and approach.
6. **Our Team**: Team member cards with roles and contact info.
7. **Privacy Policy**: Draft legal policy (Review before launch).
8. **Terms & Conditions**: Draft legal terms (Review before launch).
9. **Contact & Support**: Contact form and support channels.

---

## How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## Where to Change Content
- **Site Config & Texts**: All products, pricing, team members, about text, privacy policy, and terms are centrally stored in `src/config/siteConfig.ts`.
- **Assets (APK, Logo, Pendant Image)**: Located in `public/` (`anvaya.apk`, `Mark1.jpeg`, `logo.jpeg`).
