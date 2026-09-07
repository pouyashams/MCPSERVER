import React, { useState } from "react";
import { TextField } from "@/components/ui/text-field";
import { PasswordField } from "@/components/ui/password-field";
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

// Icon SVGs taken verbatim from Digche get_icon_svg (style=Linear, format=jsx)
const ShoppingCartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g data-optical-balance="1.042" transform="translate(12 12) scale(1.042) translate(-12 -12)">
      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Shop" transform="translate(-64, -481)" fillRule="nonzero" stroke="currentColor" strokeWidth="1.5">
          <g id="shopping-cart" transform="translate(44, 413)">
            <g id="Icon/Shopping-cart/Linear" transform="translate(20, 68)">
              <path d="M2,2 L3.74000549,2 C4.82000554,2 5.67000183,2.92999995 5.58000183,4 L4.75,13.9599915 C4.61,15.5899915 5.8999933,16.9899902 7.53999329,16.9899902 L18.1900024,16.9899902 C19.6300025,16.9899902 20.89,15.8100048 21,14.3800049 L21.5399933,6.88000488 C21.6599933,5.22000492 20.3999957,3.86999512 18.7299957,3.86999512 L5.82000732,3.86999512" id="Vector" />
              <path d="M17.5,20.75 C17.5,21.440356 16.940356,22 16.25,22 C15.559644,22 15,21.440356 15,20.75 C15,20.059644 15.559644,19.5 16.25,19.5 C16.940356,19.5 17.5,20.059644 17.5,20.75 Z" id="Vector" />
              <path d="M9.5,20.75 C9.5,21.440356 8.94035596,22 8.25,22 C7.55964404,22 7,21.440356 7,20.75 C7,20.059644 7.55964404,19.5 8.25,19.5 C8.94035596,19.5 9.5,20.059644 9.5,20.75 Z" id="Vector" />
              <line x1="9" y1="8" x2="21" y2="8" id="Vector" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const CreditCardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17H17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2.75" y="3.75" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function ShopLoginProduct() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // نمونهٔ سادهٔ submit: در اپ واقعی اینجا درخواست به سرور ارسال می‌شود
    console.log({ email, password });
    alert("درخواست ورود ارسال شد (نمونه)\n" + JSON.stringify({ email, password }));
  };

  return (
    <div dir="rtl" className="p-6 space-y-8">
      {/* فرم ورود */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <TextField
          label="ایمیل"
          type="email"
          value={email}
          onValueChange={(v) => setEmail(String(v))}
          description="برای ورود از ایمیل استفاده کنید"
        />

        <PasswordField
          value={password}
          onValueChange={(v) => setPassword(String(v))}
          revealToggle={true}
        />

        <Button type="submit" className="w-full">
          ورود
        </Button>
      </form>

      {/* کارت محصول */}
      <Card className="max-w-sm mx-auto">
        <CardHeader className="flex items-start justify-between">
          <div>
            <CardTitle>کفش ورزشی نمونه</CardTitle>
            <CardDescription>مناسب دویدن و تمرین</CardDescription>
          </div>
          <CardAction>
            <Button variant="ghost" aria-label="add to cart">
              <ShoppingCartIcon />
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="text-lg font-semibold">۱٬۲۰۰٬۰۰۰ تومان</div>
        </CardContent>

        <CardFooter>
          <Button color="primary" className="ml-auto">
            <CreditCardIcon />
            <span style={{ marginInlineStart: 8 }}>پرداخت</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
