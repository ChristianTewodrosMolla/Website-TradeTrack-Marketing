import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  transactionalConsent: z.boolean().default(false),
  marketingConsent: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      transactionalConsent: false,
      marketingConsent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with your actual form submission endpoint
      // For now, we'll just show a success message
      console.log("Form submitted:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Thank you! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch with our freight marketing specialists.
              </p>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm mb-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Last Name */}
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="Phone" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-xs text-muted-foreground">
                          Entering a phone number alone does not grant permission to send SMS messages. SMS consent must be collected explicitly using the checkboxes below.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Email" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Transactional SMS Consent */}
                  <FormField
                    control={form.control}
                    name="transactionalConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            I consent to receive transactional messages from <strong>Tradetrack Logistics</strong> at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                          </FormLabel>
                          <FormDescription className="text-xs text-muted-foreground">
                            This checkbox collects consent for non-promotional messages such as account alerts, reminders, or notifications. This consent must be separate from marketing consent. This checkbox cannot be required to submit the form.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Marketing SMS Consent */}
                  <FormField
                    control={form.control}
                    name="marketingConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            I consent to receive marketing and promotional messages from <strong>Tradetrack Logistics</strong> at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                          </FormLabel>
                          <FormDescription className="text-xs text-muted-foreground">
                            This checkbox collects express written consent for promotional or marketing messages. It must be unchecked by default and optional. Marketing SMS consent cannot be mandatory and cannot block form submission.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-[#63cc53] hover:bg-[#63cc53]/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Privacy Policy and Terms Links */}
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">
                <a 
                  href="/privacy-policy" 
                  className="text-accent hover:text-accent/80 transition-colors underline"
                >
                  Privacy Policy
                </a>
                {' • '}
                <a 
                  href="/terms-of-service" 
                  className="text-accent hover:text-accent/80 transition-colors underline"
                >
                  Terms & Conditions
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Privacy policy and terms must be publicly accessible and must clearly state that SMS consent is not shared with third parties (except SMS providers).
              </p>
            </div>
            
            <div className="text-center mb-8">
              <div className="mb-4">
                <a 
                  href="mailto:contact@tradetrackmarketing.com"
                  className="text-xl font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  contact@tradetrackmarketing.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-6">
                <a 
                  href="https://twitter.com/TradeTrackHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit our X (Twitter)"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/tradetrack-marketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit our LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/tradetrackmarketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit our Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

