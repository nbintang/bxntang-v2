"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/form";
import sendEmail, { MailProps } from "@/lib/mail";
import { useEmailDialog } from "@/hooks/useEmailDialog";
import { useShallow } from "zustand/shallow";
import { toast } from "sonner";
import AnimatedInput from "./AnimatedInput";
import AnimatedTextarea from "./AnimatedTextArea";
import { formatDate } from "@/helper/formatters";

const formSchema = z.object({
  message: z.string().min(6, { message: "Message is required" }),
  from: z
    .string()
    .email({ message: "Invalid email address" })
    .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, {
      message: "Only Gmail addresses are allowed",
    }),
}) satisfies z.ZodType<MailProps>;

export function EmailDialog() {
  const { open, setOpen } = useEmailDialog(
    useShallow((state) => ({ open: state.open, setOpen: state.setOpen }))
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
     message : "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const submittedDate = formatDate(new Date());
    toast.promise(
      sendEmail({
        to: process.env.NEXT_PUBLIC_EMAIL_USER,
        subject: `Message from Your Portfolio : ${values.from} - ${submittedDate}`,
        ...values,
      }),
      {
        loading: "Sending...",
        success: "Email sent successfully, the owner will get back to you.",
        error: "Error sending email",
        className: "text-xs",
      }
    );
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle className="text-black font-display font-medium tracking-tight">
            Send Email
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to send a message.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="isolate  rounded-2xl bg-white/50"
          >
            <FormField
              control={form.control}
              name="from"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <AnimatedInput
                      label="Who are you?"
                      className="group-last:rounded-b-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <AnimatedTextarea
                      label="Whachu needin'?"
                      rows={6}
                      className="group-first:rounded-t-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-center gap-2">
             {"["}
             {Object.entries(form.formState.errors).map(([key, value]) => (
                <p key={key} className="text-xs mt-1 text-red-500">
                  {value.message}
                </p>
              ))}
             {"]"}
            </div>
            <Button
              type="submit"
              size={"sm"}
              className="w-full mt-3 sm:w-auto rounded-full"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
