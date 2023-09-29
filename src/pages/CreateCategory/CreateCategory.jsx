import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { productContext } from "../../context/productContext";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const [editCategory, setEditCategory] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState("");
  const {
    createCategory,
    getCategories,
    categories,
    category,
    deleteCategory,
    handleEditCategory,
    getCategoryById,
  } = useContext(productContext);

  //-------------create-----------------------
  const creat = async () => {
    await createCategory({ name: categoryName });
    await getCategories();
  };

  //--------------------delete---------------------
  const handleDelete = async (id) => {
    await deleteCategory(id);
    await getCategories();
  };

  //--------------get---------------
  useEffect(() => {
    getCategories();
  }, []);

  //--------------------edit------------------

  const handleClose = () => {
    setShow(false);
  };

  const handleEdit = (id) => {
    setEditCategory(id);
    setShow(true);
  };
  const handleSubmit = async () => {
    await handleEditCategory(editCategory, {
      name: editCategoryName,
    });
    await getCategories();
    handleClose();
  };

  //=========================================

  useEffect(() => {
    if (category) {
      setEditCategoryName(category.name);
    }
  }, [category]);
  useEffect(() => {
    if (editCategory) {
      getCategoryById(editCategory);
    }
  }, [editCategory]);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <h3>Create Category</h3>
        <div
          style={{
            width: "80%",
            height: "200px",
            borderBottom: "1px solid grey",
          }}
        >
          <Form.Control
            style={{ marginTop: "30px" }}
            type="text"
            placeholder="Название :"
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <Button onClick={creat} style={{ marginTop: "20px", width: "200px" }}>
            Cоздать
          </Button>
        </div>
        <div
          style={{
            width: "80%",
            height: "500px",
            marginTop: "20px",
          }}
        >
          <h3>All categories</h3>
          {categories
            ? categories.map(({ name, id }) => (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <div>{name}</div>
                  <div>
                    <Button
                      onClick={() => handleDelete(id)}
                      variant="danger"
                      style={{ marginRight: "20px" }}
                    >
                      Delete
                    </Button>
                    <Button onClick={() => handleEdit(id)} variant="warning">
                      Edit
                    </Button>
                  </div>
                </div>
              ))
            : "Empty"}
        </div>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            style={{
              width: "100%",
              height: "35px",
              paddingLeft: "10px",
              borderRadius: "3px",
            }}
            type="text"
            onChange={(e) => setEditCategoryName(e.target.value)}
            value={editCategoryName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateCategory;
