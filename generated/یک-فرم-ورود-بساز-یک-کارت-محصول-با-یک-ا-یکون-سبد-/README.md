<div dir="rtl" align="right">

<h1>خروجی رابط کاربری DIG</h1>

<h2>درخواست کاربر</h2>
<p>• یک فرم ورود بساز.
• یک کارت محصول با یک آیکون سبد خرید بساز.
• یک دکمه پرداخت با آیکون مناسب میخوام.</p>

<h2>توضیح کوتاه محصول</h2>
<p>کامپوننتی شامل یک فرم ورود ساده (ایمیل + رمز)، یک کارت محصول با دکمهٔ افزودن به سبد (آیکون سبد خرید) و یک دکمهٔ پرداخت (آیکون کارت اعتباری). UI به فارسی است و در wrapper با dir=&quot;rtl&quot; قرار دارد.</p>

<h2>کامپوننت‌های انتخاب‌شده از DIG</h2>
<ul><li><strong>text-field</strong>: برای فیلد ایمیل از TextField استفاده شد چون API آن (prop label، description، value و onValueChange) مستقیماً در get_component تعریف شده و مناسب نمایش برچسبِ فارسی است.<br><strong>شناسه کد:</strong> <code dir="ltr">TextField</code><br><strong>Import:</strong> <code dir="ltr">import { TextField } from &quot;@/components/ui/text-field&quot;</code><br><strong>Props استفاده‌شده:</strong> <span dir="ltr">label, type, value, onValueChange, description</span><br><strong>وابستگی‌ها:</strong> <span dir="ltr">class-variance-authority, clsx, tailwind-merge</span><br><strong>تأیید get_component:</strong> بله<br><strong>شواهد MCP:</strong> فایل registry/dig/components/ui/text-field.tsx در خروجی get_component: تعریف TextFieldProps شامل label، description، validate و متن اینکه Shortcut API اجازهٔ props مستقیم را می‌دهد؛ کد از value و inputProps.value استفاده می‌کند بنابراین prop value و onValueChange برای کنترل کردن مقدار پشتیبانی می‌شود.</li><li><strong>password-field</strong>: برای فیلد رمز از PasswordField استفاده شد چون یک فیلد رمزِ کامل با دکمهٔ نمایش/پنهان و پشتیبانی value/onValueChange فراهم می‌کند که دقیقاً مناسب فرم ورود است.<br><strong>شناسه کد:</strong> <code dir="ltr">PasswordField</code><br><strong>Import:</strong> <code dir="ltr">import { PasswordField } from &quot;@/components/ui/password-field&quot;</code><br><strong>Props استفاده‌شده:</strong> <span dir="ltr">value, onValueChange, revealToggle</span><br><strong>وابستگی‌ها:</strong> <span dir="ltr">class-variance-authority, clsx, tailwind-merge</span><br><strong>تأیید get_component:</strong> بله<br><strong>شواهد MCP:</strong> فایل registry/dig/components/ui/password-field.tsx در خروجی get_component: PasswordFieldProps شامل revealToggle، strength، requirements، onValueChange و مدیریت داخلی visible/value. مثال استفاده در همان فایل از prop onValueChange برای همگام‌سازی مقدار نشان داده شده است.</li><li><strong>button</strong>: برای دکمه‌های ارسال فرم، افزودن به سبد و پرداخت از Button استفاده شد چون API و واریانت‌های ظاهری را فراهم می‌کند و از قرار دادن آیکون به عنوان فرزند پشتیبانی می‌کند.<br><strong>شناسه کد:</strong> <code dir="ltr">Button</code><br><strong>Import:</strong> <code dir="ltr">import { Button } from &quot;@/components/ui/button&quot;</code><br><strong>Props استفاده‌شده:</strong> <span dir="ltr">type, variant, color, children, className</span><br><strong>وابستگی‌ها:</strong> <span dir="ltr">class-variance-authority, clsx, tailwind-merge</span><br><strong>تأیید get_component:</strong> بله<br><strong>شواهد MCP:</strong> فایل registry/dig/components/ui/button.tsx در خروجی get_component: ButtonProps و تابع Button با variant/color/size/fullWidth/loading و توضیح اینکه آیکون به عنوان فرزند استفاده می‌شود و className اعمال می‌گردد.</li><li><strong>card</strong>: برای کارت محصول از Card و subcomponents آن (CardHeader/CardTitle/CardDescription/CardContent/CardFooter/CardAction) استفاده شد چون ساختار آمادهٔ سرصفحه/بدنه/پاصفحه را ارائه می‌دهد.<br><strong>شناسه کد:</strong> <code dir="ltr">Card</code><br><strong>Import:</strong> <code dir="ltr">import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from &quot;@/components/ui/card&quot;</code><br><strong>Props استفاده‌شده:</strong> <span dir="ltr">className, children</span><br><strong>وابستگی‌ها:</strong> <span dir="ltr">clsx, tailwind-merge</span><br><strong>تأیید get_component:</strong> بله<br><strong>شواهد MCP:</strong> فایل registry/dig/components/ui/card.tsx در خروجی get_component: صادرکردن Card و CardHeader/CardTitle/... با کلاس‌ها و ساختار توضیح داده شده؛ CardAction و CardFooter برای قرار دادن دکمه‌ها مناسب هستند.</li></ul>

