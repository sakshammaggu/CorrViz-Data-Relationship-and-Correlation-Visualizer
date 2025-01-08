"use client"
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from "../ui/button";
import Link from "next/link"

const formSchema = z.object({
    email: z.string().email("Please enter a valid email address.").min(1, "Email is required."),
    password: z.string().min(6, "Password must be at least 6 characters."),
})

const SignupForm: React.FC = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter your email address.
                                </FormDescription>
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
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? 'Signing Up...' : 'Sign up'}
                    </Button>
                </form>
            </Form>
            <p className="mt-4 text-center text-sm">
                Have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Login
                </Link>
            </p>
        </div>
    )
}

export default SignupForm