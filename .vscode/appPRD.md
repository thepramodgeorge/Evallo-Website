# Evallo Product Requirements Document (PRD)

## 1. Overview
Evallo is an AI-powered survey platform that replaces static survey forms with dynamic conversational agents. The goal is to increase engagement, capture richer insights, and automate downstream workflows via integrations with tools like Zapier, Make.com, and n8n.

---

## 2. Goals
- Enable businesses to create AI survey agents without coding.
- Improve response quality compared to static surveys.
- Provide structured, analyzable data from free-form conversations.
- Support embeddable widgets and standalone survey links.
- Allow integrations with automation platforms (Zapier, Make, n8n).

---

## 3. Non-Goals
- Not a general-purpose chatbot builder (focus = surveys).
- Not a CRM; data should flow into existing tools.
- Not a replacement for full analytics suites in v1.

---

## 4. Target Users
- SMBs and enterprises running customer research, feedback, or lead qualification surveys.
- Marketing and sales teams using surveys to capture leads.
- Product managers conducting customer discovery.

---

## 5. Core Features

### 5.1 Survey Creation
- Create an agent, give it details about the survey
- Tell it about yourself, the goal of the agent, questions you want to ask, 
- Automatic unique ID assigned to each question.
- Survey versioning (new version created on edit).

### 5.2 Survey Delivery
- **Standalone:** hosted at `evallo.app/s/[survey_id]`.
- **Embedded:** JavaScript snippet injects iframe chatbot widget into external sites.

### 5.3 Conversational Agent
- Chat UI powered by React (Vercel Chat UI).
- AI-driven follow-ups for clarification.
- Conversation transcript saved in Supabase.
- Post-processing with LLM:
  - Extract answers according to survey schema.
  - Return structured JSON (IDs as keys).
  - Fill unanswered questions with `null`.

### 5.4 Responses & Insights
- Store transcripts in Supabase.
- Store structured answers in `responses` + `answers` tables.
- Dashboard to view individual and aggregated results.
- Filter by survey version; compare overlapping questions.

### 5.5 Integrations
- Webhook support:
  - User pastes Zapier/Make/n8n webhook URL.
  - On new response, Evallo POSTs structured JSON payload.
- Payload includes survey metadata + answers.

---

## 6. Technical Architecture

### 6.1 Frontend
- Next.js + React
- UI components: Vercel Chat UI + Chakra UI
- Hosted on Vercel

### 6.2 Backend
- Next.js API routes (serverless functions on Vercel)
- Supabase:
  - Database (Postgres)
  - Authentication
  - Storage
- LLM processing via OpenAI API (future: Anthropic, etc.)

### 6.21 Embedding

- embed.js hosted in /public of the main app.
- Served by Vercel CDN for global scalability.
- Future: optional dedicated subdomain/CDN for enterprise use.

### 6.3 Database Schema (simplified)
- `surveys (id, title, owner_id, created_at)`
- `survey_versions (id, survey_id, version_number, created_at, is_active)`
- `questions (id, survey_version_id, text, type, order)`
- `responses (id, survey_version_id, respondent_id, created_at)`
- `answers (id, response_id, question_id, value)`
- `transcripts (id, response_id, content)`

---

## 7. Success Metrics
- Response completion rate compared to static surveys.
- Average number of words/details per answer.
- Number of active surveys created.
- Number of webhook integrations connected.
- Time-to-first-response after survey publication.

---

## 8. Open Questions
- Should survey creators be able to edit live surveys, or force new versions?
- Do we need real-time collaboration in survey building?
- How to enable lead scoring.

---
