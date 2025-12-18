import "./ModalEx.css";

export function ModalEx() {
  return (
    <div className="modal-example">
      <h1>모달 컴포넌트 사용 예제</h1>
      <div className="button-group">
        <button className="btn btn-primary">기본 모달열기</button>
        <button className="btn btn-warning">확인 모달열기</button>
        <button className="btn btn-success">폼 모달열기</button>
      </div>
    </div>
  );
}
