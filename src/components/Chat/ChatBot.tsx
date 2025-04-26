
import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key to use the chatbot.",
        variant: "destructive",
      });
      return;
    }

    const userMessage = { role: "user", content: input } as Message;
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant at Lifeway Healthcare, focusing on providing information about healthcare services, therapy, and medical assistance. Be professional, empathetic, and concise.'
            },
            ...messages,
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const aiMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      } as Message;
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from AI service. Please try again.",
        variant: "destructive",
      });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-[350px] h-[500px] flex flex-col">
          <CardHeader className="bg-lifeway-red text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Lifeway Assistant</h3>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-4">
            {!apiKey && (
              <div className="mb-4">
                <Input
                  type="password"
                  placeholder="Enter your Perplexity API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="mb-2"
                />
                <p className="text-xs text-gray-500">
                  Enter your Perplexity API key to enable the chatbot. Get one at{" "}
                  <a
                    href="https://www.perplexity.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lifeway-red hover:underline"
                  >
                    perplexity.ai
                  </a>
                </p>
              </div>
            )}
            <ScrollArea className="h-[350px] pr-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === "user"
                      ? "ml-auto text-right"
                      : "mr-auto"
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-lifeway-red text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-sm text-gray-500">Assistant is typing...</div>
              )}
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 pt-2">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" className="bg-lifeway-red hover:bg-lifeway-red/90">
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-lifeway-red hover:bg-lifeway-red/90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
