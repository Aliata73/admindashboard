import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="w-full grid grid-cols-2">
        <TabsTrigger value="login">وارد شوید</TabsTrigger>
        <TabsTrigger value="register">ثبت نام کنید</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register"><RegisterForm /></TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
