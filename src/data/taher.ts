// Portfolio content for Taher Rampurawala.
// Source: the existing static portfolio (my_portfolio/old_portfolio/index.html + script.js),
// live at https://taher-rampurawala.github.io/portfolio/

export const PROFILE = {
    name: "Taher Rampurawala",
    firstName: "Taher",
    role: "AI Automation Engineer",
    availability: "Available · 30+ hrs/week · open to contract-to-hire",
    location: "India · working remotely, worldwide",
    hoursPerWeek: "30+ hrs/week · open to contract-to-hire",
    photo: "/taher/taher.webp",
};

export const LINKS = {
    upwork: "https://www.upwork.com/freelancers/taherhi5",
    linkedin: "https://www.linkedin.com/in/taher-rampurawala-747a525b",
    github: "https://github.com/taher-rampurawala",
    repo: "https://github.com/taher-rampurawala/n8n_workflows_project",
};

/** Site menu, shared by the header (desktop + mobile panels) and the footer. */
export const NAV_LINKS = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#work", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

/**
 * "Book a call" target. Paste a Google Calendar appointment-schedule link here
 * (https://calendar.app.google/XXXX). While empty, the button scrolls to the contact form.
 */
export const BOOK_CALL_URL = "";

/**
 * Where the contact form POSTs JSON ({ name, email, company, topic, message, page, sentAt }).
 * Paste an n8n Webhook node's Production URL. While empty, the form opens the visitor's email app.
 */
export const FORM_ENDPOINT = "";

/** Email is assembled at click time so it never appears in the page markup. */
export const getMail = () => ["taher.advisor", "gmail.com"].join("@");

export const TOOLS = [
    "n8n", "OpenAI", "Claude", "Gemini", "Retell AI", "Telnyx", "Twilio", "WhatsApp Cloud API",
    "Pinecone", "Postgres", "Supabase", "Apify", "Tavily", "Google Sheets", "Gmail", "Telegram",
    "Go High Level", "AWS", "Java / Spring Boot", "Docker",
];

export const CORE_SKILLS = ["n8n", "AI Agents", "Voice AI", "RAG", "WhatsApp API", "OpenAI", "Claude"];

export const SERVICES = [
    {
        title: "n8n workflow automation",
        desc: "Lead qualification, CRM updates, document processing, approvals, scheduled syncs. Custom Java/Spring Boot code when no-code hits its ceiling.",
    },
    {
        title: "AI voice agents",
        desc: "Inbound and outbound calls that book appointments and qualify leads on Retell AI, Twilio or Telnyx.",
    },
    {
        title: "AI agents with tool calling",
        desc: "Agents that research, triage, draft and follow up, connected to your CRM, GHL and internal tools.",
    },
    {
        title: "RAG chatbots & knowledge systems",
        desc: "Assistants that answer from your own documents and say so when the answer isn't there.",
    },
    {
        title: "AI-powered websites",
        desc: "Fast business websites with a built-in AI chatbot that answers visitors and captures leads.",
    },
    {
        title: "WhatsApp CRM & automation",
        desc: "Shared WhatsApp inbox, pipelines, broadcasts and booking bots on the official Cloud API, wired into n8n.",
    },
];

export const PROCESS = [
    { n: "01", title: "Map the process", desc: "I learn how the work happens today before touching a node, and point out where automation won't pay off." },
    { n: "02", title: "Agree the scope", desc: "You approve a written scope with clear milestones before I build, so there are no surprises on price or timeline." },
    { n: "03", title: "Build and harden", desc: "Every system ships with retries, error handling, cost caps and monitoring. If something breaks, you get an alert." },
    { n: "04", title: "Hand it over", desc: "Plain-language documentation and a handover video, so your team owns it and you're never locked in." },
];

export const PRINCIPLES = [
    { title: "Safe by default", desc: "Webhooks verified with shared secrets and HMAC signatures. Agents never claim a booking that didn't happen." },
    { title: "You approve what goes out", desc: "Outreach emails, posts and proposals wait for you to press Approve before anything is sent." },
    { title: "No AI where it isn't needed", desc: "When a flow has to be auditable, like a booking, I build it as a plain state machine and keep the LLM out of it." },
];

export const EXPERIENCE = [
    { date: "Oct 2022 – now", title: "Senior Software Engineer", org: "Global IT services · banking & financial services" },
    { date: "Jan 2017 – Sep 2022", title: "Software Engineer", org: "Same company · microservices, integrations" },
    { date: "Dec 2014 – Dec 2016", title: "Programming Analyst", org: "Same company" },
];

export const CERTIFICATIONS = [
    { title: "AWS Partner: Generative AI Essentials", date: "Sep 2026" },
    { title: "AWS Certified Cloud Practitioner", date: "May 2026" },
];

export const EDUCATION = "B.Tech · B.P. Poddar Institute of Management and Technology · 2009–2013";

export const LANGUAGES = [
    { name: "English", level: "fluent" },
    { name: "Hindi", level: "native" },
    { name: "Gujarati", level: "native" },
];

