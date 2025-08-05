"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { Company } from "@/types";
import { submitModerationRequest } from "@/app/actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  companyId: z.string(),
  companyName: z.string(),
  reportType: z.enum(["flag", "suggest", "report"]),
  details: z.string().min(10, {
    message: "Please provide at least 10 characters of detail.",
  }),
  source: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
});

interface ModerationFormProps {
  company: Company;
  type: "flag" | "suggest" | "report";
  onFinished: () => void;
}

export function ModerationForm({
  company,
  type,
  onFinished,
}: ModerationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyId: company.id,
      companyName: company.name,
      reportType: type,
      details: "",
      source: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitModerationRequest(values);
      if (result.success) {
        toast({
          title: "Submission Received",
          description:
            "Thank you! Our moderators will review your submission.",
        });
        onFinished();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description:
            result.error || "An unknown error occurred. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Could not submit your request. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-2">
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`Provide details for your ${type} of ${company.name}...`}
                  {...field}
                  rows={4}
                />
              </FormControl>
              <FormDescription>
                Please be as specific as possible. Your feedback helps keep our
                list accurate.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source URL (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com/source-article"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                If you have a source to back up your claim, please provide a
                link.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button
            type="button"
            variant="ghost"
            onClick={onFinished}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Feedback
          </Button>
        </div>
      </form>
    </Form>
  );
}
