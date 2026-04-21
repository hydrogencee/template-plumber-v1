import type { PlumberSlots } from '../../site.config';

interface ServicesSectionProps {
  services: PlumberSlots['services'];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section style={{ padding: '60px 24px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#1e293b',
            marginBottom: '40px',
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '28px 24px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#1e3a5f',
                  marginBottom: '12px',
                }}
              >
                {service.name}
              </h3>
              <p style={{ color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
