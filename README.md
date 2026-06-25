# TruongCMS Sneaker Shop

## Giới thiệu

TruongCMS Sneaker Shop là hệ thống bán hàng trực tuyến chuyên kinh doanh giày thể thao và sneaker.

Hệ thống hỗ trợ:

- Quản lý sản phẩm
- Quản lý danh mục
- Quản lý khách hàng
- Quản lý đơn hàng
- Quản lý bài viết
- Giỏ hàng và đặt hàng trực tuyến
- Phân quyền quản trị

---

## Công nghệ sử dụng

### Backend

- ASP.NET Core MVC (.NET 8)
- Entity Framework Core
- SQL Server
- RESTful API

### Frontend

- ReactJS
- React Router DOM
- Axios
- Bootstrap 5

### Database

- Microsoft SQL Server

---

## Chức năng hệ thống

### Người dùng

- Xem sản phẩm
- Tìm kiếm sản phẩm
- Xem chi tiết sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Đặt hàng trực tuyến
- Đăng ký tài khoản
- Đăng nhập

### Quản trị viên

- CRUD sản phẩm
- CRUD danh mục
- CRUD bài viết
- Quản lý khách hàng
- Quản lý đơn hàng
- Cập nhật trạng thái đơn hàng
- Xóa đơn hàng

---

## Cấu trúc dự án

```text
TruongCMS_Solution
│
├── CMS.Data
│   ├── Entities
│   └── ApplicationDbContext
│
├── CMS_Backend
│   ├── Controllers
│   ├── Views
│   ├── wwwroot
│   └── API Controllers
│
└── cms.frontend
    ├── src
    ├── components
    ├── pages
    └── api
```

---

## Cài đặt dự án

### 1. Clone source code

```bash
git clone https://github.com/username/TruongCMS_Solution.git
```

### 2. Cấu hình Database

Mở file:

```text
appsettings.json
```

Chỉnh sửa:

```json
"ConnectionStrings": {
  "DefaultConnection":
  "Server=.;Database=TruongCMS_DB;Trusted_Connection=True;TrustServerCertificate=True"
}
```

### 3. Chạy Migration

```bash
Update-Database
```

Hoặc:

```bash
dotnet ef database update
```

### 4. Chạy Backend

```bash
dotnet run
```

Backend mặc định:

```text
https://localhost:7068
```

### 5. Chạy Frontend

Di chuyển tới thư mục:

```bash
cd cms.frontend
```

Cài package:

```bash
npm install
```

Chạy ứng dụng:

```bash
npm start
```

Frontend:

```text
http://localhost:3000
```

---

## Tài khoản Demo

### Admin

```text
Email: admin@gmail.com
Password: 123456
```

### User

```text
Email: user@gmail.com
Password: 123456
```

---

## Một số hình ảnh hệ thống

### Trang chủ

(Thêm ảnh screenshot tại đây)

### Trang sản phẩm

(Thêm ảnh screenshot tại đây)

### Trang quản trị

(Thêm ảnh screenshot tại đây)

---

## Thành viên thực hiện

- Nguyễn Xuân Trường
- MSSV: 2123110005

---

## Giấy phép

Dự án phục vụ mục đích học tập và nghiên cứu.