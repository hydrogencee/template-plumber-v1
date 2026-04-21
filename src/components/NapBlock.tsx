import type { PlumberSlots } from '../../site.config';

interface NapBlockProps {
  nap_block: PlumberSlots['nap_block'];
}

export function NapBlock({ nap_block }: NapBlockProps) {
  const { name, address, phone, city, state, zip } = nap_block;

  // No-API-key Google Maps embed — uses maps?q= search embed
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(name + ',' + city)}&output=embed`;

  return (
    <section style={{ padding: '60px 24px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#1e293b',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Find Us
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* NAP structured data */}
          <address
            style={{
              fontStyle: 'normal',
              lineHeight: 1.8,
              color: '#334155',
              fontSize: '1rem',
            }}
          >
            <strong style={{ fontSize: '1.2rem', color: '#1e293b' }}>{name}</strong>
            <br />
            {address}
            <br />
            {city}, {state} {zip}
            <br />
            <a
              href={`tel:+1${phone}`}
              style={{ color: '#1d4ed8', textDecoration: 'none', fontWeight: 600 }}
            >
              {phone}
            </a>
          </address>

          {/* Google Maps embed — no API key required via maps?q= approach */}
          <iframe
            src={mapSrc}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            loading="lazy"
            title={`${name} location map`}
          />
        </div>
      </div>
    </section>
  );
}
