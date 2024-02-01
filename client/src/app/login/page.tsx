"use client";

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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFromSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters long",
    })
    .email(),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters long",
  }),
});

export default function Page() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof loginFromSchema>>({
    resolver: zodResolver(loginFromSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFromSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      description: "Successfully logged in!",
    });
  }

  return (
    <>
      {/* <div>Login</div> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-lg m-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex flex-row w-full items-center">
            <Button type="submit" variant={"default"} className="m-auto">
              Log in
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
