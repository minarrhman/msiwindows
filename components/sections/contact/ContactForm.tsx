"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validations/contact-form";

const products = [
  "Bi-Folding Doors",
  "Stacker Doors",
  "Sliding Doors",
  "Awning Windows",
  "Double Hung Windows",
  "Sliding Windows",
  "Shopfront Systems",
  "Other",
];




export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      product: "",
      message: undefined,
    },
  });

  const [isSubmitting, setIsSubmitting] =
  React.useState(false);


  async function onSubmit(
  values: ContactFormValues
) {
  try {
    setIsSubmitting(true);

    const response = await fetch(
      "/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    toast.success(
      "Your enquiry has been submitted successfully."
    );

    form.reset();
  } catch {
    toast.error(
      "Failed to submit enquiry. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <section className="py-24">
      <Container>

        <FadeUp>
          <SectionHeading
            badge="Send an Enquiry"
            title="Request a Free Quote"
            description="Tell us about your project and our Sydney team will get back to you as soon as possible."
            center
          />
        </FadeUp>

        <FadeUp>
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-zinc-300 bg-zinc-100/95 p-8 lg:p-10">

            <form
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FieldGroup>

                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Full Name
                      </FieldLabel>

                      <Input
                        {...field}
                        placeholder="John Smith"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                        />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Email Address
                      </FieldLabel>

                      <Input
                        {...field}
                        type="email"
                        placeholder="john@email.com"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                        />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Phone Number
                      </FieldLabel>

                      <Input
                        {...field}
                        placeholder="0450 351 924"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                        />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="product"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Product Interest
                      </FieldLabel>

                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>

                        <SelectContent>
                          {products.map((product) => (
                            <SelectItem
                              key={product}
                              value={product}
                            >
                              {product}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                        />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Project Details
                      </FieldLabel>

                      <Textarea
                        {...field}
                        rows={6}
                        placeholder="Tell us about your project..."
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                        />
                      )}
                    </Field>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Submit Enquiry"}
                </Button>

              </FieldGroup>
            </form>

          </div>
        </FadeUp>

      </Container>
    </section>
  );
}