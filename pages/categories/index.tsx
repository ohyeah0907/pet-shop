type PageProps = {
    [name: string]: any;
};

export default function Page(props: PageProps) {
    // Render data...
    return (
        <div className="">
            <p className="font-bold">Page: {props.page}</p>
        </div>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Pass data to the page via props
    return { props: { page: "category" } };
}