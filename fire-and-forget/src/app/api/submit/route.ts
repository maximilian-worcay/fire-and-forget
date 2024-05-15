import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const data = await request.json()
    const url = `${getUrl()}/api/job`
    console.log("Sending data to job route")
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return NextResponse.json(data)
}

function getUrl(): string {
    const envVar = process.env.VERCEL_URL

    if (!envVar) {
        return ""
    }

    if (envVar.includes("localhost")) {
        return `http://${envVar}`
    } else {
        return `https://${envVar}`
    }
}
