// İçerik sayfaları için iki kolonlu yerleşim: solda başlık ve çağrı (masaüstünde sabit),
// sağda içerik. Mobilde tek kolon.
export function Article({
  aside,
  children,
}: {
  aside: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <article className="px-5 pb-16 pt-32 md:px-10 md:pt-44 lg:px-14">
      <div className="grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">{aside}</div>
        <div className="min-w-0 lg:pt-3">{children}</div>
      </div>
    </article>
  );
}
