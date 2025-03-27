# Xpens.Ai

Xpens.Ai is a smart and AI-powered expense management platform designed to help users track, analyze, and manage their financial activities efficiently. It leverages AI capabilities to provide spending insights, automate categorization, and deliver financial recommendations. Additionally, it integrates email notifications for transaction updates and important alerts.

## 🚀 Features

### 🌟 Core Features
- **User Authentication**: Secure login and registration with Clerk authentication.
- **Expense Tracking**: Add, edit, and delete transactions with real-time updates.
- **Category Management**: Categorize expenses for better organization.
- **Graphical Analytics**: Interactive charts to visualize spending trends.
- **Multi-Currency Support**: Manage expenses in different currencies.
- **Export Data**: Download transaction history for financial reporting.

### 🤖 AI Integration
- **AI-Powered Insights**: The system analyzes user transactions and provides insights into spending patterns.
- **Automated Categorization**: Uses AI to categorize expenses automatically, reducing manual effort.
- **Smart Budgeting**: AI suggests budgeting strategies based on past expenses and spending habits.
- **Predictive Expense Analysis**: Forecasts future expenses and alerts users about potential overspending.

### ✉️ Email Notification System
- **Transaction Alerts**: Sends email notifications for each transaction.
- **Monthly Expense Summary**: Users receive a summary of their expenses at the end of each month.
- **Budget Exceed Alerts**: Notifies users when they are about to exceed their budget.
- **Security Notifications**: Alerts for suspicious activity or login attempts.

## 🛠️ Tech Stack
- **Frontend**: Next.js (React), Tailwind CSS, GSAP (for animations)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (with Prisma ORM)
- **Authentication**: Clerk
- **Email Notifications**: Nodemailer
- **AI Processing**: OpenAI API (for smart insights and recommendations)
- **Deployment**: Vercel

## 📦 Installation & Setup
### Prerequisites
- Node.js (v16+)
- PostgreSQL
- Vercel (for deployment)

### Clone the Repository
```sh
git clone https://github.com/biswarupmahato7/Xpens.Ai.git
cd Xpens.Ai
```

### Install Dependencies
```sh
npm install
```

### Setup Environment Variables
Create a `.env` file in the root directory and configure the following:
```env
DATABASE_URL=your_postgresql_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret_key
OPENAI_API_KEY=your_openai_api_key
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Run Database Migrations
```sh
npx prisma migrate deploy
```

### Start the Development Server
```sh
npm run dev
```

## 🚀 Deployment on Vercel
1. Push the project to GitHub.
2. Go to [Vercel](https://vercel.com/), create a new project, and link your GitHub repo.
3. Add environment variables under **Project Settings > Environment Variables**.
4. Deploy and enjoy Xpens.Ai!

## 📩 Contact
For any issues or feature requests, feel free to reach out:
- **GitHub**: [@biswarupmahato7](https://github.com/biswarupmahato7)
- **Email**: biswarupmahato7@example.com

---
Made with ❤️ by **Biswarup Mahato**

