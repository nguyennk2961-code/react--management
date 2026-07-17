import { useNavigate } from "react-router-dom";
function AddProduct() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thêm sản phẩm thành công!");
    navigate("/products");
  };
  return (
    <div>
      <h1>Thêm sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sản phẩm</label>
          <br />
          <input type="text" required/>
        </div>
        <br />
        <div>
          <label>Giá</label>
          <br />
          <input  type="number" required/>
        </div>
        <br />
        <div>
          <label>Mô tả</label>
          <br />
          <textarea rows="5" required></textarea>
        </div>
        <br />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}
export default AddProduct;