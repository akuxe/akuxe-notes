import { metaData } from '@/lib/site-config';
import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || metaData.title;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'black',
            paddingLeft: '56px',
            paddingRight: '56px',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, dimgray 1%, transparent 0%), radial-gradient(circle at 75px 75px, dimgray 1%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              height={80}
              viewBox='0 0 33 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M30.5859 15H18V2.41406L30.5859 15Z'
                stroke='white'
                stroke-width='2'
              />
              <path d='M16 0V16L0 16L16 0Z' fill='white' />
              <path d='M17 16L17 0L33 6.99382e-07L17 16Z' fill='white' />
            </svg>
          </div>

          <div
            style={{
              display: 'flex',
              fontFamily: 'Inter',
              fontSize: 64,
              fontStyle: 'normal',
              color: 'white',
              marginTop: 40,
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', title),
            style: 'normal',
          },
        ],
      },
    );
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log('Unknown error', e);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

async function loadGoogleFont(
  font: string,
  text: string,
  weight: number = 700,
) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
}
