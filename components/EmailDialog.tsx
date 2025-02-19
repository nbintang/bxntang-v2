"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import sendEmail, { MailProps } from "@/lib/mail";
import { Input } from "@/components/ui/input";
import { useEmailDialog } from "@/hooks/useEmailDialog";
import { useShallow } from "zustand/shallow";
import { toast } from "sonner";

const formSchema = z.object({
  to: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  text: z.string().min(1, { message: "Message is required" }),
  from: z.string().email({ message: "Invalid email address" }),
}) satisfies z.ZodType<MailProps>;

export function EmailDialog() {
  const { open, setOpen } = useEmailDialog(
    useShallow((state) => ({ open: state.open, setOpen: state.setOpen }))
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "quantumz4gaming@gmail.com",
      subject: "From Your Portfolio",
      from: "",
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(sendEmail(values), {
      loading: "Sending...",
      success: "Email sent successfully, the owner will get back to you.",
      error: "Error sending email",
      className: "text-xs",
    });
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-black">Send Email</DialogTitle>
          <DialogDescription>
            Fill out the form below to send an message.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="from"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Who are You?"
                      className="text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder="Type your message here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full  sm:w-auto">
              Send Message
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
