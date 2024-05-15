import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const data = await request.json()
    console.log("Entered job route")
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log("5 seconds passed");
    return NextResponse.json(data)
}
