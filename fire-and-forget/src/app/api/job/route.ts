import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const data = await request.json()
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("3 seconds passed");
    return NextResponse.json(data)
}
