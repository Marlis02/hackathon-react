import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { productContext } from "../../context/productContext";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { getCategories, categories, getProductById, oneProduct, editProduct } =
    useContext(productContext);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getCategories();
    getProductById(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setName(oneProduct.name);
      setDescription(oneProduct.description);
      setImage(oneProduct.image);
      setPrice(oneProduct.price);
      setSelectedCategory(oneProduct.category);
    }
  }, [oneProduct]);

  const handleSubmit = async () => {
    const product = {
      name,
      description,
      price,
      image,
      category: selectedCategory,
    };
    for (const key in product) {
      if (!product[key].trim()) {
        return toast.warning("Заполните все поля !");
      }
    }
    console.log(product);
    await editProduct(product, id);
    navigate("/myproducts");

    setName("");
    setDescription("");
    setPrice("");
    setSelectedCategory("");
    setImage("");
  };

  return (
    <div className="form-wrapper">
      <h3>Edit Product</h3>
      <Form>
        <Form.Control
          type="text"
          placeholder="Ввеедите название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Введите описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="URL картинки"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Form.Select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option>Choose category</option>
          {categories &&
            categories.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
        </Form.Select>
        <Button onClick={handleSubmit} className="outline-success">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
