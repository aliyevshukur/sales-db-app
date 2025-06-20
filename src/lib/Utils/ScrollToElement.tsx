
export function scrollToProducts(event: React.MouseEvent<HTMLDivElement>, pathname: string, navigate: any) {
    event.preventDefault();


    if (pathname !== "/") {
        navigate("/");
    }

    const productsElement = document.getElementById("products");
    if (productsElement) {
        window.scrollTo({
            top: productsElement.offsetTop,
            behavior: "smooth",
        });
    }
}