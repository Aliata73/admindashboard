"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Car } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "نام خود را وارد کنید",
  }),
  email: z
    .string()
    .min(1, {
      message: "ایمیل را وارد کنید",
    })
    .email({
      message: "لطفا آدرس ایمیل درست را وارد کنید",
    }),
  password: z.string().min(1, {
    message: "گذرواژه را وارد کنید",
  }),
  confirmPassword: z.string().min(1, {
    message: "گذرواژه را وارد کنید",
  }),
});

const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push("/");
  };

  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>ثبت نام کنید </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    نام
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 *:
                  focus-visible:ring-offset-0 text-black  dark:text-white
                  "
                      placeholder="نام خود را وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    ایمیل
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 *:
                  focus-visible:ring-offset-0 text-black  dark:text-white
                  "
                      placeholder="ایمیل را وارد کنید"
                      {...field}
                    />
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
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    گذرواژه
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 *:
                  focus-visible:ring-offset-0 text-black  dark:text-white
                  "
                      placeholder="گذرواژه را وارد کنید"
                      {...field}
                    />
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
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    تایید گذرواژه
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 *:
                  focus-visible:ring-offset-0 text-black  dark:text-white
                  "
                      placeholder="گذرواژه را دوباره وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full ">عضو شوید</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
