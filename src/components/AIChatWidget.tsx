import { useState } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAIChat } from "@/context/AIChatContext";
import { Link } from "react-router-dom";

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, isTyping } = useAIChat();

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full salon-gradient text-primary-foreground shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
          <div className="salon-gradient px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="text-primary-foreground font-semibold text-sm">AI Assistant</h3>
              <p className="text-primary-foreground/70 text-xs">Ask me anything!</p>
            </div>
            <Link to="/ai-chat" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 text-xs">
                Full Page
              </Button>
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <MessageSquare className="h-10 w-10 text-muted-foreground/30 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Hey! How can I assist you today?</p>
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-xl px-3 py-2 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Typing...</span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-border p-3 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="text-sm h-9"
            />
            <Button size="icon" className="h-9 w-9 shrink-0" onClick={handleSend} disabled={isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
