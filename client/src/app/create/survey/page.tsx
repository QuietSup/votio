"use client";

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
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { PollsAnswerOption } from "../../../components/PollsAnswer";
import { Button } from "@/components/ui/button";

// const createSurveySchema = z.object({
//   title: z.string().min(1),
// });

// const createPollSchema = z.object({
//   question: z.string().min(1),
// });

// const createPollAnswerOption = z.object({
//   text: z.string().min(1),
// });

const createPollAnswerOptionSchema = z.object({
  text: z.string().min(1),
});

const createPollSchema = z.object({
  question: z.string().min(1),
  pollAnswerOption: z.array(createPollAnswerOptionSchema),
});

const createSurveySchema = z.object({
  title: z.string().min(1),
  polls: z.array(createPollSchema),
});

export default function Page() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof createSurveySchema>>({
    resolver: zodResolver(createSurveySchema),
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "polls",
  });

  function onSubmit(values: z.infer<typeof createSurveySchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      description: "Succesfully created",
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-lg m-auto"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Survey title</FormLabel>
                <FormControl>
                  <Input placeholder="Survey title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant={"default"}
            className="m-auto"
            onClick={() => {
              fieldArray.append({
                question: "",
                pollAnswerOption: [],
              });
            }}
          >
            Add question
          </Button>

          {fieldArray.fields.map((field, index) => (
            <FormField
              key={field.id}
              {...form.register(`polls.${index}.question`)}
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input placeholder="Question" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <PollsAnswerOption nestedIndex={index} form={form} />
                </>
              )}
            />
          ))}

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
