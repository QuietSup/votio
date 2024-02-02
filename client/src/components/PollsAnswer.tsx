"use client";

import { UseFormReturn, useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function PollsAnswerOption({
  nestedIndex,
  form,
}: {
  nestedIndex: number;
  form: UseFormReturn<
    {
      title: string;
      polls: {
        question: string;
        pollAnswerOption: {
          text: string;
        }[];
      }[];
    },
    any,
    {
      title: string;
      polls: {
        question: string;
        pollAnswerOption: {
          text: string;
        }[];
      }[];
    }
  >;
}) {
  const fieldArray = useFieldArray({
    control: form.control,
    name: `polls.${nestedIndex}.pollAnswerOption`,
  });

  return (
    <>
      <Button
        type="button"
        variant={"default"}
        className="m-auto"
        onClick={() => {
          fieldArray.append({ text: "" });
        }}
      >
        Add answer option
      </Button>
      {fieldArray.fields.map((field, index) => (
        <FormField
          key={field.id}
          {...form.register(
            `polls.${nestedIndex}.pollAnswerOption.${index}.text`
          )}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Input placeholder="Answer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
}
