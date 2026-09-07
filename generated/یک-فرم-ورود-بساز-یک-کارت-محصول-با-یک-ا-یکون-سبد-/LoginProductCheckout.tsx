import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";

// Icons: exact SVGs returned by Digche get_icon_svg (Linear).
export const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g data-optical-balance="1.042" transform="translate(12 12) scale(1.042) translate(-12 -12)"><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g id="Shop" transform="translate(-64, -481)" fillRule="nonzero" stroke="currentColor" strokeWidth="1.5"><g id="shopping-cart" transform="translate(44, 413)"><g id="Icon/Shopping-cart/Linear" transform="translate(20, 68)"><path d="M2,2 L3.74000549,2 C4.82000554,2 5.67000183,2.92999995 5.58000183,4 L4.75,13.9599915 C4.61,15.5899915 5.8999933,16.9899902 7.53999329,16.9899902 L18.1900024,16.9899902 C19.6300025,16.9899902 20.89,15.8100048 21,14.3800049 L21.5399933,6.88000488 C21.6599933,5.22000492 20.3999957,3.86999512 18.7299957,3.86999512 L5.82000732,3.86999512" id="Vector"></path><path d="M17.5,20.75 C17.5,21.440356 16.940356,22 16.25,22 C15.559644,22 15,21.440356 15,20.75 C15,20.059644 15.559644,19.5 16.25,19.5 C16.940356,19.5 17.5,20.059644 17.5,20.75 Z" id="Vector"></path><path d="M9.5,20.75 C9.5,21.440356 8.94035596,22 8.25,22 C7.55964404,22 7,21.440356 7,20.75 C7,20.059644 7.55964404,19.5 8.25,19.5 C8.94035596,19.5 9.5,20.059644 9.5,20.75 Z" id="Vector"></path><line x1="9" y1="8" x2="21" y2="8" id="Vector"></line></g></g></g></g></g></svg>
);

export const CreditCardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 17H17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><rect x="2.75" y="3.75" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"/></svg>
);

type FormValues = {
  email: string;
  password: string;
};

export default function LoginProductCheckout() {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    // نمونهٔ سادهٔ handling — در پروژهٔ واقعی جایگزین شود.
    console.log("Login submit:", values);
    alert("ورود اجرا شد (نمونه)");
  };

  const handleAddToCart = () => {
    console.log("Add to cart");
  };

  const handlePay = () => {
    console.log("Start payment flow");
    alert("شروع پرداخت (نمونه)");
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-start justify-center bg-background p-6">
      <div className="w-full max-w-4xl grid gap-8 md:grid-cols-2">
        {/* Login form */}
        <section className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">ورود</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="ایمیل خود را وارد کنید" />
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
                    <FormLabel>رمز عبور</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="رمز عبور" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <Button type="submit" color="primary">ورود</Button>
                <a className="text-sm text-muted-foreground">فراموشی رمز؟</a>
              </div>
            </form>
          </Form>
        </section>

        {/* Product card */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>کفش ورزشی نمونه</CardTitle>
              <CardDescription>کفش راحت و سبک مخصوص پیاده‌روی روزمره</CardDescription>
            </div>
            <CardAction>
              <Button variant="ghost" size="icon" aria-label="افزودن به سبد" onClick={handleAddToCart}>
                <ShoppingCartIcon />
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">انتخاب رنگ: مشکی</p>
              <p className="text-lg font-semibold mt-2">قیمت: 1,250,000 تومان</p>
            </div>
          </CardContent>

          <CardFooter>
            <div className="w-full flex items-center justify-end gap-3">
              <Button color="primary" onClick={handlePay} type="button">
                پرداخت
                <span className="ms-2">
                  <CreditCardIcon />
                </span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