export const CATEGORIES = {
    voice: "Voice AI",
    chat: "Chat & WhatsApp",
    agents: "AI Agents & RAG",
    content: "Content & Outreach",
    data: "Documents & Data",
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export type Project = {
    title: string;
    platform: string;
    cat: CategoryKey;
    summary: string;
    stack: string[];
    cover: string;
    nodes: string;
    /** Folder in the n8n_workflows_project repo, when the workflow is published. */
    folder?: string;
};

const repoFolder = (folder: string) =>
    `${LINKS.repo}/tree/main/${encodeURIComponent(folder).replace(/%2F/g, "/")}`;

export const projectHref = (p: Project) => (p.folder ? repoFolder(p.folder) : LINKS.repo);

export const PROJECTS: Project[] = [
    {
        title: "AI Voice Receptionist for a Dental Clinic",
        platform: "Retell AI + n8n",
        cat: "voice",
        summary: "Riya answers the clinic phone in English, Hindi and Hinglish, books same-day tokens, answers FAQs, moves or cancels bookings and transfers to reception.",
        stack: ["Retell AI", "n8n", "HMAC-SHA256", "Apps Script", "Google Sheets"],
        cover: "/taher/covers/retell-voice.webp",
        nodes: "13 nodes · 2 workflows",
        folder: "Booking Appointment using Voice AI Agent",
    },
    {
        title: "WhatsApp Appointment Booking Bot",
        platform: "WhatsApp Cloud API",
        cat: "chat",
        summary: "A deterministic state-machine booking flow on the official WhatsApp API. No LLM in the booking path, so every step is predictable and auditable.",
        stack: ["WhatsApp Cloud API", "n8n Data Tables", "Google Sheets", "State machine"],
        cover: "/taher/covers/whatsapp-booking.webp",
        nodes: "75 nodes",
        folder: "WhatsApp Doctor Appointment Booking",
    },
    {
        title: "WhatsApp CRM Automation",
        platform: "Next.js + Supabase + n8n",
        cat: "chat",
        summary: "A self-hosted WhatsApp CRM with a shared inbox, sales pipelines, broadcasts and no-code chatbot flows, wired into n8n for booking logic.",
        stack: ["WhatsApp Cloud API", "Next.js 16", "Supabase", "MCP server", "n8n webhooks"],
        cover: "/taher/covers/whatsapp-crm.webp",
        nodes: "Full-stack app",
        folder: "WhatsApp CRM/wacrm",
    },
    {
        title: "UGC Image & Video Ad Generator",
        platform: "Telegram bot",
        cat: "content",
        summary: "Send one product photo on Telegram and get UGC-style image and video ads back, written by a vision agent that researches current short-form trends.",
        stack: ["Telegram", "Vision AI", "Tavily", "Nano Banana 2", "Veo 3.1", "Postgres"],
        cover: "/taher/covers/ugc-generator.webp",
        nodes: "68 nodes · 3 workflows",
        folder: "UGC Image & Video Generator Automation",
    },
    {
        title: "LinkedIn Content Generator with Telegram Approval",
        platform: "Human-in-the-loop",
        cat: "content",
        summary: "Chat with a Telegram bot and get a researched LinkedIn post with an AI image. It's published only after you tap Approve.",
        stack: ["Telegram", "OpenAI", "gpt-image-2", "Tavily", "LinkedIn API"],
        cover: "/taher/covers/linkedin-content.webp",
        nodes: "68 nodes",
        folder: "LinkedIn Content Generator",
    },
    {
        title: "AI Travel Consultant Chat Widget",
        platform: "Website chat + n8n",
        cat: "chat",
        summary: "Musafir, a travel consultant embedded on a Next.js site, looks up packages and itineraries on demand and emails a branded enquiry to a human when it should.",
        stack: ["n8n AI Agent", "OpenAI", "7 Sheets tools", "Next.js", "Gmail"],
        cover: "/taher/covers/travel-chat-agent.webp",
        nodes: "19 nodes + Next.js site",
        folder: "AI Automation ChatBot",
    },
    {
        title: "AI Lead Generation Agent on Telegram",
        platform: "Voice + text",
        cat: "agents",
        summary: "Describe the leads you want by voice note or text. The agent asks follow-ups, scrapes with Apify, dedupes and emails you a fresh Google Sheet.",
        stack: ["Telegram", "Whisper", "GPT agent", "Apify", "Google Sheets"],
        cover: "/taher/covers/lead-gen-agent.webp",
        nodes: "38 nodes · 2 workflows",
        folder: "AI Lead Generation Automation",
    },
    {
        title: "AI Cold Outreach with Human Approval",
        platform: "Email + LinkedIn",
        cat: "content",
        summary: "Personalised email and LinkedIn drafts for every lead land in a review sheet. Only the rows you approve get sent, a few at a time, and no address is emailed twice.",
        stack: ["n8n Forms", "OpenAI", "Google Sheets", "Gmail", "Rate limiting"],
        cover: "/taher/covers/cold-outreach.webp",
        nodes: "2 workflows",
    },
    {
        title: "AI Gmail Inbox Assistant with RAG Replies",
        platform: "Gmail + Pinecone",
        cat: "agents",
        summary: "Classifies and routes every new email, then drafts grounded replies to professional enquiries from a Pinecone knowledge base.",
        stack: ["Gmail", "Text Classifier", "Pinecone", "OpenAI", "RAG"],
        cover: "/taher/covers/gmail-assistant.webp",
        nodes: "27 nodes",
        folder: "Gmail Inbox Assistant",
    },
    {
        title: "Invoice & Receipt Processing with AI OCR",
        platform: "Google Drive",
        cat: "data",
        summary: "Drop an invoice into a Drive folder. A vision LLM reads the fields, logs them to a sheet and files the document.",
        stack: ["Google Drive", "Vision LLM", "Gemini API", "Google Sheets"],
        cover: "/taher/covers/invoice-ocr.webp",
        nodes: "10 nodes",
        folder: "Invoice Processing Automation",
    },
    {
        title: "RAG Recruitment Assistant",
        platform: "Pinecone knowledge base",
        cat: "agents",
        summary: "A chat agent that answers recruiter questions only from a Pinecone knowledge base, and says so plainly when the answer isn't there.",
        stack: ["n8n Chat", "Pinecone", "OpenAI Embeddings", "Window memory"],
        cover: "/taher/covers/rag-recruitment.webp",
        nodes: "6 nodes",
    },
];
