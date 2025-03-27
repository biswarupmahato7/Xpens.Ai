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


## 🚀 Landing Page  
An intuitive and user-friendly landing page showcasing Xpens.AI features.  
![Landing Page](https://github.com/user-attachments/assets/07786f71-1b49-4814-a090-7e5e1b4664fd)  

## 🔒 Secure Login  
Users can log in securely using Clerk authentication for protected access.  
![Secure Login](https://github.com/user-attachments/assets/e0ba746d-658f-4010-a14a-3002942ab99d)  

## 📊 Dashboard Access  
- Add multiple accounts  
- Manage transactions  
- Get an overview of all expenses  
![Dashboard](https://github.com/user-attachments/assets/55d58730-50ab-4ebc-9069-369dc65982ee)  

## 📝 Add Transactions  
- **Manual entry**: Enter transaction details manually.  
- **AI-powered scanning**: Upload a receipt, and AI extracts expense details automatically.  
![Add Transaction](https://github.com/user-attachments/assets/a473ff25-9693-40cb-b269-996f0609c7db)  

## 📁 Category-wise Expense Tracking  
Categorize expenses for a clear financial breakdown.  
![Category-wise Expense](https://github.com/user-attachments/assets/2c406b20-5210-43d1-95e7-c0aaa28d8b77)  

## 📈 AI-Powered Expense Chart  
- Interactive **visual representation** of spending patterns.  
- Get **insights** into financial habits.  
![Expense Chart](https://github.com/user-attachments/assets/6aad88da-9182-4791-8629-79f36df0238d)  


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
- **Email**: biswarupmahato731@gmail.com

---
Made with ❤️ by **Biswarup Mahato**

