import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Zadejte prosím jméno." })
    .max(100, { message: "Jméno je příliš dlouhé." }),
  phone: z
    .string()
    .trim()
    .max(40, { message: "Telefon je příliš dlouhý." })
    .optional()
    .default(""),
  email: z
    .string()
    .trim()
    .email({ message: "Zadejte platný e-mail." })
    .max(255, { message: "E-mail je příliš dlouhý." }),
  service: z
    .string()
    .trim()
    .nonempty({ message: "Vyberte prosím službu." })
    .max(100, { message: "Služba je příliš dlouhá." }),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Napište prosím detaily cesty." })
    .max(2000, { message: "Zpráva je příliš dlouhá." }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("DISCORD_WEBHOOK_URL není nastavena.");
      throw new Error("Odeslání se nezdařilo. Zkuste to prosím později.");
    }

    const payload = {
      username: "PM-servis — poptávka",
      embeds: [
        {
          title: "Nová poptávka z webu",
          color: 0xc9a227,
          fields: [
            { name: "Jméno", value: data.name, inline: true },
            { name: "Telefon", value: data.phone || "—", inline: true },
            { name: "E-mail", value: data.email, inline: false },
            { name: "Služba", value: data.service, inline: false },
            { name: "Detaily cesty", value: data.message, inline: false },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Discord webhook selhal:", res.status, await res.text());
      throw new Error("Odeslání se nezdařilo. Zkuste to prosím později.");
    }

    return { ok: true };
  });
