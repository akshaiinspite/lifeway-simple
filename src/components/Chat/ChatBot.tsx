
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
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const API_KEY = "AIzaSyAv3YkRfiVlCrtYsXwzR_Wvt-82B8wZhEg";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help you with booking appointments, learning about our services, or answering any other questions you might have. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input } as Message;
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': API_KEY,
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful assistant at Lifeway Healthcare, focusing on:
              1. Helping users book appointments with our healthcare professionals
              2. Providing detailed information about our services including occupational therapy, physiotherapy, speech therapy, special education, clinical psychology, and home services
              3. Answering general queries about our healthcare facility and treatments
              4. Guiding users to the right department or specialist based on their needs
              Be professional, friendly, and provide clear, concise information. User message: ${input}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const aiMessage = {
        role: "assistant",
        content: data.candidates[0].content.parts[0].text,
      } as Message;
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
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
            <ScrollArea className="h-[380px] pr-4">
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
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="bg-lifeway-red hover:bg-lifeway-red/90"
                disabled={isLoading}
              >
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
