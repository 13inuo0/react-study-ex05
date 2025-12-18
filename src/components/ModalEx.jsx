import { useState } from "react";
import "./ModalEx.css";
import { Modal } from "./Modal";

export function ModalEx() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  return (
    <div className="modal-example">
      <h1>모달 컴포넌트 사용 예제</h1>
      <div className="button-group">
        <button className="btn btn-primary" onClick={openModal}>
          기본 모달열기
        </button>
        <button className="btn btn-warning">확인 모달열기</button>
        <button className="btn btn-success">폼 모달열기</button>
      </div>
      {/* 기본 모달 */}
      <Modal isOpen={isModalOpen} title="기본 모달">
        <div className="modal-content-example">
            <p>이것은 기본 모달입니다.</p>
        </div>
      </Modal>
    </div>
  );
}
