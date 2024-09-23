
export function scrollToProducts(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();

    const productsElement = document.getElementById("products");
    if (productsElement) {
        window.scrollTo({
            top: productsElement.offsetTop,
            behavior: "smooth",
        });
    }
}