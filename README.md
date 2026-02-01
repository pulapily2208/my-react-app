# Vietpro Store

Ứng dụng web thương mại điện tử được xây dựng bằng React, Redux Toolkit và React Router. Đây là dự án thực hành để học tập và phát triển kỹ năng React.

## Giới thiệu

Vietpro Store là một ứng dụng cửa hàng trực tuyến với đầy đủ tính năng quản lý state, routing và gọi API. Dự án được tổ chức theo kiến trúc component-based và sử dụng Redux để quản lý state toàn cục.

## Công nghệ sử dụng

### Core Technologies
- **React 18.2.0** - Thư viện UI component
- **React Router DOM 6.4** - Routing cho Single Page Application
- **Redux Toolkit 2.6.1** - Quản lý state
- **React Redux 9.1.0** - Kết nối React với Redux
- **Redux Persist 6.0.0** - Lưu trữ Redux state

### Additional Libraries
- **Axios 1.6.7** - HTTP client để gọi API
- **Moment 2.30.1** - Xử lý date/time
- **Intl 1.2.5** - Internationalization

### Styling
- **CSS** - 21.8%
- **SCSS** - 21.7%
- **Less** - 20.8%

### Development Tools
- **React Scripts 5.0.1** - Build tools và development server
- **ESLint** - Code linting
- **Jest & React Testing Library** - Testing framework

## Cấu trúc thư mục

```
my-react-app/
├── public/              # File tĩnh public
├── src/
│   ├── pages/          # Các trang của ứng dụng
│   ├── Routers/        # Cấu hình routing
│   ├── redux-setup/    # Redux store và reducers
│   ├── services/       # API services
│   ├── shared/         # Components và utilities dùng chung
│   ├── App.js          # Root component
│   ├── index.js        # Entry point
│   └── style.css       # Global styles
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
└── package.json        # Project dependencies

```

## Yêu cầu hệ thống

- Node.js phiên bản 14.x trở lên
- npm hoặc yarn
- Trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)

## Cài đặt

1. Clone repository về máy:

```bash
git clone https://github.com/pulapily2208/my-react-app.git
cd my-react-app
```

2. Cài đặt dependencies:

```bash
npm install
```

## Chạy ứng dụng

### Chế độ Development

```bash
npm start
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

### Build Production

```bash
npm run build
```

Tạo bản build tối ưu trong thư mục `build/`

### Chạy Tests

```bash
npm test
```

Chạy test runner trong chế độ interactive watch

### Eject Configuration

```bash
npm run eject
```

**Lưu ý**: Đây là thao tác một chiều. Sau khi eject, không thể quay lại!

## Tính năng chính

### State Management
- Redux Toolkit để quản lý state hiệu quả
- Redux Persist để lưu trữ state vào localStorage
- Tổ chức state theo modules

### Routing
- React Router DOM v6 với routing hiện đại
- Protected routes
- Nested routing

### API Integration
- Axios để gọi API RESTful
- Service layer riêng biệt
- Error handling và loading states

### Styling
- Support nhiều CSS preprocessors (SCSS, Less)
- Component-scoped styling
- Responsive design

### Code Quality
- ESLint configuration
- Consistent code style
- Testing setup với Jest

## Cấu trúc Components

Dự án được tổ chức theo pattern:

- **Pages**: Các trang chính của ứng dụng
- **Shared**: Components tái sử dụng
- **Routers**: Định nghĩa routes
- **Redux-setup**: Store configuration và slices
- **Services**: API calls và business logic

## Scripts Package.json

| Script | Mô tả |
|--------|-------|
| `npm start` | Khởi động development server |
| `npm run build` | Build production |
| `npm test` | Chạy test suite |
| `npm run eject` | Eject từ Create React App |

## Browser Support

### Production
- Các trình duyệt chiếm >0.2% thị phần
- Loại trừ trình duyệt đã ngừng hỗ trợ
- Không hỗ trợ Opera Mini

### Development
- Chrome phiên bản mới nhất
- Firefox phiên bản mới nhất
- Safari phiên bản mới nhất

## Best Practices

- Component composition và reusability
- State management với Redux Toolkit
- Code splitting và lazy loading
- Proper error handling
- Clean code và naming conventions

## Đóng góp

Đây là dự án cá nhân để thực hành và học tập React. Mọi góp ý và đóng góp đều được chào đón!

## Liên hệ

- GitHub: [@pulapily2208](https://github.com/pulapily2208)
- Repository: [my-react-app](https://github.com/pulapily2208/my-react-app)

## Ghi chú

Dự án này được tạo với [Create React App](https://github.com/facebook/create-react-app) và được sử dụng cho mục đích học tập và thực hành React, Redux, và các công nghệ liên quan.

## License

Private project - For learning purposes only
