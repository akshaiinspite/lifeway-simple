import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER, BOOKING_PHONE_TEL } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const departmentOptions = [
  { value: "Occupational Therapy", label: "Occupational Therapy" },
  { value: "Physiotherapy", label: "Physiotherapy" },
  { value: "Speech Therapy", label: "Speech Therapy" },
  { value: "Special Education", label: "Special Education" },
  { value: "Clinical Psychology", label: "Clinical Psychology" },
];

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").max(100),
  mobileNumber: z.string().trim().min(10, "Please enter a valid mobile number").max(20),
  department: z.string({ required_error: "Please select a department" }),
  appointmentDate: z.date({ required_error: "Please select a date" }),
  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AppointmentForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const lines = [
        "Hello Lifeway, I'd like to book an appointment.",
        "",
        `Name: ${data.fullName}`,
        `Mobile: ${data.mobileNumber}`,
        `Department: ${data.department}`,
        `Preferred Date: ${format(data.appointmentDate, "PPP")}`,
      ];
      if (data.message) lines.push(`Message: ${data.message}`);

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank", "noopener,noreferrer");

      toast({
        title: "Opening WhatsApp",
        description: "Please press Send in WhatsApp to confirm your booking.",
      });
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your mobile number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {departmentOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="appointmentDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Date *</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter any additional information or specific requirements"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-sm text-gray-600">
            Clicking &quot;Book Now&quot; will open WhatsApp with your booking details pre-filled. Press
            Send in WhatsApp to confirm, or call us directly to book.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="w-full sm:flex-1" disabled={isSubmitting}>
              {isSubmitting ? "Opening WhatsApp..." : "Book Now"}
            </Button>
            <Button type="button" variant="outline" className="w-full sm:flex-1 min-h-[44px]" asChild>
              <a href={BOOKING_PHONE_TEL}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
