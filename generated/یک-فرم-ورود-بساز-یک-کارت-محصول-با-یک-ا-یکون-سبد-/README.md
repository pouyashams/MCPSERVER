# DIG UI Output

## درخواست کاربر
• یک فرم ورود بساز.
• یک کارت محصول با یک آیکون سبد خرید بساز.
• یک دکمه پرداخت با آیکون مناسب میخوام.

## توضیح کوتاه محصول
یک کامپوننت صفحه شامل فرم ورود، یک کارت محصول با دکمه افزودن به سبد (آیکون سبد خرید) و یک دکمه پرداخت (آیکون کارت)؛ همه با استفاده از کامپوننت‌های واقعی دیزاین‌سیستم DIG و آیکون‌های Digche.

## کامپوننت‌های انتخاب‌شده از DIG
- **form**: برای مدیریت context react-hook-form، اتصال خودکار خطاها و aria و فراهم کردن توابع کمکی فرم.
  - شواهد MCP: از DIG Components MCP: کامپوننت `form` پل بین react-hook-form و کامپوننت‌های فرم دیگ است و FormProvider را پخش می‌کند؛ فایل registry/dig/components/ui/form.tsx نشان می‌دهد که export های: Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField و useFormField وجود دارند و FormField یک Controller از react-hook-form می‌سازد.
- **input**: برای فیلد ایمیل (ورودی متن) با پشتیبانی RTL و props استاندارد ورودی.
  - شواهد MCP: از DIG Components MCP: `input` عنوان 'ورودی متن' دارد و API آن شامل props مرسوم input و گزینه‌های فارسی/گروه‌بندی ارقام، startContent/endContent و clearable است (فایل registry/dig/components/ui/input.tsx).
- **password-field**: برای فیلد رمز عبور با دکمهٔ نمایش/پنهان‌کردن که مخصوص فرم‌های ورود طراحی شده.
  - شواهد MCP: از DIG Components MCP: `password-field` کامپوننتی است که دکمه نمایش/پنهان را ارائه می‌دهد و می‌توان آن را به صورت کنترل‌شده استفاده کرد (فایل registry/dig/components/ui/password-field.tsx).
- **button**: برای دکمه‌های عمومی: ارسال فرم، افزودن به سبد و دکمه پرداخت؛ دارای واریانت‌ها و اندازه‌های آماده.
  - شواهد MCP: از DIG Components MCP: `button` با واریانت، رنگ و اندازه‌های متنوع ارائه شده و props شامل variant, color, size, loading و asChild است (فایل registry/dig/components/ui/button.tsx).
- **card**: برای کارت محصول با ساختار سرصفحه/بدنه/پاصفحه؛ شامل CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction.
  - شواهد MCP: از DIG Components MCP: `card` ظرف محتوایی با ساختار آماده سرصفحه/بدنه/پاصفحه است و export های Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction در registry/dig/components/ui/card.tsx قابل مشاهده‌اند.

## آیکون‌های انتخاب‌شده از Digche
- **Shopping-cart**: آیکون سبد خرید برای دکمهٔ افزودن به سبد در کارت محصول؛ نتیجهٔ جست‌وجو و پیش‌نمایش Digche بهترین مطابقت را داشت.
  - شواهد MCP: از Digche Icons MCP: جست‌وجو روی عبارت 'cart shopping cart basket خرید سبد خرید' یک نتیجه برگرداند: slug `shopping-cart`, name `Shopping-cart`, style `Linear`. سپس get_icon_svg با سبک Linear و format=jsx پاسخ داد و SVG JSX معتبر آیکون `shopping-cart` را ارائه کرد (متن SVG از پاسخ get_icon_svg گرفته شده).
- **Credit Card**: آیکون مناسب برای دکمهٔ پرداخت که مفهوم کارت/پرداخت را منتقل می‌کند.
  - شواهد MCP: از Digche Icons MCP: جست‌وجو برای 'credit card payment pay wallet پرداخت کارت اعتباری' دو نتیجه داد که یکی `credit-card` (name `Credit Card`, style Linear) بود. سپس get_icon_svg با style=Linear و format=jsx آیکون `credit-card` را به صورت JSX SVG برگرداند (SVG از پاسخ get_icon_svg).

## دلیل ترکیب نهایی
فرم ورود با `Form` و `FormField` ساخته شد تا اتصال به react-hook-form و نمایش خطاها/aria خودکار حفظ شود. فیلد ایمیل با `Input` و فیلد رمز با `PasswordField`. کارت محصول با `Card` و اکشن افزودن به سبد در `CardAction` قرار گرفت و آیکون سبد (Digche) درون یک Button اندازه‌آیکون قرار گرفت. دکمه پرداخت از `Button` استفاده می‌کند و آیکون کارت (Digche) به‌صورت inline SVG داخل دکمه قرار گرفت تا همه چیز از MCPها منابع واقعی بگیرد.

## فایل کد
`AuthProductPayment.tsx`

## وضعیت MCP
- DIG Components MCP: استفاده شد
- Digche Icons MCP: استفاده شد

## نکات و محدودیت‌ها
تمام کامپوننت‌های استفاده‌شده از DIG Components MCP فراخوانی و بررسی شدند و آیکون‌ها از Digche Icons MCP گرفته و به‌صورت inline JSX در کد قرار گرفتند. کد از @/components/ui/... برای ایمپورت فرض می‌کند (همان الگوهایی که در فایل‌های MCP دیده شدند). نیازمندی‌های اجرایی: بسته react-hook-form باید در پروژه نصب باشد (Form وابسته است). اگر ساختار ایمپورت پروژه شما متفاوت است، مسیرهای '@/components/ui/...' ممکن است لازم باشد تعدیل شوند.

## چرا MCP از مستندات ساده قدرتمندتر است؟
MCP فقط متن مستندات را در اختیار Agent نمی‌گذارد، بلکه ابزار قابل فراخوانی و ساختاریافته در زمان اجرا می‌دهد. Agent می‌تواند موجودی واقعی کامپوننت‌ها و آیکون‌ها را هنگام انجام کار بررسی کند، به‌جای اینکه نام یا API را از حافظه حدس بزند. این رویکرد اتصال محصول به Agent را قابل کنترل‌تر، به‌روزتر و کم‌خطاتر می‌کند و می‌تواند قواعد دسترسی و ابزارهای عملیاتی را هم در همان قرارداد MCP ارائه کند.
