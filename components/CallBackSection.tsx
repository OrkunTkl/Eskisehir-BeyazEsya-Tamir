import { CallbackForm } from "./CallBackForm";

export function CallbackSection() {
  return (
    <section
      data-stage
      id="talep"
      aria-labelledby="talep-h"
      className="scroll-mt-24 px-5 py-24 md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <div>
          <h2 id="talep-h" className="disp disp-xl">
            Bildirin, ustayı bulalım.
          </h2>
          <p className="lead mt-6 text-graphite/70">
            Bilgilerinizi girin; WhatsApp&apos;ta hazır bir mesaj olarak
            açılsın. Göndermeniz yeterli.
          </p>
        </div>
        <CallbackForm />
      </div>
    </section>
  );
}