<h2>آیکون‌های انتخاب‌شده از Digche</h2>
<ul><li><strong>Shopping-cart</strong>: آیکون سبد خرید برای دکمهٔ افزودن به سبد در کارت محصول لازم بود؛ آیکون Linear مناسب UI متریال/فانکشنال است.<br><strong>شناسه کد:</strong> <code dir="ltr">ShoppingCartIcon</code><br><strong>Query جستجو:</strong> <code dir="ltr">shopping cart</code><br><strong>تأیید get_icon_svg:</strong> بله<br><strong>شواهد MCP:</strong> Digche search بازگشت slug `shopping-cart` و سپس get_icon_svg (format=jsx, style=Linear) نتیجه داد. SVG JSX کامل برای `shopping-cart` در پاسخ get_icon_svg موجود است و در کد نهایی به صورت تابع React استفاده شده.</li><li><strong>Credit Card</strong>: آیکون کارت اعتباری برای دکمهٔ پرداخت لازم بود؛ آیکون Linear از دسته Business And Finance انتخاب شد.<br><strong>شناسه کد:</strong> <code dir="ltr">CreditCardIcon</code><br><strong>Query جستجو:</strong> <code dir="ltr">credit card</code><br><strong>تأیید get_icon_svg:</strong> بله<br><strong>شواهد MCP:</strong> Digche search بازگشت slug `credit-card` و سپس get_icon_svg (format=jsx, style=Linear) اجرا شد. SVG JSX کامل برای `credit-card` در پاسخ get_icon_svg برگشت و در کد نهایی استفاده شده است.</li></ul>

<h2>دلیل ترکیب نهایی</h2>
<p>اجزاء انتخاب‌شده از DIG برای فرم و کارت محصول مناسب و آمادهٔ استفاده بودند: TextField برای فیلد متنیِ برچسب‌دار، PasswordField برای رمز با دکمهٔ نمایش، Button برای کنش‌ها و Card برای ساختار محصول. آیکون‌ها از Digche انتخاب شدند چون کاربر مشخصاً آیکون خواسته بود و Digche آیکون‌های مناسب Linear برای shopping cart و credit card داشت.</p>

<h2>راهبرد RTL</h2>
<p>تمام UI داخل یک wrapper با dir=&quot;rtl&quot; قرار گرفت تا متون و چینش به‌طور صحیح راست‌به‌چپ نمایش داده شوند. این روش استاندارد HTML برای RTL است و در get_componentها راهنمای رسمی دیگری برای RTL ارائه نشده بود، بنابراین از dir=&quot;rtl&quot; استفاده شده است.</p>

<h2>فایل کد</h2>
<p><code dir="ltr">ShopLoginProduct.tsx</code></p>

<h2>پیش‌نیازها و راه‌اندازی</h2>
<p>دستور Setup جداگانه‌ای از MCP ثبت نشده است.</p>

<h2>وضعیت MCP</h2>
<ul>
  <li><span dir="ltr">DIG Components MCP</span>: استفاده شد</li>
  <li><span dir="ltr">Digche Icons MCP</span>: استفاده شد</li>
</ul>

<h2>نکات و محدودیت‌ها</h2>
<p>محدودیت‌ها و نکات مهم:
- همهٔ کامپوننت‌های استفاده‌شده از خروجی رسمی get_component استخراج و تأیید شدند (TextField, PasswordField, Button, Card). مسیرهای import مطابق فایل‌های get_component هستند.
- برای آیکون‌ها از Digche استفاده شد: ابتدا جستجو (queries: &quot;shopping cart&quot; و &quot;credit card&quot;) و سپس get_icon_svg اجرا شد. SVGها دقیقاً همان‌طور که Digche بازگرداند، در کد نهایی قرار گرفتند.
- هیچ فرض یا حدسی دربارهٔ API کامپوننت‌ها انجام نشده است؛ فقط پراپ‌هایی که در کد واقعی استفاده شده و در فایل‌های get_component مستند بودند به کار رفته‌اند.
- get_component برای فرمِ wrapper (Form) فراخوانی شد اما در کد نهایی از فرم ساده HTML به‌همراه کنترل محلی state استفاده شد تا از حدس‌زدن الگوی Controller/Context خودداری شود. اگر می‌خواهید اتصال کامل به react-hook-form با استفاده از Form و FormField صورت گیرد، می‌توانم نسخهٔ دیگری بسازم؛ اما آن حالت نیاز به نگاشت دقیق Controller ↔ TextField (value/onValueChange) دارد که ممکن است نیازمند نمونهٔ دقیق‌تری از get_component Form برای آن سناریو باشد.
- setupInstructions خالی است چون get_componentها دستور نصب یا دستورالعمل نصب مشخصی برنگردانده بودند؛ در عوض هر کامپوننت لیست dependency خود را ارائه داد که در بخش components ذکر شده‌اند.</p>

<h2>چرا MCP از مستندات ساده قدرتمندتر است؟</h2>
<p>MCP فقط متن مستندات را در اختیار Agent نمی‌گذارد، بلکه ابزار قابل فراخوانی و ساختاریافته در زمان اجرا فراهم می‌کند. Agent می‌تواند موجودی واقعی کامپوننت‌ها و آیکون‌ها را هنگام انجام کار بررسی کند و به‌جای حدس‌زدن نام یا API، اطلاعات زنده محصول را دریافت کند. این رویکرد اتصال محصول به Agent را قابل‌کنترل‌تر، به‌روزتر و کم‌خطاتر می‌کند و می‌تواند قواعد دسترسی و عملیات واقعی محصول را نیز در همان قرارداد MCP ارائه کند.</p>

</div>
