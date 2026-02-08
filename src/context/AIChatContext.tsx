import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { services } from "@/data/services";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  date: string;
  messages: ChatMessage[];
}

interface AIChatContextType {
  sessions: ChatSession[];
  activeSessionId: string;
  messages: ChatMessage[];
  sendMessage: (text: string) => void;
  newChat: () => void;
  setActiveSession: (id: string) => void;
  isTyping: boolean;
}

const AIChatContext = createContext<AIChatContextType | undefined>(undefined);

function generateAIResponse(msg: string): string {
  const lower = msg.toLowerCase();

  if (lower.includes("book") && lower.includes("appointment")) {
    return "I'd love to help you book an appointment! 🎉 You can browse our services and pick a date & time that works for you. Would you like me to suggest a popular service?";
  }
  if (lower.includes("cancel")) {
    return "To cancel a booking, go to **My Bookings** page, find the booking you'd like to cancel, and click the cancel button. Cancellations made 24 hours before the appointment are fully refundable.";
  }
  if (lower.includes("slot") || lower.includes("available") || lower.includes("time")) {
    return "We have slots available throughout the day! Most popular times are between 10 AM - 2 PM. Check the service details page for real-time availability. 📅";
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) {
    const cheapest = services.reduce((a, b) => (a.price < b.price ? a : b));
    const expensive = services.reduce((a, b) => (a.price > b.price ? a : b));
    return `Our services range from **$${cheapest.price}** (${cheapest.name}) to **$${expensive.price}** (${expensive.name}). Most services have great discounts right now! 💰`;
  }
  if (lower.includes("recommend") || lower.includes("suggest") || lower.includes("which service")) {
    return "Based on popularity, I'd recommend:\n\n1. **Hair Spa Treatment** ⭐ 4.9 - Perfect for rejuvenation\n2. **Classic Haircut** ⭐ 4.8 - Always a great choice\n3. **Highlights & Balayage** ⭐ 4.8 - Trending this season!\n\nWould you like to book any of these?";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hey there! 👋 Welcome to Hair Rap By YoYo! How can I help you today? I can assist with booking appointments, exploring services, or answering any questions.";
  }
  if (lower.includes("service")) {
    return `We offer ${services.length} amazing services across categories like Haircuts, Coloring, Treatments, Styling & more. Visit our **Services** page to explore them all! ✨`;
  }
  if (lower.includes("hours") || lower.includes("open") || lower.includes("timing")) {
    return "We're open **Monday to Saturday, 9:00 AM - 7:00 PM** and **Sunday, 10:00 AM - 5:00 PM**. Walk-ins are welcome but appointments are recommended! 🕐";
  }
  if (lower.includes("location") || lower.includes("address") || lower.includes("where")) {
    return "We have multiple locations across New York City! Our flagship salon is at **123 Style Avenue, Manhattan, NY 10001**. Check our Services page to find the nearest salon. 📍";
  }

  return "I'm here to help with bookings and services 😊 You can ask me about:\n\n• Available services & pricing\n• Booking appointments\n• Cancellation policies\n• Salon locations & hours\n\nWhat would you like to know?";
}

export const AIChatProvider = ({ children }: { children: ReactNode }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([
    {
      id: "session-1",
      title: "Welcome Chat",
      date: "Today",
      messages: [],
    },
  ]);
  const [activeSessionId, setActiveSessionId] = useState("session-1");
  const [isTyping, setIsTyping] = useState(false);

  const activeSession = sessions.find((s) => s.id === activeSessionId);
  const messages = activeSession?.messages || [];

  const sendMessage = useCallback(
    (text: string) => {
      const userMsg: ChatMessage = {
        id: `msg-${Date.now()}`,
        role: "user",
        content: text,
        timestamp: new Date(),
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? {
                ...s,
                title: s.messages.length === 0 ? text.slice(0, 30) : s.title,
                messages: [...s.messages, userMsg],
              }
            : s
        )
      );

      setIsTyping(true);

      setTimeout(() => {
        const aiContent = generateAIResponse(text);
        const aiMsg: ChatMessage = {
          id: `msg-${Date.now() + 1}`,
          role: "assistant",
          content: aiContent,
          timestamp: new Date(),
        };

        setSessions((prev) =>
          prev.map((s) =>
            s.id === activeSessionId
              ? { ...s, messages: [...s.messages, userMsg, aiMsg].filter((m, i, arr) => arr.findIndex((x) => x.id === m.id) === i) }
              : s
          )
        );
        setIsTyping(false);
      }, 1200);
    },
    [activeSessionId]
  );

  const newChat = () => {
    const id = `session-${Date.now()}`;
    const newSession: ChatSession = {
      id,
      title: "New Chat",
      date: "Today",
      messages: [],
    };
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(id);
  };

  const setActiveSession = (id: string) => setActiveSessionId(id);

  return (
    <AIChatContext.Provider
      value={{ sessions, activeSessionId, messages, sendMessage, newChat, setActiveSession, isTyping }}
    >
      {children}
    </AIChatContext.Provider>
  );
};

export const useAIChat = () => {
  const ctx = useContext(AIChatContext);
  if (!ctx) throw new Error("useAIChat must be inside AIChatProvider");
  return ctx;
};
