# Effortech Smart Portal  
### Developed by Irfan Ahamad

---

## 🚀 Overview

Effortech Smart Portal is an AI-powered issue resolution system designed to:

- Identify banking / Finacle-related issues
- Provide root cause analysis
- Display structured resolution steps
- Show step-wise reference images
- Display reference queries (read-only)
- Allow users to mark issue as resolved
- Escalate issue to CBS support team with ticket generation

Frontend is built using **React (Vite)** and connected to a **FastAPI backend** deployed on Render.

---

## 🌐 Live Deployment

**Frontend:**  
https://ai-agent-project-frontend-eqfy.onrender.com

**Backend API:**  
https://ai-agent-project-75gy.onrender.com 

---

## 🏗 Tech Stack

### Frontend
- React (Vite)
- CSS
- Fetch API

### Backend
- FastAPI
- FAISS (Vector Search)
- OpenRouter Embeddings
- NumPy
- Render (Deployment)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── QueryForm.jsx
│   ├── ResponseCard.jsx
│
├── api/
│   └── api.js
│
├── styles/
│   └── app.css
│
└── App.jsx
```

---

## 🔍 Features

### 1️⃣ Smart Issue Identification
- Embedding-based similarity search
- Matches user query with predefined bank issues

### 2️⃣ Detailed Resolution View
- Identified Issue
- Root Cause
- Step-by-step Resolution
- Step Images
- Reference Queries

### 3️⃣ Escalation System
- Generates CBS ticket ID
- Accepts user comments
- Displays escalation confirmation

### 4️⃣ Clean UI
- Structured layout
- Logo branding
- Responsive container
- Visual action buttons

---

## 📡 API Endpoints

### Query Endpoint

**POST** `/query`

Request:
```json
{
  "user_query": "Finacle login issue"
}
```

Response:
```json
{
  "issue_id": "CBS-101",
  "identified_issue": "1. Finacle Login Failure",
  "root_cause": "...",
  "resolution_steps": [],
  "step_assets": {},
  "reference_queries": {},
  "escalation_required": false
}
```

---

### Escalation Endpoint

**POST** `/escalate`

Request:
```json
{
  "issue_id": "CBS-101",
  "user_comments": "Tried all steps"
}
```

Response:
```json
{
  "status": "ESCALATED",
  "ticket_id": "CBS-54321",
  "message": "Issue escalated to CBS support team"
}
```

---

## ⚙️ How It Works

1. User enters issue description.
2. Frontend calls `/query`.
3. Backend:
   - Generates embedding
   - Searches FAISS index
   - Returns best matched issue.
4. User can:
   - Mark issue as resolved
   - Escalate to CBS support

---

## 🔐 Environment Variables (Backend)

Set this in Render → Backend Service → Environment:

```
OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
```

---

## 🧠 Core Logic

- Vector similarity search using FAISS
- Embedding model: `openai/text-embedding-3-small`
- Dynamic rendering of step images
- Dynamic rendering of reference queries
- Conditional UI states:
  - Resolved
  - Escalated
  - Pending

---

## 🎯 Future Enhancements

- ServiceNow Integration
- Email notifications
- Role-based authentication
- Admin dashboard
- Analytics tracking
- Persistent database storage

<h1 align=center> Project Admin ❤️ </h1>
<p align="center">

<table align="center">
    <tbody>
        <tr>
            <td align="center">
                <a href="https://github.com/Irfan-2002">
                    <img alt="" src="https://avatars.githubusercontent.com/Irfan-2002" width="100px;"><br>
                    <sub><b> Irfan Ahmad </b></sub>
                </a>
            </td>
        </tr>
    </tbody>
</table>

⭐ If you found this project useful, consider giving it a star!