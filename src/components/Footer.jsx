export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const author = "Alexis Aburto Q.";

    return (
        <footer className="text-center mt-5 mb-2 container">
            <p><i className="mb-0"></i>© {author}</p>
            <i className="mb-0"></i>{currentYear} Todos los derechos reservados.
        </footer>
    );
};