// NEXT_PUBLIC_FORMSPREE_ID is injected as a Vercel project env var per client.
// Tony sets this during the build pipeline deploy step.

export function ContactForm() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';
  const action = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : '#';

  return (
    <section style={{ padding: '60px 24px', backgroundColor: '#f1f5f9' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#1e293b',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Get a Free Quote
        </h2>
        <form
          action={action}
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <input type="hidden" name="_subject" value="New quote request from website" />
          <div>
            <label
              htmlFor="contact-name"
              style={{ display: 'block', marginBottom: '6px', fontWeight: 500, color: '#374151' }}
            >
              Your Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="contact-phone"
              style={{ display: 'block', marginBottom: '6px', fontWeight: 500, color: '#374151' }}
            >
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              placeholder="(512) 555-1234"
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              style={{ display: 'block', marginBottom: '6px', fontWeight: 500, color: '#374151' }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Describe what you need help with..."
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '1rem',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#1d4ed8',
              color: '#ffffff',
              padding: '14px 28px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.025em',
            }}
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}
