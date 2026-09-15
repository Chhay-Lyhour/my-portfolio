function Section({ title, children }) {
    return (
        <section className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <div className="mt-4">{children}</div>
        </section>
    );
}

export default Section;
