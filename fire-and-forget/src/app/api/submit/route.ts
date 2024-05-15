import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const data = await request.json()
    const url = `${getUrl()}/api/job`
    console.log("Sending data to job route: ", url)
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log("Response status from job route: ", response.status)
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
