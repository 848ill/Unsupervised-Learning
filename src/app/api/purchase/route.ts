import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, phone } = body

    // Basic validation
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email dan nama wajib diisi' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email
    // 3. Integrate with payment gateway
    // 4. Send confirmation email to customer

    console.log('Purchase request received:', { email, name, phone })

    // For demo purposes, return success
    return NextResponse.json({
      message: 'Terima kasih! Tim kami akan segera menghubungi Anda.',
      success: true,
      data: {
        orderId: `PA-${Date.now()}`,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Purchase API error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Purchase API is running',
    status: 'OK' 
  })
} 