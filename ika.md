Memo hóa và tránh render lại không cần thiết

React.memo → bọc component để chỉ re-render khi props thay đổi.

useMemo → ghi nhớ giá trị tính toán nặng.

useCallback → ghi nhớ hàm callback, tránh tạo mới mỗi lần render

Phân tách component (component splitting)

Chia nhỏ UI để phần nào thay đổi chỉ render phần đó, thay vì render toàn bộ cha.

Lazy loading & code splitting

Dùng React.lazy + Suspense hoặc dynamic import() để chỉ load component khi cần.

Có thể kết hợp với React Router + lazy() để load theo route.

Debounce / Throttle input & scroll events

Tránh render liên tục khi người dùng gõ hoặc cuộn.

Virtualization cho list lớn

Dùng thư viện:

react-window

react-virtualized

Chỉ render các phần tử đang hiển thị trong viewport → tiết kiệm RAM cực mạnh.

Suspense + concurrent rendering (React 18+)

React 18 hỗ trợ Concurrent Mode, giúp UI không bị “lag” khi cập nhật state nặng.
Sử dụng startTransition để đánh dấu cập nhật không gấp:

Tối ưu context & state

Dùng Zustand, Jotai, hoặc Recoil thay cho context nặng.

Context re-render toàn bộ cây → tách nhỏ context hoặc dùng selector.

8. Tối ưu re-render với libraries

🧠 why-did-you-render → detect component render thừa.
