import { useEffect } from "react";
import "./Modal.css";

export function Modal({ isOpen, title }) {
  useEffect(() => {
    if (isOpen) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;
      //   body에 스크롤 방지 스타일 적용
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      //   컴포넌트가 언마운트될 때 스타일 복원
      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        // 스크롤 위치 복원
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
        </div>
      </div>
    </div>
  );
}
