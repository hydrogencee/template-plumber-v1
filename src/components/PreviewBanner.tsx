export function PreviewBanner() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#1d4ed8',
        color: '#ffffff',
        textAlign: 'center',
        padding: '10px 16px',
        fontSize: '14px',
        fontWeight: 500,
      }}
    >
      This is a free preview built by Hydrogen Studio.{' '}
      <a
        href="https://hydrogenstudio.co"
        style={{ color: '#bfdbfe', textDecoration: 'underline' }}
      >
        Claim your site &rarr;
      </a>
    </div>
  );
}
