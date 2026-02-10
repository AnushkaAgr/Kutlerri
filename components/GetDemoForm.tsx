"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  restaurantName: z
    .string()
    .min(2, { message: "Restaurant name is required." }),
  locations: z.string({
    required_error: "Please select number of locations.",
  }),
  pos: z.string({
    required_error: "Please select your Point of Sale system.",
  }),
});

export function GetDemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      restaurantName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Request Sent!",
          description: "We'll get back to you shortly to schedule your demo.",
        });
        form.reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 text-center bg-white/80 backdrop-blur-md rounded-[24px] border border-purple-100 shadow-xl min-h-[400px]"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#300B60] mb-2 font-avant">
          Request Received!
        </h3>
        <p className="text-[#2E312E]/70 max-w-xs">
          Thank you for your interest. One of our experts will contact you
          within 24 hours.
        </p>
        <Button
          variant="ghost"
          className="mt-8 border border-[#7C5CFA] text-[#7C5CFA] hover:bg-[#7C5CFA]/5 rounded-[12px]"
          onClick={() => setIsSuccess(false)}
        >
          Send another request
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#300B60] font-medium">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="bg-white/50 text-black border-purple-100 focus:border-[#7C5CFA] focus:ring-[#7C5CFA] rounded-[12px] h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#300B60]  font-medium">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="bg-white/50 text-black border-purple-100 focus:border-[#7C5CFA] focus:ring-[#7C5CFA] rounded-[12px] h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#300B60] font-medium">
                  Work Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@company.com"
                    type="email"
                    className="bg-white/50 border-purple-100 text-black focus:border-[#7C5CFA] focus:ring-[#7C5CFA] rounded-[12px] h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="restaurantName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#300B60] font-medium">
                  Restaurant Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-white/50 border-purple-100 text-black focus:border-[#7C5CFA] focus:ring-[#7C5CFA] rounded-[12px] h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="locations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#300B60] font-medium">
                    No. of Locations
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white/50 text-black border-purple-100 focus:border-[#7C5CFA] rounded-[12px] h-12">
                        <SelectValue placeholder="Select scale" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-[12px]">
                      <SelectItem value="1">1 Location</SelectItem>
                      <SelectItem value="2-5">2-5 Locations</SelectItem>
                      <SelectItem value="6-20">6-20 Locations</SelectItem>
                      <SelectItem value="21-50">21-50 Locations</SelectItem>
                      <SelectItem value="50+">50+ Locations</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#300B60] font-medium">
                    Point of Sales
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white/50 text-black border-purple-100 focus:border-[#7C5CFA] rounded-[12px] h-12">
                        <SelectValue placeholder="Select POS system" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-[12px]">
                      <SelectItem value="toast">Toast</SelectItem>
                      <SelectItem value="square">Square</SelectItem>
                      <SelectItem value="clover">Clover</SelectItem>
                      <SelectItem value="revel">Revel Systems</SelectItem>
                      <SelectItem value="lightspeed">Lightspeed</SelectItem>
                      <SelectItem value="other">Other / Not Listed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#7C5CFA] hover:bg-[#6849E0] text-white h-14 rounded-[12px] text-lg font-semibold shadow-lg shadow-purple-200 transition-all active:scale-[0.98]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Requesting...
              </>
            ) : (
              "Get My Demo"
            )}
          </Button>

          {/* <p className="text-center text-xs text-[#2E312E]/50 px-4">
            By clicking "Get My Demo", you agree to our terms of service and
            privacy policy. We'll never share your information with third
            parties.
          </p> */}
        </form>
      </Form>
    </div>
  );
}
