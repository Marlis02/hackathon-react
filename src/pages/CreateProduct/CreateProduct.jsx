import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/productContext";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const { getCategories, categories, createProduct } =
    useContext(productContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(categories, "skdfk");
  useEffect(() => {
    getCategories();
  }, []);

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
        return toast.dark("Заполните все поля !");
      }
    }
    await createProduct(product);
    toast.success("Продукт успешно добавлен");
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
    setSelectedCategory("");
  };

  return (
    <div
      className="form-wrapper"
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center ",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3 style={{ margin: "30px" }}>Create Product</h3>
      <div style={{ width: "80%" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            style={{ marginBottom: "10px" }}
            type="text"
            placeholder="Ввеедите название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            style={{ marginBottom: "10px" }}
            type="text"
            placeholder="Введите описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Control
            style={{ marginBottom: "10px" }}
            type="text"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Form.Control
            style={{ marginBottom: "10px" }}
            type="text"
            placeholder="Вставьте ссылку"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Form.Select
            style={{ marginBottom: "15px" }}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>Choose category</option>
            {categories &&
              categories.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
          </Form.Select>
          <Button type="submit" className="outline-success">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateProduct;
