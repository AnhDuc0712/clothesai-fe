export const products = [
{ id: 1, title: 'Áo thun basic', brand: 'Local', price: '150,000', image: 'https://via.placeholder.com/300x300?text=Ao+thun' },
{ id: 2, title: 'Quần jean nam', brand: 'JeansCo', price: '350,000', image: 'https://via.placeholder.com/300x300?text=Quan+jean' },
{ id: 3, title: 'Áo khoác nỉ', brand: 'Warm', price: '450,000', image: 'https://via.placeholder.com/300x300?text=Ao+khoac' },
{ id: 4, title: 'Váy xòe', brand: 'Lovely', price: '299,000', image: 'https://via.placeholder.com/300x300?text=Vay+xoe' },
{ id: 5, title: 'Giày thể thao', brand: 'Sporty', price: '799,000', image: 'https://via.placeholder.com/300x300?text=Giay' },
{ id: 6, title: 'Mũ lưỡi trai', brand: 'CapCo', price: '99,000', image: 'https://via.placeholder.com/300x300?text=Mu' }
]
// Nếu localStorage chưa có sản phẩm, tự động khởi tạo từ mockData
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}
