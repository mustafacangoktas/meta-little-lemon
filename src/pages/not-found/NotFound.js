const NotFound = () => {
    return (
        <main style={{ padding: '5rem 1.5rem', textAlign: 'center', minHeight: 'calc(100vh - 72px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '5rem', margin: '0' }}>404</h1>
            <h2>Page Not Found</h2>
            <p style={{ color: 'var(--color-gray-600)' }}>The page you are looking for does not exist.</p>
        </main>
    );
}

export default NotFound;
