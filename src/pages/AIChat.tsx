import { useState, useRef, useEffect } from "react";
import { Plus, Send, Loader2, Copy, ThumbsUp, ThumbsDown, Volume2, RefreshCw, Mic, Paperclip, CalendarCheck, Sparkles, ShoppingBag, ClipboardList, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAIChat } from "@/context/AIChatContext";
import Navbar from "@/components/Navbar";

const quickActions = [
  { icon: CalendarCheck, label: "Book an Appointment", message: "I want to book an appointment" },
  { icon: Sparkles, label: "Explore Services", message: "What services do you offer?" },
  { icon: ShoppingBag, label: "Salon Products", message: "Tell me about your salon products" },
  { icon: ClipboardList, label: "My Bookings", message: "Show me my bookings" },
  { icon: Headphones, label: "Talk to Expert", message: "I'd like to talk to an expert" },
];

const AIChat = () => {
  const { sessions, activeSessionId, messages, sendMessage, newChat, setActiveSession, isTyping } = useAIChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    sendMessage(msg);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-72 border-r border-border flex-col bg-secondary/30">
          <div className="p-4 border-b border-border">
            <Button onClick={newChat} className="w-full gap-2" variant="outline">
              <Plus className="h-4 w-4" /> New Chat
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Today</p>
            {sessions
              .filter((s) => s.date === "Today")
              .map((session) => (
                <button
                  key={session.id}
                  onClick={() => setActiveSession(session.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm truncate transition-colors ${
                    session.id === activeSessionId
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {session.title}
                </button>
              ))}
          </div>
        </aside>

        {/* Main Chat */}
        <main className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {messages.length === 0 ? (
              <div className="max-w-2xl mx-auto pt-12 text-center">
                <div className="w-16 h-16 rounded-full salon-gradient flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Hey! How can I assist you today?</h2>
                <p className="text-muted-foreground mb-8">I can help with bookings, services, and more.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleSend(action.message)}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-accent transition-all text-sm"
                    >
                      <action.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-6">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] ${msg.role === "user" ? "" : ""}`}>
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {msg.content}
                      </div>
                      {msg.role === "assistant" && (
                        <div className="flex items-center gap-1 mt-1">
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                            <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                            <ThumbsDown className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                            <Volume2 className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                            <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl px-4 py-3 flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
                <Paperclip className="h-5 w-5" />
              </button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Browse help topics..."
                className="flex-1"
              />
              <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
                <Mic className="h-5 w-5" />
              </button>
              <Button size="icon" onClick={() => handleSend()} disabled={isTyping || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AIChat;
