"use client";
import { use } from "react";
import BackButton from "@/components/BackButton";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import posts from "@/data/posts";
import { log } from "console";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "عنوان نباید خالی باشد",
  }),
  body: z.string().min(1, {
    message: "متن نباید خالی باشد",
  }),
  author: z.string().min(1, {
    message: "نام نویسنده نباید خالی باشد",
  }),
  date: z.string().min(1, {
    message: "تاریخ نباید خالی باشد",
  }),
});

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = ({ params }: PostPageProps) => {

  const {toast} = useToast()
  const resolvePromise = use(params);
  const post = posts.find((post) => post.id === resolvePromise.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });


  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "پست با موفقیت به روز رسانی شد",
      description: `${data.date}`
    })
  };

  return (
    <>
      <BackButton text="بازگشت" link="/posts" />
      <h3 className="text-2xl mb-3">ویرایش پست</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">عنوان</FormLabel>
                <FormControl>
                  <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 *:
                  focus-visible:ring-offset-0 text-black  dark:text-white
                  " placeholder="عنوان را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">متن</FormLabel>
                <FormControl>
                  <Textarea className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 *:
                  focus-visible:ring-offset-0 text-black  dark:text-white
                  " placeholder="متن را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">نویسنده</FormLabel>
                <FormControl>
                  <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 *:
                  focus-visible:ring-offset-0 text-black  dark:text-white
                  " placeholder="نویسنده را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">تاریخ</FormLabel>
                <FormControl>
                  <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 *:
                  focus-visible:ring-offset-0 text-black  dark:text-white
                  " placeholder="تاریخ را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full dark:bg-slate-800 dark:text-white">ذخیره ویرایش</Button>
        </form>
      </Form>
    </>
  );
};

export default page;
