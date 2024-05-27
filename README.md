# Setup steps

```bash
# Clone the repository
git clone https://github.com/FoushWare/ai-chat

# Navigate to the project directory
cd ai-chat

# Install dependencies
npm install
# Start the development server
npm run dev
```


# component structure

```
src/
├── assets/
│   └── monta-logo.png
├── components/
│   ├── atoms/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Typography.jsx
│   ├── molecules/
│   │   ├── ChatMessage.jsx
│   │   ├── ChatForm.jsx
│   │   └── ChatList.jsx
│   └── organisms/
│       ├── Header.jsx
│       ├── Sidebar.jsx
│       ├── ChatHistory.jsx
│       └── MainChat.jsx
├── pages/
│   └── ChatPage.jsx
├── App.jsx
├── index.css
└── main.jsx


```