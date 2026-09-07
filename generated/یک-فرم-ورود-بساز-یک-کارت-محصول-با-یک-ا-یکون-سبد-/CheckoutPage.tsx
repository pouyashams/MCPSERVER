import React from "react";
import { TextField } from "@/components/ui/text-field";
import { PasswordField } from "@/components/ui/password-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// ShoppingCartIcon (from Digche get_icon_svg for slug 'shopping-cart', style=Linear, format=jsx)
const ShoppingCartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g data-optical-balance="1.042" transform="translate(12 12) scale(1.042) translate(-12 -12)">
      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Shop" transform="translate(-64, -481)" fillRule="nonzero" stroke="currentColor" strokeWidth="1.5">
          <g id="shopping-cart" transform="translate(44, 413)">
            <g id="Icon/Shopping-cart/Linear" transform="translate(20, 68)">
              <path d="M2,2 L3.74000549,2 C4.82000554,2 5.67000183,2.92999995 5.58000183,4 L4.75,13.9599915 C4.61,15.5899915 5.8999933,16.9899902 7.53999329,16.9899902 L18.1900024,16.9899902 C19.6300025,16.9899902 20.89,15.8100048 21,14.3800049 L21.5399933,6.88000488 C21.6599933,5.22000492 20.3999957,3.86999512 18.7299957,3.86999512 L5.82000732,3.86999512" id="Vector"></path>
              <path d="M17.5,20.75 C17.5,21.440356 16.940356,22 16.25,22 C15.559644,22 15,21.440356 15,20.75 C15,20.059644 15.559644,19.5 16.25,19.5 C16.940356,19.5 17.5,20.059644 17.5,20.75 Z" id="Vector"></path>
              <path d="M9.5,20.75 C9.5,21.440356 8.94035596,22 8.25,22 C7.55964404,22 7,21.440356 7,20.75 C7,20.059644 7.55964404,19.5 8.25,19.5 C8.94035596,19.5 9.5,20.059644 9.5,20.75 Z" id="Vector"></path>
              <line x1="9" y1="8" x2="21" y2="8" id="Vector"></line>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

// CreditCardIcon (from Digche get_icon_svg for slug 'credit-card', style=Linear, format=jsx)
const CreditCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17H17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2.75" y="3.75" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function CheckoutPage() {
  return (
    <div dir="rtl" className="min-h-screen flex items-start justify-center p-6 bg-background">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Login form (simple composition using DIG TextField + PasswordField + Button) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">ورود به حساب</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              // نمونهٔ سادهٔ ارسال: در اپ واقعی از fetch/axios استفاده کنید
              const payload = Object.fromEntries(fd.entries());
              // eslint-disable-next-line no-console
              console.log("submit", payload);
            }}
            className="flex flex-col gap-4"
          >
            <TextField label="ایمیل" type="email" required name="email" />
            <PasswordField revealToggle={false} strength={false} requirements={false} name="password" />
            <Button type="submit" fullWidth>
              ورود
            </Button>
          </form>
        </section>

        {/* Product card with Add to cart (shopping cart icon) and Pay button (credit card icon) */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>محصول نمونه</CardTitle>
              <CardDescription>یک محصول نمونه برای نمایش دکمه‌های خرید و پرداخت.</CardDescription>
            </div>
            <CardAction>
              <Button variant="outline" size="icon" aria-label="افزودن به سبد">
                <ShoppingCartIcon className="size-4" />
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground">قیمت: ۱۲۹,۰۰۰ تومان</p>
            <p className="mt-2">توضیحات کوتاه محصول در این قسمت قرار می‌گیرد.</p>
          </CardContent>

          <CardFooter>
            <Button color="primary" fullWidth>
              <CreditCardIcon className="size-4" />
              <span className="ms-2">پرداخت</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
