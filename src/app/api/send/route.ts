import { NextResponse } from "next/server";
import { Resend } from "resend";
import { type ContactEmailTemplateProps } from "@/types";
import { ContactEmailTemplate } from "@/app/components/ContactEmailTemplate/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactEmailTemplateProps;

    if (!body.firstName || !body.email) {
      return NextResponse.json({
        status: 400,
        body: { message: "Missing required fields" },
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Ignite Inclusive Leadership <noreply@igniteinclusiveleadership.com>",
      to: `${process.env.EMAIL_RECEIVER}`,
      subject: "New Contact Form Submission",
      react: ContactEmailTemplate(body),
    });

    if (error) {
      return NextResponse.json({
        status: 500,
        body: { message: "Error sending email", error },
      });
    }

    return NextResponse.json({
      status: 200,
      body: { message: data },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: { message: "Internal server error", error },
    });
  }
}
