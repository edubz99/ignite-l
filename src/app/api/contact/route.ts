import { ContactEmailTemplate } from "@/app/components/ContactEmailTemplate/ContactEmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      company,
      jobTitle,
      phoneNumber,
      needs,
    } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Ignite Inclusive Leadership <resend@igniteinclusive.com>",
      to: `${process.env.EMAIL_RECEIVER}`,
      subject: "New Contact Form Submission",
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        company,
        jobTitle,
        phoneNumber,
        needs,
      }),
    });

    if (error) {
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
