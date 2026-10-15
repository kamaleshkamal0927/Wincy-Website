import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Wincy Software Solutions | AI-Powered Legacy System Modernization';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#130C12',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              backgroundColor: '#E00070',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            AI-Powered Legacy Modernization
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              lineHeight: 1.15,
              maxWidth: '1000px',
            }}
          >
            From Legacy to Leading-Edge.
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#C4A8BE',
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            Accelerating enterprise digital transformation with deterministic AI code
            transformation, cloud migration, and automated documentation.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '2px solid #3D2040',
            paddingTop: '30px',
          }}
        >
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' }}>
            WINCY SOFTWARE SOLUTIONS
          </div>
          <div style={{ fontSize: '20px', color: '#F07DB8', fontFamily: 'monospace' }}>
            Chennai, India • wincysoftwaresolutions.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
