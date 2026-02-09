
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Basic server-side validation
        const { firstName, lastName, email, restaurantName, locations, pos } = data;
        if (!firstName || !lastName || !email || !restaurantName || !locations || !pos) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Connect to Google Sheets via Google Apps Script Webhook
        // The user should replace this with their actual Apps Script deployment URL
        const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        if (GOOGLE_SHEETS_WEBHOOK_URL) {
            try {
                const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...data,
                        submittedAt: new Date().toISOString(),
                    }),
                });

                if (!response.ok) {
                    console.error('Failed to send data to Google Sheets');
                }
            } catch (error) {
                console.error('Error sending data to Google Sheets:', error);
            }
        } else {
            console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not defined in environment variables');
        }

        // You could also add logging or email notifications here

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
