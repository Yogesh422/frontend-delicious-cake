import { Container, Dropdown, DropdownButton, Pagination } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Product() {
    const [cartCount, setCartCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [sortBy, setSortBy] = useState("title");
    const [sortOrder, setSortOrder] = useState("asc");
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]); // ✅ State for dynamic categories
    // ✅ Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    const navigate = useNavigate();

    // ✅ Fetch categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/category-list`);
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetched categories:", data); // ✅ Debug log
                setCategories(data || []); // ✅ Set categories from API
            } catch (error) {
                console.error("Error fetching categories:", error);
                setCategories([]);
            }
        };

        fetchCategories();
    }, []);

    // ✅ Fetch products from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products?limit=194");
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                const jsonData = await response.json();
                console.log(jsonData.products);  // Log the response to check if images exist
                setProducts(jsonData.products || []);
                setError(null);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
                setFilteredProducts([]);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=${sortOrder}`);
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                const jsonData = await response.json();
                setProducts(jsonData.products || []);
                setError(null);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
                setFilteredProducts([]);
            }
        };

        fetchData();
    }, [sortBy, sortOrder]);

    // ✅ Update cart count
    useEffect(() => {
        const getCartCount = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartCount(cart.length);
        };

        getCartCount();
    }, []);

    // ✅ Filter products
    useEffect(() => {
        let updatedProducts = [...products];

        // Filter by search term
        if (searchTerm) {
            updatedProducts = updatedProducts.filter((product) =>
                product.title?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (categoryFilter) {
            updatedProducts = updatedProducts.filter(
                (product) =>
                    product.category &&
                    product.category.toLowerCase() === categoryFilter.toLowerCase()
            );
        }

        // Sort by price
        if (priceFilter === "low") {
            updatedProducts.sort((a, b) => a.price - b.price);
        } else if (priceFilter === "high") {
            updatedProducts.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(updatedProducts);
        setCurrentPage(1);
    }, [searchTerm, products, categoryFilter, priceFilter]);


    // ✅ Get current products for pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const maxVisiblePages = 4;

    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };


    // ✅ Handle pagination
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // ✅ Handle sorting (fixing unused warning)
    const handleSortBy = (value) => setSortBy(value || "title");
    const handleSortOrder = (value) => setSortOrder(value || "asc");

    const handleProductDetails = (id) => {
        navigate(`/product/${id}`);
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
        setCartCount(cart.length + 1);
    };

    return (
        <section id="product">
            <Link to="/cart">
                <img src="/path-to-your-cart-icon.png" alt="Cart" />
                <span className="cart-count">{cartCount}</span>
            </Link>
            <div className="sidebars">
                {/* ✅ Search Bar */}
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* ✅ Category Dropdown */}
                <DropdownButton
                    id="category-filter"
                    title={`Category: ${categoryFilter || "All"}`}
                    onSelect={(eventKey) => setCategoryFilter(eventKey || "")}
                >
                    <Dropdown.Item eventKey="">All</Dropdown.Item>
                    {categories.map((category) => (
                        typeof category === 'string' ? (
                            <Dropdown.Item key={category} eventKey={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Dropdown.Item>
                        ) : null
                    ))}
                </DropdownButton>

                {/* ✅ Price Filter */}
                <DropdownButton
                    id="price-filter"
                    title={`Price: ${priceFilter || "All"}`}
                    onSelect={(eventKey) => setPriceFilter(eventKey || "")}
                >
                    <Dropdown.Item eventKey="">All</Dropdown.Item>
                    <Dropdown.Item eventKey="low">Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey="high">High to Low</Dropdown.Item>
                </DropdownButton>
                {/* ✅ Sort By */}
                <DropdownButton
                    id="sort-by"
                    title={`Sort By: ${sortBy === "title" ? "Title" : "Price"}`}
                    onSelect={handleSortBy}
                >
                    <Dropdown.Item eventKey="title">Title</Dropdown.Item>
                    <Dropdown.Item eventKey="price">Price</Dropdown.Item>
                </DropdownButton>

                {/*✅ Sort Order*/}
                <button id="mc"
                    className={`btn ${sortOrder === "asc" ? "btn-primary" : "btn-primary"}`}
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                >
                    {sortOrder === "asc" ? "Ascending" : "Descending"}
                </button>

            </div>

            <Container>
                <div className="title-holders">
                    <h2>Products</h2>
                    <hr className="hr1" />

                    {/* ✅ Error Message */}
                    {error && (
                        <div className="error-message">
                            <p style={{ color: "red", fontWeight: "bold" }}>
                                Error: {error}
                            </p>
                        </div>
                    )}

                    <div className="cardcontainers">
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product) => {
                                // Debugging: Log the product and image URL
                                console.log('Product:', product);
                                const imageUrl = product.images?.[0];
                                const fullImageUrl = imageUrl && imageUrl.startsWith('http') ? imageUrl : `https://dummyjson.com${imageUrl}`;

                                return (
                                    <div
                                        className="cards"
                                        key={product.id}
                                        style={{
                                            border: "1px solid #ddd",
                                            padding: "10px",
                                            width: "270px",
                                            borderRadius: "5px",
                                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                        }}
                                    >
                                        <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                            {/* Use the corrected image URL */}
                                            <img
                                                src={fullImageUrl || "https://via.placeholder.com/150"}
                                                alt={product.title}
                                                style={{ width: "100%", height: "auto", borderRadius: "5px" }}  // Optional styling
                                            />
                                            <h5>{product.title}</h5>
                                            <h6>Price: ${product.price}</h6>
                                            <h6>Discount: {product.discountPercentage}%</h6>
                                            <h6>Rating: {product.rating}</h6>
                                            <h6>Category: {product.category}</h6>
                                            <p>{product.description}</p>
                                            <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                                Buy Now
                                            </button>
                                        </Link>
                                    </div>
                                );
                            })
                        ) : (
                            !error && <h3>No products found.</h3>
                        )}
                    </div>

                    {/* ✅ Pagination */}
                    {filteredProducts.length > productsPerPage && (
                        <Pagination>
                            <Pagination.Prev onClick={handlePrevious} disabled={currentPage === 1} />

                            {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
                                <Pagination.Item
                                    key={startPage + i}
                                    active={startPage + i === currentPage}
                                    onClick={() => paginate(startPage + i)}
                                >
                                    {startPage + i}
                                </Pagination.Item>
                            ))}

                            <Pagination.Next onClick={handleNext} disabled={currentPage === totalPages} />
                        </Pagination>
                    )}

                </div>
            </Container>
        </section>
    );
}

export default Product;
